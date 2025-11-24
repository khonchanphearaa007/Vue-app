<script setup>
  import Navbar from './components/Navbar.vue';
  import Hero from './components/Hero.vue';
  import HomeCard from './components/HomeCard.vue';
  import JobListings from './components/JobListings.vue';
</script>


<template>
  <Navbar/> 
  <Hero title="Hello Vue" supTitle="Find the vue testing description here"/>
  <HomeCard/>
  <JobListings :limit="3" :showButton="true"/>
</template>
