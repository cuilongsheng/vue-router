<template>
    <div class="programNav">
        <h1>{{title}}</h1>
        <button @click="goback">后退</button>
        <button @click="goforward">前进</button>
        <button @click="goHome">回到首页</button>
    </div>
</template>
<script>
export default {
    name: 'programNav',
    data(){
        return {
            title: '编程式导航'
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        goforward(){
            this.$router.go(1);
        },
        goHome(){
            this.$router.push('/');
        }
    }
}
</script>
