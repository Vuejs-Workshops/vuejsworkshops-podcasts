<template>
  <div class="site-wrap">
    <podcasts-header/>

    <div
      class="site-blocks-cover overlay"
      style="background-image: url(images/hero_bg_1.jpg);"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-8" data-aos="fade-up" data-aos-delay="400">
            <h2
              class="text-white font-weight-light mb-2 display-4"
            >Episode 09: How To Create Web Page Using Bootstrap 4</h2>
            <div class="text-white mb-4">
              <span class="text-white-opacity-05">
                <small>By Mike Smith | 16 September 2017 | 1:30:20</small>
              </span>
            </div>
            <p>
              <a
                href="single-post.html"
                class="btn btn-primary btn-sm py-3 px-4 small"
              >Read The Transcript</a>
            </p>

            <div class="player">
              <audio id="player2" preload="none" controls style="max-width: 100%">
                <source
                  src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3"
                  type="audio/mp3"
                >
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section bg-light">
      <div class="container">
        <div class="row mb-5" data-aos="fade-up">
          <div class="col-md-12 text-center">
            <h2 class="font-weight-bold text-black">Recent Podcasts</h2>
          </div>
        </div>

        <div
          v-show="podcasts"
          v-for="show in podcasts"
          :key="show.id"
          class="d-block d-md-flex podcast-entry bg-white mb-5"
          data-aos="fade-up"
        >
          <div class="image" :style="{'background-image': 'url(' + randomPic() + ')'}"></div>
          <div class="text">
            <h3 class="font-weight-light">
              <a href="single-post.html">{{show.title}}</a>
            </h3>
            <div class="text-white mb-3">
              <span class="text-black-opacity-05">
                <small>
                  By {{show.producerName}}
                  <span class="sep">/</span>
                  {{show.publishedDate | formatDate}}
                </small>
              </span>
            </div>

            <div class="player">
              <audio id="player2" preload="none" controls style="max-width:100%">
                <source :src="show.mp3" type="audio/mp3">
              </audio>
            </div>
          </div>
        </div>
      </div>

      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="site-block-27">
              <ul class="text-center">
                <li>
                  <a href="#">&lt;</a>
                </li>

                <li>
                  <a href="#">&gt;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="site-blocks-cover overlay inner-page-cover"
      style="background-image: url(images/hero_bg_1.jpg);"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-8" data-aos="fade-up" data-aos-delay="400">
            <h2>Search</h2>
            <p
              class="mb-7"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit nihil saepe libero sit odio obcaecati veniam.</p>
            <form action="#" method="post" class="site-block-subscribe">
              <div class="input-group mb-5">
                <input
                  type="text"
                  class="form-control border-secondary text-white bg-transparent"
                  placeholder="What are you searching for ..."
                  aria-describedby="button-addon2"
                >
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button" id="button-addon2">search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <PodcastsFooter/>
  </div>
</template>

<script>
import PodcastsFooter from "./PodcastsFooter";
import PodcastsHeader from "./PodcastsHeader";


export default {
  name: "podcasts",
  components: { PodcastsFooter, PodcastsHeader },
  data() {
    return { podcasts: [], first: false, last: false };
  },
  methods: {
    randomPic: function() {
      let pic = "images/img_" + (Math.round(Math.random() * 4) + 1) + ".jpg";
      return pic;
    }
  },
  created() {
    this.podcasts = [
      {
        id: 3117,
        title:
          "Ep. #48, Dynamic Static Sites with Shalom Volchok of Digital Optimization Group",
        description: null,
        mp3:
          "https://media.blubrry.com/heavybit/d3aeja1uqhkije.cloudfront.net/podcasts/jamstack-radio/20190924-jamstack-radio-048.mp3",
        publishedDate: "2019-10-24T16:45:00",
        producerName: "jam stack",
        producerId: 18
      },
      {
        id: 3116,
        title: "JSJ 403: Why Developers Need Social Skills with Mani Vaya",
        description: null,
        mp3: "https://media.devchat.tv/js-jabber/JSJ_403_Mani_Vaya.mp3",
        publishedDate: "2019-10-24T10:00:00",
        producerName: "JS Jabber",
        producerId: 14
      },
      {
        id: 3115,
        title:
          "126: James Long - Building Distributed Local-First JavaScript Applications",
        description: null,
        mp3: "https://audio.simplecast.com/47bda01c.mp3",
        publishedDate: "2019-10-23T14:10:00",
        producerName: "full stack radio",
        producerId: 16
      },
      {
        id: 3112,
        title: "JSJ 402: SEO for Developers with Vitali Zaidman",
        description: null,
        mp3: "https://media.devchat.tv/js-jabber/JSJ_402_Vitali_Zaidmanv.mp3",
        publishedDate: "2019-10-22T10:00:00",
        producerName: "JS Jabber",
        producerId: 14
      },
      {
        id: 3114,
        title: "AiA 261: Angular Projects with Zama Khan Mohammed",
        description: null,
        mp3:
          "https://media.devchat.tv/adventures-in-angular/AiA_261_Zama_Khan_Mohammed.mp3",
        publishedDate: "2019-10-22T10:00:00",
        producerName: "Adventures in Angular",
        producerId: 8
      },
      {
        id: 3109,
        title: "VoV 084: Nuxt.JS With Sebastien Chopin",
        description: null,
        mp3: "https://media.devchat.tv/viewsonvue/VoV_084_Sebastien_Chopin.mp3",
        publishedDate: "2019-10-22T10:00:00",
        producerName: "Views on Vue",
        producerId: 17
      },
      {
        id: 3110,
        title: "MJS 128: Mike Hartington",
        description: null,
        mp3: "https://media.devchat.tv/my-js-story/MJS_128_Mike_Hartington.mp3",
        publishedDate: "2019-10-22T10:00:00",
        producerName: "JS Jabber",
        producerId: 14
      },
      {
        id: 3111,
        title: "MJS 128: Mike Hartington",
        description: null,
        mp3: "https://media.devchat.tv/my-js-story/MJS_128_Mike_Hartington.mp3",
        publishedDate: "2019-10-22T10:00:00",
        producerName: "JS Jabber",
        producerId: 14
      },
      {
        id: 3113,
        title: "MAS 095: Brad McAlister",
        description: null,
        mp3:
          "https://media.devchat.tv/my-angular-story/MAS_095_Brad_McAlister.mp3",
        publishedDate: "2019-10-22T10:00:00",
        producerName: "Adventures in Angular",
        producerId: 8
      },
      {
        id: 3108,
        title: "RNR 140: Best Practices with Zain Sajjad",
        description: null,
        mp3:
          "https://media.devchat.tv/reactnativeradio/RNR_140_Zain_Sajjad.mp3",
        publishedDate: "2019-10-22T10:00:00",
        producerName: "React Native radio",
        producerId: 6
      },
      {
        id: 3107,
        title: "194: Off the Main Thread",
        description: null,
        mp3: "https://traffic.libsyn.com/secure/thewebplatform/TWPP-194.mp3",
        publishedDate: "2019-10-22T00:17:40",
        producerName: "The Web Platform podcast",
        producerId: 10
      },
      {
        id: 3106,
        title: "383: What’s Up with CMS’s?",
        description: null,
        mp3:
          "https://cdn.simplecast.com/audio/167887/167887a0-ac00-4cf9-bc69-b5ca845997db/b832cdcb-f926-4e7e-9a12-947ad9d0538e/shoptalkshow-383_tc.mp3",
        publishedDate: "2019-10-21T14:00:13",
        producerName: "Shop talk show",
        producerId: 5
      }
    ];
  }

};
</script>

