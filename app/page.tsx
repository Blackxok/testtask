'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
	const router = useRouter()

	useEffect(() => {
		const storedUser = localStorage.getItem('user')

		if (storedUser) {
			router.push('/home') // Agar foydalanuvchi bor bo'lsa, /home sahifasiga o'tadi
		} else {
			router.push('/auth/register') // Aks holda, ro'yxatdan o'tish sahifasiga yuborish
		}
	}, [router])

	return null
}
