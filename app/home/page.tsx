'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { quizQuestions } from '@/lib/questions'
import { Answer, Answers, Score } from '@/types/quizTypes'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const HomePage = () => {
	const [currentQuestion, setCurrentQuestion] = useState<number>(0)
	const [answers, setAnswers] = useState<Answers>({})
	const [score, setScore] = useState<Score>({ correct: 0, incorrect: 0 })
	const [isFinished, setIsFinished] = useState<boolean>(false) // Modal uchun holat

	const handleNext = () => {
		if (currentQuestion < quizQuestions.length - 1) {
			setCurrentQuestion(prev => prev + 1)
		} else {
			setIsFinished(true) // Test tugaganda modalni chiqarish
		}
	}

	const handlePrev = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(prev => prev - 1)
		}
	}

	const handleAnswer = (value: Answer) => {
		const question = quizQuestions[currentQuestion]
		const isCorrect =
			question.type === 'checkbox'
				? JSON.stringify((value as string[]).sort()) ===
				  JSON.stringify(question.correctAnswers?.slice().sort())
				: value === question.correctAnswer

		setAnswers(prev => ({
			...prev,
			[currentQuestion]: value,
		}))

		if (!answers[currentQuestion]) {
			setScore(prev => ({
				correct: prev.correct + (isCorrect ? 1 : 0),
				incorrect: prev.incorrect + (isCorrect ? 0 : 1),
			}))
		}
	}

	const restartQuiz = () => {
		setCurrentQuestion(0)
		setAnswers({})
		setScore({ correct: 0, incorrect: 0 })
		setIsFinished(false)
	}

	const renderQuestion = () => {
		const question = quizQuestions[currentQuestion]

		switch (question.type) {
			case 'radio':
				return (
					<RadioGroup
						onValueChange={(value: string) => handleAnswer(value)}
						value={answers[currentQuestion] as string}
						className='space-y-4'
					>
						{question.options.map((option, index) => (
							<div key={index} className='flex items-center space-x-2'>
								<RadioGroupItem value={option} id={`radio-${index}`} />
								<Label htmlFor={`radio-${index}`}>{option}</Label>
							</div>
						))}
					</RadioGroup>
				)

			case 'checkbox':
				return (
					<div className='space-y-4'>
						{question.options.map((option, index) => (
							<div key={index} className='flex items-center space-x-2'>
								<Checkbox
									id={`checkbox-${index}`}
									checked={((answers[currentQuestion] as string[]) || []).includes(option)}
									onCheckedChange={checked => {
										const currentAnswers = (answers[currentQuestion] as string[]) || []
										const newAnswers = checked
											? [...currentAnswers, option]
											: currentAnswers.filter(a => a !== option)
										handleAnswer(newAnswers)
									}}
								/>
								<Label htmlFor={`checkbox-${index}`}>{option}</Label>
							</div>
						))}
					</div>
				)

			case 'select':
				return (
					<Select
						onValueChange={(value: string) => handleAnswer(value)}
						value={answers[currentQuestion] as string}
					>
						<SelectTrigger className='w-full'>
							<SelectValue placeholder='Javobni tanlang' />
						</SelectTrigger>
						<SelectContent>
							{question.options.map((option, index) => (
								<SelectItem key={index} value={option}>
									{option}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				)

			default:
				return null
		}
	}

	return (
		<div className='container mx-auto px-4 py-8'>
			<Card className='w-full max-w-4xl mx-auto'>
				<CardHeader>
					<CardTitle>IT Quiz</CardTitle>
					<div className='flex justify-between items-center text-sm text-gray-600'>
						<span>
							Savol {currentQuestion + 1} / {quizQuestions.length}
						</span>
						<div>
							<span className='text-green-600'>To'g'ri: {score.correct}</span>
							<span className='mx-2'>|</span>
							<span className='text-red-600'>Noto'g'ri: {score.incorrect}</span>
						</div>
					</div>
					<Progress
						value={((currentQuestion + 1) / quizQuestions.length) * 100}
						className='w-full'
					/>
				</CardHeader>

				<CardContent className='space-y-6'>
					<p className='text-lg font-medium mb-4'>{quizQuestions[currentQuestion].question}</p>
					{renderQuestion()}
				</CardContent>

				<CardFooter className='flex justify-between'>
					<Button variant='outline' onClick={handlePrev} disabled={currentQuestion === 0}>
						<ChevronLeft className='mr-2 h-4 w-4' />
						Oldingi
					</Button>

					<Button onClick={handleNext}>
						{currentQuestion === quizQuestions.length - 1 ? 'Tugatish' : 'Keyingi'}
						<ChevronRight className='ml-2 h-4 w-4' />
					</Button>
				</CardFooter>
			</Card>

			{/* Modal */}
			<Dialog open={isFinished} onOpenChange={setIsFinished}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Natijalar</DialogTitle>
					</DialogHeader>
					<p className='text-lg'>Sizning natijangiz:</p>
					<p className='text-green-600 text-xl'>To'g'ri: {score.correct}</p>
					<p className='text-red-600 text-xl'>Noto'g'ri: {score.incorrect}</p>
					<DialogFooter>
						<Button onClick={restartQuiz}>Qayta boshlash</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default HomePage
