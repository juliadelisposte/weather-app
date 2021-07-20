<template>
  <div id="Main">
    <div>
      <side-bar :item="getWeather('today')" :location="getLocation()" @query="fetchSearch" @fetchCity="city" />
    </div>
    <div class="C">
      <div class="CInter">
        <div class="gr">
          <div class="celsius">℃</div>
          <div class="faren">℉</div>
        </div>
        <div class="CTop">
          <div v-for="(item, index) in getWeather()" :key="index">
            <top-card temperature :item="item" class="boxsTop" />
          </div>
        </div>
        <div class="CBot">
          <h1>Today’s Hightlights </h1>
          <div class="weather-top">
            <botton-card wind-status :item="getWeather('today')" class="boxsMid" />
            <botton-card humidity :item="getWeather('today')" class="boxsMid" />
          </div>
          <div class="weather-bot">
            <botton-card visibility :item="getWeather('today')" class="boxsBot" />
            <botton-card air-pressure :item="getWeather('today')" class="boxsBot" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topCard from '../components/topCard.vue'
import sideBar from '../components/sideBar.vue'
import bottonCard from '../components/bottonCard.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    sideBar,
    topCard,
    bottonCard
  },

  data () {
    return {}
  },

  computed: {
    ...mapGetters(['weather', 'locations'])
  },

  created () {
    this.fetchWeather('455827')
  },

  methods: {
    ...mapActions([
      'fetchWeather',
      'fetchRefresh',
      'fetchLocation'
    ]),

    getWeather (mode) {
      if (mode === 'today') {
        return this.weather.consolidated_weather[0]
      }
      const home = this.weather.consolidated_weather.splice(1, 5)
      return home
    },

    getLocation () {
      return this.weather.title
    },

    refresh () {
      this.fetchRefresh(this.weather.woeid)
    },

    fetchSearch (searchLocation) {
      this.fetchLocation(searchLocation)
    },

    city (model) {
      console.log(model, 'dashboard data')
      this.fetchRefresh(model)
    }
  }
}
</script>

<style lang="scss">
#Main{

  .C{

    color:#E7E7EB;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #100E1D;

  .CInter{

      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;

      .gr{

        display: flex;
        font-size: 18px;
        color: #FFF;
        justify-content: flex-end;

        .celsius{

          width: 40px;
          height: 40px;
          background: #585676;
          border-radius: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        }
        .faren{

          width: 40px;
          height: 40px;
          background: #585676;
          border-radius: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
  .CTop{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
  .boxsTop{

    width: 120px;
    height: 177px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

}
}
  .CBot{
    h1{
      font-size: 24px;
      margin-bottom: 20px;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  .boxsMid{

    flex-grow: 1;
    width: 328px;
    height: 204px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

  }
  .boxsBot{
    flex-grow: 1;
      flex-wrap: wrap;
    margin-top: 50px;
    width: 328px;
    height: 159px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

  }
 .weather-top{
   gap: 30px;
  flex-wrap: wrap;
      display: flex;
      justify-content: space-between;

 }
    .weather-bot{
        flex-wrap: wrap;
      gap: 30px;
    display: flex;
    justify-content: space-between;
  }
}
  }
  footer{
      flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: normal;
    strong{
      font-weight: bold;
      text-decoration: underline;
    }
  }
  }
  display: grid;
  grid-template-rows: 1fr ;
  grid-template-columns: 456px 1fr;
  grid-template-areas:
  "sideBar" "content";
  flex-wrap: wrap;
}
@media(max-width: 1113px){
#Main{
   display: grid;
  grid-template-rows: 1fr ;
  grid-template-columns: 1fr;
  grid-template-areas:
  "sideBar" "content";
  .C{
    .CInter{
      .CTop{
        margin-top: 30px;
      }
      .CBot{
        margin-top: 20px;
      }
      .gr{
        display: none;
      }
    }
  }
}
}

</style>
