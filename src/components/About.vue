<template>
  <div class="container">
    <div class="message">
      <figure class="image">
        <img class="icon" src="../assets/icon.png">
      </figure>
      <div class="text">
        <p>Chachamame's Portfolio</p>
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
    <div class="descriptions">
      <div class="description">
        <h2>AboutMe</h2>
        <p>Name: 茶々豆</p>
        <p>Age: 27</p>
      </div>
      <div class="description">
        <h2>Languages</h2>
        <div class="icons">
          <img v-for="language in languages" :key="language.name" :src="language.src">
        </div>
      </div>
      <div class="description">
        <h2>Frameworks</h2>
        <div class="icons">
          <img v-for="framework in frameworks" :key="framework.name" :src="framework.src">
        </div>
      </div>
      <!-- <div class="description">
        <h2>Works</h2>
        <div class="work" v-for="work in works" :key="work.duration">
          <p>
            <strong>{{work.duration}}</strong>
          </p>
          <p v-for="description in work.descriptions" :key="description">{{ description }}</p>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      languages: [
        {
          name: "HTML",
          description: "",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png"
        },
        {
          name: "CSS",
          description: "",
          src: "https://static.javatpoint.com/csspages/images/css-tutorial.png"
        },
        {
          name: "JavaScript",
          description: "",
          src: "https://miro.medium.com/max/444/1*pv6LE99Taf7usoD34Bgv4w.png"
        },
        {
          name: "Python",
          description: "基本的な操作とスクレイピングくらいなら出来るレベル。",
          src: "https://www.python.org/static/opengraph-icon-200x200.png"
        },
        {
          name: "PHP",
          description: "Laravel内で使えるレベル",
          src: "http://php.net/images/logos/new-php-logo.png"
        },
        {
          name: "C",
          description: "業務で使用",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/140px-The_C_Programming_Language_logo.svg.png"
        },
        {
          name: "C#",
          description: "基本的な操作とスクレイピングくらいなら出来るレベル。",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/150px-C_Sharp_wordmark.svg.png"
        }
      ],
      frameworks: [
        {
          name: "Vue.js",
          src: "https://vuejs.org/images/logo.png"
        },
        {
          name: "laravel",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LaravelLogo.png/800px-LaravelLogo.png"
        }
      ],
      works: [
        {
          duration: "2018.07~現在",
          descriptions: [
            "諸々のストレスから精神的に疲労し退職。",
            "療養しながらWebを独学する。"
          ]
        },
        {
          duration: "2018.04~2018.06",
          descriptions: ["客先にて交通システムのドキュメント作成を行う。"]
        },
        {
          duration: "2017.11~2018.04",
          descriptions: [
            "客先にて公共システムの新機能開発案件に参加する。",
            "基本設計・詳細設計・製造・テスト・納品まで行う。"
          ]
        },
        {
          duration: "2017.07~2017.10",
          descriptions: ["客先にて鉄鋼システムの一部を担当する。"]
        },
        {
          duration: "2017.03~2017.6",
          descriptions: ["社内アプリケーション作成（C#)・新人研修を担当する。"]
        },
        {
          duration: "2016.04~2017.2",
          descriptions: [
            "新卒でT社に入社",
            "入社後３ヶ月ほどプログラミング研修（RHEL,C）を行う。",
            "客先にて公共システムの改修・テストを行う。"
          ]
        }
      ]
    };
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

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.message {
  height: 400px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid colors(line);
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

.social {
  display: flex;
  justify-content: space-around;
}

.link-icon {
  display: inline-block;
  padding: 0px 10px 0px 10px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  box-sizing: border-box;
  color: white;
}

.link-icon:hover {
  background: rgba(0, 206, 161, 0.8);
}

.fab {
  display: inline-block;
  line-height: 20px;
  margin-top: 8px;
}

.twitter-bg {
  background: #55acee;
}

.github-bg {
  background: black;
}

.fa-github {
  color: white;
}

.tumblr-bg {
  background: #32506d;
}

.fa-tumblr {
  margin-left: 2px;
}

.descriptions {
  width: 90%;
}

.description {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding: 5px 80px;
    border-bottom: 1px solid colors(line);
  }

  p {
    text-align: center;
  }

  img {
    margin: 15px;
    max-height: 128px;
    width: 128px;
    max-width: 128px;
    width: 128px;
  }

  li {
    list-style: none;
  }
}

.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.mid-title {
  text-align: center;
}
</style>
