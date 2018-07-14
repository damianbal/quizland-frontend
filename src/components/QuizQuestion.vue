<template>
    <div>
        <div>{{ activeQuestionIndex + 1 }} of {{ numQuestions }}</div>

        <div class="text-muted"> {{ question }} </div>

        <button v-for="(answer, idx) in answers" :key="idx"  @click="$emit('selectAnswer', idx)" class="btn btn-block btn-light">{{idx+1}}. {{ answer }}</button>
    </div>
</template>

<script>
export default {
    props: ["activeQuestionIndex", "question", "numQuestions", "answers"]
}
</script>

<style>

</style>
