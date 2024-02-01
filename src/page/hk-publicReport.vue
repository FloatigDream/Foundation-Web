<template>
    <div class="publicReport-box">
        <ul class="publicReport-box-list container">
            <li class="publicReport-box-list-item" v-for="item in yaraNum" :key="item">
                <h2 class="publicReport-box-list-item-yeraTitle">{{ item }}年</h2>
                <ul class="publicReport-box-list-item-reportList">
                    <li class="publicReport-box-list-item-reportList-item" v-for="item in 5" :key="item">
                        <img src="@/images/file.png" class="publicReport-box-list-item-reportList-item-img">
                        <h3 class="publicReport-box-list-item-reportList-item-title">集团通讯录（202307）</h3>
                        <img src="@/images/arrowhead.png"
                            class="publicReport-box-list-item-reportList-item-img arrowheadImg">
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            yaraNum: [2023, 2022, 2021, 2020]
        }
    }
}
</script>

<style scoped>
.publicReport-box {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}

.publicReport-box-list {
    /* border: black 1px solid ; */
}

.publicReport-box-list-item {
    margin-bottom: 1rem;
}

.publicReport-box-list-item-reportList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 4rem;
}

.publicReport-box-list-item-reportList-item {
    margin-bottom: 2rem;
    border: #6C757D 2px solid;
    background-color: white;
    width: 48%;
    max-width: 550px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.2s;
    border-radius: 5px;
    /* height: 100px; */
}

.publicReport-box-list-item-reportList-item:hover {
    border: #0D6EFD 2px solid;
    background-color: #0d6dfd1f;
    transition: 0.2s;
    transform: scale(1.01);
}

.publicReport-box-list-item-reportList-item-img {
    width: 15%;
    max-width: 4rem;
}

.publicReport-box-list-item-reportList-item-title {
    display: inline;
    padding-left: 1rem;
    width: auto !important;
}

.publicReport-box-list-item-yeraTitle {
    margin-bottom: 1rem;
}

.publicReport-box-list-item-reportList-item-title {
    transition: 0.2s;
}

.arrowheadImg {
    float: right;
}

@media (max-width:810px) {
    .publicReport-box {
        margin: 0;
    }

    .publicReport-box-list-item-reportList {
        padding: 0 1rem;
    }

    .publicReport-box-list-item-reportList-item {
        width: 100%;
        max-width: 800px;

    }
}

@media (max-width:480px) {
    .publicReport-box-list-item-reportList-item-title {
        font-size: 16px;
        transition: 0.2s;
    }
}
</style>