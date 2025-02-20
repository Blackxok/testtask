'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { MdGTranslate } from 'react-icons/md'
import { RiQuestionnaireFill } from 'react-icons/ri'
import { RxAvatar } from 'react-icons/rx'
import { Button } from './ui/button'

const Navbar = () => {
	const [mounted, setMounted] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const [language, setLanguage] = useState(false)
	const [profileMenuOpen, setProfileMenuOpen] = useState(false)
	const { theme, setTheme } = useTheme()

	// Mounting check
	useEffect(() => {
		setMounted(true)
	}, [])
	// Agar mount bo'lmagan bo'lsa, placeholder qaytaramiz
	if (!mounted) {
		return null
	}

	return (
		<nav className='bg-gray-800'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					{/* Logo va menyu */}
					<div className='flex items-center'>
						<Image src='/logo/logoW.png' alt='Logo' width={100} height={50} />
					</div>

					<div className='flex flex-row items-center gap-4'>
						<Button className='border-none outline-none !bg-transparent p-0 m-0'>
							<RiQuestionnaireFill className='text-white cursor-pointer !size-6' />
						</Button>{' '}
						<Button
							className='border-none outline-none !bg-transparent p-0 m-0'
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						>
							{theme === 'dark' ? (
								<FaSun className='text-white cursor-pointer text-2xl' />
							) : (
								<FaMoon className='text-white cursor-pointer text-2xl' />
							)}
						</Button>{' '}
						{/* Language */}
						<div
							onClick={() => setLanguage(!language)}
							className='border-none outline-none !bg-transparent p-0 m-0'
						>
							<MdGTranslate className='text-white cursor-pointer !size-5' />
							{language && (
								<div className='absolute flex flex-col gap-1 bg-slate-800 rounded-md p-1'>
									<Button
										variant='ghost'
										className='text-slate-100 hover:bg-slate-700 hover:text-white rounded-sm'
									>
										ENG
									</Button>
									<Button
										variant='ghost'
										className='text-slate-100 hover:bg-slate-700 hover:text-white rounded-sm'
									>
										RUS
									</Button>
									<Button
										variant='ghost'
										className='text-slate-100 hover:bg-slate-700 hover:text-white rounded-sm'
									>
										UZB
									</Button>
								</div>
							)}
						</div>
						{/*  */}
						{/* Profil menyusi */}
						<div className='relative '>
							<button
								type='button'
								className='relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
								onClick={() => setProfileMenuOpen(!profileMenuOpen)}
							>
								<span className='sr-only'>Open user menu</span>
								<RxAvatar className='text-white size-6' />
							</button>

							{profileMenuOpen && (
								<div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50'>
									{['Your Profile', 'Settings', 'Sign out'].map(item => (
										<Link
											key={item}
											href='#'
											className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
										>
											{item}
										</Link>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Mobil menyu tugmasi */}
					<div className='sm:hidden'>
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className='text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
						>
							{menuOpen ? (
								<svg
									className='h-6 w-6'
									viewBox='0 0 24 24'
									stroke='currentColor'
									fill='none'
									strokeWidth='2'
								>
									<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
								</svg>
							) : (
								<svg
									className='h-6 w-6'
									viewBox='0 0 24 24'
									stroke='currentColor'
									fill='none'
									strokeWidth='2'
								>
									<path strokeLinecap='round' strokeLinejoin='round' d='M3 6h18M3 12h18m-18 6h18' />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobil menyu */}
			{menuOpen && (
				<div className='sm:hidden bg-gray-900 px-2 pt-2 pb-3 space-y-1'>
					{['Home', 'About', 'Projects', 'Contact'].map(item => (
						<Link
							key={item}
							href={`/${item.toLowerCase()}`}
							className='block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700'
						>
							{item}
						</Link>
					))}
				</div>
			)}
		</nav>
	)
}

export default Navbar
