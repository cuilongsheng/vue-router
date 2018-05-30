<template>
    <div class="reg">
        <h3>{{msg}}</h3>
        <p>我的id:{{$route.params.newsId}}</p>
        <p>我的title:{{$route.params.newsTitle}}</p>
    </div>
</template>
<script>
export default {
    name: 'paramsReg',
    data(){
        return {
            msg: 'params-reg page'
        }
    }
}
</script>
