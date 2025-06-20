<script setup lang="ts">
// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'


// Import Swiper styles
import 'swiper/css'
import { onMounted } from 'vue'

const observeElement = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  }
  let observer:IntersectionObserver | null = null
  if(!observer) {
    observer = new IntersectionObserver((entires) => {
      entires.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('entry', entry)
          const el = entry.target as HTMLImageElement
          if (entry.target.localName === 'img') {
            console.log('entryimg', el)
            const src = el.getAttribute('data-src')
            console.log('imsrcg', src)
            el.setAttribute('src', src ?? '')
            // el.setAttribute('srcset', 'slide-375.jpg 375w, slide-750.jpg 750w,slide-1080.jpg 1080w')
          }
          if (entry.target.localName === 'video') {
            const elV = document.getElementById('video') as HTMLVideoElement
            elV.play()
          }
          el.classList.add('animate')
          observer?.unobserve(entry.target)
        }
      })
    }, options)
  }
  
  Array.from(document.getElementsByClassName('video')).forEach((el) => {
    observer.observe(el)
  })
  Array.from(document.getElementsByClassName('lazy-text')).forEach((el) => {
    observer.observe(el)
  })
  Array.from(document.getElementsByClassName('lazy-img')).forEach((el) => {
    observer.observe(el)
  })
}
onMounted(() => {
  observeElement()
})
</script>

<template>
  <main style="margin-top: 69px">
    <div class="page-section logo-section">
      <img 
      class="main-img"
      src="/src/assets/images/01.png" 
      srcset="/src/assets/images/19.png 375w,
             /src/assets/images/19.png 768w,
             /src/assets/images/01.png 1080w"
       alt="" />
      <div class="img-box">
        <img data-src="/src/assets/images/logo-09.png" alt="" class="lazy-img" />
        <img data-src="/src/assets/images/logo-04.png" alt="" class="lazy-img" />
      </div>
    </div>
    <div class="page-section video-section">
      <div class="text AntonFont">
        <h3 class="lazy-text">
          EVERYTHING WE DO IS TO BRING COMMUNICATION BACK TO WHAT IT SHOULD BE — NATURAL, HUMAN
        </h3>
      </div>
      <!-- <video controls class="video" id="video" muted>
        <source src="../assets/videos/leionHey.mp4" type="video/mp4" />
      </video> -->
      <img src="/src/assets/images/02.3.png" alt="">
    </div>
    <!-- 轮播图 -->
    <div class="page-section swiper-section">
      <Swiper
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
      >
        <swiper-slide>
          <img class="swiper-img lazy-img" data-src="/src/assets/images/02.1.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img lazy-img" data-src="/src/assets/images/02.2.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img lazy-img" data-src="/src/assets/images/02.3.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img
            class="swiper-img lazy-img"
            data-src="/src/assets/images/02.4.png"
            alt=""
          /> </swiper-slide
        ><swiper-slide>
          <img class="swiper-img lazy-img" data-src="/src/assets/images/02.5.png" alt="" />
        </swiper-slide>
      </Swiper>
    </div>
    <div class="page-section brow-section AntonFont">
      <h1 class="lazy-text">BROW</h1>
      <!-- <div class="img-con"> -->
      <img data-src="/src/assets/images/03.png" alt="" class="lazy-img" />
      <!-- </div> -->
      <h1 class="lazy-text">LINE</h1>
    </div>
    <div class="page-section glasses-section">
      <img data-src="/src/assets/images/08.png" alt="" class="lazy-img" />
      <div class="section-text AntonFont lazy-img">
        <h2>THE OPTICAL ENGINE IS NOT COMPLICATED.</h2>
        <h2 class="lazy-text">PUT THE PROJECTOR INSIDE THE GLASSES.</h2>
      </div>
    </div>
    <div class="page-section five-section">
      <img data-src="/src/assets/images/014.png" alt="" class="lazy-img" />
      <div class="section-text AntonFont lazy-text">
        <h2>TRANSLATION CAPABILITIES BREAKTHROUGH.</h2>
        <h2>FASTER, MORE ACCURATE, MORE STABLE.</h2>
      </div>
    </div>
    <div class="page-section six-section AntonFont">
      <img data-src="/src/assets/images/026.png" alt="" class="lazy-img" />
      <div class="text-left lazy-text">
        <span>HEY</span>
      </div>
      <div class="text-right lazy-text">
        <span>AGENT</span>
      </div>
      <div class="text-footer lazy-text">DEVELOPED OUR OWN "HEY AGENT" INTELLIGENT AGENT</div>
    </div>
    <div class="page-section seven-section AntonFont">
      <img data-src="/src/assets/images/024.png" alt="" class="lazy-img" />
      <h3 class="text-top lazy-text">AR GLASSES ARE NOW STEPPING INTO</h3>
      <h3 class="text-footer lazy-text">WEEKLY CHARGING ERA</h3>
    </div>
    <div class="page-section eight-section AntonFont">
      <div class="section-item lazy-text">
        <span class="text-top">UP TO</span>
        <span class="text-center">8</span>
        <span class="tetx-footer">HOURS OF CONTINUOUS USE ON A SINGLE CHARGE</span>
      </div>
      <div class="section-item lazy-text">
        <span class="text-top">UP TO</span>
        <span class="text-center">12+</span>
        <span class="tetx-footer">RECHARGES WITH THE CHARGING CASE</span>
      </div>
      <div class="section-item lazy-text">
        <span class="text-top">UP TO</span>
        <span class="text-center">96</span>
        <span class="tetx-footer">HOURS OF TOTAL USAGE TIME WITH THE CASE</span>
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
.lazy-text {
  opacity: 0;
}

.page-section {
  // margin-top: -1rem;
}
img {
  width: 100vw;
  display: block;
}
.logo-section {
  height: 100vh;
  position: relative;
  padding-top: 50px;
  .main-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .img-box {
    width: 17rem;
    position: absolute;
    // top: 55%;
    left: 2rem;
    bottom: 8%;
    img {
      &:first-child {
        width: 100%;
      }
      &:last-child {
        width: 100%;
        margin-top: 3rem;
      }
      object-fit: contain;
    }
    position: absolute;
    bottom: 10%;
  }
}
.video-section {
  text-align: center;
  background-color: #000;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  video {
    width: 80vw;
  }
  img {
    width: 80vw;
  }
  .text {
    width: 31rem;
    // margin: auto;
    text-align: center;
    font-family: Anton;
  }
  h3 {
    font-size: 2rem;
    color: #fff;
  }
}
.swiper-section {
  margin: auto;
  padding: 3rem 0;
  background-color: #fff;
  // height: 30rem;
  .swiper-img {
    // width: 20rem;
    height: 30rem;
    object-fit: contain;
  }
}
.brow-section {
  background-color: #fff;
  width: 100vw;
  height: 60rem;
  display: flex;
  justify-content: center;
  position: relative;

  h1 {
    font-size: 8rem;
    color: #7384a6;
    position: absolute;
    &:first-child {
      z-index: 1;
      left: 8%;
      top: 37%;
    }
    &:last-child {
      z-index: 3;
      right: 23%;
      top: 37%;
    }
  }

  // .img-con {
  // width: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 2;
  }
  // }
}
.glasses-section {
  position: relative;
  .section-text {
    width: 100vw;
    text-align: center;
    font-size: 2rem;
    color: #fff;
    position: absolute;
    bottom: 18%;

    h2 {
      &:last-child {
        margin-top: 5rem;
      }
    }
  }
}
.five-section {
  margin-top: -1px;
  position: relative;
  .section-text {
    width: 100vw;
    text-align: center;
    font-size: 2rem;
    color: #fff;
    position: absolute;
    top: 40%;
    h2 {
      &:last-child {
        margin-top: 1rem;
      }
    }
  }
}
.six-section {
  // margin-top: -1rem;
  position: relative;
  color: #fff;
  margin-top: -1px;
  // .text-center {
  //   position: absolute;
  //   top: 0;
  // }
  .text-left {
    font-size: 5rem;
    font-family:
      'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
      sans-serif;
    position: absolute;
    top: 33%;
    left: 17%;
  }
  .text-right {
    font-size: 4rem;
    font-family:
      'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
      sans-serif;
    position: absolute;
    top: 53%;
    left: 61%;
  }

  .text-footer {
    width: 100vw;
    text-align: center;
    font-size: 2rem;
    position: absolute;
    top: 78%;
  }
}
.seven-section {
  text-align: center;
  background-color: #000;
  padding: 10rem 0;
  position: relative;
  margin-top: -1em;
  img {
    width: 85%;
    margin: auto;
  }
  h3 {
    font-size: 3rem;
    color: #fff;
  }
  .text-top {
    width: 40rem;
    position: absolute;
    top: 22%;
    left: 15%;
  }
  .text-footer {
    width: 40rem;
    position: absolute;
    top: 55%;
    left: 15%;
  }
}
.eight-section {
  // height: 40rem;

  background-color: #000;
  color: #fff;
  padding: 5rem 0 8rem 0;
  display: flex;
  justify-content: space-around;

  .section-item {
    width: 20rem;
    padding: 0 7%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .text-top {
      font-size: 1.6rem;
    }
    .text-center {
      font-size: 4rem;
      padding: 1rem 0;
    }
    .tetx-footer {
      font-size: 1.6rem;
    }
  }
}

@media (max-width: 768px) {
  .logo-section {
    height: 100vh;
    .main-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .img-box {
      width: 90vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        &:first-child {
          width: 100%;
        }
        &:last-child {
          width: 100%;
          margin-top: 3rem;
        }
      }
    }
  }

  .video-section {
    height: 100vh;
    padding: 0 3rem;
    .text {
      width: 100%;
      h3 {
        font-size: 1.8rem;
      }
    }
  }
  .brow-section {
    height: 100vh;
    h1 {
      font-size: 6rem;
      color: #7384a6;
      position: absolute;

      &:first-child {
        top: auto;
        bottom: 56%;
      }
      &:last-child {
        left: 58%;
        bottom: 19%;
        top: auto;
      }
    }
    img {
      width: 100%;
      height: 75%;
      object-fit: cover;
      bottom: 0;
    }
  }
  .glasses-section {
    .section-text {
      font-size: 1.3rem;
      width: 80%;
      left: 10%;
    }
  }
  .five-section {
    .section-text {
      font-size: 1.3rem;
      width: 80%;
      left: 10%;
      top: auto;
      bottom: 10%;
    }
  }
  .six-section {
    img {
      width: 118%;
      object-fit: cover;
      margin-left: -10%;
    }
    .text-footer {
      font-size: 1.3rem;
    }
    .text-left {
      font-size: 3.2rem;
      top: 22%;
      left: 3%;
    }
    .text-right {
      font-size: 3.2rem;
      top: 58%;
      left: 64%;
    }
  }
  .seven-section {
    padding: 0;
    .text-top,
    .text-footer {
      font-size: 1.7rem;
      // font-size: 2rem;
      width: 57%;
    }
    .text-top {
      top: 0;

      left: 6%;
    }
    .text-footer {
      bottom: 0;
      left: 9%;
    }
  }
  .eight-section {
    flex-direction: column;
    .section-item {
      .text-top {
        font-size: 1.3rem;
      }
      .text-center {
        font-size: 3rem;
      }
      .tetx-footer {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
