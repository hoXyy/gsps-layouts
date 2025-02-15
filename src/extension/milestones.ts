import { get as nodecg } from './util/nodecg';
import type { Configschema } from '@gsps-layouts/types/schemas/configschema';
import { Milestones } from '@gsps-layouts/types';
import type { RawMilestone } from '@gsps-layouts/types';
import needle from 'needle';
import { milestonesReplicant } from './util/replicants';
import { TaggedLogger } from './util/tagged-logger';

const config = (nodecg().bundleConfig as Configschema).milestones;
const log = new TaggedLogger('milestones');
let refreshTimeout: NodeJS.Timeout;

async function updateMilestones() {
  nodecg().sendMessage('milestones:updating');
  clearTimeout(refreshTimeout);
  try {
    const raw = await needle('get', config.url!);
    const milestones = processMilestones(raw.body);
    milestonesReplicant.value = milestones;
    nodecg().sendMessage('milestones:updated');
    refreshTimeout = setTimeout(updateMilestones, 60 * 1000);
  } catch (err) {
    log.error(`Błąd przy pobieraniu milestonów: ${err}`);
  }
}

function processMilestones(milestones: RawMilestone[]): Milestones {
  const sorted = milestones
    .sort((a: RawMilestone, b: RawMilestone) => {
      return a.Kwota - b.Kwota;
    })
    .map((milestone) => ({
      name: milestone.Nazwa,
      amount: milestone.Kwota,
    }));
  return sorted;
}

if (config.enabled) {
  updateMilestones();
  refreshTimeout = setTimeout(updateMilestones, 60 * 1000);
}

nodecg().listenFor('updateMilestones', updateMilestones);
