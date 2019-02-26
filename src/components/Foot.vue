<template>
  <div class="foot_container">
    <div class="white_foot">
      <div class="white_foot_wrap">
        <span class="white_foot_friendlink">{{ link }}</span>

        <div class="white_foot_linkgroup">
          <div class="white_foot_linkgroup_firstrow">
            <a>{{ financing }}</a>
            <a>{{ taogu }}</a>
            <a>{{ baidu }}</a>
            <a>{{ lianjia }}</a>
            <a>{{ brandItem }}</a>
            <a>{{ searchGood }}</a>
            <a>{{ angelInvestment }}</a>
            <a>{{ franchising }}</a>
            <a>{{ silverPrice }}</a>
            <a>{{ stock }}</a>
            <a>{{ stockInvestor }}</a>
          </div>
          <div class="white_foot_linkgroup_secondrow"
               v-if="!linkState">
            <a>投融百科</a>
            <a>PPmoney网贷</a>
            <a>房产信息网</a>
            <a>中投顾问</a>
            <a>牛仔网</a>
            <a>第一纸白银</a>
            <a>财经资讯</a>
            <a>投资创业</a>
            <a>新一站保险网</a>
            <a>酷基金网</a>
            <a>北京贝壳房产</a>
          </div>
          <div v-if="!linkState">
            <a>开店找项目</a>
            <a class="white_foot_linkgroup_morelink">更多友情链接</a>
          </div>
        </div>

        <div class="white_foot_button" @click="btnClick">
          <a v-if="!linkState">{{ close }}</a>
          <Icon v-if="!linkState" type="ios-arrow-up"/>
          <a v-if="linkState">{{ open }}</a>
          <Icon v-if="linkState" type="ios-arrow-down"/>
        </div>

      </div>
    </div>

    <div class="black_foot">
      <div class="black_foot_wrap">
        <div class="black_foot_wrap_firstrow">
          <div v-for="(item, index) in seviceGroup"
               :key="index"
               class="black_foot_wrap_firstrow_item">
            <Icon :type="item.icon" color="#fff" size="54" class="black_foot_wrap_firstrow_icon"/>
            <div>
              <div class="black_foot_wrap_firstrow_title">{{ item.title }}</div>
              <div class="black_foot_wrap_firstrow_desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
        <div class="black_foot_wrap_secondrow">
          <div class="black_foot_wrap_secondrow_firstitem">
            <div class="black_foot_wrap_secondrow_center">
              <img src="https://www.trjcn.com/assets/src/images/v6/copyright_logo.png">
            </div>
            <div class="black_foot_wrap_secondrow_center">
              <img src="https://www.trjcn.com/assets/src/images/v6/temp/wechat-qrcode.jpg">
            </div>
            <div class="black_foot_wrap_secondrow_title">扫二维码，加关注</div>
          </div>
          <div>
            <div class="black_foot_wrap_secondrow_title">平台保障</div>
            <div class="black_foot_wrap_secondrow_desc">会员身份实名认证</div>
            <div class="black_foot_wrap_secondrow_desc">举报投诉违规处罚</div>
          </div>
          <div>
            <div class="black_foot_wrap_secondrow_title">新手指导</div>
            <div class="black_foot_wrap_secondrow_desc">免费注册生成名片</div>
            <div class="black_foot_wrap_secondrow_desc">免费发布投融信息</div>
            <div class="black_foot_wrap_secondrow_desc">常见问题解答</div>
          </div>
          <div>
            <div class="black_foot_wrap_secondrow_title">投融服务</div>
            <div class="black_foot_wrap_secondrow_desc">信息通</div>
            <div class="black_foot_wrap_secondrow_desc">委托刷新</div>
            <div class="black_foot_wrap_secondrow_desc">投递项目</div>
          </div>
          <div>
            <div class="black_foot_wrap_secondrow_title">关于投融界</div>
            <div class="black_foot_wrap_secondrow_desc">投融界荣誉</div>
            <div class="black_foot_wrap_secondrow_desc">联系我们</div>
            <div class="black_foot_wrap_secondrow_desc">网站公告</div>
            <div class="black_foot_wrap_secondrow_desc">隐私条款</div>
            <div class="black_foot_wrap_secondrow_desc">网站地图</div>
          </div>
        </div>
        <div class="black_foot_wrap_thirdrow"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        seviceGroup: [
          {
            icon: 'md-phone-portrait',
            title: '400-858-9000',
            desc: '免费服务热线',
          },
          {
            icon: 'md-mail',
            title: 'kefu@trjcn.com',
            desc: '邮箱',
          },
          {
            icon: 'ios-clock',
            title: '09:00-20:00',
            desc: '服务时间',
          },
          {
            icon: 'ios-call',
            title: '0571-5613500',
            desc: '投诉电话',
          }
        ],
        close: '收起',
        open: '展开',
        link: '友情链接：',
        financing: '融资资讯',
        taogu: '淘股吧',
        baidu: '百度金融',
        lianjia: '北京链家',
        brandItem: '品牌排行榜',
        searchGood: '搜好货网',
        angelInvestment: '天使投资',
        franchising: '加盟项目排行榜',
        silverPrice: '白银价格',
        stock: '股城股票',
        stockInvestor: '股权投资',
        linkState: true,
      }
    },
    methods: {
      btnClick () {
        this.linkState = !this.linkState
      }
    }
  }
</script>

<style>
.white_foot {
  width: 100%;
  background-color: #fff;
  padding: 20px 0;
}
.white_foot_wrap {
  width: 1200px;
  min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  position: relative;
}
.black_foot {
  height: 422px;
  background-color: #21242c;
}
.foot_container {
  margin-top: 40px;
}
.white_foot_button {
  position: absolute;
  right: 0px;
}
.white_foot_linkgroup {
  width: 980px;
  margin-left: 16px;
}
.white_foot_linkgroup_firstrow {
  display: flex;
  justify-content: space-between
}
.white_foot_linkgroup_secondrow {
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
}
.white_foot_linkgroup_morelink {
  margin-left: 12px;
}
.white_foot_friendlink {
  font-size: 14px;
  color: #999;
}
.white_foot_linkgroup a {
  color: #666;
  font-size: 14px;
}
.white_foot_linkgroup a:hover {
  color: #2d8cf0;
}
.white_foot_button a {
  color: #666;
  font-size: 14px;
}
.white_foot_button a:hover {
  color: #2d8cf0;
}
.black_foot_wrap {
  width: 1200px;
  min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.black_foot_wrap_firstrow {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #35393b;
  padding: 24px 0;
}
.black_foot_wrap_firstrow_title {
  font-size: 18px;
  color: #fff;
  line-height: 30px;
}
.black_foot_wrap_firstrow_item {
  display: flex;
}
.black_foot_wrap_firstrow_desc {
  font-size: 16px;
  line-height: 24px;
  color: #909090;
}
.black_foot_wrap_firstrow_icon {
  margin-right: 16px;
}
.black_foot_wrap_secondrow_title {
  font-size: 18px;
  color: #fff;
}
.black_foot_wrap_secondrow {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
.black_foot_wrap_secondrow_desc {
  font-size: 14px;
  color: #909090;
  margin-top: 8px;
}
.black_foot_wrap_secondrow_firstitem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.black_foot_wrap_secondrow_center {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}
</style>


