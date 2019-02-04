<template>
  <div class="container">
    <div class="message">
      <figure class="image">
        <img class="icon" src="../assets/icon.png">
      </figure>
      <div class="text">
        <p>Hi. I'm chachamame.</p>
        <p>I'm Web Developer.</p>
        <div class="social">
          <a href="https://twitter.com/chachamame0420" target="_blank" class="link-icon twitter-bg">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/chachamame" target="_blank" class="link-icon github-bg">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://chachamame.tumblr.com/" target="_blank" class="link-icon tumblr-bg">
            <i class="fab fa-tumblr"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
$colors: (
  select: rgba(0, 206, 161, 0.8),
);

.container {
  display: flex;
  justify-content: center;
}

.message {
  height: 400px;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 480px) {
  .message {
    flex-direction: column;
    margin-bottom: 20px;
  }
}

.message > p {
  color: rgba(0, 0, 0, 0.8);
}

.icon {
  height: 256px;
  width: 256px;
  border-radius: 50%;
}

.image {
  display: flex;
  justify-content: center;
}

.social{
  display:flex;
  justify-content: space-around;
}

.link-icon{
  display: inline-block ;
  padding: 0px 10px 0px 10px;
  height:35px ;
  width:35px ;
  border-radius: 50%;
  box-sizing: border-box;
  color: white ;
}

.link-icon:hover{
  background: rgba(0, 206, 161, 0.8);
}

.fab{
  display: inline-block ;
  line-height: 20px ;
  margin-top: 8px ;
}

.twitter-bg{
  background: #55acee;
}

.github-bg{
  background: black ;
}

.fa-github{
  color:white ;
}

.tumblr-bg{
  background: #32506d ;
}

.fa-tumblr{
  margin-left: 2px ;
}

</style>
