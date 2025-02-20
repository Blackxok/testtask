// types/quizTypes.ts

export type QuestionType = 'radio' | 'checkbox' | 'select'

export interface QuizQuestion {
	id: number
	type: QuestionType
	question: string
	options: string[]
	correctAnswer?: string
	correctAnswers?: string[]
}

export type Answer = string | string[] | null

export type Answers = {
	[key: number]: Answer
}

export interface Score {
	correct: number
	incorrect: number
}
