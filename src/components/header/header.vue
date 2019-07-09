<template>
  <div>
    <div class="nav">
      <transition name="ul">
        <ul v-if="show" class="ul-box">
          <li>
            <a href="#" class="actived">网站首页</a>
          </li>
          <li>
            <a href="#">公司案例</a>
          </li>
          <li>
            <a href="#">公司相册</a>
          </li>
          <li>
            <a href="#">团队博客</a>
          </li>
          <li>
            <a href="#">关于我们</a>
          </li>
        </ul>
      </transition>
      <img v-if="imgShow" src="../../assets/menu-logo.png" @click="handelOpenMenu" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      screenWidth:0,
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          console.log(that.screenWidth);
          that.screenWidth>878?that.show=true:that.show=false;
          that.screenWidth >878?that.imgShow=false:that.imgShow=true
          that.timer = false;
        }, 400);
      }
    }
  },
  methods: {
    // 打开菜单
    handelOpenMenu() {
      this.show = !this.show;
      console.log("=====");
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.nav {
  position: relative;
  background-color: #fff;
  height: 78px;
  width: 100%;
  border-bottom: 1px solid #dadada;
}

.nav img {
  position: absolute;
  right: 20px;
  top: 30px;
  width: 28px;
  display: none;
}

.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.nav ul li {
  height: 78px;
  width: 168px;
  line-height: 78px;
  text-align: center;
  display: inline-block;
}

.nav ul li:hover {
  cursor: pointer;
}

.nav ul li a {
  text-decoration: none;
  color: #666;
  padding-bottom: 8px;
}

.nav ul li .actived {
  border-bottom: 3px solid #ee5c42;
}
.ul-box {
  height: 300px;
  overflow: hidden;
}
.ul-enter-active,
.ul-leave-active {
  transition: all 0.5s;
}
.ul-enter,
.ul-leave-to {
  height: 0;
}

@media only screen and (max-width: 878px) {
  .nav img {
    display: inline;
  }
  .nav ul {
    position: absolute;
    right: 0;
    text-align: right;
    top: 78px;
  }
  .nav ul li {
    display: block;
    border: 1px solid #dadada;
    height: 58px;
    line-height: 58px;
    width: 98px;
  }
  .nav ul li a {
    display: block;
    padding-bottom: 0;
  }
  .nav ul li .actived {
    border-bottom: none;
  }
  .nav ul li a:hover {
    background-color: #6e6e6e;
    color: #fff;
  }
}
</style>

