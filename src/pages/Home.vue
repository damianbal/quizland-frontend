<template>
    <div>
        <h3 class="text-primary">Quizzes</h3>

        <Pagination :page="page" :maxPage="maxPages" v-on:clickPrevPage="prevPage" v-on:clickNextPage="nextPage"></Pagination>

        <div class="row">
            <QuizLink v-for="(quiz, idx) in quizzes" v-bind:key="idx" :qid="quiz.id" :qtitle="quiz.title"></QuizLink>
        </div>

        <Pagination :page="page" :maxPage="maxPages" v-on:clickPrevPage="prevPage" v-on:clickNextPage="nextPage"></Pagination>
    </div>
</template>

<script>
import { QuizAPI } from '../api/quiz.js';
import QuizLink from '@/components/QuizLink';
import Pagination from "@/components/Pagination";

export default {
    mounted() { 
       this.loadPage();
    },
    methods: {
        loadPage() {
            QuizAPI.getForPage(this.page).then(resp => {
                // get meta information
                let meta = resp.data.meta;

                // get quizzes for that page
                let data = resp.data.data;

                // set meta information
                this.perPage = meta.perPage;
                this.maxPages = meta.maxPages;

                // set quizzes
                this.quizzes = data;
            });
        },
        // load next page
        nextPage() {
            this.page ++;
            this.loadPage();
        },
        // load prev page
        prevPage() {
            if(this.page >= 0) {
                this.page--;
                this.loadPage();
            }
        }
    },
    data: () => {
        return {
            quizzes: [],
            page: 0,
            perPage: 0,
            maxPages: 0
        }
    },
    components: {QuizLink, Pagination}
}
</script>

<style>

</style>
