<template>
    <div>
        <h3 class="text-primary">Quizzes</h3>
        <div class="row">
            <QuizLink v-for="(quiz, idx) in quizzes" v-bind:key="idx" :qid="quiz.id" :qtitle="quiz.title"></QuizLink>
        </div>
    </div>
</template>

<script>
import { QuizAPI } from '../api/quiz.js';
import QuizLink from '@/components/QuizLink';

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
    },
    components: {QuizLink}
}
</script>

<style>

</style>
