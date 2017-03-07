<template>
  <div>
    <button v-if="$route.path !== '/time-entries/log-time'"
            class="btn btn-primary">
      <router-link tag="div" to="/time-entries/log-time" replace>
        创建
      </router-link>
    </button>
    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>创建</h3>
    </div>
    <hr>
    <router-view v-on:timeUpdate="timeUpdate"></router-view>
    <!--下级视图-->
    <div class="time-entries">
      <p v-if="!timeEntries.length"><strong>还没有任何任务</strong></p>
      <div class="list-group">
        <!--v-for渲染-->
        <a class="list-group-item" v-for="timeEntry in timeEntries">
          <div class="row">
            <div class="col-sm-2 user-details">
              <!--//`:src`属性，这个是vue的属性绑定简写`v-bind`可以缩写为`:`-->
              <!--// 比如a标签的`href`可以写为`:href`-->
              <!--//并且在vue的指令里就一定不要写插值表达式了(`:src={{xx}}`)，vue自己会去解析-->
              <img :src="timeEntry.user.image" class="avatar img-circle img-responsive"/>
              <p class="text-center">
                <strong>
                  {{ timeEntry.user.name }}
                </strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ timeEntry.totalTime }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ timeEntry.date }}
              </p>
            </div>

            <div class="col-sm-7 comment-section">
              <p>{{ timeEntry.comment }}</p>
            </div>

            <div class="col-sm-1">
              <!--//事件绑定简写 @xxx-->
              <button class="btn btn-xs btn-danger delete-button" @click="deleteTimeEntry(timeEntry)">
                X
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      // 事先模拟一个数据
      let existingEntry = {
        user: {
          name: '王',
          email: 'kodo@forchange.cn',
          image: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
        },
        comment: '我的一个备注',
        totalTime: 1.5,
        date: '2016-05-01'
      }
//      let existingEntry = {}

      return {
        timeEntries: [existingEntry]
      }
    },
    methods: {
      deleteTimeEntry (timeEntry) {
        // 这个方法用于删除某一项计划
        let index = this.timeEntries.indexOf(timeEntry)

        if (window.confirm('确定要删除吗?')) {
          this.timeEntries.splice(index, 1)
          // 这里会派发到父组件上，执行父组件events里的deleteTime方法
          this.$emit('deleteTime', timeEntry)
        }
      },
      timeUpdate (timeEntry) {
        this.timeEntries.push(timeEntry)
        // 继续触发上一级的
        this.$emit('timeUpdate', timeEntry)
      }
    },
    events: {
      timeUpdate (timeEntry) {
        this.timeEntries.push(timeEntry)
        // 继续向上派发
        return true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }

  .time-block {
    padding: 10px;
  }

  .comment-section {
    padding: 20px;
  }
</style>
