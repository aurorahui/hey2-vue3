<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <div class="main-content">
    <el-divider />
    <div class="footer">
      <div class="footer-item">
        <h2>LEION</h2>
        <div class="content">
          <RouterLink to="/">HOME</RouterLink>
          <RouterLink to="/">LEION HEY2</RouterLink>
          <RouterLink to="/">BRAND</RouterLink>
          <RouterLink to="/">CONTACT</RouterLink>
        </div>
      </div>
      <div class="footer-item">
        <h2>CONTACT</h2>
        <div class="content">
          <RouterLink to="/">leion@llvision.com</RouterLink>
        </div>
      </div>
      <div class="footer-item">
        <h2>ADDRESS</h2>
        <div class="content">
          <div class="item">
            <h3>China,Beijing LLVISION Technology Co., LTD</h3>
            <div>
              501, 5th Floor, Building 8, No. 10 Kegu 1st Street, Beijing Economic and Technological
              Development Zone, Beijing, China
            </div>
          </div>
          <div class="item">
            <h3>Korea,AIBABYLON Inc.</h3>
            <div>1001,S-Trenue,37,Gukjegeumyung-ro 2-gil,Yeongdeungpo-gu,Seoul</div>
          </div>
          <div class="item">
            <h3>Singapore,LLVISION PTE. LTD.</h3>
            <div>65 Chulia Street, #25-03 OCBC Centre, Singapore 049513</div>
          </div>
        </div>
      </div>
      <div class="footer-item">
        <img src="/src/assets/images/logo-02.png" alt="" />
        <el-button plain round>CONTACT US</el-button>
        <div class="icons">
          <a href="https://www.tiktok.com/@leion_global?is_from_webapp=1&sender_device=pc" target="_blank">
           <img src="@/assets/images/dy.jpeg" alt="">
          </a>
          <a href="https://youtube.com/@leionheyarglasses?si=1e_P_X3ua57fHn4K" target="_blank">
            <img src="@/assets/images/yutube.jpeg" alt="">
          </a>
          <a href="https://www.linkedin.com/company/llvision" target="_blank">
            linkedin
          </a>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-content {
  background-color: #000;
  margin-top: -24px;
  padding: 2rem 2rem 0 2rem;
}
.footer {
  background-color: #000;
  display: grid; //网格布局
  grid-template-columns: 20% 20% auto 25%;
  column-gap: 20px;

  .footer-item {
    color: #fff;
    

    h2 {
      font-size: 2.6rem;
      font-family: Anton;
    }

    .content {
      padding: 2rem 0;

      a {
        color: #fff;
        text-decoration: underline;
        margin-bottom: 15px;
      }
    }

    &:first-child {
      // width: 30%;

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 14px;
      }
    }

    &:nth-child(2) {
      .content {
        font-size: 14px;
        a {
          font-weight: 400;
        }
        
      }
    }
    &:nth-child(3) {
      .content {
        .item {
          h3, div {
            margin-bottom: 10px;
          }
          h3 {
            font-size: 16px;
            font-weight: 500;
          }
          div {
            font-size: 14px;
            font-weight: 200;

          }
        }
      }
    }
    &:last-child {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-around;
      img {
        width: 14rem;
      }
      .el-button {
        width: 10rem;
        height: 59px;
        border-radius: 50px;
        background: transparent;
        color: #fff;
        border: 2px solid;
      }
      .icons {
        display: flex;
        align-items: center;
        img {
          width: 2rem;
        }
      }
    }
  }
}
@media (max-width: 820px) {
  .footer {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 20%;
    grid-auto-flow: dense;
    
    .footer-item {
      &:nth-child(3) {
        grid-column: 2;
        grid-row: 2 / span 1;
      }
      
      &:nth-child(4) {
        grid-column: 1;
        grid-row: 2 / span 1;
      }
      
      &:last-child {
        display: block;
        margin-top: 27%;
        
        img {
          width: 100%;
        }
        
        .el-button {
          width: 100%;
          margin: 20px 0;
        }
        .icons {
          justify-content: center;
        }
      }
    }
  }
}
</style>
