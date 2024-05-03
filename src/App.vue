<template>
  <div id="app">
    <HcodeHeader
   @select-championship="changeChampionship"
    @change-component="changeComponent"/>

    <HCodeSection/>

    <HcodeFooter/>


    
  </div>
</template>

<script>
import HcodeFooter from './components/HcodeFooter'
import HcodeHeader from './components/HcodeHeader'
import HCodeSection from './components/HCodeSection.vue'
import { mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
    HcodeHeader,
    HcodeFooter,
    HCodeSection
  },
  data(){
    return{
    }
  },
  methods:{
    ...mapMutations({
      changeChampionship: 'setChampionship'

    }),

    changeComponent(value) {

      let component;

      switch (value){
        case 'home':
          default:
            component = 'HCodeSectionBanner';
            
            break;

            case'news':
            component = 'HCodeSectionNews'
            break;
      }

      this.currentSectionComponent = component;
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap')
</style>
