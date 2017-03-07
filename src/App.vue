<template>
  <div id="app">
    <div id="wrapper">
      <nav class="navbar navbar-default">
        <div class="container">
          <a class="navbar-brand">
            <i class="glyphicon glyphicon-time"></i>
            计划表
          </a>
          <ul class="nav navbar-nav">
            <li>
              <router-link to='/home'>首页</router-link>
            </li>
            <li>
              <router-link to='/time-entries'>计划列表</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="col-sm-3">
          <sidebar :time="totalTime"></sidebar>
        </div>
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    name: 'app',
    components: {
      sidebar: Sidebar
    },
    data () {
      return {
        totalTime: 2
      }
    },
    methods: {
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
        console.log(this.totalTime)
      },
      timeUpdate (timeEntry) {
        console.log('app')
        this.totalTime += parseFloat(timeEntry.totalTime)
        console.log(this.totalTime)
      }
    },
    events: {
      timeUpdate (timeEntry) {
        this.totalTime += parseFloat(timeEntry.totalTime)
        console.log(this.totalTime)
      },
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
        console.log(this.totalTime)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
