<template>
    <div>
        <div class="row">
            <div class="col-12 p-3">
                <h3 class="text-primary">Create Quiz</h3>
                <p class="text-muted">This page lets you create new quiz!</p>
                <button @click="test">Test</button>
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
            <QuizQuestionEdit v-for="(question, idx) in questions" :key="idx" :question="question"></QuizQuestionEdit>
        </div>

        <div class="mt-3">
            <button class="btn btn-secondary"><i class="fas fa-plus-circle"></i> Save</button>
        </div>

    </div>
</template>

<script>
import QuizQuestionEdit from '@/components/QuizQuestionEdit.vue'

// Create JSON string for Database
function createQuizJson(title, questions)
{
    let json = {questions:questions};
    let jsonString = JSON.stringify(json);

    return jsonString;
}

export default {
    mounted() {

    },
    methods: {
        addQuestion() {
            this.questions.push({ question: "???", answers: ["A", "B", "C"], correct_answer_index: 0 });
        },
        reset() {
            this.questions = [];
            this.title = "???";
        },
        test() {
            alert(JSON.stringify(this.questions));
        },
        save() {
            let quizData = createQuizJson(this.questions);

            // post it to server POST 

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
