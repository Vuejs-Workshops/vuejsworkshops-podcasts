<template>
  <div class="site-wrap">
    <podcasts-header/>

    <div
      class="site-blocks-cover overlay inner-page-cover"
      style="background-image: url(images/hero_bg_2.jpg);"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-8" data-aos="fade-up" data-aos-delay="400">
            <h2 class="text-white font-weight-light mb-2 display-4">{{podcast.title}}</h2>
            <div class="text-white mb-3">
              <span class="text-white-opacity-05">
                <small>
                  By {{podcast.producerName}}
                  <span class="sep">/</span>
                  {{podcast.publishedDate}}
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container site-section">
      <div class="player mb-5">
        <audio id="player2" preload="none" controls style="max-width: 100%">
          <source :src="podcast.mp3" type="audio/mp3">
        </audio>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-10">
          <p>
            <span v-html="podcast.description"></span>
          </p>
        </div>
      </div>
    </div>

    <podcasts-footer/>
  </div>
</template>


<script>
import PodcastsFooter from "./PodcastsFooter";
import PodcastsHeader from "./PodcastsHeader";

export default {
  name: "Podcast",
  components: { PodcastsFooter, PodcastsHeader },
  data() {
    return { podcast: {} };
  },
  created() {
    this.podcast = {
      id: 3107,
      title: "194: Off the Main Thread",
      description:
        '<p>For a lot of software developers running code in separate threads is a common tool to reach for. On the web they are not nearly as widely used but can be just as powerful. Join us this week as Surma talks us through just how useful workers can be and some of the challenges they can help developers solve.</p> <p>Visit the website for This Week in Web, resources & more: <a href= "https://thewebplatformpodcast.com/194-off-the-main-thread">https://thewebplatformpodcast.com/194-off-the-main-thread</a></p> <p> </p> <p>Follow The Web Platform podcast on Twitter for regular updates <a href= "https://twitter.com/TheWebPlatform">@TheWebPlatform</a>.</p>',
      mp3: "https://traffic.libsyn.com/secure/thewebplatform/TWPP-194.mp3",
      publishedDate: "2019-10-22T00:17:40",
      producerName: "The Web Platform podcast",
      producerId: 10
    };
  },
  mounted() {
    var mediaElements = document.querySelectorAll("video, audio"),
      total = mediaElements.length;
   
    for (var i = 0; i < total; i++) {
      // eslint-disable-next-line
      new MediaElementPlayer(mediaElements[i], {
        pluginPath: "https://cdn.jsdelivr.net/npm/mediaelement@4.2.7/build/",
        shimScriptAccess: "always",
        success: function() {
          var target = document.body.querySelectorAll(".player"),
            targetTotal = target.length;
          for (var j = 0; j < targetTotal; j++) {
            target[j].style.visibility = "visible";
          }
        }
      });
    }
  }
};
</script>
