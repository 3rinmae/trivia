import { questionsService } from "../services/QuestionsService.js"
import { Pop } from "../utils/Pop.js"



export class QuestionsController {
  constructor() {
    // this.testPromise()
    this.getQuestions()
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
