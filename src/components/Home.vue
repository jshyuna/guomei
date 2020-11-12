<template>
<div class="page-container">
    <div class="top-search-wrap">
        <a class="top-location">
            <span>北京市</span>
        </a>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style>
.page-container{
    min-height: 100vh;
    background-color: #f2f2f2;
    padding-bottom: 1.44rem;
}
.top-search-wrap{
    z-index: 10;
    width: 100%;
    height: 1.17333rem;
    background-color: #f20c59;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.top-location{
    background-image: url(../images/local.png);
}
</style>