<template>
    <div>
        <div class="row">
            <div class="col-12 p-3">
                <h3 class="text-primary">Create Quiz</h3>
                <p class="text-muted">This page lets you create new quiz!</p>
                <button class="btn btn-sm btn-light" @click="test">See JSON</button>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 text-right">
                <div class="btn-group">
                    <button class="btn btn-light" @click="addQuestion"><i class="fas fa-plus"></i> Add Question</button>
                    <button class="btn btn-light" @click="reset"><i class="fas fa-sync-alt"></i> Reset</button>
                </div>
            </div>

            <div class="col-sm-12">
            <label>Title of quiz: </label>
            <input class="form-control" v-model="title">
            </div>


        </div>

        <div>
            <QuizQuestionEdit v-for="(question, idx) in questions" :key="idx" :qid="idx" :question="question"></QuizQuestionEdit>
        </div>

        <div class="mt-3">
            <button @click="save" class="btn btn-secondary"><i class="fas fa-plus-circle"></i> Save</button>
        </div>

    </div>
</template>

<script>
import QuizQuestionEdit from '@/components/QuizQuestionEdit.vue'
import { QuizAPI } from '../api/quiz.js'

export default {
    mounted() {

    },
    methods: {
        addQuestion() {
            this.questions.push({ question: "???", answers: ["A", "B", "C"], correct_answer_index: 0 });
        },
        reset() {
            this.questions = [];
            this.title = "???jkhjkhjkhjkhjk";
        },
        test() {
            alert(JSON.stringify(this.questions));
        },
        save() {
            QuizAPI.addQuiz(this.title, JSON.stringify(this.questions)).then((v) => {
                alert('Quiz added: ' + v.data.message);
                console.log(v.data);
            }).catch((err) => {
                alert('Error adding quiz!');
            });
        }
    },
    data: () => {
        return {
            title: "Quiz",
            questions: []
        }
    },
    components: {QuizQuestionEdit}
}
</script>

<style>

</style>
