<script>
import SingleTable from "./SingleTable.vue";
import { ref } from "vue";
export default {
  name: "Tables",
  props: {
    data: Array,
  },
  components: { SingleTable },
  setup() {
    const active = ref("summary");

    const changeActive = (elem) => {
      active.value = elem;
    };

    return { active, changeActive };
  },
};
</script>

<template>
  <div class="tables">
    <div class="nav">
      <ul class="nav-list">
        <li
          :class="[
            active === 'summary' ? 'nav-elem nav-elem-active' : 'nav-elem',
          ]"
          @click="changeActive('summary')"
        >
          Summary
        </li>
        <li
          :class="[
            active === 'table' ? 'nav-elem nav-elem-active' : 'nav-elem',
          ]"
          @click="changeActive('table')"
        >
          Table
        </li>
        <li
          @click="changeActive('charts')"
          :class="[
            active === 'charts' ? 'nav-elem nav-elem-active' : 'nav-elem',
          ]"
        >
          Charts
        </li>
        <li
          @click="changeActive('reporting')"
          :class="[
            active === 'reporting' ? 'nav-elem nav-elem-active' : 'nav-elem',
          ]"
        >
          Reporting
        </li>
        <li
          @click="changeActive('analysis')"
          :class="[
            active === 'analysis' ? 'nav-elem nav-elem-active' : 'nav-elem',
          ]"
        >
          Analysis
        </li>
      </ul>
      <div class="line"></div>
    </div>
    <div v-show="active === 'summary'" class="summary-container">
      <SingleTable :data="data" />
    </div>
    <div v-show="active === 'table'" class="summary-container">
      table content
    </div>
    <div v-show="active === 'charts'" class="summary-container">
      charts content
    </div>
    <div v-show="active === 'reporting'" class="summary-container">
      reporting content
    </div>
    <div v-show="active === 'analysis'" class="summary-container">
      analysis content
    </div>
  </div>
</template>

<style scoped>
.tables {
  width: 1040px;
  background: #f7f7f9;
  height: 369px;
  border-radius: 16px;
}
.nav-list {
  display: flex;
  list-style: none;
  gap: 24px;
  padding: 32px 0 0 32px;
}
.line {
  background: #ebebf3;
  width: auto;
  height: 1px;
  margin: 0 32px 32px 32px;
  animation: 2s ease-out ease_item;
}

.nav-elem {
  font-weight: 500;
  line-height: 24px;
  color: #9896a1;
  padding-bottom: 11px;
  cursor: pointer;
}
.nav-elem-active {
  color: #0a041c;
  border-bottom: 4px solid #7445fb;
  cursor: pointer;
}
.summary-container {
  padding-inline: 32px;
}

@keyframes ease_item {
  0% {
    width: 0%;
  }
  100% {
    width: auto;
  }
}

@media (max-width: 1000px) {
  .tables {
    height: auto;
  }
}
</style>
