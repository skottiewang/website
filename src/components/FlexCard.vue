<template>
  <div>
    <div class="flexcard_container">
      <div class="flexcard_left_part">

        <div class="flexcard_left_part_title">
          <div class="flexcard_left_partred_tag"/>
          <div>
            <a class="flexcard_left_part_title_text">{{ leftTitle }}</a>
          </div>
          <Icon type="ios-arrow-dropright" size="24" color="#999" class="flexcard_left_part_title_icon"/>
        </div>

        <div>
          <slot name="leftContent"/>
        </div>
      </div>

      <div class="flexcard_right_part">
        <div class="flexcard_right_part_title">
          <div class="flexcard_right_partred_tag"/>
          <div>
            <a class="flexcard_right_part_title_text">{{ rightTitle }}</a>
          </div>
          <Icon type="ios-arrow-dropright" size="24" color="#999" class="flexcard_right_part_title_icon"/>
        </div>
        <div>
          <slot name="rightContent"/>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
  export default {
    name: 'FlexCard',
    props: {
      leftTitle: {
        type: String,
        default: '标题'
      },
      rightTitle: {
        type: String,
        default: '标题'
      },
      buttonShow: {
        type: Boolean,
        default: false
      },
    }
  }
</script>
<style scoped>
.flexcard_container {
  width: 1200px;
  min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  margin-top: 24px;
  margin-bottom: 24px;
  padding-left: 22px;
  position: relative;
  /* background-color: aliceblue; */
  height: 500px;
  display: flex;
}
.flexcard_left_part_title_text {
  font-size: 24px;
  line-height: 75px;
  color: #333;
}
.flexcard_left_part {
  width: 810px;
  height: 428px;
}
.flexcard_left_part_title {
  position: relative;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flexcard_left_partred_tag {
  width: 3px;
  height: 24px;
  background: #409EFF;
  position: absolute;
  left: -22px;
  top: 26px;
}
.flexcard_right_part {
  width: 390px;
  position: relative;
  border-left: 1px solid #f1f1f1;
}
.flexcard_right_part_title {
  padding-left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}
.flexcard_right_partred_tag {
  width: 3px;
  height: 24px;
  background: #409EFF;
  position: absolute;
  left: 0px;
  top: 26px;
}
.flexcard_right_part_title_text {
  font-size: 24px;
  line-height: 75px;
  color: #333;
}
.flexcard_right_part_title_icon {
  margin-right: 8px;
}
.flexcard_left_part_title_icon {
  margin-right: 8px;
}
</style>


