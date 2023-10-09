import { AppState } from "../AppState.js";
import { QuestionsController } from "../controllers/QuestionsController.js";


class QuestionsService {
  async getQuestions() {
    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=10&category=27&type=boolean')
    // console.log('got questions', response)
    console.log('GOT QUESTIONS', response.data.results)

  }
}

export const questionsService = new QuestionsService