<template>
  <div class="home">

    <guest-list></guest-list>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import GuestList from '@/components/GuestList.vue'
import GuestList from '../components/GuestList.vue'

export default {
  name: 'Home',
  components: {
    GuestList
  
  }
}
</script>
