<template>

        <div>
            <div class="container">
                <div class="row mt-5">
                    <h3>Você está vendo notícias do: {{ championship }}</h3>
                </div>
                
            </div>

            <router-view></router-view>

            <div class="container">
                <div class="row my-club mt-5">

                    <div class="col-6">
                        <h2>Seu clube é: {{myClub}}</h2>

                    </div>

                    <div class="col-6">
                        <HCodeInput />

                    </div>
                </div>
            </div>
        </div>
    
</template>

<script>
import HCodeInput from './HCodeInput.vue'
import { mapGetters } from 'vuex'

export default {
    components:{
        HCodeInput
        
    },
    data(){
        return {
        }
    },
    props:{
      currentComponent: String
    },
    computed: {
        ...mapGetters({
            championship: 'getChampionship',
            myClub: 'getClubName'
        })
    }
}
</script>

<style scoped>


</style>