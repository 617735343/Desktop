<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  //当数据（已经获取到ajax传来的数据时）发生改变的时候，页面会重新渲染，updated这个生命钩子就会被执行
  updated() {
    //距离顶部的高度
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
      // console.log(e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    //当手指不停在视图上移动的时候，move执行的频率是非常的高的，所以我们要做一个截留；
    handleTouchMove(e) {
      if (this.touchStatus) {
        //使用截留控制move的执行频率
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          //手指距离最顶部的高度
          const touchY = e.touches[0].clientY - 79;
          //获取每个元素的下标
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../../../assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>