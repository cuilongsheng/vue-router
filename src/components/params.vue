<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
        <button @click="goforward">前进</button>
    </div>
</template>

<script>
export default {
  name: "params",
  data() {
    return {
      msg: "params page"
    };
  },
  methods:{
        goforward(){
            this.$router.go(1);
        }
    },
  beforeRouteEnter: (to, from, next) => {
    console.log("准备进入路由模板");
    console.log(to);
    console.log(from);
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    console.log(to);
    console.log(from);
    next();
  }
};
</script>