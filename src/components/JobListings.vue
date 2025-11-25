<script setup>
    import { RouterLink } from 'vue-router';
    import jobListing from './jobListing.vue';
    // import jobData from '../jobs.json';
    import { ref, defineProps, onMounted } from 'vue';

    import axios from 'axios';

defineProps({
    limit: Number,
    showButton:{
        type: Boolean,
        default: false
    }
})
// For this for fix data static with file jobs.json file in project
// const jobs = ref(jobData && jobData.jobs ? jobData.jobs : jobData);
// console.log('jobs (array):', jobs.value);

// This data form API of axios from HTTP
const jobs = ref([]);

onMounted(async () =>{
    try {
        const response = await axios.get('http://localhost:8000/jobs');
        jobs.value = response.data
    } catch (error) {
        console.error("Error fetching jobs", error.message);
        
    }
})


</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <jobListing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job"/>
            </div>
        </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All Jobs</RouterLink>
    </section>
            
</template>