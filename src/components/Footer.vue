<template>
  <div class="footer">
    <p class="copyright">© 2019 chachamame.com</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
$colors: (
  base: rgba(39, 44, 70, 0.8),
  line: rgba(200, 200, 255, 0.5)
);

@function colors($key) {
  @return map-get($colors, $key);
}

.footer {
  color: white;
  border-top: 1px solid colors(line);
  height:50px ;
}

.copyright {
  color: lighten(colors(base), 40%);
}
</style>
