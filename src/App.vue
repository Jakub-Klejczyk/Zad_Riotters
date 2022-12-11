<script>
import getData from "./composables/getData";
import Tables from "./components/Tables.vue";

export default {
  components: { Tables },
  setup() {
    const { load, data } = getData();
    load();

    return {
      data,
    };
  },
};
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="action">
        <img src="./assets/Icon.svg" class="loop" alt="" />
        <input type="text" placeholder="Search" />
        <div class="icons">
          <div class="icon" id="icon-bell">
            <img
              class="bell"
              src="./assets/bell.svg"
              alt="bell with notifications"
            />
          </div>
          <div class="dot"></div>
          <div class="icon" id="hamburger">
            <img src="./assets/Vector 185.svg" alt="" />
            <img src="./assets/Vector 185.svg" alt="" />
            <img src="./assets/Vector 185.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="summary">
          <div class="title">
            <h2>Current Balance</h2>
            <img class="dots" src="./assets/dots.svg" alt="" />
          </div>
          <p class="sum"><span class="dolar">$</span>21 432.23</p>
          <div class="growth">
            <div class="arrow-container">
              <img class="arrow" src="./assets/arrow.svg" alt="" />
            </div>
            <p>12% vs last month</p>
          </div>
          <div class="buttons">
            <button class="btn" id="first-btn">Quick Invest</button>
            <button class="btn" id="second-btn">Show Report</button>
          </div>
        </div>
        <div class="summary" id="summary">
          <div class="title">
            <h2>Summary</h2>

            <img src="./assets/dots.svg" class="dots" alt="" />
          </div>
          <img src="./assets/Group 2087.svg" class="big-img" alt="" />
        </div>
        <Tables :data="data" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 1176px;
  min-height: 900px;
  background-color: white;
}
.wrapper {
  padding: 49px 68px 0px 68px;
}
.action {
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;
}
input {
  width: 232px;
  height: 48px;
  background: #f7f7f9;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  padding-inline: 20px;
  text-indent: 22px;
}
.loop {
  position: absolute;
  width: 12px;
  height: 12px;
  transform: translate(20px, 18px);
}
.icons {
  display: flex;
}
.icon {
  margin-left: 4px;
  width: 48px;
  height: 48px;
  background: #f7f7f9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.bell {
  width: 50%;
  height: 50%;
  position: relative;
}
.dot {
  position: relative;
  top: -0.2rem;
  right: 0.6rem;
  width: 12px;
  height: 12px;
  background: #ea4d4d;
  border-radius: 50%;
  border: 2px solid #ffffff;
  animation: 3.2s ease-out bounce;
  animation-iteration-count: infinite;
}

#hamburger {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.content {
  display: grid;
  grid-template-columns: 509px 499px;
  grid-template-rows: 336px 504;
  column-gap: 32px;
  row-gap: 32px;
}
.summary {
  height: 336px;
  background: #f7f7f9;
  border-radius: 16px;

  padding: 32px;
}
.dots {
  cursor: pointer;
}

.title {
  display: flex;
  justify-content: space-between;
}
h2 {
  font-weight: 500;
  font-size: 20px;
}
.sum {
  font-weight: 300;
  font-size: 56px;
  color: rgba(10, 4, 28, 1);
  padding-block: 40px 16px;
}
span {
  color: #9896a1;
}
.growth {
  display: flex;
  font-weight: 500;
  font-size: 18px;
  color: #2dc78f;
  display: flex;
}
.arrow-container {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #2dc78f;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8.31px;
}
.buttons {
  padding-top: 72px;
  display: flex;
  gap: 8px;
}

.btn {
  width: 109px;
  height: 40px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

#first-btn {
  background-color: #7445fb;
  color: white;
}

#first-btn:hover {
  background-color: #5125d5;
  transition-duration: 0.4s;
}

#second-btn {
  background-color: white;
  color: #7445fb;
}

#second-btn:hover {
  background-color: #ddd8ee;
  transition-duration: 0.4s;
}

.big-img {
  width: 499px;

  position: relative;
  transform: translate(-32px, -24px);
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 1000px) {
  main {
    width: fit-content;
  }
  .content {
    grid-template-columns: 509px;
    grid-template-rows: auto auto auto;
  }
  #summary {
    grid-row-start: 3;
    margin-block: 32px;
  }
  .tables {
    width: 509px;
  }
}
</style>
