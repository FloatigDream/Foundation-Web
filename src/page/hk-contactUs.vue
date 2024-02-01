<template>
    <div class="contactUs-box">
        <div class="contactUs-box-mapBox container" id="contactUs-map">
            <div></div>
        </div>

        <ul class="contactUs-box-contactList container">
            <li class="contactUs-box-contactList-item">
                <div class="contactUs-box-contactList-item-top">
                    <img src="../images/icon/24gl-mailboxEmpty.png">
                </div>
                <h2 class="contactUs-box-contactList-item-title">邮箱</h2>
                <span class="contactUs-box-contactList-item-span">
                    hkjt@hkjt.cn
                </span>
            </li>
            <li class="contactUs-box-contactList-item">
                <div class="contactUs-box-contactList-item-top">
                    <img src="../images/icon/dianhua.png">
                </div>
                <h2 class="contactUs-box-contactList-item-title">电话</h2>
                <span class="contactUs-box-contactList-item-span">
                    0571-28060336
                </span>
            </li>
            <li class="contactUs-box-contactList-item">
                <div class="contactUs-box-contactList-item-top">
                    <img src="../images/icon/wodedizhi.png">
                </div>
                <h2 class="contactUs-box-contactList-item-title">地址</h2>
                <span class="contactUs-box-contactList-item-span">
                    浙江省杭州市拱墅区康桥街道康景路18号
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
import { shallowRef } from '@vue/reactivity';
export default {
    data(){
        return{
            zoom:18
        }
    },
    setup() {
        const map = shallowRef(null);
        return {
            map,
        };
    },
    methods: {
        initMap() {
            setTimeout(() => {
                AMapLoader.load({
                    key: "ecd021a78e29a2fe53bb3ff645894566", // 申请好的Web端开发者Key，首次调用 load 时必填
                    plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
                })
                    .then((AMap) => {
                        console.log(AMap.Map)
                        var map = new AMap.Map("contactUs-map", {
                            //设置地图容器id
                            zoom: this.zoom, //初始化地图级别
                            center: [120.159409, 30.37091], //初始化地图中心点位置
                            resizeEnable: true,
                            rotateEnable: true,
                            pitchEnable: true,
                            pitch: 0,
                            rotation: -15,
                            viewMode: "3D", //开启3D视图,默认为关闭
                            buildingAnimation: true, //楼块出现是否带动画
                            mapStyle: "amap://styles/fresh", //设置地图的显示样式
                            expandZoomRange: true,
                        });
                        // 创建一个 Marker 实例：
                        var marker = new AMap.Marker({
                            position: new AMap.LngLat(120.159283, 30.37098), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                            title: "浙江杭开公益基金会",
                        });

                        // 将创建的点标记添加到已有的地图实例：
                        map.add(marker);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }, 800);
        },
    },
    mounted() {
        this.initMap();
    }
}
</script>

<style scoped>
.contactUs-box {
    margin-top: 3rem;
}

.contactUs-box-mapBox {
    /* border: black 1px solid; */
    height: 30rem;
    /* margin: 3rem 0; */
    margin-bottom: 2rem;
}

.contactUs-box-contactList {
    /* border: black 1px solid; */
    padding: 2rem 9rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.contactUs-box-contactList-item {
    width: 200px;
    max-width: 33%;
    /* border: black 1px solid; */
}

.contactUs-box-contactList-item-title {
    text-align: center;
}

.contactUs-box-contactList-item-span {
    display: block;
    width: 100%;
    text-align: center;
    word-wrap: break-word;
    /* 兼容性较好的属性 */
}

@media (max-width:1220px) {
    .contactUs-box-contactList {
        padding: 2rem 3rem;
    }
}

@media (max-width:790px) {
    .contactUs-box-contactList {
        padding: 2rem 1rem;
    }
}

@media (max-width:770px) {
    .contactUs-box-contactList {
        flex-direction: column;
        align-items: center;
    }

    .contactUs-box-contactList-item {
        /* width: 200px; */
        max-width: 90%;
        /* border: black 1px solid; */
        margin-bottom: 3rem;
    }
}
</style>