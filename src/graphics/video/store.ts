import {
  replicantModule,
  ReplicantModule,
  ReplicantTypes,
} from '@gsps-layouts/browser_shared/replicant_store';
import type { RunDataActiveRun } from 'speedcontrol/src/types/schemas';
import type { Asset } from '@gsps-layouts/types';
import type { ObsData } from '@gsps-layouts/types/schemas';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { Action, getModule, Module, VuexModule } from 'vuex-module-decorators';

Vue.use(Vuex);

@Module({ name: 'OurModule' })
class OurModule extends VuexModule {
  // Helper getter to return all replicants.
  get reps(): ReplicantTypes {
    return this.context.rootState.ReplicantModule.reps;
  }

  get activeRun(): RunDataActiveRun {
    return this.reps.activeRunReplicant;
  }

  get videosCharity(): Asset[] {
    return this.reps.videosCharity;
  }

  get videosSponsors(): Asset[] {
    return this.reps.videosSponsors;
  }

  get videosLong(): Asset[] {
    return this.reps.videosLong;
  }

  get playLongVideo(): boolean {
    return this.reps.playLongVideo;
  }

  get obsData(): ObsData {
    return this.reps.obsData;
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, OurModule },
});
export default store;
export const storeModule = getModule(OurModule, store);
