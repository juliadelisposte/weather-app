<template>
  <div class="SideBar">
    <slot name="temp">
      <div class="top-side">
        <div class="search">
          <button @click="openSearch('in')">Search for Places</button>
        </div>
        <div class="searchRadius">
          <img src="https://image.flaticon.com/icons/png/128/1679/1679916.png">
        </div>
      </div>

      <div class="mid-side">
        <div class="clouds">
          <img :src="`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`" alt="cloudy" class="w-40">
        </div>
        <div>
          <div class="g">{{ item.the_temp.toFixed(0) }}<small>°C</small></div>
        </div>
        <div class="state">
          {{ item.weather_state_name }}
        </div>
      </div>

      <div class="bot-side">
        <div class="day">
          {{ (item.applicable_date) }}
          •
          {{ item.applicable_date }}
        </div>
        <div class="location">
          <img src="../assets/icons.png" alt="location">
          {{ location }}
        </div>
      </div>
      <div v-if="search" id="search-box">
        <div>
          <div>
            <div>
              <input ref="search-field" v-model="searchLocation" type="text">
            </div>
            <button @click="emitQuery()">Search</button>
          </div>
        </div>
        <div>
          <div v-for="(city, index) in searchResults" :key="index" class="mt-10 " style="">
            <button @click="selectCity(city.woeid)">
              {{ city.title }}
            </button>
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },

    location: {
      type: String,
      default: ''
    },

    searchResult: {
      type: Object,
      default: () => ({})
    }

  },

  data () {
    return {
      searchLocation: '',
      search: false
    }
  },

  computed: {
    searchResults () {
      return store.state.weather.locations
    }
  },

  methods: {
    openSearch (type) {
      if (type === 'out') {
        const ad = document.getElementById('search-box')
        ad.classList.toggle('toggle-out')
        ad.classList.remove('toggle-in')
        setTimeout(() => {
          this.search = !this.search
        }, 1000)
      }
      if (type === 'in') {
        this.search = !this.search
      }
    },

    emitQuery () {
      console.log(this.item, 'meu item')
      this.$emit('query', this.searchLocation)
    },

    selectCity (model) {
      this.openSearch('out')
      this.$emit('fetchCity', model)
    }
  }
}
</script>

<style lang="scss">
.SideBar{
  height: 100%;
  grid-area: sideBar;
  display: flex;
  flex-direction: column;
  background: #1E213A;
  .top-side{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 200px;
    .search{
      background-color: #6E707A;
      width: 161px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color:#FFF;
    }
    .searchRadius{
       background-color: #6E707A;
       width: 40px;
       height: 40px;
       border-radius: 20px;
       display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }
  }
  .mid-side{
    background-image: url(../assets/Cloud-background.png);
    background-repeat: no-repeat;
    background-position-x:-112px ;
    background-position-y: -30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    color:  #88869D;
    .g{
      display: flex;
      align-items: center;
      color: white;
      font-size: 144px;
      small{
        font-size: 44px;
        margin-top: 50px;
        color: #88869D;;
      }
    }
    .state{
      font-size: 36px;
    }
  }
  .bot-side{
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color:  #88869D;
      .day{
        display: flex;
      }
      .location{
        display: flex;

        img{
          height: 20px;
        }
      }
  }
}
@media(max-width: 360px){
  .SideBar{
    .mid-side{
background-position-x:-180px ;
    background-position-y: -50px;
    }
  }
}
</style>
