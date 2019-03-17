<template>
  <Affix class="header_wrap">
    <div class="header_container" ref="headBox">
      <div class="header_container_inside">
        <div class="header_logo">
          <img src="../assets/logo.png">
          <span class="header_description">{{ logoDes }}</span>
        </div>

        <div class="header_menu">
          <div class="header_menu_item">
            <a class="font_label">首页</a>
          </div>

          <div class="header_menu_item"
               @mouseenter="mouseEnterFoundA"
               @mouseleave="mouseLeaveFoundA">
            <a class="font_label">找资金</a>
            <Icon type="md-arrow-dropdown"/>
            <FoundModal v-show="isFoundShow"
                        @handl-enter="mouseEnterFoundM"
                        @handl-leave="mouseLeaveFoundM"
                        class="header_found_modal"
                        ref="foundModal"/>
          </div>

          <div class="header_menu_item">
            <a class="font_label">选项目</a>
            <Icon type="md-arrow-dropdown"/>
          </div>
          <div class="header_menu_item">
            <a class="font_label">融资活动</a>
          </div>
          <div class="header_menu_item">
            <a class="font_label">商业计划书</a>
          </div>
          <div class="header_menu_item">
            <a class="font_label">成功案例</a>
          </div>
        
          <div class="search_bar">
            <Input size="large" search enter-button :placeholder="placeholder">
            <Select v-model="selectOne" slot="prepend" style="width: 80px">
              <Option v-for="(item, index) in optionGroup"
                      :key="index"
                      value="optionValue">{{ item.label }}</Option>
            </Select>
            </Input>

            <div class="head_hot_search">
              <span class="head_hot_search_font">{{ hotSearch }}</span>
              <a v-for="(item, index) in searchItems" 
                 :key="index"
                 class="head_hot_search_items">
                {{ item.label }}
              </a>
            </div>
            
          </div>

        </div>
      </div>
    </div>

    
  </Affix>
</template>
<script>
  import FoundModal from '@/components/FoundModal'
  import ProjectModal from '@/components/ProjectModal'
  export default {
    name: 'Header',
    components: {
      FoundModal,
      ProjectModal
    },
    data () {
      return {
        wrapCls: this.isScroll ? 'header_container_scroll' : 'header_contaienr',
        isScroll: false,
        isFoundShowA: false,
        isFoundShowM: false,
        hotSearch: '热门搜索：',
        selectOne: 'findmoney',
        logoDes: '专业的融资信息服务平台',
        placeholder: '输入关键字',
        optionGroup: [
          {
            optionValue: 'findmoney',
            label: '找资金'
          },
          {
            optionValue: 'https',
            label: '找项目'
          },
          {
            optionValue: 'https',
            label: '找文章'
          }
        ],
        searchItems: [
          {
            label: '投资创业',
            url: ''
          },
          {
            label: '企业融资',
            url: ''
          },
          {
            label: '个人投资',
            url: ''
          },
          {
            label: '互联网投资',
            url: ''
          },
        ],
        menuItems: [
          {
            label: '首页',
            key: 'home',
            icon: ''
          },
          {
            label: '找资金',
            key: 'money',
            icon: 'md-arrow-dropdown'
          },
          {
            label: '选项目',
            key: 'project',
            icon: 'md-arrow-dropdown'
          },
          {
            label: '融资活动',
            key: 'financing',
            icon: ''
          },
          {
            label: '商业计划书',
            key: 'bp',
            icon: ''
          },
          {
            label: '成功案例',
            key: 'case',
            icon: ''
          },
        ],
        msgs: ['注册', '新手指导', '投融服务', '手机投融界']
      }
    },
    computed: {
      isFoundShow () {
        return this.isFoundShowA || this.isFoundShowM
      }
    },
    methods: {
      mouseEnterFoundA () {
        this.$refs.foundModal.$emit('animation')  //通知子组件执行出现动画
        this.isFoundShowA = true
      },
      mouseLeaveFoundA () {
        this.isFoundShowA = false
      },
      mouseEnterFoundM () {
        // console.log('EnterM')
        this.isFoundShowM = true
      },
      mouseLeaveFoundM () {
        // console.log('LeaveM')
        this.isFoundShowM = false
      },
      handleScroll () {
        console.log('scrollTop', scrollTop)
      }
    },
    mounted () {
      this.box = this.$refs.headBox
      this.box.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>
.header_wrap {
  z-index: 300;
  background-color: #ffffff;
  position: relative;
}
.header_container {
  background-color: #ffffff;
  position: relative;
}
.header_container_inside {
  height: 94px;
  width: 1200px;
  min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_description {
  border-left: 1px solid #d2d2d2;
  padding-left: 8px;
  color: #666666;
  font-size: 14px;
  margin-left:6px;
}
.header_logo {
  display: flex;
  align-items: center;
}
.header_menu {
  width: 893px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.header_menu_item {
  margin-left: 30px;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.font_label {
  color: #222;
}
.font_label:hover {
  color: #2d8cf0;
}
.search_bar {
  margin-left:30px;
  width: 286px;
}
.head_hot_search_items {
  margin-right: 8px;
  font-size: 12px;
  color: #999;
  line-height: 24px;
}
.head_hot_search {
  width: 300px;
  text-overflow: ellipsis;
  padding-top: 6px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
}
.head_hot_search_font {
  color: #000;
}
.top_nav {
  line-height: 14;
  margin-top: 10px;
  border-right: 1px solid #cccccc;
  display: none;
}
.right_bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.left_bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.bar_msgs {
  line-height: 14px;
  padding: 0 8px;
  border-left: 1px solid #cccccc;
}
.login {
  padding: 0 8px;
  display: flex;
  align-items: center;
}
.btn {
  background-color: #b90c0e;
}
/* .header_found_modal {
  position: absolute;
  top: 90px;
  left: 0px;
  z-index: 999;
  transition:  all 2s;
} */
</style>
