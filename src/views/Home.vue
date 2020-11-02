<template>
  <div class="home">
   <Dashboard/>
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Dashboard from '@/views/Dashboard'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Dashboard
  }
}
</script>
