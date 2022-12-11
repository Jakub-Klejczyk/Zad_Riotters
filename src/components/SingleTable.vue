<script>
import { ref } from "vue";
import BTC from "../assets/BTC.svg";
import ETH from "../assets/ETH.svg";
import USDT from "../assets/USDT.svg";

export default {
  props: {
    data: Array,
  },
  setup() {
    const imgs = ref([BTC, ETH, USDT]);
    const getImg = (name) => {
      const img = `src/assets/${name}.svg`;
      return img;
    };
    return { getImg, imgs };
  },
};
</script>

<template>
  <div>
    <div class="summary-elem" v-for="elem in data" :key="elem.id">
      <div class="hero">
        <img class="hero-logo" :src="getImg(elem.symbol)" alt="" />
        <div class="hero-text">
          <p class="summary-title">{{ elem.symbol }}</p>
          <p class="summary-content">{{ elem.name }}</p>
        </div>
      </div>
      <div class="price">
        <div class="price-text">
          <p class="summary-title">Price</p>
          <p class="summary-content">
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
              }).format(elem.quote.USD.price)
            }}
          </p>
        </div>
      </div>
      <div class="change">
        <div class="change-text">
          <p class="summary-title">Change</p>
          <p class="change-content">
            {{ parseFloat(elem.quote.USD.percent_change_90d).toFixed(2) + "%" }}
            <img class="arrow-down" src="../assets/arrow_down.svg" alt="" />
          </p>
        </div>
      </div>
      <div class="chart">
        <div class="chart-content">
          <img src="../assets/chart.svg" alt="" />
        </div>
      </div>
      <div class="btns">
        <button class="btn-small" id="first-btn-small">Sell</button>
        <button class="btn-small" id="second-btn-small">Buy</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.summary-elem {
  width: 976px;
  height: 80px;
  margin-bottom: 8px;
  padding: 16px 20px;
  background: #ffffff;
  border: 1px solid #ebebf3;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hero {
  display: flex;
  gap: 16px;
  width: 98px;
}

.hero-logo {
  width: 48px;
  height: 48px;
}

.hero-text {
  margin: auto 0;
}
.summary-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #9896a1;
  padding-bottom: 6px;
  width: 72px;
}
.summary-content {
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #0a041c;
}
.change-content {
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #ea4d4d;
  display: flex;
  align-items: center;
  gap: 7px;
}
.chart {
  width: 148px;
  height: 32px;
}

.btns {
  display: flex;
  gap: 8px;
}

.btn-small {
  cursor: pointer;
  width: 55px;
  height: 40px;
  font-weight: 600;
  font-size: 14px;
  background: #ffffff;
  border: 1px solid #ebebf3;
  border-radius: 4px;
}

#first-btn-small {
  background-color: #7445fb;
  color: white;
}

#first-btn-small:hover {
  background-color: #5125d5;
  transition-duration: 0.4s;
}

#second-btn-small {
  background-color: white;
  color: #7445fb;
}

#second-btn-small:hover {
  background-color: #ddd8ee;
  transition-duration: 0.4s;
}
.arrow-down {
  background-color: #fbdbdb;
  border: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
}

@media (max-width: 1000px) {
  .summary-elem {
    width: auto;
    height: 120px;
  }
  .chart {
    display: none;
  }
  .btns {
    flex-direction: column;
  }
}
</style>
