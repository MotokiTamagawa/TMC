<template>

<div class="accordion">
  <div class="title" @click="open()">
    <slot name="title" v-if="!isOpen"></slot>
    <slot v-else name="close"></slot>
    <transition name="rotate" mode="out-in">
      <i class="fas fa-chevron-up" v-if="isOpen" key="rotate1"></i>
      <i class="fas fa-chevron-down" v-else key="rotate2"></i>
    </transition>
  </div>
  <transition name="open">
    <div class="accordion-content" v-if="isOpen">
      <slot name="content"></slot>
    </div>
  </transition>
  </div>
</template>


<script lang="js">

export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    open: function () {
      this.isOpen = !this.isOpen;
    },
  },
}
</script>

<style scoped>
.accordion {
  max-width: 95%;
  margin: auto;
  padding-bottom: 20px;
}

.title:hover {
  cursor: pointer;
  opacity: 0.8;
}

.title {
  padding: 10px;
  background-color: rgb(182, 182, 182);
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 18px;
}

.title > div {
  display: inline-block;
  font-weight: bold;
}

.title i {
  float: right;
  line-height: 1.3;
}

.content {
  padding: 0 15px;
}

.open-enter-active {
  animation: open 0.2s;
}

.open-leave-active {
  animation: open 0.2s linear reverse;
}

@keyframes open {
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.rotate-enter-active {
  animation: rotate 0.2s linear;
}

@keyframes rotate {
  0% {
    transform: rotate(180deg);
  }
}

</style>