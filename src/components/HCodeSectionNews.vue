<template>
    <section class="section-news">

        <div class="container">
            <HCodeSectionNewsIndividual
            v-for="notice in news"
            :key="notice.id"
            :img-name="notice.img"
            :img-info="notice.imgInfo"
            :news-title="notice.title"
            :news-date="notice.data"
             >

             <template #title>
                <router-link :to="{ name: 'notice', params: {idnotice: 
                notice.id} }" tag="h2"> {{ notice.title }}</router-link>

             </template>
             <p>{{notice.content | truncate(200) }}</p>
            </HCodeSectionNewsIndividual>

            

        </div>
    </section>
</template>

<script>
import HCodeSectionNewsIndividual from './HCodeSectionNewsIndividual.vue'
import { mapGetters } from 'vuex';

export default {
    components:{
        HCodeSectionNewsIndividual
    },
    data(){
        return {
           
        }
    },
    computed:{
        ...mapGetters({
            news: 'getNews'
        })
    },
    methods: {
        /* goToPage(page) {
            this.$router.push(page);
        } */
    }
}
    
</script>

<style >
.section-news{
    padding: 50px 0;
    margin-top: 25px;
    background-color: #F37520;
}
</style>
