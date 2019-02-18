<template>
  <div class="founds">
    <div class="founds_container">
      <div class="founds_card_title">
        <a class="founds_card_title_text">找资金</a>
        <Button type="primary">{{ publishFounds }}</Button>
      </div>
      <div class="founds_card_container"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data () {
      return {
        findFounds: '找资金',
        publishFounds: '发布资金',
      }
    }
  }
</script>
<style>
.founds_container {
  width: 1200px;
  min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  height: 500px;
  background-color: #ffffff;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 0 22px;
}
.founds_card_title_text {
  font-size: 24px;
  line-height: 75px;
  color: #333;
}
.founds_card_title {
  display: flex;
  justify-content: space-between;

}
</style>


