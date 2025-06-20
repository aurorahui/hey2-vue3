<template>
  <div class="brand">
    <div class="text-container">
      <h1 class="animate2">ABOUT LEION</h1>
      <div class="content animate2">
        <p>LEION brand is an AR eyewear brand launched by LLVision for the general public. LEION HEY2 translation glasses aim to restore the connection between people to the most authentic form - natural and heartfelt.</p>
        <p>LLVision, founded in 2014, is a leading innovator in the field of AI AR glasses. Our dedicated team of experienced professionals is committed to pushing the boundaries of Augmented Reality (AR) technology and developing cutting-edge solutions.</p>
        <p>At LLVision, we prioritize independent research and development, focusing on creating advanced AI AR glasses that deliver exceptional user experiences. With a strong emphasis on innovation, we continuously strive to develop groundbreaking technologies and products that redefine the way we interact with the world.</p>
        <p>Our team's expertise lies in the development of state-of-the-art AI algorithms and the integration of AR technology into wearable glasses. Through close collaboration with our clients, we have successfully implemented our AI AR glasses in various real-world applications, enhancing productivity, communication, and overall user satisfaction.</p>
        <el-button>CONTACT US</el-button>
      </div>
    </div>
    <div class="img-container animate">
      <img src="@/assets/images/01.png" alt="">
      <h1 class="text">Everything we do is to bring communication back to what it should be — natural, human</h1>
    </div>
  </div>
  <div class="companys">
    <img src="@/assets/images/icons.png" alt="">
    <h3 class="animate">COOPERATIVE PARTNER</h3>

  </div>
</template>

<style scoped lang="scss">
.brand {
  // height: 48rem;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 45% 55%;
  .text-container {
    padding: 0 2rem 1rem 2rem;
    // height: 122%;
    // height: 100%;
    h1 {
      font-family: Anton;
      font-size: 3.5rem;

    }
    .content {
      height: 100%;
      p {
      margin-bottom: 20px;
      font-family: fantasy;
    }
    }
    
  }
  .img-container {
    // height: fit-content;
    height: 100%;
    background-color: #000;
    position: relative;
    color: #fff;
    img {
      width: 130%;
      height: 100%;
      object-fit: cover;
    }
    .text {
      position: absolute;
      top: 5%;
      left: 10%;
      width: 30%;
      font-size: 2.5rem;
      font-family: Anton;
    }
  }
}
.companys {
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
  }
  h3 {
    position: absolute;
    top: 10%;
    left: 4%;
    font-size: 2.5rem;
    font-family: Anton;
  }
}
@media (max-width: 768px) {
  .brand {
    display: block;
    height: auto;
    // grid-template-columns: 100%;
    // grid-template-rows: 1fr 1fr;
    .img-container {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .text {
        display: none;
      }
    }
  }

  .companys {
    h3 {
      font-size: 1rem;
    }
  }
  
}
</style>
