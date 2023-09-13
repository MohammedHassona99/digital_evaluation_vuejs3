<script setup></script>
<template>
  <div class="our-works my-4">
    <h2 class="d-md-none text-center py-4">اعمالنا نفتخر بها</h2>
    <div class="container">
      <div class="row g-md-2 g-0">
        <div class="col-6 mb-2 mb-md-0">
          <div class="img" data-work="شاشة ويب">
            <img src="./../assets/workOne.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6">
          <div class="img" data-work="لموقع تصميم">
            <img src="./../assets/workTwo.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 col-md-4 gy-md-3 mb-2 mb-md-0">
          <div class="img" data-work="شاشة تسجيل الدخول يوجد بها معلومات الدخول">
            <img src="./../assets/workThree.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 col-md-4 gy-md-3">
          <div class="img" data-work="شاشة تسجيل الدخول يوجد بها معلومات الدخول">
            <img src="./../assets/workThree.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 col-md-4 gy-md-3 d-none d-md-block">
          <div class="img" data-work="شاشة تسجيل الدخول يوجد بها معلومات الدخول">
            <img src="./../assets/workThree.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 mb-2 mb-md-0">
          <div class="img" data-work="شاشة ويب">
            <img src="./../assets/workOne.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6">
          <div class="img" data-work="لموقع تصميم">
            <img src="./../assets/workTwo.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 col-md-4 gy-md-3 mb-2 mb-md-0">
          <div class="img" data-work="شاشة تسجيل الدخول يوجد بها معلومات الدخول">
            <img src="./../assets/workThree.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 col-md-4 gy-md-3">
          <div class="img" data-work="شاشة تسجيل الدخول يوجد بها معلومات الدخول">
            <img src="./../assets/workThree.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 col-md-4 gy-md-3 d-none d-md-block">
          <div class="img" data-work="شاشة تسجيل الدخول يوجد بها معلومات الدخول">
            <img src="./../assets/workThree.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 mb-2 mb-md-0 d-md-none">
          <div class="img" data-work="شاشة ويب">
            <img src="./../assets/workOne.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 d-md-none">
          <div class="img" data-work="لموقع تصميم">
            <img src="./../assets/workTwo.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 col-md-4 gy-md-3 d-md-none mb-2 mb-md-0">
          <div class="img" data-work="شاشة تسجيل الدخول يوجد بها معلومات الدخول">
            <img src="./../assets/workThree.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 col-md-4 gy-md-3 d-md-none">
          <div class="img" data-work="شاشة تسجيل الدخول يوجد بها معلومات الدخول">
            <img src="./../assets/workThree.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 col-md-4 gy-md-3 d-none d-md-block d-md-none">
          <div class="img" data-work="شاشة تسجيل الدخول يوجد بها معلومات الدخول">
            <img src="./../assets/workThree.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 mb-2 mb-md-0 d-md-none">
          <div class="img" data-work="شاشة ويب">
            <img src="./../assets/workOne.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-6 d-md-none">
          <div class="img" data-work="لموقع تصميم">
            <img src="./../assets/workTwo.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.img {
  position: relative;
  &::before {
    contain: attr(data-work);
    position: absolute;
    background-color: #6a6767;
    width: 100%;
    height: 100%;
  }
}
</style>
