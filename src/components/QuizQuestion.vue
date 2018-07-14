<template>
    <div>
        <div>{{ activeQuestionIndex + 1 }} of {{ numQuestions }}</div>

            {{ question }}


        <button v-for="(answer, idx) in answers" :key="idx"  @click="$emit('selectAnswer', idx)" class="btn btn-block btn-light">{{idx+1}}. {{ answer }}</button>
    </div>
</template>

<script>
export default {
    props: ["active-question-index", "question", "num-questions", "answers"]
}
</script>

<style>

</style>
