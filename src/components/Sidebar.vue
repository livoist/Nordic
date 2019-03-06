<template>
  <nav class="col-12 col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>Administrator</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/products">
          <i class="mr-2 fa-2x fas fa-clipboard-list"></i>Product List
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/coupons">
          <i class="mr-2 fa-2x fas fa-ticket-alt"></i>Coupons
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/customerorderlist">
          <i class="mr-2 fa-2x fas fa-address-card"></i>CustomerOrderList
          </router-link>
        </li>
      </ul>
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>Analog function</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/customerorders">
          <i class="mr-2 fa-2x fas fa-file-alt"></i>Simulated order
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  
</template>

