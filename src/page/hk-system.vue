<template>
    <div class="system-box">
        <ul class="system-box-list">
            <li class="system-box-list-item">
                <div class="system-box-list-item-container">
                    <ul class="system-box-list-item-reportList">
                        <li class="system-box-list-item-reportList-item" v-for="item in 5" :key="item">
                            <div class="system-box-list-item-reportList-item-wrapper">
                                <img src="@/images/file.png" class="system-box-list-item-reportList-item-img">
                                <h3 class="system-box-list-item-reportList-item-title">集团通讯录（202307）</h3>
                                <img src="@/images/arrowhead.png"
                                    class="system-box-list-item-reportList-item-img arrowheadImg">
                            </div>
                        </li>
                        <li class="li1" v-for="item in 10" :key="item"> </li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.system-box {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}

.system-box-list {
    /* border: black 1px solid ; */
}

.system-box-list-item {
    margin-bottom: 1rem;
}

.system-box-list-item-reportList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    padding: 0 4rem;
}

/* .system-box-list-item-reportList-item {
    margin-bottom: 2rem;
    border: #6C757D 2px solid;
    background-color: white;
    width: calc(50% - 1rem); /* 两个元素之间的间距为 1rem 
    max-width: 550px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.2s;
    border-radius: 5px;
    /* height: 100px; 
} */

.li1{
    width: 31.5%;
}

.system-box-list-item-reportList-item {
  width: calc(33% - 1rem); /* 两个元素之间的间距为 1rem */
  margin-bottom: 2rem;
}

.system-box-list-item-reportList-item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: #6C757D 2px solid;
  background-color: white;
  padding: 1rem;
  transition: 0.2s;
  border-radius: 5px;
  margin: 1rem;
}



.system-box-list-item-reportList-item-wrapper:first-child {
  margin-left: 0; /* 最左边的元素紧贴着父元素的边缘 */
}

.system-box-list-item-reportList-item-wrapper:last-child {
  margin-right: 0; /* 最右边的元素紧贴着父元素的边缘 */
}

.system-box-list-item-reportList-item-wrapper:hover {
  border: #0D6EFD 2px solid;
  background-color: #0d6dfd1f;
  transition: 0.2s;
  transform: scale(1.01);
}

.system-box-list-item-reportList-item-img {
    width: 15%;
    max-width: 4rem;
}

.system-box-list-item-reportList-item-title {
    display: inline;
    padding-left: 1rem;
    width: auto !important;
}

.system-box-list-item-yeraTitle {
    margin-bottom: 1rem;
}

.system-box-list-item-reportList-item-title {
    transition: 0.2s;
}

.arrowheadImg {
    float: right;
}

@media (max-width:980px) {
    .system-box {
        margin: 0;
    }

    .system-box-list-item-reportList {
        justify-content: space-between;
        padding: 0 1rem !important;
    }

    .system-box-list-item-reportList-item {
        width: 45%;
        max-width: 800px;
        margin-right: 0;
    }
}

@media (max-width:570px) {
    .system-box-list-item-reportList-item-title {
        font-size: 16px;
        transition: 0.2s;
    }

    .system-box-list-item-reportList-item {
        width: 100%;
        max-width: 800px;

    }
}
</style>