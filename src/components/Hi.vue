<template>
    <div class="hi">
        <h1>{{message}}</h1> 
        {{$route.params.isOk}}
    </div>
</template>
<script>
export default {
  name: "hi",
  data() {
    return {
      message: "我是hi"
    };
  }
};
</script>
<style scoped>

</style>
