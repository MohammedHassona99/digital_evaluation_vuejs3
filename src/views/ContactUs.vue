<script setup></script>
<template>
  <div class="contact-us">
    <h2 class="text-center my-4">
      سعداء بتواصلك معنا<br />
      دمتم بخير
    </h2>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-4">
          <div class="form">
            <form action="">
              <div class="row flex-column">
                <div class="col mt-5">
                  <label for="name" class="form-label">الاسم</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="محمد"
                    class="form-control border-top-0 border-end-0 border-start-0 rounded-0"
                    id="name"
                  />
                </div>
                <div class="col my-5">
                  <label for="number" class="form-label">رقم الجوال</label>
                  <input
                    type="text"
                    name="number"
                    placeholder="+10123456789"
                    class="form-control border-top-0 border-end-0 border-start-0 rounded-0"
                    id="number"
                  />
                </div>
                <div class="col mb-5">
                  <label for="email" class="form-label">الايميل</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="mohammed@gmail.com"
                    class="form-control border-top-0 border-end-0 border-start-0 rounded-0"
                    id="email"
                  />
                </div>
                <div class="col mb-5">
                  <label for="topic" class="form-label">الرسالة</label>
                  <input
                    type="text"
                    name="topic"
                    id="topic"
                    class="form-control border-top-0 border-end-0 border-start-0 rounded-0"
                    placeholder="موضوع الرسالة"
                  />
                </div>
                <div class="col mb-5">
                  <input type="submit" class="btn" value="ارسال رسالة" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 col-md-7 offset-1 d-md-block d-none">
          <div class="img">
            <img src="./../assets/map.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
::placeholder {
  font-size: 10px;
}
input[type='submit'] {
  color: #718de8;
  border: 1px solid #718de8;
  border-radius: 4px;
  padding: 11px 60px;
}
.img {
  position: relative;
  &::after {
    content: '\f3c5';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    top: 30%;
    right: 50%;
    font-size: 40px;
    color: #5263de;
  }

  &::before {
    content: 'شركة التطوير الرقمي';
    position: absolute;
    top: 20%;
    right: 30%;
    font-size: 25px;
    font-weight: bold;
    color: #5263de;
    display: none;
  }
  .img::after:hover::before {
    display: block;
  }
}
</style>
