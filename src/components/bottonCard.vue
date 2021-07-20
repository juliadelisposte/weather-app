<template>
  <div class="Content">
    <slot v-if="windStatus" name="windStatus">
      <div>Wind status</div>
      <div class="mph"><span>{{ item.wind_speed.toFixed(0) }} </span> mph</div>
      <div class="ali">
        <div class="alii">
          <img src="../assets/near.png" :style="`transform: rotate(${item.wind_direction.toFixed(0)}deg)`">
        </div>
        <div>{{ item.wind_direction_compass }}</div>
      </div>
    </slot>
    <slot v-if="humidity" name="humidity">
      <div>Humidity</div>
      <div class="mph"><span>{{ item.humidity }}</span>%</div>
      <div>
        <div class="porcent">
          <div>0</div><div>50</div><div>100</div>
        </div>
        <div class="bar"><div class="barInter" /></div>

        <div class="end">%</div>
      </div>
    </slot>

    <slot v-if="airPressure" name="airPressure">
      <div>Air Pressure</div>
      <div class="mph"><span class="mr-5">{{ item.air_pressure }}</span>mb</div>
    </slot>

    <slot v-if="visibility" name="useVisibility">
      <div>Visibility</div>
      <div class="mph"><span class="mr-5 d-flex">{{ item.visibility.toFixed(1) }}</span>miles</div>
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
    windStatus: {
      type: Boolean
    },
    humidity: {
      type: Boolean
    },
    airPressure: {
      type: Boolean
    },
    visibility: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
.Content {

  .porcent {
    display: flex;
    justify-content: space-between;

  }
  .bar {
    background: #E7E7EB;
    border-radius: 80px;
    width: 229px;
    height: 8px;
    .barInter {
      flex-wrap: wrap;
      background-color:#FFEC65;
      border-radius: 80px;
      width: 185px;
      height: 8px;
    }
  }
  .end {
    display: flex;
    justify-content: flex-end;
  }

background-color: #1E213A;
  height: 100%;
  .mph {
    span{
      font-size:64px
    }
    font-size:36px
  }
.ali {
  display: flex;
  align-items: center;
  .alii {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-color: #A09FB1;
    display: flex;
    align-items: center;
    justify-content: center;
  img {
    width: 20px;
    height: 20px;
  }
  }
}
.temp {
  display: flex;
  column-gap: 20px;
  small {
    font-size: 16px;
    color:  #A09FB1;
  }
}
  img {
    width: 55px;
    height: 63px;

  }

}
</style>
