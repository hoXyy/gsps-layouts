<template>
  <v-app>
    <v-text-field
      v-model="commentators"
      label="Komentatorzy (nicki rozdzielać przecinkiem)"
      filled
    ></v-text-field>
    <v-btn
      v-on:click="
        () => {
          updateCommentators();
        }
      "
      >Aktualizuj komentatorów</v-btn
    >
  </v-app>
</template>

<script lang="ts">
  import { Vue, Component, Watch } from 'vue-property-decorator';
  import type { Commentators } from '@gsps-layouts/types/schemas';
  import { Getter } from 'vuex-class';
  import { storeModule } from './store';

  @Component
  export default class extends Vue {
    @Getter readonly commentatorsReplicant!: Commentators;

    commentators: string = '';

    mounted() {
      this.commentators = this.commentatorsReplicant.names;
    }

    updateCommentators(): void {
      storeModule.updateCommentatorsReplicant(this.commentators);
    }

    @Watch('commentatorsReplicant')
    onRepChange(newVal: Commentators) {
      this.commentators = newVal.names;
    }
  }
</script>

<style>
  body {
    text-align: center;
  }
</style>
