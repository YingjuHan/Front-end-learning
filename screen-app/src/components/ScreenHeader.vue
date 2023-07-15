<template>
    <div class="home-title-box">
        <img src="imgs/bg/banner-bg.png" class="img"/>
    <div class="title">{{  }}</div>
    <span class="data-time">{{  }}</span>
    <span class="log-out iconfont icon-tuichu" title="退出登陆" @click="logout"></span>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from 'vue';

import { getCurDataTime } from "@/utils/date";

export default defineComponent({
    props: ["textTitle"],
    setup() {
        let dataTimeText = ref(getCurDataTime());
        let timer = setInterval(() => {
            dataTimeText.value = getCurDataTime();
        }, 1000);

        function logout() {};

        onBeforeUnmount(() => {
            if (timer) {
                clearInterval(timer);
            }
        });

        return {dataTimeText, logout};
    }
})
</script>
<style lang="scss" scoped>
.home-title-box {
    .title{
        font-family: "YSBTH";
        letter-spacing: 10px;
    }
}
</style>