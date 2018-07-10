<template>
    <div>
        <div v-for="(quiz, idx) in quizzes" :key="idx">
            {{ quiz.id }} - {{ quiz.title }}
        </div>
    </div>
</template>

<script>
import { QuizAPI } from '../api/quiz.js';

export default {
    mounted() { 
        QuizAPI.getAll().then((resp) => {
            this.quizzes = resp.data;
        });
    },
    data: () => {
        return {
            quizzes: []
        }
    }
}
</script>

<style>

</style>
