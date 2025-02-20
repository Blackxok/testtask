'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		const storedUser = localStorage.getItem('user')
		if (!storedUser) {
			setError('User not found. Please register first.')
			return
		}

		const user = JSON.parse(storedUser)
		if (user.name === name && user.phone === phone) {
			router.push('/home')
		} else {
			setError('Invalid credentials. Please try again.')
		}
	}

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100 px-4'>
			<Card className='w-96 shadow-lg'>
				<CardHeader>
					<CardTitle className='text-center text-2xl font-semibold'>Login</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div>
							<label className='block text-sm font-medium'>Full Name</label>
							<Input
								type='text'
								placeholder='Enter your name'
								value={name}
								onChange={e => setName(e.target.value)}
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium'>Phone Number</label>
							<Input
								type='tel'
								placeholder='+998901234567'
								value={phone}
								onChange={e => setPhone(e.target.value)}
								required
							/>
						</div>

						{error && <p className='text-red-500 text-sm'>{error}</p>}

						<div className='space-y-2'>
							<Button type='submit' className='w-full bg-gray-800 hover:bg-accent hover:text-black'>
								Login
							</Button>
							<div className='flex items-center justify-center'>
								<span className='text-gray-500 text-sm'>Or</span>
							</div>
							<Button
								variant='outline'
								className='w-full bg-gray-800 text-white'
								onClick={() => router.push('/auth/register')}
							>
								Register
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
