'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Register() {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const router = useRouter()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		localStorage.setItem('user', JSON.stringify({ name, phone }))
		router.push('/')
	}

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100 px-4'>
			<Card className='w-96 shadow-lg'>
				<CardHeader>
					<CardTitle className='text-center text-2xl font-semibold'>Register</CardTitle>
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
						<div className='space-y-2'>
							<Button
								type='submit'
								className=' w-full bg-gray-800 hover:bg-accent hover:text-black text-white'
							>
								Register
							</Button>
							<div className='flex items-center justify-center'>
								<span className='text-gray-500 text-sm'>Or</span>
							</div>
							<Button
								variant='outline'
								className='w-full bg-gray-800 hover:bg-accent hover:text-black text-white'
								onClick={() => router.push('/auth/login')}
							>
								Login
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
