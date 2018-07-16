<template>
    <div class="col-sm-3 mb-3">
        <div class="bg-dark text-muted p-2 rounded shadow">
            <div class="text-center mb-2">{{ qtitle }}</div>
         
            <router-link class="btn btn-secondary btn-sm btn-block" :to="{ name: 'quiz', params: { id: qid } }"><i class="fas fa-play"></i> Start</router-link>
        </div>
    </div>
</template>

<script>
export default {
  props: ["qtitle", "qid"]
};
</script>

<style>
</style>
