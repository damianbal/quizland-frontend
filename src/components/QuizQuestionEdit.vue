<template>
    <div style="border-bottom: 1px solid rgba(0,0,0,0.1);" class="bg-light p-3 mb-3">
        <div class="form-group">
            <label>{{ qid + 1 }}. Question:</label>
            <input class="form-control" v-model="q.question">
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
            <div v-for="(answer, idx) in answers" :class="{'bg-success text-white':q.correct_answer_index==idx, 'row':true}" :key="idx">
              
                <div class="col-12 col-sm-8">
                        {{ idx + 1 }}. {{ answer }}
                </div>

                <div class="col-12 col-sm-4">
                    <div class="btn-group">
                                     <button @click="removeAnswer(idx)" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i> Remove</button>
                 <button @click="markAsCorrect(idx)" class="btn btn-success btn-sm"><i class="fas fa-thumbtack"></i> Correct</button>
                    </div>
                </div>
                

            </div> 
        </div>
    </div>
</template>

<script>
export default {
    props: ["question", "qid"],
    mounted() {
        this.questions_title = this.question.question;
        this.answers = this.question.answers;
        this.q = this.question;
    },
    methods: {
        addAnswer() {
            this.answers.push(this.answer);
            this.answer = null;
        },
        removeAnswer(id) {
            if(id == this.q.correct_answer_index) { this.q.correct_answer_index = 0; }

            this.answers.splice(id, 1);
        },
        markAsCorrect(id) {
            this.q.correct_answer_index = id;
        }
    },
    data: () => {
        return {
            questions_title: "Loading...",
            answers: [],
            correct_answer_index: 0,
            answer: null,
            q: null
        }
    }
}
</script>

<style>

</style>
