<template>
  <v-app>
    <v-container fluid>
      <div id="host-container">
        <div>
          <reader-bid-prize-panel
            class="panel"
            :item="shownItemOnPanel"
            v-if="showBidPrizePanel"
          />
        </div>
        <div>
          <host-panel-countdown
            class="panel"
            :hostCountdownReplicant="hostCountdownReplicant"
          />
        </div>

        <div class="break"></div>

        <div id="left" class="column">
          <reader-panel-bids class="panel" :bids="allBids" />
        </div>
        <div id="right" class="column">
          <reader-panel-total class="panel" :total="total" />
          <reader-panel-milestones
            class="panel"
            :milestones="milestones"
            :total="total"
          />
          <v-btn @click="switchToIntermission"
            >Awaryjny przycisk zmiany na przerwę</v-btn
          >
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script lang="ts">
  import { Vue, Component, Watch } from 'vue-property-decorator';
  import type { Bids, Total } from '@gsps-layouts/types/schemas';
  import type { Countdown } from '@gsps-layouts/types/schemas/countdown';
  import { Bid, Milestones, Prize } from '@gsps-layouts/types';
  import { Getter } from 'vuex-class';
  import ReaderPanelTotal from './components/Total.vue';
  import ReaderPanelBids from './components/Bids.vue';
  import ReaderPanelMilestones from './components/Milestones.vue';
  import HostPanelCountdown from './components/Countdown.vue';
  import ReaderBidPrizePanel from './components/BidPrizePanel.vue';

  @Component({
    components: {
      ReaderPanelTotal,
      ReaderPanelBids,
      ReaderPanelMilestones,
      HostPanelCountdown,
      ReaderBidPrizePanel,
    },
  })
  export default class extends Vue {
    @Getter readonly allBids!: Bids[];
    @Getter readonly total!: Total;
    @Getter readonly milestones!: Milestones;
    @Getter readonly hostCountdownReplicant!: Countdown;
    @Getter readonly currentBid!: Bid;
    @Getter readonly currentPrize!: Prize;
    @Getter readonly showBidsPanel!: boolean;
    @Getter readonly showPrizePanel!: boolean;

    shownItemOnPanel: Bid | Prize | null = null;
    showBidPrizePanel = false;

    @Watch('currentBid')
    onCurrentBidChange(bid: Bid | null) {
      this.shownItemOnPanel = bid;
    }

    @Watch('currentPrize')
    onCurrentPrizeChange(prize: Prize | null) {
      this.shownItemOnPanel = prize;
    }

    @Watch('showBidsPanel')
    onShowBidsPanelChange(value: boolean) {
      console.log(value);
      if (!value && !this.showPrizePanel) {
        this.showBidPrizePanel = false;
      } else {
        this.showBidPrizePanel = true;
      }
    }

    @Watch('showPrizePanel')
    onShowPrizePanelChange(value: boolean) {
      if (!value && !this.showBidsPanel) {
        this.showBidPrizePanel = false;
      } else {
        this.showBidPrizePanel = true;
      }
    }

    switchToIntermission(): void {
      nodecg.sendMessage('switchFromHostScreen');
    }
  }
</script>

<style>
  #host-container {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 5px;
  }

  .panel {
    margin: 5px;
  }

  .column {
    flex-direction: column;
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }
</style>
