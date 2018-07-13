<template>
    <div>
        So you want to see quiz: {{ this.id }}
    </div>
</template>

<script>
import { QuizAPI } from "../api/quiz.js"

export default {
    props: ["id"],
    mounted() {
        // load it
    },
    methods: {
        selectAnswer(index) {
            // 
        }
    },
    data: () => {
        return {
            actual_question_index: 0,
            questions: []
        }
    }
}
</script>

<style>

</style>
