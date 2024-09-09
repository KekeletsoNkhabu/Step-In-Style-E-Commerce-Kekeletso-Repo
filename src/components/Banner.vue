<template>
  <div class="banner">
    <div class="container">
      <div class="banner-content">
        <!-- Main Banner with one image and shop now button -->
        <div class="main-banner">
          <div class="img-container">
            <img src="@/assets/images/banner1.jpg" alt="Main Banner" />
            <div class="img-content">
              <span> Special Offer </span>
              <h3>Your Exclusive Deal</h3>
              <a href="/">
                <button class="shop-now-btn">Shop Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Banner Services -->
      <div class="banner-services">
        <div class="service">
          <span class="icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Icon Path Here -->
            </svg>
          </span>
          <div class="details">
            <h6>FREE SHIPPING</h6>
            <p>On all orders above R1500</p>
          </div>
        </div>

        <div class="service">
          <span class="icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Icon Path Here -->
            </svg>
          </span>
          <div class="details">
            <h6>24/7 CUSTOMER SUPPORT</h6>
            <p>We're here to help you</p>
          </div>
        </div>

        <div class="service">
          <span class="icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Icon Path Here -->
            </svg>
          </span>
          <div class="details">
            <h6>30-DAY RETURN POLICY</h6>
            <p>Free returns</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
img {
  height: 100%;
}

.banner {
  border-bottom: 2px solid #f8f8f8;
  margin-bottom: 100px;
}

.banner .container {
  max-width: calc(1440px - 130px);
  padding: 0 20px;
  width: 100%;
  margin: auto;
}

.banner-content {
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;
}

.main-banner .img-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.main-banner .img-container img {
  width: 100%;
  object-fit: cover;
}

.main-banner .img-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}

.img-content span {
  font-weight: 600;
  font-size: 12px;
  color: #121212;
  text-transform: uppercase;
  opacity: 0.6;
}

.img-content h3 {
  font-weight: 700;
  font-size: 28px;
  color: #121212;
  text-transform: uppercase;
  margin-top: 5px;
}

.shop-now-btn {
  margin-top: 20px;
  background-color: #ff5722;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.shop-now-btn:hover {
  background-color: #e64a19;
}

/* Services Section */
.banner-services {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.banner-services .service {
  flex: 0 0 calc(33.33% - 20px);
  display: flex;
  align-items: center;
}

.service .details {
  margin-left: 10px;
}

.details h6 {
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
}

.details p {
  font-size: 14px;
  line-height: 20px;
  opacity: 0.8;
}

/* Responsive Styles */
@media (max-width: 969px) {
  .banner-content {
    flex-wrap: wrap;
  }

  .banner-content>div {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
}

@media (max-width: 600px) {
  .banner-services {
    flex-wrap: wrap;
  }

  .banner-services>div {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
}
</style>
