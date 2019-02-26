<template>
  <div>
    <FlexCard :left-title="interviewTitle" :right-title="dateTitle">
      <div slot="leftContent">

        <div class="left_top">
          <div class="left_top_project">
            <div class="left_top_project_ceo">
              {{ ceoName }}
              <span class="left_top_project_ceo_title">{{ ceoTitle }}</span>
            </div>
            <a class="left_top_project_desc">{{ projectDesc }}</a>
            <div>
              <Icon type="md-bookmark" color="#999" size="14"/>
              <span class="left_top_project_detail">{{ projectProgress }}</span>
            </div>
            <div>
              <Icon type="md-briefcase" color="#999" size="14"/>
              <span class="left_top_project_detail">{{ projectIndustry }}</span>
            </div>
            <Button type="primary" ghost class="left_top_project_button">{{ buttonText }}</Button>
          </div>
          <img class="left_top_project_img" :src="imgUrl">
        </div>

        <div class="left_footer_swiper">
          <swiper :options="swiperOption" >
            <swiper-slide v-for="(item, index) in textGroup" 
                          :key="index"
                          class="left_footer_swiper_item">
              <Icon type="md-arrow-dropright"/>
              <a class="left_footer_swiper_item_desc">{{ item.desc }}</a>
              <Tag color="red" class="left_footer_swiper_item_tag">{{ tagText }}</Tag>
            </swiper-slide>
          </swiper>

          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in msgGroup" 
                          :key="index"
                          class="left_footer_swiper_item">
              <Icon type="md-arrow-dropright"/>
              <a class="left_footer_swiper_item_desc">{{ item.desc }}</a>
              <Tag color="red" class="left_footer_swiper_item_tag">{{ tagText }}</Tag>
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <div slot="rightContent">
        <div class="right_title">
          <span>{{ financing }}</span>
          <span>{{ round }}</span>
          <span>{{ money }}</span>
        </div>
        <swiper :options="listOption" class="right_list_item_container">
          <swiper-slide class="right_list_item"
                        v-for="(item, index) in listItem"
                        :key="index">
            <div class="right_list_item_finance">{{ item.finance }}</div>
            <div class="right_list_item_round">{{ item.round }}</div>
            <span>{{ item.money }}</span>
          </swiper-slide>
        </swiper>
      </div>
    </FlexCard>
  </div>
</template>
<script>
  import FlexCard from '@/components/FlexCard'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      FlexCard,
      swiper,
      swiperSlide
    },
    name: 'Interview',
    data () {
      return {
        financing: '融资方',
        round: '轮次',
        money: '融资金额',
        interviewTitle: '投融专访',
        dateTitle: '创投数据库',
        ceoName: '张勇',
        ceoTitle: '项目 创始人',
        projectDesc: '四川婚纱婚庆主题公园项目融资3亿元',
        projectProgress: '项目进度：初创期',
        projectIndustry: '所属行业：其他行业',
        buttonText: '查看详情',
        imgUrl: 'https://www.trjcn.com/upfile/most_potential/20190221/thumb_1550718345.png',
        listItem: [
          {
            finance: 'AnChain.ai',
            round: '种子轮',
            money: '数百万美元',
          },
          {
            finance: 'ARena Space',
            round: '战略投资',
            money: '770万美元',
          },
          {
            finance: 'Arvinas',
            round: 'IPO',
            money: '1.2亿美元',
          },
          {
            finance: 'Bayshore Pharmaceuticals',
            round: '战略投资',
            money: '1023万美元',
          },
          {
            finance: 'Behaviour Interactive',
            round: '战略投资',
            money: '未透露',
          },
          {
            finance: 'Bellen',
            round: 'C轮',
            money: '数亿元',
          },
          {
            finance: 'BlackBuck',
            round: 'E轮',
            money: '2700万美元',
          },
          {
            finance: '9stacks',
            round: 'A轮',
            money: '300万美元',
          },
          {
            finance: 'Accion Systems',
            round: 'B轮',
            money: '300万美元',
          },
          {
            finance: 'ADNOC',
            round: '战略投资',
            money: '5.5亿美元',
          },
          {
            finance: 'AIF娱乐',
            round: '-',
            money: '数千万元',
          },
        ],
        swiperOption: {
          slidesPerView: 1,
          loop: true,
          direction: 'vertical',
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
        },
        listOption: {
          slidesPerView: 9,
          loop: true,
          direction: 'vertical',
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
        },
        tagText: 'NEW',
        msgGroup: [
          {
            desc: '引入优质行业资源，让智能机器人充实你的知识领域',
          },
          {
            desc: '新型技术助推煤制油产业发展，改善富煤贫油格局！',
          },
          {
            desc: '养鸡要从改良土壤开始？一亩地还仅养50只',
          },
          {
            desc: '军民两用产品，石墨烯散热涂料已有成熟技术支撑',
          }
        ],
        textGroup: [
          {
            desc: '养鸡要从改良土壤开始？一亩地还仅养50只',
          },
          {
            desc: '新型技术助推煤制油产业发展，改善富煤贫油格局！',
          },
          {
            desc: '军民两用产品，石墨烯散热涂料已有成熟技术支撑',
          },
          {
            desc: '引入优质行业资源，让智能机器人充实你的知识领域',
          }
        ]
      }
    }
  }
</script>

<style scoped>
.left_top {
  padding: 30px 22px 0px;
  background-color: #fff;
  height: 100%;
  display: flex;
  margin-bottom: 24px;
}
.left_top_project {
  width: 330px;
  margin-right: 24px;
}
.left_content_top {
  width: 100%;
  display: flex;
}
.left_top_project_ceo {
  font-size: 24px;
  line-height: 44px;
  height: 44px;
  background:#f3f3f3;
  padding: 0 10px;
  margin-bottom: 12px;
}
.left_top_project_ceo_title {
  color: #666;
  font-size: 16px;
  padding-left: 10px;
}
.left_top_project_desc {
  font-size: 22px;
  color: #333;
  height: 72px;
  line-height: 36px;
  font-weight: 700;
}
.left_top_project_desc:hover {
  color: #2d8cf0;
}
.left_top_project_detail {
  color: #999;
  font-size: 14px;
  line-height: 24px;
}
.left_top_project_button {
  margin-top: 24px;
}
.left_top_project_img {
  width: 410px;
  height: 250px;
}
.left_footer {
  margin-right: 24px;
}
.left_footer_swiper {
  display: flex;
  height: 55px;
  border-top: 1px solid #f1f1f1;
  margin-right: 24px;
  padding-top: 24px;
  margin-bottom: 12px;
}
.left_footer_swiper_item {
  display: flex;
  align-items: center;
}
.left_footer_swiper_item_tag {
  margin-left: 8px;
}
.right_title {
  height: 42px;
  width: 100%;
  line-height: 42px;
  display: flex;
  justify-content: space-between;
  background-color: #f3f3f3;
  border-bottom: 1px solid inherit;
  padding-right: 32px;
  padding-left: 24px;
}
.right_list_item {
  display: flex;
  align-content: center;
  padding: 0 16px;
  height: 34px;
  width: 100%;
  line-height: 34px;
  border-bottom: 1px solid #f1f1f1;
  margin: 0 8px;
}
.right_list_item:hover span {
  color: #2d8cf0;
}
.right_list_item:hover div {
  color: #2d8cf0;
}
.right_list_item_container {
  height: 315px;
  margin-right: 8px;
}
.right_list_item_finance {
  width: 150px;
}
.right_list_item_round {
  width: 130px;
}
.left_footer_swiper_item_desc {
  color: #333;
}
.left_footer_swiper_item_desc:hover {
  color: #2d8cf0;
}
</style> 
