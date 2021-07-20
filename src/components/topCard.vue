<template>
  <div class="Content">
    <slot v-if="temperature" name="temperature">
      {{ (item.applicable_date) }}
      <img :src="`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`">
      <div class="temp">
        <div>{{ item.max_temp.toFixed(0) }}°C</div>
        <div><small>{{ item.min_temp.toFixed(0) }}°C</small></div>
      </div>
    </slot>
  </div>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    temperature: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
.Content{

  .porcent{
    display: flex;
    justify-content: space-between;

  }
  .bar{
    background: #E7E7EB;
    border-radius: 80px;
    width: 229px;
    height: 8px;
    .barInter{
        flex-wrap: wrap;
    background-color:#FFEC65;
     border-radius: 80px;
    width: 185px;
    height: 8px;
    }
  }
  .end{
    display: flex;
    justify-content: flex-end;
  }

background-color: #1E213A;
  height: 100%;
  .mph{
    span{
      font-size:64px
    }
    font-size:36px
  }
.ali{
  display: flex;
  align-items: center;
  .alii{
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-color: #A09FB1;
    display: flex;
    align-items: center;
    justify-content: center;
  img{
    width: 20px;
    height: 20px;
  }
  }
}
.temp{
  display: flex;
  column-gap: 20px;
  small{
    font-size: 16px;
    color:  #A09FB1;
  }
}
  img{
    width: 55px;
    height: 63px;

  }

}

</style>
