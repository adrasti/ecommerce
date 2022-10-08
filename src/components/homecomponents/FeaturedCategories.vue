<template>
    <div class="container featured-categories-container">
        <div class="row">
            <div class="col">
                <div class="featured-categories">
                        <div class="featured-category">
                            <div class="featured-category-thumb">
                                <router-link to="/keyboards"><img class="img-fluid" loading="lazy" src="../../assets/k1.png" alt="Gaming"></router-link>
                            </div>
                            <div class="featured-category-content">
                                <router-link to="/keyboards">
                                    <div class="content-title">
                                        Клавиатуры
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="featured-category">
                            <div class="featured-category-thumb">
                                <router-link to="/mice"><img class="img-fluid" loading="lazy" src="../../assets/m1.png" alt="Gaming"></router-link>
                            </div>
                            <div class="featured-category-content">
                                <router-link to="/mice">
                                    <div class="content-title">
                                        Мыши
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="featured-category">
                            <div class="featured-category-thumb">
                                <router-link to="/headphones"><img class="img-fluid" loading="lazy" src="../../assets/h1.png" alt="Gaming"></router-link>
                            </div>
                            <div class="featured-category-content">
                                <router-link to="/headphones">
                                    <div class="content-title">
                                        Наушники
                                    </div>
                                </router-link>
                            </div>
                        </div>
                </div>
                    
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  setup() {

  },
});
</script>

<style lang="scss">

.featured-categories-container{
    margin-top:8rem;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}

.featured-categories{
        margin-top: 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
}

.featured-category {
    -webkit-transition: border .3s ease;
    transition: border .3s ease;
    background: #fff;
    padding-top: 105px;
    position: relative;
    width: 100%;
    border-right: 1px solid #e4e4e4;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    margin-bottom: 150px;
}

.featured-category-thumb{
        position: absolute;
    bottom: 50px;
    left: 50%;
    width: 80%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    text-align: center;
}

.featured-category-content{
    position: relative;
    height: 33px;
    margin-bottom: 20px;
}

.content-title{
    border: none;
    background: none;
    width: 100%;
    font-weight: 500;
    font-size: 21px;
    color: inherit;
    text-align: center;
    font-family: Tahoma,Century Gothic,CenturyGothic,AppleGothic,sans-serif;
}

.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
}

@media (max-width: 1200px){
    .featured-categories {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
}
@media (min-width: 1200px) {
    .featured-category {
        margin-bottom: 0;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
}

@media (min-width: 767px) and (max-width: 1200px){
    .featured-category {
        width: 50%;
    }
}

@media (max-width: 767px){
    .featured-category {
        margin-top:20px;
    }
}
</style>