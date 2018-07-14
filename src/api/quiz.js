
import axios from "axios"

let apiURL = "http://localhost:9191/"

export class QuizAPI {
    // return all quizzes
    static getAll() {
        return axios.get(apiURL + 'api/quiz/index');
    }

    // return quiz
    static getQuiz(id) {
        return axios.get(apiURL + 'api/quiz/' + id);
    }

    // add quiz
    static addQuiz(t, d) {
        let args = { title:t, data: d};
        return axios.post(apiURL + "api/quiz", args);
    }

    static getForPage(page) {
        return axios.get(apiURL + "api/quiz/page/" + page);
    }
}

export default QuizAPI;