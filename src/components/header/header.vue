<template>
  <div>
    <div class="nav">
      <transition name="ul">
        <ul v-if="show" class="ul-box">
          <li v-for="(item,index) in navList" :key='index' @click="handelChooseItem(index)">
            <a :href="item.name" :class="{'actived':chooseNav===index}">{{item.name}}</a>
          </li>
        </ul>
      </transition>
      <img v-if="imgShow" src="../../assets/menu-logo.png" @click="handelOpenMenu" />
    </div>
    <div>
      <div class="blog-item">
       <div class="item-main">
         <div>前后端分离....</div>
         <div class="left-top"></div>
         <div class="right-top"></div>
         <div>详情</div>
       </div>
       <img src="../../../static/blog/me.jpg" alt="">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgShow:true,
      show: true,
      screenWidth:0,
      timer : false,//计时器
      chooseNav:0,//当前选的第几项目
      navList:[{
        name:'首页',
        url:"#"
      },{
        name:'项目',
        url:"#"
      },{
        name:'案例',
        url:"#"
      },{
        name:'分享',
        url:"#"
      },{
        name:'关于我',
        url:"#"
      }]
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
    // 切换菜单
    handelChooseItem(num){
      this.chooseNav = num;
    },
    // 打开菜单
    handelOpenMenu() {
      // this.show = !this.show;
      console.log("=====");
    }
  }
};
</script>

<style lang="less" scoped>
body {
  margin: 0;
  padding: 0;
}

.nav {
  box-shadow: 0px 0px 5px #ccc;
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
// 模糊图片

.blog-item{
  width: 20%;
  position: relative;
  overflow: hidden;
  .item-main{
    font-size: 14px;
    position: absolute;
    z-index: 1;
    color: white;
    height: 250px;
    width: 100%;
    background: #150e0e5c;
    overflow: hidden;
  }
  img{
    width: 100%;
    transition: .3s ease-in-out;
     filter: blur(0);
    -webkit-filter: blur(0);
  }
  &:hover{
    img{
      transform: scale(1.3);
       filter: blur(3px);
       -webkit-filter: blur(3px);
    }
   
  }
}
</style>

