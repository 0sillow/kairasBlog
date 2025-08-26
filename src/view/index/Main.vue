<script setup></script>
<template>
<div class="background-image">
<div class="introduction">
    <span>你好,我是</span>
    <span>Kairas</span>
    <span>中文网名是倾墨</span>
    <span>一个热爱编程又流连于文学之美的大学生</span>
    <span>喜欢与人打交道，喜欢音乐，想要钻研编程技术</span>
    <span>想在数字的海洋中留下我途经的一抹痕迹</span>
    <span>欢迎来到我的个人博客</span>
</div>
<div class="myCard">

</div>
</div>
</template>
<style scoped>
.background-image {
    /* 使用本地图片作为背景 */
    background-image: url('../../assets/日暮.jpg');
    /* 确保背景图片覆盖整个容器 */
    background-size: cover;
    /* 使背景图片在容器中居中显示 */
    background-position: center;
    /* 设置容器的宽度和高度 */
    width: 100%;
    height: 100vh; /* 视口高度 */
    display: flex;
    justify-content: center;
    align-items: center;
}
.introduction {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.6); /* 半透明白色背景 */
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    color: #333;
}
</style>