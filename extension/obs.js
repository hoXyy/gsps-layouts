"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const obs_websocket_js_1 = __importDefault(require("obs-websocket-js"));
const foobar_1 = __importDefault(require("./foobar"));
const request_1 = __importDefault(require("request"));
const nodecg_1 = require("./util/nodecg");
const replicants_1 = require("./util/replicants");
const tagged_logger_1 = require("./util/tagged-logger");
const obs = new obs_websocket_js_1.default();
const config = (0, nodecg_1.get)().bundleConfig.obs;
const foobarConfig = (0, nodecg_1.get)().bundleConfig.foobar;
let foobar;
if (foobarConfig.enabled) {
    foobar = new foobar_1.default(foobarConfig.address);
}
const log = new tagged_logger_1.TaggedLogger('OBS');
let reconnectTimeout;
// Connect to OBS
if (config.enabled) {
    for (let cropper of config.croppers) {
        replicants_1.obsDataReplicant.value.croppers.push(cropper);
    }
    log.info('Próbuję się połączyć z OBSem...');
    obs.connect(config.address, config.password).catch((err) => {
        log.error(`Nie udało się połączyć z OBSem! Powód: ${err}`);
        reconnectTimeout = setTimeout(reconnectToOBS, 5000);
    });
}
function reconnectToOBS() {
    clearTimeout(reconnectTimeout);
    if (!replicants_1.obsDataReplicant.value.connected && config.enabled) {
        log.info('Próbuję się połączyć z OBSem...');
        obs.connect(config.address, config.password).catch((err) => {
            log.error(`Nie udało się połączyć z OBSem! Powód: ${err}`);
            reconnectTimeout = setTimeout(reconnectToOBS, 5000);
        });
    }
}
function switchToIntermission() {
    obs.call('SetCurrentProgramScene', {
        sceneName: config.scenes.intermission,
    });
    replicants_1.obsDataReplicant.value.scene = config.scenes.intermission; // sometimes this isn't set automatically, setting it here just in case
    foobar.unmute();
    replicants_1.commentatorsReplicant.value = { amount: 0, names: '' };
    if (!replicants_1.obsDataReplicant.value.studioMode) {
        obs
            .call('SetStudioModeEnabled', { studioModeEnabled: true })
            .catch((err) => {
            log.error(`Wystąpił błąd przy włączaniu Studio Mode: ${err};
      }`);
        });
    }
    setTimeout(() => {
        (0, nodecg_1.get)().sendMessageToBundle('changeToNextRun', 'nodecg-speedcontrol');
    }, 1000);
    resetAllCrops();
}
function switchFromHostScreen() {
    obs.call('SetCurrentProgramScene', {
        sceneName: config.scenes.intermission,
    });
    replicants_1.obsDataReplicant.value.scene = config.scenes.intermission; // sometimes this isn't set automatically, setting it here just in case
    foobar.unmute();
}
function playIntermissionVideo() {
    obs.call('SetCurrentProgramScene', { sceneName: config.scenes.video });
}
function crop(cropInfo) {
    const cropperIndex = cropInfo.cropperIndex;
    const windowInfo = cropInfo.windowInfo;
    const cropperConfig = replicants_1.obsDataReplicant.value.croppers[cropperIndex];
    obs
        .call('GetSceneItemId', {
        sceneName: cropperConfig.sceneName,
        sourceName: cropperConfig.sourceName,
    })
        .then((data) => {
        const itemId = data.sceneItemId;
        obs
            .call('GetSceneItemTransform', {
            sceneName: cropperConfig.sceneName,
            sceneItemId: itemId,
        })
            .then((data) => {
            const transformData = data.sceneItemTransform;
            const width = transformData.width;
            const height = transformData.height;
            const top = windowInfo.y;
            const bottom = height - windowInfo.y - windowInfo.h;
            const left = windowInfo.x;
            const right = width - windowInfo.x - windowInfo.w;
            obs
                .call('SetSceneItemTransform', {
                sceneName: cropperConfig.sceneName,
                sceneItemId: itemId,
                sceneItemTransform: {
                    cropTop: top,
                    cropBottom: bottom,
                    cropLeft: left,
                    cropRight: right,
                },
            })
                .catch((error) => {
                log.error(`Failed to crop ${cropperConfig.sourceName}. Error: ${error}`);
            });
        })
            .catch((error) => {
            log.error(`Failed to fetch source ${cropperConfig.sourceName} properties. Error: ${error}`);
        });
    })
        .catch((error) => {
        log.error(`Failed to fetch source ${cropperConfig.sourceName} id. Error: ${error}`);
    });
}
function crop4By3(cropperIndex) {
    const cropperConfig = replicants_1.obsDataReplicant.value.croppers[cropperIndex];
    obs
        .call('GetSceneItemId', {
        sceneName: cropperConfig.sceneName,
        sourceName: cropperConfig.sourceName,
    })
        .then((data) => {
        const itemId = data.sceneItemId;
        obs
            .call('GetSceneItemTransform', {
            sceneName: cropperConfig.sceneName,
            sceneItemId: itemId,
        })
            .then((data) => {
            const transformData = data.sceneItemTransform;
            const width = transformData.width;
            const top = 0;
            const bottom = 0;
            const margin = width / 8;
            const left = margin;
            const right = margin;
            obs
                .call('SetSceneItemTransform', {
                sceneName: cropperConfig.sceneName,
                sceneItemId: itemId,
                sceneItemTransform: {
                    cropTop: top,
                    cropBottom: bottom,
                    cropLeft: left,
                    cropRight: right,
                },
            })
                .catch((error) => {
                log.error(`Failed to crop ${cropperConfig.sourceName}. Error: ${error}`);
            });
        })
            .catch((error) => {
            log.error(`Failed to fetch source ${cropperConfig.sourceName} properties. Error: ${error}`);
        });
    })
        .catch((error) => {
        log.error(`Failed to fetch source ${cropperConfig.sourceName} id. Error: ${error}`);
    });
}
function resetCrop(cropperIndex) {
    const cropperConfig = replicants_1.obsDataReplicant.value.croppers[cropperIndex];
    obs
        .call('GetSceneItemId', {
        sceneName: cropperConfig.sceneName,
        sourceName: cropperConfig.sourceName,
    })
        .then((data) => {
        const itemId = data.sceneItemId;
        obs
            .call('SetSceneItemTransform', {
            sceneName: cropperConfig.sceneName,
            sceneItemId: itemId,
            sceneItemTransform: {
                cropTop: 0,
                cropBottom: 0,
                cropLeft: 0,
                cropRight: 0,
            },
        })
            .catch((error) => {
            log.error(`Failed to crop ${cropperConfig.sourceName}. Error: ${error}`);
        });
    })
        .catch((error) => {
        log.error(`Failed to fetch source ${cropperConfig.sourceName} id. Error: ${error}`);
    });
}
function resetAllCrops() {
    for (let i = 0; i < replicants_1.obsDataReplicant.value.croppers.length; i++) {
        resetCrop(i);
    }
}
function refreshWindows(cropperIndex) {
    const cropperConfig = replicants_1.obsDataReplicant.value.croppers[cropperIndex];
    (0, request_1.default)(cropperConfig.url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let windows;
            try {
                windows = JSON.parse(body);
            }
            catch (e) {
                log.error(`Could not parse windows for ${cropperConfig.name}, response not a valid JSON:\n\t`, body);
                return;
            }
            const windowsInfo = {
                cropperIndex,
                windows,
            };
            (0, nodecg_1.get)().sendMessage('windowsRefreshed', windowsInfo);
        }
        else {
            let msg = `Could not get windows for ${cropperConfig.name}`;
            if (error) {
                msg = `${msg}:\n${error.message}`;
            }
            else if (response) {
                msg = `${msg}, response code ${response.statusCode}`;
            }
            log.error(msg);
        }
    });
}
function addCropper() {
    replicants_1.obsDataReplicant.value.croppers.push({
        name: 'new cropper',
        sceneName: '',
        sourceName: '',
        url: '',
    });
}
function removeCropper(cropperIndex) {
    replicants_1.obsDataReplicant.value.croppers.splice(cropperIndex, 1);
}
function modifyCropper(cropperIndex, newCropper) {
    replicants_1.obsDataReplicant.value.croppers[cropperIndex] = newCropper;
}
obs.on('CurrentProgramSceneChanged', (data) => {
    if (replicants_1.obsDataReplicant.value.scene != data.sceneName) {
        // host names showing
        if (data.sceneName === config.scenes.hosterka) {
            (0, nodecg_1.get)().sendMessage('showNames');
            setTimeout(() => {
                (0, nodecg_1.get)().sendMessage('hideNames');
            }, 10 * 1000);
        }
        // foobar control
        if (foobarConfig.enabled) {
            if (data.sceneName.includes(foobarConfig.unmuteKeyword)) {
                foobar.unmute();
            }
            else {
                foobar.mute();
            }
        }
        replicants_1.obsDataReplicant.value.scene = data.sceneName;
    }
});
obs.on('RecordStateChanged', (data) => {
    if (data.outputActive) {
        replicants_1.obsDataReplicant.value.recording = true;
    }
    else {
        replicants_1.obsDataReplicant.value.recording = false;
    }
});
obs.on('StreamStateChanged', (data) => {
    if (data.outputActive) {
        replicants_1.obsDataReplicant.value.streaming = true;
    }
    else {
        replicants_1.obsDataReplicant.value.streaming = false;
    }
});
obs.on('StudioModeStateChanged', (data) => {
    replicants_1.obsDataReplicant.value.studioMode = data.studioModeEnabled;
});
obs.on('ConnectionOpened', () => {
    log.info('Połączono z OBSem!');
    replicants_1.obsDataReplicant.value.connected = true;
});
obs.on('ConnectionClosed', () => {
    log.info('Rozłączono z OBSem! Próbuję połączyć się ponownie za 5 sekund...');
    setTimeout(reconnectToOBS, 5000);
    replicants_1.obsDataReplicant.value.connected = false;
});
(0, nodecg_1.get)().listenFor('switchToIntermission', switchToIntermission);
(0, nodecg_1.get)().listenFor('switchFromHostScreen', switchFromHostScreen);
(0, nodecg_1.get)().listenFor('videoPlayerFinished', switchFromHostScreen);
(0, nodecg_1.get)().listenFor('playIntermissionVideo', playIntermissionVideo);
(0, nodecg_1.get)().listenFor('refreshWindows', refreshWindows);
(0, nodecg_1.get)().listenFor('crop', crop);
(0, nodecg_1.get)().listenFor('crop4By3', crop4By3);
(0, nodecg_1.get)().listenFor('resetCrop', resetCrop);
(0, nodecg_1.get)().listenFor('addCropper', addCropper);
(0, nodecg_1.get)().listenFor('modifyCropper', ({ cropperIndex, newCropper }) => modifyCropper(cropperIndex, newCropper));
(0, nodecg_1.get)().listenFor('removeCropper', removeCropper);
