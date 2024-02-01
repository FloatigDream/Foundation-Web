<template>
    <div class="overview-box">
        <div class="overview-box-introduce">
            <h2>基金会介绍</h2>
            <div class="overview-box-introduce-content container">
                <p>
                    浙江杭开公益基金会是一家致力于构建和谐社会、推动中国素质成长的民营企业。我们以“为构建和谐社会而努力奋斗”为使命，
                    积极参与社会公益事业，广纳贤才，铸造中国新兴力量的城市精英，齐心协力为社会创造一个丰盛和谐的人文环境。
                    作为一家公益基金会，浙江杭开公益基金会的主要业务范围涵盖以下几个方面：
                </p>

                <p>
                    一、融入城乡社区治理，开展扶贫济困的救助活动。我们关注城乡贫困人群，通过提供物资、资金等形式的援助，帮助他们改善生活条件，
                    实现脱贫致富。
                </p>

                <p>
                    二、关注乡村贫困人群就医、特困学生求学，筹措物资、资金进行救助。我们重视乡村地区的教育和医疗资源不足问题，通过捐赠物资、
                    提供资金支持等方式，帮助特困学生顺利完成学业，为乡村贫困人群提供医疗援助。
                </p>

                <p>
                    三、聚焦老年群体、残障人士、孤寡人员等弱势群体，做好相关救助活动。我们关心社会弱势群体的生活状况，通过组织志愿者活动、提
                    供物资援助等方式，关爱老年人、帮助残障人士融入社会，陪伴孤寡人员度过孤独的时光。
                </p>

                <p>
                    四、救助自然灾害、事故灾害及突发事件造成的伤害。我们关注社会安全和灾害救助工作，积极参与自然灾害、事故灾害以及突发事件的救
                    援和救助工作，为受灾群体提供紧急救助和后续帮助。
                </p>

                <p>
                    浙江杭开公益基金会始终秉持公正、透明、高效的原则，注重与社会各界的合作与交流，力求发挥我们的专业优势和资源优势，为社会公益事业
                    贡献一份力量。我们诚邀社会各界的支持和参与，共同为构建和谐社会、推动中国素质成长而努力奋斗！
                </p>
            </div>
        </div>

        <div class="overview-box-messageBox">
            <h2 class="overview-box-messageBox-title">理事会成员</h2>

            <div class="overview-box-messageBox-contentBox container">
                <p class="overview-box-messageBox-contentBox-text">基金会目前有8名理事和1名监事。</p>
                <p class="overview-box-messageBox-contentBox-text">理事会成员：XXX,XXX,XXX,XXX,XXX,XXX,XXX,XXX</p>
                <p class="overview-box-messageBox-contentBox-text">基金会监事：XXX</p>
            </div>

            <h2 class="overview-box-messageBox-title">执行秘书长</h2>
            <p class="overview-box-messageBox-contentBox-text container">
                于秀红，工商管理硕士，国际商务师。阿里巴巴公益基金会理事、杭州云谷教育基金会理事。
                20年公益从业经历，曾任职国际救援组织、企业商务主管及北京企业家环保基金会/阿拉善SE
                E生态协会运营总监、北京光华慈善基金会理事、秘书长、香港光华慈善基金会总干事等职务。
            </p>
        </div>

        <div class="overview-box-schemaBox">
            <h2>组织架构</h2>
            <div class="overview-box-schemaBox-imgBox container">
                <img src="@/images/基金会架构图.png">
            </div>
        </div>

    </div>
</template>

<script>

</script>

<style scoped>
.overview-box {
    margin-top: 55px;
}

.overview-box-introduce,
.overview-box-schemaBox,
.overview-box-messageBox {
    width: 100%;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.overview-box-introduce-content {
    /* width: 50%; */
    margin-top: 1rem;
    transition: 0.5s;
}

.overview-box-introduce-content>p {
    text-indent: 4ch;
    margin: 0.4rem 0;
    letter-spacing: 2px;
}

.overview-box-messageBox-contentBox {
    margin-bottom: 2rem;
}

.overview-box-messageBox-contentBox-text {
    font-size: 18px;
    word-wrap: break-word;
}

.overview-box-schemaBox-imgBox {
    text-align: center;
}

img {
    max-width: 80% !important;
}
</style>