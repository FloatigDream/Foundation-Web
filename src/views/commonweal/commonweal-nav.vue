<template>
    <div class="commonweal" :class="{ 'none': none == true }">
        <div class="commonweal-bannerBox">

        </div>

        <nav class="commonweal-Nav">
            <div class="commonweal-Nav-box">
                <ul class="commonweal-Nav-box-list">
                    <li class="commonweal-Nav-box-list-item" :class="{ 'is-Active-color': isActiveColor == 1 }">
                        <span class="commonweal-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == 1 }"
                            @click="changeColor('基金会介绍')">
                            基金会介绍
                        </span>
                    </li>
                    <li class="commonweal-Nav-box-list-item" :class="{ 'is-Active-color': isActiveColor == 2 }">
                        <span class="commonweal-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == 2 }"
                            @click="changeColor('年报审计')">
                            年报审计
                        </span>
                    </li>
                    <li class="commonweal-Nav-box-list-item" :class="{ 'is-Active-color': isActiveColor == 3 }">
                        <span class="commonweal-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == 3 }"
                            @click="changeColor('章程制度')">
                            章程制度
                        </span>

                    </li>
                    <li class="commonweal-Nav-box-list-item" :class="{ 'is-Active-color': isActiveColor == 4 }">
                        <span class="commonweal-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == 4 }"
                            @click="changeColor('评估报告')">
                            评估报告
                        </span>

                    </li>
                    <li class="commonweal-Nav-box-list-item" :class="{ 'is-Active-color': isActiveColor == 5 }">
                        <span class="commonweal-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == 5 }"
                            @click="changeColor('联系我们')">
                            联系我们
                        </span>

                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

</script>

<style scoped>
.commonweal {
    display: block;
}

.commonweal-bannerBox {
    width: 100%;
    height: 576.75px;
    /* border: black 1px solid; */
    margin-top: 80px;
    background: url('@/images/bg/hand-4661763.jpg') no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: 35%;
}

.none {
    display: none;
}

.commonweal-Nav-box {
    width: 100%;
    display: grid;
    overflow: auto;
    /* justify-content: center;
	align-items: center; */
}

.commonweal-Nav-box-list {
    /* width: 80%; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto 0 auto;
    padding-bottom: 10px;
}

.commonweal-Nav-box-list-item {
    float: left;
    display: block;
    padding-bottom: 1rem;
    border-bottom: #23232321 3px solid;
    transition: 0.2s;
    /* border-bottom: #232323 2px solid; */
}

.commonweal-Nav-box-list-item:hover {
    transition: 0.2s;
}

.is-Active-color {
    border-bottom: #0D6EFD 3px solid;
}

.is-Active-color2 {
    background-color: #0D6EFD !important;
    color: white !important;
}

.commonweal-Nav-box-list-item-span {
    cursor: pointer;
    display: block;
    font-size: 18px;
    color: #232323;
    width: 176px;
    text-align: center;
    background-color: #23232321;
    padding: 1rem 0;
    border-radius: 5px;
    margin: 0 1rem;
    transition: 0.2s;
}

.commonweal-Nav-box-list-item-span:hover {
    transition: 0.2s;
}

@media (max-width:1075px) {
    .commonweal-Nav-box-list-item-span {
        width: 120px;
        font-size: 16px;
        padding: 0.7rem 0;
    }
}

@media (max-width:750px) {
    .commonweal-Nav-box-list-item-span {
        width: 100px;
        font-size: 16px;
        padding: 0.5rem 0;
        margin: 0 0.5rem;
    }
}

@media (max-width:592px) {
    .commonweal-Nav-box-list-item-span {
        width: 90px;
        font-size: 12px;
        padding: 0.2rem 0;
        margin: 0 0.5rem;
    }
}
</style>