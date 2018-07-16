<template>
    <div>
    <ul class="pagination">
        <li v-if="page > 0" class="page-item"><a class="page-link" href="#" v-on:click="$emit('clickPrevPage')"><i class="fas fa-arrow-left"></i> Previous Page</a></li>
        <!--
        <li class="page-item"><a class="page-link" href="#">{{ page - 1 }}</a></li>
        <li class="page-item"><a class="page-link" href="#">{{ page + 1 }}</a></li>
        <li class="page-item"><a class="page-link" href="#">{{ page + 2 }}</a></li>
        -->
        <li v-if="page < maxPage-1" class="page-item"><a class="page-link" href="#" v-on:click="$emit('clickNextPage')">Next Page <i class="fas fa-arrow-right"></i></a></li>
    </ul>
    </div>
</template>

<script>
export default {
  props: ["page", "maxPage"]
};
</script>

<style>
</style>
