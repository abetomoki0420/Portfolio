<template>
  <div class="portfolio">
    <div class="products">
      <div class="image">
        <a href="https://karaoke-diary.herokuapp.com/" target="_blank">
          <img src="../assets/karaokediary.png" alt="karaokediary">
        </a>
        <h3>KARAOKE DIARY ( Laravel + Vue + Bulma )</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.products {
  margin-top: 40px;
  display: grid;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  grid-template-rows: 300px 300px;
  grid-template-columns: 50% 50%;
}

@media screen and( max-width: 1400px  ) {
  .products {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
}

@media screen and( max-width: 480px) {
  .products {
    grid-template-columns: 100%;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .image h3 {
    transform: translateY(-100%);
  }
}

.image {
  position: relative;
  grid-row: 1;
  grid-column: 1;
  overflow: hidden;
  max-height: 100%;
}

.image a {
  display: block;
  height: 100%;
}

.image:hover h3 {
  transform: translateY(0px);
}

.image h3 {
  position: absolute;
  transform: translateY(100%);
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.5s;
  margin: 0 auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
}

.image img {
  // max-width: 100%;
  // max-height: 100%;
  width: 100%;
  height: 100%;
}
</style>
