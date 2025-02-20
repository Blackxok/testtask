'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface AuthFormProps {
	type: 'login' | 'register'
}

export default function AuthForm({ type }: AuthFormProps) {
	const router = useRouter()
	const [formData, setFormData] = useState({ phone: '', password: '' })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const res = await fetch('/api/auth', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...formData, type }),
		})
		if (res.ok) {
			router.push(type === 'login' ? '/dashboard' : '/auth/login')
		} else {
			alert(`${type === 'login' ? 'Login' : 'Registration'} failed!`)
		}
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<h2 className='text-2xl font-bold mb-4'>{type === 'login' ? 'Login' : 'Register'}</h2>
			<form onSubmit={handleSubmit} className='flex flex-col gap-3'>
				<input
					type='text'
					name='phone'
					placeholder='Phone Number'
					value={formData.phone}
					onChange={handleChange}
					className='border p-2'
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					value={formData.password}
					onChange={handleChange}
					className='border p-2'
				/>
				<button
					type='submit'
					className={`p-2 ${type === 'login' ? 'bg-blue-500' : 'bg-green-500'} text-white`}
				>
					{type === 'login' ? 'Login' : 'Register'}
				</button>
			</form>
		</div>
	)
}
