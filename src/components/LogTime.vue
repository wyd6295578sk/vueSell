<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input
        type="date"
        class="form-control"
        v-model="timeEntry.date"
        placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input
        type="number"
        class="form-control"
        v-model="timeEntry.totalTime"
        placeholder="Hours"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input
        type="text"
        class="form-control"
        v-model="timeEntry.comment"
        placeholder="Comment"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link tag="div" to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
    <router-view></router-view>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        // 模拟一个默认值
        timeEntry: {
          user: {
            name: '王',
            email: 'kodo@forchange.cn',
            image: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
          }
        }
      }
    },
    methods: {
      save () {
        let timeEntry = this.timeEntry
        this.$emit('timeUpdate', timeEntry)
//        this.timeEntry = {}
        this.timeEntry = {
          user: '王',
          email: 'kodo@forchange.cn',
          image: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">

</style>
