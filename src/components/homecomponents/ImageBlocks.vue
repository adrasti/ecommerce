<template>
    <section class="image-blocks">
                <div class="image-block"><a href=""><img  class="img-fluid item-image" height="430" loading="lazy" src="../../assets/imgblock2.webp"></a></div>

               <div class="image-block"><a href=""><img class="img-fluid item-image" loading="lazy" src="../../assets/imgblock1.jpg"></a></div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>


<style lang="scss">
.image-blocks{
    display: inline-block;
    width: 100%;
}

.image-block{
    width: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;
    text-align: center;
}

@media (min-width: $breakpoint-lg){
    .image-block:first-child{
            margin-right: 1%;
    }
    .image-block{
        width:49.5%;
    }
}

@media (min-width: $breakpoint-xl){
.image-blocks{
        margin-top:6rem;
    }
}
</style>