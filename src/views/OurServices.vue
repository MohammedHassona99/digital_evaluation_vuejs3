<script setup>
import PlanOne from '@/components/icons/PlanOne.vue'
import PlanTwo from '@/components/icons/PlanTwo.vue'
import PlanThree from '@/components/icons/PlanThree.vue'
import PlanFour from '@/components/icons/PlanFour.vue'
</script>

<template>
  <div class="our-services">
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 d-none d-md-block">slider</div>
        <div class="col-12 col-md-7">
          <div class="row">
            <div class="col-md-12">
              <ul class="list-unstyled d-flex justify-content-between list-plan">
                <li><PlanOne /></li>
                <li><PlanTwo /></li>
                <li><PlanThree /></li>
                <li><PlanFour /></li>
              </ul>
            </div>
            <div class="col-md-8"></div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.list-plan {
  position: relative;
  li {
    background-color: #fafbff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &:nth-child(even) {
      margin-top: 15px;
    }
    &:not(:last-child):after {
      content: '- - - - - - - - - - - - - -';
      position: absolute;
      top: 0;
      left: -140px;
      width: 170px;
      height: 70px;
      border-radius: 50%;
      
      z-index: -5;
    }
    svg {
      transform: scale(0.5);
    }
  }
}
</style>
