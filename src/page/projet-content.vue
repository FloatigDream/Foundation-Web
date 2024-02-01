<template>
    <!-- <projectNav></projectNav> -->
    <div class="projetContentBox container">
        <div class="projetContentBox-topBox">
            <h2>
                项目简介
            </h2>

            <div class="projetContentBox-topBox-contentTextBox">
                <p>2020年3月21日，世界森林日当天，马云公益基金会决定在甘肃省敦煌市的荒漠化地区捐种100万棵梭梭树，实施公益造林类环保项目。</p>
                <p>
                    基金会希望公益林不仅可以为敦煌荒化地区生态环境带去保护和治理，同时，还可以调整和优化项目区的农业产业结构，推动项目区产
                    业化进程和农村经济发展，增加农民收入，加快乡村振兴的步伐，并保护人类艺术文化殿堂莫高窟、自然奇观鸣沙山月牙泉以及河西走
                    廊的生态安全。
                </p>
            </div>
        </div>

        <div class="projetContentBox-feekbackBox">
            <h2 class="projetContentBox-feekbackBox-title">
                项目反馈
            </h2>
            <ul class="projetContentBox-feekbackBox-list">
                <li class="projetContentBox-feekbackBox-list-item" v-for="item in 5" :key="item">
                    <div class="projetContentBox-feekbackBox-list-item-round">

                    </div>

                    <div class="projetContentBox-feekbackBox-list-item-contentBox">
                        <div class="projetContentBox-feekbackBox-list-item-contentBox-topBox">
                            <h3>
                                2023年12月4日项目进展
                            </h3>

                            <span>
                                2023-12-04
                            </span>
                        </div>

                        <div class="projetContentBox-feekbackBox-list-item-contentBox-contentBox">
                            2022年7月7日，由正泰公益基金会联合都市快报·快公益团队共同出品的《一“碳”究竟》手册正式发布。该手册旨在通过汇集
                            “双碳”知识的方式，引发公众及企业对气候、环境、人类活动的思考，进而吸引更多人参与到低碳环保行动中来。
                        </div>

                        <div class="projetContentBox-feekbackBox-list-item-contentBox-bottonBox">
                            <div class="image-gallery">
                                <div v-for="image in images" :key="image.id" class="image-wrapper">
                                    <div class="image" :style="{ backgroundImage: `url(${image.url})` }"
                                        @mouseover="zoomIn(image.id)" @click="showModal(image.id)"></div>
                                </div>
                                <div v-if="openModal" class="modal">
                                    <div class="modal-content">
                                        <span class="close" @click="closeModal">&times;</span>
                                        <img :src="getSelectedImage().url" alt="Selected Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import projectNav from '@/views/project/project-nav.vue'

export default {
    data() {
        return {
            pageTitle: '',
            images: [
                { id: 1, url: require('@/images/bg/11.jpg') },
                { id: 2, url: require('@/images/bg/banner.jpg') },
                { id: 3, url: require('@/images/bg/home-5.jpg') },
                // Add more images here
            ],
            selectedImageId: null,
            openModal: false,
        }
    },
    components: {
        projectNav
    },
    mounted() {
        this.pageTitle = this.$route.query.projectTitle
        // console.log(this.pageTitle)
    },
    methods: {
        zoomIn(imageId) {
            this.selectedImageId = imageId;
        },
        showModal(imageId) {
            this.selectedImageId = imageId;
            this.openModal = true;
        },
        closeModal() {
            this.selectedImageId = null;
            this.openModal = false;
        },
        getSelectedImage() {
            return this.images.find((image) => image.id === this.selectedImageId);
        },
    }
}
</script>

<style scoped>
.projetContentBox {
    margin-top: 80px;
}

.projetContentBox-topBox {
    /* margin:  2rem 0; */
    padding: 2rem 0;
}

.projetContentBox-topBox-contentTextBox {
    margin-top: 0.5rem;
}

.projetContentBox-feekbackBox {
    margin-bottom: 2rem;
}

.projetContentBox-feekbackBox-list-item-round {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    border: 5px solid #0D6EFD;
    position: relative;
    top: 0px;
    left: -18px;
    background-color: white;
    z-index: 100;
}

.projetContentBox-feekbackBox-title {
    margin-bottom: 1.5rem;
}

.projetContentBox-feekbackBox-list-item {
    border-left: 2px solid #6C757D;
    /* padding: 10rem 0; */
}

.projetContentBox-feekbackBox-list-item-contentBox {
    padding: 0.5rem 3rem;
}

.projetContentBox-feekbackBox-list-item-contentBox-topBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.projetContentBox-feekbackBox-list-item-contentBox-contentBox {
    text-indent: 2em;
    padding: 0 2rem;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
}

.image-wrapper {
  width: 160px;
  height: 100px;
  margin: 10px;
}

.image {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.3s;
}

.image:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999; /* 确保展示框在最上层 */
}

.modal-content {
  position: relative;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

@media (max-width:720px) {
    .projetContentBox-feekbackBox-list-item-contentBox{
        padding: 0.5rem 1rem;
    }
    
    .projetContentBox-feekbackBox-list-item-contentBox-topBox{
        flex-direction: column;
    }

    .projetContentBox-feekbackBox-list-item-contentBox-contentBox{
        padding: 0 1rem;
    }
}
</style>