<template>
    <div>
        <form v-on:submit.prevent="save" @keydown.enter.prevent="true">
            <div class="row">
                <div class="col-12 p-3">
                    <h3 class="text-primary">Create Quiz</h3>
                    <p class="text-muted">This page lets you create new quiz!</p>
                    <button type="button" class="btn btn-sm btn-light" @click="test">See JSON</button>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12 text-right">
                    <div class="btn-group">
                        <button type="button" class="btn btn-light" @click="addQuestion"><i class="fas fa-plus"></i> Add Question</button>
                        <button type="button" class="btn btn-light" @click="reset"><i class="fas fa-sync-alt"></i> Reset</button>
                    </div>
                </div>

                <div class="col-sm-12">
                <label>Title of quiz: </label>
                <input minlength="3" class="form-control" v-model="title" required>
                </div>


            </div>

            <div>
                <QuizQuestionEdit v-for="(question, idx) in questions" :key="idx" :qid="idx" :question="question"></QuizQuestionEdit>
            </div>

            <div class="mt-3">
                <button type="submit" class="btn btn-secondary"><i class="fas fa-plus-circle"></i> Save</button>
            </div>
        </form>
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
            this.questions.push({ question: "Put question here..", answers: ["Question A", "Question B", "Question C"], correct_answer_index: 0 });
        },
        reset() {
            this.questions = [];
            this.title = "Put question here...";
        },
        test() {
            alert(JSON.stringify(this.questions));
        },
        save() {
            let valid = true;

            this.questions.forEach((q) => {
                if(q.answers.length <= 1) {
                    valid = false;
                    
                    return;
                }
            });

            if(this.questions.length < 2) {
                valid = false;
            }

            if(valid == false) {
                alert(`Please fix your quiz, make sure you have answers for questions and that you have atleast 2 questions for quiz :)`);
                return;
            }

            QuizAPI.addQuiz(this.title, JSON.stringify(this.questions)).then((v) => {

                if(v.data.error == false) {
                    let qid = v.data.quiz_id;

                    alert('Quiz added: ' + v.data.message)
                    console.log(v.data);

                    this.$router.push({ name: 'quiz', params: { id: qid } })
                } else {
                    alert('Could not add your quiz, sorry!')
                }


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
