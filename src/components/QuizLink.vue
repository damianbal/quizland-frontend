<template>
    <div class="col-sm-3">
        <div class="bg-primary text-white p-2 rounded shadow">
            {{ qtitle }}
            <br>
            <router-link class="btn btn-light btn-sm btn-block" :to="{ name: 'quiz', params: { id: qid } }">Start</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["qtitle", "qid"]
}
</script>

<style>

</style>
