<template>
  <div>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="Width"
      :height="Height"
      viewBox="0 0 115.446 34.269"
    >
      <path
        d="M35.258,18.415,19.837,2.994A3.405,3.405,0,0,0,17.421,2H5.427A3.437,3.437,0,0,0,2,5.427V17.421a3.419,3.419,0,0,0,1.011,2.433L18.432,35.275a3.405,3.405,0,0,0,2.416.994,3.35,3.35,0,0,0,2.416-1.011L35.258,23.264a3.35,3.35,0,0,0,1.011-2.416A3.461,3.461,0,0,0,35.258,18.415ZM8,10.567A2.57,2.57,0,1,1,10.567,8,2.567,2.567,0,0,1,8,10.567Zm20.167,14.17-7.316,7.316-7.316-7.316a4.289,4.289,0,0,1,3.033-7.316A4.231,4.231,0,0,1,19.6,18.689l1.251,1.234L22.1,18.672a4.289,4.289,0,0,1,6.066,6.066Z"
        transform="translate(-2 -2)"
        :fill="colorIcon"
      />
      <text
        transform="translate(46.446 24)"
        :fill="colorIcon"
        font-size="20"
        font-family="CircularStd-Black, Circular Std Black"
        font-weight="800"
      >
        <tspan x="0" y="0">Help.in</tspan>
      </text>
      </svg>
  </div>
</template>

<script>
export default {
  props:{
    colorIcon: String,
    Width: String,
    Height: String,
  }

}
</script>

<style>
text{
    font-family: CircularStd !important;
}
</style>