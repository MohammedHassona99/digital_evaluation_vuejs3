<template>
  <nav class="navbar navbar-expand-md">
    <div class="container">
      <router-link to="/" class="text-decoration-none">
        <div class="navbar-brand">
          <img src="./../assets/mainLogo.png" height="50" alt="" />
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-md-none">
          <img src="./../assets/mainLogo.png" height="100" alt="" />
        </div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
          <li class="nav-item active">
            <router-link to="/" class="text-decoration-none">
              <a class="nav-link active" aria-current="page" href="#">الرئيسية</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/our-services" class="text-decoration-none">
              <a class="nav-link" href="#">خدماتنا</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="our-works" class="text-decoration-none">
              <a class="nav-link" href="#">اعمالنا</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="text-decoration-none">
              <a class="nav-link" href="#">شركاؤنا</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/aboutUs" class="text-decoration-none">
              <a class="nav-link" href="#">من نحن</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="contactUs" class="text-decoration-none">
              <a class="nav-link" href="#">تواصل معنا</a>
            </router-link>
          </li>
        </ul>
        <div class="social">
          <ul class="list-unstyled d-flex">
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-facebook-f"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped lang="scss">
nav {
  background-color: #f8f8f8;
  height: 90px;
  .navbar-toggler {
    border: 0;

    &:focus {
      box-shadow: none;
    }
  }
  li {
    margin-right: 20px;
    i {
      color: #5097c7;
      a.active {
        color: #5097c7;
      }
    }
  }
  .navbar-collapse.collapse.show {
    background-color: white;
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    padding: 20px;
    transition: all 0.3s ease-in-out;
  }
  .nav-link.active {
    color: #5097c7;
    text-decoration: none;
  }
}
</style>
