<template>
    <div class="bg-light p-3 mb-3">
        <div class="form-group">
            <label>Question:</label>
            <input class="form-control" v-model="questions_title">
        </div>

        <div class="row">
            <div class="col-sm-9">
                        <div class="form-group">
         
            <input placeholder="Answer..." class="form-control" v-model="answer">
         
        </div>
            </div>
            <div class="col-sm-3">
                   <button @click="addAnswer" class="btn btn-block btn-primary">Add Answer</button>
            </div>

        </div>


        <div> 
            <div v-for="(answer, idx) in answers" :key="idx">
                {{ answer }} <button @click="removeAnswer(idx)" class="btn btn-danger btn-sm">Remove</button>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    props: ["question"],
    mounted() {
        this.questions_title = this.question.question;
        this.answers = this.question.answers;
    },
    methods: {
        addAnswer() {
            this.answers.push(this.answer);
            this.answer = null;
        },
        removeAnswer(id) {
            this.answers.splice(id, 1);
        }
    },
    data: () => {
        return {
            questions_title: "Loading...",
            answers: [],
            correct_answer_index: 0,
            answer: null
        }
    }
}
</script>

<style>

</style>
