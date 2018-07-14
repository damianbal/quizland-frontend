<template>
    <div>
        <h3 class="text-primary" v-html="title"></h3>

        <div v-if="loaded">
            <div v-if="hide_question == false">
                <QuizQuestion :activeQuestionIndex="active_question_index"
                              :question="activeQuestion.question"
                              :numQuestions="questions.length"
                              :answers="activeQuestion.answers"
                              v-on:selectAnswer="selectAnswer"></QuizQuestion>
            </div>
            <div v-else>
            {{ resultMessage() }}
            </div>
        </div>
        <div v-else>
            Loading quiz...
        </div>
    </div>
</template>

<script>
import { QuizAPI } from "../api/quiz.js"
import QuizQuestion from "@/components/QuizQuestion"

export default {
    props: ["id"],
    mounted() {
        // delay loading quiz
        setTimeout(this.load.bind(this, this.id), 500);
    },
    methods: {
        load(id) {
            QuizAPI.getQuiz(id).then(resp => {

                let questions = resp.data.data;
                this.questions = JSON.parse(questions);
                this.title = resp.data.title;

                console.log('Loaded: ', this.questions);
                this.loaded = true;
            }).catch(err => {
                alert('There is error!');
            });
        },
        selectAnswer(index) {
            let correctAnswerIndex = this.activeQuestion.correct_answer_index;

            // Check if answer is correct
            if(correctAnswerIndex == index) {
                alert('Good answer!');
                this.num_correct ++; // increase correct answers
            }
            else {
                alert('Bad answer!');
            }

            // Check if it is last question
            if(this.active_question_index+1 == this.questions.length) {
                this.hide_question = true;
                return;
            }

            // go to next answer if there is any 
            this.active_question_index ++;
        },
        resultMessage() {
            if(this.num_correct == this.questions.length) return "Wow you got all them right :D";
            else if(this.num_correct >= this.questions.length/2 && this.num_correct < this.questions.length) return "You did good, but not best, you got " + this.num_correct + " out of " + this.questions.length;
            else {
                return "Well you did not so good you got " + this.num_correct + " out of " + this.questions.length;
            }
        }
    },
    data: () => {
        return {
            title: "Loading...",
            active_question_index: 0,
            questions: [],
            num_correct: 0,
            hide_question: false,
            loaded: false
        }
    },
    computed: {
        activeQuestion: function() {
            return this.questions[this.active_question_index];
        }
    },
    components: { QuizQuestion }
}
</script>

<style>

</style>
