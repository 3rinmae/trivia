import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuestions() {
  console.log('do i ever run?');
  const questions = AppState.questions
  let content = ''
  questions.forEach(question => content += question.QuestionCardTemplate)
  setHTML('questionCard', content)
}

export class QuestionsController {
  constructor() {
    // this.testPromise()
    this.getQuestions()
    AppState.on('questions', _drawQuestions)
  }

  async testPromise() {
    console.log('starting')
  }

  async getQuestions() {
    try {
      await questionsService.getQuestions()
      Pop.success('got the questions')
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }

}
