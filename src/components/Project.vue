<template>
  <CardContainer :title="projectTitle">
    <div class="project_flex_container">
      <div class="project_left_flex">

        <div v-for="(item, index) in cards" 
             :key="index"
             class="project_left_flex_item">
          <img :src="item.img" class="project_left_flex_img">
          <div class="project_left_flex_tite">{{ item.title }}</div>
          <Icon class="project_left_flex_icon" :type="iconType"/>
          <div class="project_left_flex_info">
            <div class="project_left_flex_info_title">{{ item.title }}</div>
            <div class="project_left_flex_info_btn">
              <Button type="primary" class="project_left_flex_info_btntext">{{ btnText }}</Button>
            </div>
            
          </div>
        </div>

      </div>

      <div class="project_right_flex">
        <img :src="rightImg">
        <div class="project_right_flex_title">{{ rightTitle }}</div>
        <div class="project_right_flex_info">
          <div class="project_right_flex_info_title">{{ rightTitle }}</div>
          <Button type="primary" class="project_left_flex_info_btn">{{ btnText }}</Button>
        </div>
      </div>
    </div>
  </CardContainer>
</template>

<script>
  import CardContainer from '@/components/CardContainer'

  export default {
    name: 'Project',
    components: {
      CardContainer
    },
    data () {
      return {
        projectTitle: '选项目',
        btnText: '查看详情',
        iconType: '',
        rightTitle: '甄选推荐',
        rightImg: 'https://www.trjcn.com/assets/src/images/v6/201806/home_23.jpg?20180702',
        cards: [
          {
            img: 'https://www.trjcn.com/assets/src/images/v6/201806/home_19.jpg?20180702',
            title: '消费升级',
          },
          {
            img: 'https://www.trjcn.com/assets/src/images/v6/201806/home_21.jpg?20180702',
            title: '项目找合伙人',
          },
          {
            img: 'https://www.trjcn.com/assets/src/images/v6/201806/home_24.jpg?20180702',
            title: 'IT互联网',
          },
          {
            img: 'https://www.trjcn.com/assets/src/images/v6/201806/home_28.jpg?20180702',
            title: '大健康',
          }
        ]

      }
    }
  }
</script>
<style>
.project_flex_container {
  display: flex;
  margin-top: 24px;
}
.project_left_flex {
  height: 440px;
  width: 786px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.project_left_flex_item {
  position: relative;
  margin-right: 16px;
  margin-bottom: 20px;
}
.project_left_flex_tite {
  position: absolute;
  top: 28px;
  left: 40px;
  color: #fff;
  line-height: 36px;
  font-size: 28px;
}
.project_right_flex_info {
  display: none;
  width: 310px;
  height: 312px;
  background: #fff;
  position: absolute;
  left: 30px;
  top: 30px;
}
.project_right_flex:hover .project_right_flex_info {
  display: block;
}
.project_left_flex_info {
  display: none;
  width: 310px;
  height: 148px;
  background: #fff;
  position: absolute;
  left: 30px;
  top: 30px;
}
.project_left_flex_item:hover .project_left_flex_info {
  display: block;
}
.project_left_flex_info_title {
  text-align: center;
  font-size: 28px;
  line-height: 36px;
  padding-top: 23px;
  margin-bottom: 25px;
}
.project_left_flex_info_btn {
  font-size: 16px;
  margin-left: 106px;
}
.project_right_flex {
  position: relative;
}
.project_right_flex_title {
  position: absolute;
  top: 28px;
  left: 40px;
  font-size: 28px;
  color: #fff;
}
.project_right_flex_info_title {
  text-align: center;
  font-size: 28px;
  line-height: 36px;
  padding-top: 23px;
  margin-bottom: 48px;
  margin-top: 48px;
}
.project_right_flex_info_btn {
  display: flex;
  justify-content: center;
}
.project_right_flex_info_btntext {
  font-size: 16px;
}
</style>


