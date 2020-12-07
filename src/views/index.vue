<template>
  <div class="page">
      <div class="sectionA">
          <div class="img-wrap" v-for="(item, index) of showArr" :key="index">
              <img class="img img1" :class="{ry180: item.img1Hidden}" @click="item.img1Hidden = true" src="../statics/bird.png" alt="">
              <img class="img img2" :class="{ry0: item.img1Hidden}" @click="item.img1Hidden = false" src="../statics/qt.png" alt="">
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
        showArr: [{ img1Hidden: false },{ img1Hidden: false },{ img1Hidden: false },{ img1Hidden: false },{ img1Hidden: false },{
          img1Hidden: false },{ img1Hidden: false },{ img1Hidden: false },{ img1Hidden: false },{ img1Hidden: false },{ img1Hidden: false },{ img1Hidden: false
        }]
    }
  },
  methods: {
  },
  created () {
  }
})
</script>

<style lang="scss" scoped>
.page{
    width: 100%;
    height: 100%;
    .sectionB {
        position: absolute;
        top: 10%;
        left: 0%;
        width: 100%;
        height: 40%;
        display: flex;
        overflow: hidden;
        justify-content: space-around;
        .cloud-wrap-1, .cloud-wrap-2,.cloud-wrap-3{
            .cloud2{
                width: 150px;
            }
            .cloud1{
                width: 150px;
            }
            .cloud3{
                width: 150px;
            }
        }
        .cloud-wrap-1{
            margin-top: -10px;
        }
        .cloud-wrap-2{
            margin-top: 20px;
        }
        .cloud-wrap-3{
            margin-top: -10px;
        }
    }
    .sectionA {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 36%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .img-wrap{
        -webkit-perspective: 1500;
        -moz-perspective: 1500;
        position: relative;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img {
        position: absolute;
        top: 0;
        left: 0;
        margin: auto;
        width: 150px;
        height: 120px;
        transition: all 1s;
        backface-visibility: hidden;
        cursor: pointer;
    }
    .img1{
      padding: 10px;
      box-sizing: border-box;
    }
    .img2 {
        transform: rotateY(-180deg);
        width: 150px;
        height: 120px;
    }
    .ry0{
        transform: rotateY(0deg);
    }
    .ry180{
        transform: rotateY(-180deg);
    }
}
</style>
