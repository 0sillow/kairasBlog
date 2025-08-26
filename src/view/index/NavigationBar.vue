<template>
<div class="nav">
<span class="signature">Kairas</span>
<div class="nav-item">
<span>相册</span>
<span>历程</span>
<span>文案</span>
<span>随笔</span>
</div>
<div class="nav-actions">
<span>hub</span>
<span>搜素</span>
<span>模式</span>
<span>登录</span>
</div>
</div>
</template>
<script setup></script>
<style scoped>
.nav{
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    background-color: transparent;
    width: calc(100% - 300px);
    padding:0 150px 0 150px;
}
.nav .nav-item{
    flex: 0,1;
    width: 30%;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left:5%;
}
.nav .signature{
    font-family:"Brush Script MT", cursive;
    font-size: 50px;
    cursor: pointer;
}
.nav .nav-actions{
    flex: 0,1;
    justify-content: center;
    align-items: center;
    display: flex;
}
.nav span{
    color:rgb(30, 157, 196);
}
.nav .nav-item span{
    font-family: 'Courier New', Courier, monospace;
    margin: 0 15px 0 15px;
    cursor: pointer;
}
.nav .nav-actions span{
    font-family: 'Courier New', Courier, monospace;
    margin: 0 15px 0 15px;
    cursor: pointer;
}
</style>