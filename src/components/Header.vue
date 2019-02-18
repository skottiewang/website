<template>
  <div class="header">
    <div class="container">
      <div class="header_logo">
        <img src="../assets/logo.png">
        <span class="header_description">{{ logoDes }}</span>
      </div>
      <div class="header_menu">
        <div v-for="(item, index) in menuItems" 
             :key="index" 
             class="menu_font">
          <a class="font_label">
            {{ item.label }}
          </a>
          <Icon :type="item.icon"/>
        </div>
        
        <div class="search_bar">
          <Input size="large" search enter-button>
          <Select v-model="selectOne" slot="prepend" style="width: 80px">
            <Option value="findmoney">找资金</Option>
            <Option value="https">找项目</Option>
            <Option value="https">找文章</Option>
          </Select>
          </Input>

          <div class="hot-search">
            <span class="hot-search-font">{{ hotSearch }}</span>
            <a v-for="(item, index) in searchItems" 
               :key="index"
               class="search-items">
              {{ item.label }}
          </a></div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    data () {
      return {
        hotSearch: '热门搜索：',
        selectOne: 'findmoney',
        logoDes: '专业的融资信息服务平台',
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
    }
  }
</script>

<style scoped>
.header {
  background-color: #ffffff;
}
.container {
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.menu_font {
  margin-left: 30px;
  font-size: 16px;
  font-weight: bold;
}
.font_label {
  color: #222;
}
.search_bar {
  margin-left:30px;
  width: 286px;
}
.search-items {
  margin-right: 8px;
  font-size: 12px;
  color: #999;
  line-height: 24px;
}
.hot-search {
  width: 300px;
  text-overflow: ellipsis;
  padding-top: 6px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
}
.hot-search-font {
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
</style>
