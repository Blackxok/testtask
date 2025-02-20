import { QuizQuestion } from '@/types/quizTypes'

export const quizQuestions: QuizQuestion[] = [
	{
		id: 1,
		type: 'radio',
		question:
			"Zamonaviy dasturlash texnologiyalari orasida backend dasturlash uchun eng ko'p ishlatiladigan va keng tarqalgan framework qaysi biri hisoblanadi? Bu framework qanday afzalliklarga ega?",
		options: [
			'Node.js - V8 dvigatelida ishlaydigan, asinxron va event-driven arxitekturaga ega',
			'Django - Python asosidagi, ORM va admin panel bilan jihozlangan',
			'Spring Boot - Java ekotizimida ishlaydigan, enterprise darajadagi',
			'Laravel - PHP framework, MVC arxitekturasi va Eloquent ORM bilan',
		],
		correctAnswer:
			'Node.js - V8 dvigatelida ishlaydigan, asinxron va event-driven arxitekturaga ega',
	},
	{
		id: 2,
		type: 'checkbox',
		question:
			"Zamonaviy web dasturlashda xavfsizlikni ta'minlash uchun qanday asosiy mexanizmlar va best practice-lar mavjud? Quyidagilardan to'g'ri bo'lganlarini belgilang:",
		options: [
			"HTTPS protokolidan foydalanish va SSL/TLS sertifikatlarini o'rnatish",
			'SQL injection va XSS hujumlaridan himoyalanish',
			'JWT token orqali autentifikatsiyani amalga oshirish',
			'Regular foydalanuvchi parollarini tekshirish',
		],
		correctAnswers: [
			"HTTPS protokolidan foydalanish va SSL/TLS sertifikatlarini o'rnatish",
			'SQL injection va XSS hujumlaridan himoyalanish',
			'JWT token orqali autentifikatsiyani amalga oshirish',
		],
	},
	{
		id: 3,
		type: 'select',
		question:
			'Zamonaviy frontend dasturlashda state management uchun eng optimal yechim qaysi? Redux-ning asosiy komponentlari va ishlash printsipini tushuntiring.',
		options: [
			'Redux - predictable state container',
			'MobX - simple, scalable state management',
			'Recoil - atomic state management',
			'Zustand - simple state management solution',
		],
		correctAnswer: 'Redux - predictable state container',
	},
	{
		id: 4,
		type: 'radio',
		question:
			'Mikroservis arxitekturasi nima va u qanday afzalliklarga ega? Monolitik arxitektura bilan taqqoslaganda qanday farqlar mavjud?',
		options: [
			"Kichik, mustaqil xizmatlar to'plami, yuqori masshtablilik va fault tolerance",
			'Yagona katta dastur, sodda deployment va debugging',
			"Serverless arxitektura, cloud providerga bog'liqlik",
			'Hybrid arxitektura, monolitik va mikroservis aralashmasi',
		],
		correctAnswer: "Kichik, mustaqil xizmatlar to'plami, yuqori masshtablilik va fault tolerance",
	},
	{
		id: 5,
		type: 'checkbox',
		question:
			"Cloud computing texnologiyalarining asosiy servislari va ularning vazifalarini ko'rsating:",
		options: [
			'IaaS - Infrastructure as a Service (AWS EC2, Google Compute Engine)',
			'PaaS - Platform as a Service (Heroku, Google App Engine)',
			'SaaS - Software as a Service (Gmail, Dropbox)',
			'DaaS - Database as a Service (MongoDB Atlas)',
		],
		correctAnswers: [
			'IaaS - Infrastructure as a Service (AWS EC2, Google Compute Engine)',
			'PaaS - Platform as a Service (Heroku, Google App Engine)',
			'SaaS - Software as a Service (Gmail, Dropbox)',
		],
	},
	{
		id: 6,
		type: 'select',
		question:
			"Machine Learning va AI sohasida eng ko'p ishlatiladigan framework va kutubxonalar qaysilar? Ularning asosiy vazifalarini tushuntiring.",
		options: [
			'TensorFlow - Google tomonidan yaratilgan ochiq kodli ML framework',
			'PyTorch - Facebook AI Research lab tomonidan yaratilgan',
			'Scikit-learn - oddiy va samarali ML tools for data mining',
			'Keras - yuqori darajadagi neural networks API',
		],
		correctAnswer: 'TensorFlow - Google tomonidan yaratilgan ochiq kodli ML framework',
	},
	{
		id: 7,
		type: 'radio',
		question:
			"DevOps amaliyotlari va CI/CD pipeline'larining zamonaviy dasturlashdagi ahamiyati nimada? Asosiy toollar va ularning vazifalari nimalardan iborat?",
		options: [
			'Jenkins, GitLab CI, GitHub Actions - avtomatik build va deployment',
			'Docker, Kubernetes - konteynerizatsiya va orkestratsia',
			'Ansible, Terraform - infrastruktura avtomatizatsiyasi',
			'Nagios, Prometheus - monitoring va alerting',
		],
		correctAnswer: 'Jenkins, GitLab CI, GitHub Actions - avtomatik build va deployment',
	},
	{
		id: 8,
		type: 'checkbox',
		question:
			"Quyidagi database turlaridan qaysilari NoSQL kategoriyasiga kiradi va ularning use-case'lari qanday?",
		options: [
			'MongoDB - document-based database',
			'Cassandra - wide-column store',
			'Redis - key-value store',
			'PostgreSQL - relational database',
		],
		correctAnswers: [
			'MongoDB - document-based database',
			'Cassandra - wide-column store',
			'Redis - key-value store',
		],
	},
	{
		id: 9,
		type: 'select',
		question:
			"Zamonaviy web dasturlashda qaysi arxitektura pattern'lari eng ko'p ishlatiladi va ularning afzalliklari nimada?",
		options: [
			'MVC (Model-View-Controller) - kodni strukturalash uchun',
			'MVVM (Model-View-ViewModel) - reaktiv dasturlash uchun',
			'Clean Architecture - toza va test qilinuvchi kod uchun',
			'Hexagonal Architecture - domain-driven design uchun',
		],
		correctAnswer: 'Clean Architecture - toza va test qilinuvchi kod uchun',
	},
	{
		id: 10,
		type: 'radio',
		question:
			"Blockchain texnologiyasi va smart kontraktlar dasturlash sohasiga qanday ta'sir ko'rsatmoqda? Asosiy platformalar va ularning imkoniyatlari haqida gapiring.",
		options: [
			'Ethereum - smart kontraktlar va DApps uchun platforma',
			'Hyperledger Fabric - enterprise blockchain yechimlari',
			'Solana - yuqori tezlikdagi blockchain',
			'Binance Smart Chain - DeFi ilovalar uchun',
		],
		correctAnswer: 'Ethereum - smart kontraktlar va DApps uchun platforma',
	},
]
