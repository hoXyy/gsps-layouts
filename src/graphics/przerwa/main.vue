<template>
  <div id="break">
    <break-total id="total" />
    <break-next-runs id="next-runs" :runs="nextRuns" />
    <break-ticker id="ticker" />
    <div id="bottom">
      <img id="Logo" src="./img/GSPS_logo.png" />
      <div id="names">
        <break-reader
          :style="{
            width: '295px',
          }"
        />
        <break-song id="song" />
      </div>
    </div>
    <sponsors id="sponsors" />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Watch } from 'vue-property-decorator';
  import type { Bids, Reader, Song } from '@gsps-layouts/types/schemas';
  import { Getter } from 'vuex-class';
  import { RunDataActiveRun } from '../../../../nodecg-speedcontrol/src/types/schemas';
  import { RunData } from '../../../../nodecg-speedcontrol/src/types';
  import { Asset, LogoCycle } from '@gsps-layouts/types';
  import BreakReader from './components/Reader.vue';
  import BreakSong from './components/Song.vue';
  import BreakTotal from './components/Total.vue';
  import BreakNextRuns from './components/NextRuns.vue';
  import BreakTicker from './components/Ticker.vue';
  import Sponsors from '../_misc/components/Sponsors.vue';
  import clone from 'clone';

  @Component({
    components: {
      BreakReader,
      BreakSong,
      BreakTotal,
      BreakNextRuns,
      BreakTicker,
      Sponsors,
    },
  })
  export default class extends Vue {
    @Getter readonly currentBids!: Bids[]; // from store.ts
    @Getter readonly allRuns!: RunData[];
    @Getter readonly reader!: Reader;
    @Getter readonly activeRun!: RunDataActiveRun;
    @Getter readonly currentSong!: Song;
    @Getter readonly sponsors!: Asset[];
    @Getter readonly logoCycles!: LogoCycle[];

    nextRuns: RunData[] | null = null;

    mounted() {
      this.nextRuns = this.getNext3Runs;
    }

    @Watch('activeRun')
    updateNextRuns(): void {
      this.nextRuns = this.getNext3Runs;
    }

    get getNext3Runs(): RunData[] {
      const runIndex = this.findRunIndex;
      return clone(this.allRuns).slice(runIndex).slice(0, 3);
    }

    get findRunIndex() {
      if (!this.activeRun) {
        return 0;
      }
      return clone(this.allRuns).findIndex(
        (run) => run.id === this.activeRun.id
      );
    }
  }
</script>

<style>
  @import url('../css/styles.css');

  html {
    width: 1920px;
    height: 1080px;
    background-color: #41228eda;
  }

  #Logo {
    margin-top: 45px;
    width: 11%;
    position: absolute;
    bottom: 2px;
    left: 0px;
    align-self: flex-start;
  }

  #bottom {
    width: 100%;
    position: absolute;
    bottom: 2px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  #names {
    width: 89%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #song {
    width: 700px;
    white-space: nowrap;
    overflow: visible;
    margin-right: 40px;
  }

  #total {
    position: absolute;
    height: 116px;
    right: 200px;
    top: 35px;
    font-size: 116px;
    text-shadow: 2px 2px 8px #000000;
  }

  #next-runs {
    position: absolute;
    width: 960px;
    height: 470px;
    left: 20.5px;
    top: 50px;
  }

  #ticker {
    position: absolute;
    width: 900px;
    height: 400px;
    left: 20.5px;
    top: 552px;
  }

  #sponsors {
    position: absolute;
    bottom: 300px;
    right: 25px;
    width: 800px;
    height: 400px;
  }
</style>
