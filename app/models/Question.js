

export class Question {
  constructor(data) {
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswer = data.incorrect_answers
    this.type = data.type
    this.difficulty = data.difficulty
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