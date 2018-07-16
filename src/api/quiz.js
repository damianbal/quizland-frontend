
import axios from "axios"

export const apiURL = "API_URL_HERE";

export class QuizAPI {
    /**
     * Get all quizzes but only with title and id
     */
    static getAll() {
        return axios.get(apiURL + 'api/quiz/index');
    }

    /**
     * Get quiz by ID
     * @param {int} id 
     */
    static getQuiz(id) {
        return axios.get(apiURL + 'api/quiz/' + id);
    }

    /**
     * Add quiz
     * 
     * @param {string} t 
     * @param {json} d 
     */
    static addQuiz(t, d) {
        let args = { title:t, data: d};
        return axios.post(apiURL + "api/quiz", args);
    }

    /**
     * Get quizzes for page
     */
    static getForPage(page) {
        return axios.get(apiURL + "api/quiz/page/" + page);
    }

    /**
     * Remove quiz
     * @param {int} id 
     */
    static removeQuiz(id) {
        return axios.post(apiURL + "api/quiz/" + id + "/remove", { token: localStorage.getItem("token") });
    }
}

export default QuizAPI;