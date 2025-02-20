import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const { phone, password, type } = await req.json()

	if (!phone || !password) {
		return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
	}

	if (type === 'login') {
		if (phone === '998901234567' && password === '123456') {
			return NextResponse.json({ message: 'Login successful', token: 'dummy_token' })
		} else {
			return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
		}
	}

	if (type === 'register') {
		return NextResponse.json({ message: 'User registered' })
	}

	return NextResponse.json({ message: 'Invalid request' }, { status: 400 })
}
