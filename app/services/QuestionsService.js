import { AppState } from "../AppState.js";
import { QuestionsController } from "../controllers/QuestionsController.js";
import { Question } from "../models/Question.js";


class QuestionsService {
  async getQuestions() {
    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=10&category=27&type=boolean')
    // console.log('got questions', response)
    console.log('GOT QUESTIONS', response.data.results)
    const newQuestions = response.data.results.map(questionPOJO => new Question(questionPOJO))
    console.log('new questions', newQuestions);
    AppState.questions = newQuestions
    console.log('questions in AppState', AppState.questions);
  }
}

export const questionsService = new QuestionsService