<template>
  <div
    class="relative bg-top bg-origami w-screen h-auto bg-no-repeat bg-contain"
    @click="liftPart"
  >
    <svg
      id="レイヤー_1"
      data-name="レイヤー 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4743 3162"
      class="mix-blend-color"
    >
      <rect class="cls-1" width="4743" height="3162" fill="none" />
      <polygon
        id="origamiBody"
        class="cls-2"
        points="3200 1804 1852 2421 1890 2299 2536 1019
      2651 1142 2932 1471 3200 1804"
        fill="red"
        @click.stop="selectedPart('body')"
      />
      <polygon
        id="leftWing"
        class="cls-2"
        fill="yellow"
        @click.stop="selectedPart('leftWing')"
        points="1852 2421 2378.5 2209.5 2755.5 2080.5
      3088.5 2037.5 3347.5 2050.5 3594.5 2103.5 3737.5 2154.5 3889.5 2233.5
      4006.5 2319.5 4156.5 2458.5 4288.5 2618.5 4499.5 2901.5 4533.5 2932.5
      4545.87 2932.5 4545.87 2919.01 4539.5 2904.5 4530.5 2901.5 4508.5 2858.5
      4488.5 2765.5 4442.5 2596.5 4384.5 2388.5 4323.5 2248.5 4245.5 2111.5
      4150.5 1985.5 4065.5 1899.5 3994.5 1853.5 3911.5 1811.5 3798.5 1781.5
      3740.5 1776.5 3540.5 1788.5 3343.5 1805.5 3214.5 1819.5 3195.85 1805.9
      1852 2421"
      />
    </svg>

    <input type="color" @click="changeColor" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "red",
      body: null,
      leftWing: null,
      selected: null,
      preSelected: null,
    };
  },
  mounted() {
    this.body = document.getElementById("origamiBody");
    this.leftWing = document.getElementById("leftWing");
    this.body.classList.add("focus:bg-red-600");
  },
  methods: {
    changeColor() {
      this.color = document.querySelector("input").value;
      if (this.selected !== null) {
        this.selected.setAttribute("fill", this.color);
      }
    },
    liftPart() {
      if (this.selected !== null) {
        this.selected.classList.remove("nShape");
        this.selected.classList.remove("active");
      }
    },
    selectedPart(value) {
      if (this.selected !== null) {
        this.selected.classList.remove("nShape");
        this.selected.classList.remove("active");
      }
      if (value === "body") {
        this.selected = this.body;
        this.body.classList.toggle("nShape");
        this.body.classList.toggle("active");
      } else if (value === "leftWing") {
        this.selected = this.leftWing;
        this.leftWing.classList.toggle("nShape");
        this.leftWing.classList.toggle("active");
      }
      this.preSelected = this.selected;
    },
  },
};
</script>

<style>
.nShape:hover,
.nShape.active {
  stroke: #fff;
  stroke-width: 100px;
  /* 線の長さ 15 線の隙間 */
  stroke-dasharray: 15 5;
}
</style>