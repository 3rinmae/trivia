

export class Question {
  constructor(data) {
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswer = data.incorrect_answers
    this.type = data.type
    this.difficulty = data.difficulty
  }

  get QuestionCardTemplate() {
    return `
    <section class="row text-center justify-content-center m-4">
        <div class="col-6 card m-4">
          <div>
            <p class="m-4">${this.question}</p>
          </div>
        </div>
      </section>
      <section class="row d-flex justify-content-evenly text-center m-4">
        <div class="col-3 card m-4">
          <div>
            <p class="m-4">${this.correctAnswer}</p>
          </div>
        </div>
        <div class="col-3 card m-4">
          <div>
            <p class="m-4">${this.incorrectAnswer}</p>
          </div>
        </div>
      </section>
    `
  }

}


// const questionData = {
//   {
  // "category": "Animals",
    // "type": "boolean",
    //   "difficulty": "easy",
        // "question": "The Axolotl is an amphibian that can spend its whole life in a larval state.",
          // "correct_answer": "True",
          //   "incorrect_answers": "False"
// }
// }