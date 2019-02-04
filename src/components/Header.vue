<template>
  <nav class="nav-bar">
    <div class="menu-right">
      <router-link to="/" class="menu-item" :class="{select:isAbout}">
        <h3 class="item-name">About</h3>
      </router-link>
      <router-link to="/portfolio" class="menu-item" :class="{select: isPortfolio}">
        <h3 class="item-name">Portfolio</h3>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isAbout: true,
      isPortfolio: false
    };
  },
  mounted(){
    this.changeDisplay()
  },
  methods: {
    changeDisplay: function() {
      this.isHome = false;
      this.isPortfolio = false;
      this.isAbout = false;

      switch (this.$route.path) {
        case "/":
          this.isAbout = true;
          break;
        case "/portfolio":
          this.isPortfolio = true;
          break;
        default:
          break;
      }
    },
    isSelect: function(path) {
      return this.$route.path === path ;
    }
  },
  watch: {
    $route: "changeDisplay"
  }
};
</script>

<style lang="scss" scoped>
$colors: (
  select: rgba(0, 206, 161, 0.8),
  line: rgba(200, 200, 255, 0.5)
);

@function colors($key) {
  @return map-get($colors, $key);
}

a {
  text-decoration: none;
}

.title {
  display: flex;
}

.nav-bar {
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid colors(line);
}

.menu-right {
  float: right;
  height: inherit;
  display: flex;
}

@media screen and (max-width: 480px) {
  .menu-right {
    float: none;
    justify-content: center;
  }
}

.menu-item {
  display: flex;
  width: 80px;
  align-items: center;
  justify-content: center;
  padding: 0px 10px 0px 10px;
  margin: 0px 0px 0px 0px;
  cursor: pointer;
}

.menu-item:hover {
  color: colors(select);
}

.select {
  color: colors(select);
  border-bottom: 1px solid colors(select);
}

.item-name {
  transform: rotate(-5deg);
}
</style>
