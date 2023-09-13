<template>
  <footer class="p-4">
    <div class="overlay"></div>
    <div class="container">
      <div class="row position-relative">
        <div class="col-md-3 text-center mb-3">
          <img src="./../assets/footerLogo.png" alt="" height="90px" width="93px" />
          <p class="text-white"><span class="fw-bold">Digital</span> Evaluation</p>
        </div>
        <div class="col-md-3 text-center text-sm-start mb-3">
          <h4>روابط سريعة</h4>
          <ul class="list-unstyled text-white links lh-3">
            <li><i class="fa-solid fa-chevron-left me-2"></i>الرئيسية</li>
            <li><i class="fa-solid fa-chevron-left me-2"></i>خدماتنا</li>
            <li><i class="fa-solid fa-chevron-left me-2"></i>اعمالنا</li>
            <li><i class="fa-solid fa-chevron-left me-2"></i>تواصل معنا</li>
            <li><i class="fa-solid fa-chevron-left me-2"></i>من نحن</li>
          </ul>
        </div>
        <div class="col-md-3 mb-auto order-md-0 order-2 text-center text-sm-start mb-3">
          <h4>ارقام التواصل معنا</h4>
          <p class="text-white phone">053362752</p>
          <p class="text-white phone">055445099</p>
        </div>
        <div class="col-md-3 text-center text-sm-start mb-3">
          <h4>صفحاتنا</h4>
          <ul
            class="list-unstyled text-white d-flex social justify-content-center justify-content-sm-start"
          >
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-facebook-f"></i></li>
          </ul>
          <p class="text-white">Digital Evaluation</p>
          <p class="local text-white">
            <i class="fa-solid fa-location-dot border border-white p-1 rounded-circle me-2"></i
            >الرياض/ظهرة لبن/شارع نجد
          </p>
          <p class="email text-white">
            <i class="fa-solid fa-envelope border border-white p-1 rounded-circle me-2"></i>Digital
            Evaluation@gmail.com
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-image: url('./../assets/footer.png');
  background-size: cover;
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(32, 32, 32, 0.81);
  }
  h4 {
    color: #6680d8;
  }
  .links {
    font-size: 12px;
  }

  .phone {
    font-size: 10px;
  }

  .social li {
    margin-right: 12px;
    i {
      border: 1px solid #fff;
      border-radius: 50%;
      padding: 5px;
    }
  }

  p.email {
    font-size: 12px;
  }
}
</style>
