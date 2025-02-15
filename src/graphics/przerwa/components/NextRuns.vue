<template>
  <div id="next-runs">
    <p id="runs-title">NADCHODZĄCE RUNY</p>
    <transition name="fade" mode="out-in">
      <div id="runs" :key="timestamp">
        <div
          v-for="run in runs"
          :style="{
            marginBottom: '30px',
          }"
        >
          <div class="name layout layout-horizontal layout-center">
            <p class="name-text">{{ run.game }}</p>
          </div>
          <div class="info">
            <p class="info-category">
              {{ run.category || 'Any%' }}
            </p>
          </div>
          <div class="info">
            <p class="info-runner">
              {{ formatPlayers(run) }}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
  import fitty from 'fitty';
  import type { RunData } from 'speedcontrol/src/types';

  @Component
  export default class BreakNextRuns extends Vue {
    @Prop() runs!: RunData[];

    data() {
      return {
        timestamp: Date.now(),
      };
    }

    mounted() {
      this.fitText();
    }

    formatPlayers(run: RunData): string {
      return (
        run.teams
          .map(
            (team) =>
              team.name || team.players.map((player) => player.name).join(', ')
          )
          .join(' vs. ') || 'Bez gracza'
      );
    }

    fitText(): void {
      setTimeout(() => {
        fitty('.name-text', {
          minSize: 1,
          maxSize: 38,
        });
      }, 400);
    }

    @Watch('runs')
    onRunsChange() {
      this.$data.timestamp = Date.now();
      this.fitText();
    }
  }
</script>

<style scoped>
  @import url('../../css/styles.css');

  #runs-title {
    position: absolute;
    margin: auto;
    font-size: 24px;
    height: 36px;
    font-weight: bold;
    color: white;
    width: 100%;
    text-align: left;
    margin-left: 30px;
  }

  #runs {
    position: absolute;
    top: 45px;
    width: 100%;
  }

  .run {
    display: flex;
    flex-direction: column;
  }

  .name {
    top: 0px;
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    text-shadow: black 2px 2px 8px;
  }

  .name-text {
    font-size: 40px;
    color: #ffffff;
    margin-left: 27px;
    margin-right: auto;
    font-weight: 600;
  }

  .info {
    width: 100%;
    height: 27.6px;
    vertical-align: middle;
    text-shadow: black 2px 2px 8px;
  }

  .info-category {
    position: relative;
    line-height: normal;
    font-size: 28.8px;
    letter-spacing: -0.06em;
    color: #ffffff;
    padding: 0 28.8px;
    white-space: nowrap;
    margin-right: auto;
    margin-top: 10px;
  }

  .info-runner {
    position: relative;
    top: -18px;
    line-height: normal;
    font-size: 28.8px;
    letter-spacing: -0.05em;
    color: #ffffff;
    padding: 0 28.8px;
    white-space: nowrap;
    margin-right: auto;
  }
</style>
