<template>
    <div class="home-content">
        <div class="home-head-fixed">
            <div class="home-head-search">
                <div class="home-head-search-left">
                    <span>北京市</span>
                </div>
                <div class="home-head-search-mid">
                    <img src="../images/search.png" alt />
                    <span class="home-head-search-input">
                        <span>爆品每满500减40</span>
                    </span>
                </div>
                <div class="home-head-search-right">
                    <span>登录</span>
                </div>
            </div>
            <div class="home-head-select">
                <div class="home-head-select-left">
                    <a href="#">
                        <span style="borderBottom:2px solid #cc0e11;color:#cc0e11">推荐</span>
                    </a>
                    <a href="https://msale.vmall.com/huaweizone.html">华为专区</a>
                    <a href="https://msale.vmall.com/honor.html">荣耀专区</a>
                    <a href="https://msale.vmall.com/pseries.html">P40 系列</a>
                    <a href="https://msale.vmall.com/smarthome2020.html">安心家具</a>
                    <a href="https://msale.vmall.com/ptpd.html">拼团</a>
                </div>
                <div class="hidden-box1" v-show="showbox">
                    <span>全部</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.home-content{
    height: 100%;
    width: 100%;
    overflow-y: auto;
    position: relative;
    }
</style>