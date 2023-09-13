<script setup>
// import NavbarComponent  from '@/components/NavbarComponent.vue'
</script>

<template>
  <header>
    <div class="overlay"></div>
    <div class="text">
      <h1>مؤسسة التطوير الرقمي</h1>
      <p>
        شركة منتجاتها الأساسية أشكال مختلفة <br />
        من البرمجيات وتكنولوجيا البرمجيات و تقسيم <br />
        وتطوير منتجات البرمجيات وجميع الإستشارات
      </p>
      <button>ابدا الان</button>
    </div>
  </header>
  <div class="main-section p-4">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3">
          <div class="box">
            <h4>50</h4>
            <p>عدد المشاريع</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="box">
            <h4>50</h4>
            <p>عدد العملاء</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="box">
            <h4>50</h4>
            <p>عدد الموظفين</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="box">
            <h4>50</h4>
            <p>عدد الموظفين</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
header {
  position: relative;
  background-image: url('./../assets/header.png');
  background-size: cover;
  height: calc(100vh - 90px);
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(32, 32, 32, 0.6);
  }
  .text {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
    color: white;
    margin-right: 50px;
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }
  }
  button {
    border-radius: 10px;
    background: #647ad4;
    border: 0;
    color: white;
    padding: 8px 35px;
  }
}
.main-section {
  position: relative;
  .box {
    text-align: center;
    h4 {
      color: #647ad4;
      font-weight: bold;
    }
    p {
      color: #57575a;
    }
  }
  @media (min-width: 922px) {
    .container {
      position: absolute;
      top: -25px;
      background: white;
      padding: 20px;
      border-radius: 20px;
      right: 96px;
    }
    & {
      height: 500px;
    }
  }
}
</style>
