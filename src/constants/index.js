import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	angular,
	uipod,
	lontara,
	vue,
	uia,
	digitalent,
	ci,
	php,
	refactory,
	aladinmall,
	linkedin,
	ig,
	github,
	nextjs,
	stechoq,
	desy,
	defaultImg,
	maka,
	edc,
	logo
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About'
	},
	{
		id: 'work',
		title: 'Work'
	},
	{
		id: 'socmed',
		title: 'Media'
	},
	{
		id: 'contact',
		title: 'Contact'
	}
]

const services = [
	{
		title: 'Responsive Web Design',
		icon: web
	},
	{
		title: 'Progressive WebApp',
		icon: mobile
	},
	{
		title: 'Working With API',
		icon: backend
	}
]

const sosmed = [
	{
		title: 'Linkedin',
		icon: linkedin,
		url: 'https://www.linkedin.com/in/bayusarifudin/'
	},
	{
		title: 'Instagram',
		icon: ig,
		url: 'https://www.instagram.com/sarifudinbayu/'
	},
	{
		title: 'Github',
		icon: github,
		url: 'https://github.com/bayuSarifudin'
	}
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html
	},
	{
		name: 'CSS 3',
		icon: css
	},
	{
		name: 'JavaScript',
		icon: javascript
	},
	{
		name: 'PHP',
		icon: php
	},
	{
		name: 'TypeScript',
		icon: typescript
	},
	{
		name: 'React JS',
		icon: reactjs
	},
	{
		name: 'Next JS',
		icon: nextjs
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind
	},
	{
		name: 'Angular',
		icon: angular
	},
	{
		name: 'Vue',
		icon: vue
	},
	{
		name: 'Git',
		icon: git
	},
	{
		name: 'Figma',
		icon: figma
	},
	{
		name: 'Code Igniter',
		icon: ci
	}
]

const experiences = [
	{
		title: 'Frontend Developer Bootcamp 2022',
		company_name: 'FGA Digitalent',
		icon: digitalent,
		iconBg: '#383E56',
		date: 'March 2022 - April 2022',
		points: [
			'Learn about basic technology in web development',
			'Learn how to use javascript to make a change with DOM',
			'Work with api to serve the data from the database to the front application',
			'Working as a team on a small project'
		]
	},
	{
		title: 'Web Frontend Developer Intern',
		company_name: 'Usaha Insan Aksara',
		icon: uia,
		iconBg: '#E6DEDD',
		date: 'Sept 2022 - Feb 2023',
		points: [
			'Help to Develope and maintain web applications using latest and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.'
		]
	},
	{
		title: 'Intensive Pairing Software Engineer',
		company_name: 'Refactory',
		icon: refactory,
		iconBg: '#E6DEDD',
		date: 'Jul 2023 - Oct 2023',
		points: [
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Working on a several project as front-end or back-end developer',
			'Create End Point using code igniter, asp.net, and create an RPC from postgres function',
			'Build interactive and responsive ui',
			'Partisipate in Sprint planning and Daily Standup Meeting'
		]
	},
	{
		title: 'Freelance Front-End Developer',
		company_name: 'Self-employed',
		icon: logo,
		iconBg: '#E6DEDD',
		date: 'Oktober 2023 - Now',
		points: [
			"Develop user-friendly, responsive web applications using modern frameworks like Vue.js, React, or Angular. Ensure cross-browser compatibility, optimize performance, and enhance user experience with clean,maintainable code.",
			"Work closely with designers and backend developers to translate designs into functional interfaces and integrate APIs seamlessly. Participate in code reviews and follow Agile methodologies for smooth project delivery."
		]
	},
	{
		title: 'Front-End Software Developer',
		company_name: 'Stechoq',
		icon: stechoq,
		iconBg: '#E6DEDD',
		date: 'Nov 2023 - Now',
		points: [
			"Collaborate with design and backend teams to implement user-friendly web interfaces using modern JavaScript frameworks such as Vue.",
			"Optimize web applications for maximum speed and scalability by ensuring high-quality, clean, and maintainable code.",
			"Maintain and improve existing web applications, ensuring responsiveness, cross-browser compatibility, and implementing best practices in UI/UX design."
		]
	}
]

const testimonials = [
	{
		testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg'
	},
	{
		testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg'
	},
	{
		testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg'
	}
]

const projects = [
	{
		name: 'UI POD',
		description:
			'Web-based platform developed by Usaha Insan Aksara, where I was working as an Intern for 6 months. In this project, i was be able to help to develope the interface using angular and tailwindcss also other library. I was able to demonstrate my ability to work with the API to do the full CRUD operations in the project',
		tags: [
			{
				name: 'angular',
				color: 'blue-text-gradient'
			},
			{
				name: 'api',
				color: 'green-text-gradient'
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient'
			}
		],
		image: uipod,
		source_code_link: 'https://www.uipod.id/'
	},
	{
		name: 'Usaha Insan Aksara Company Profile',
		description:
			'It is a static website, that I develope when I was working as an Intern in Usaha Insan Aksara. It is build using parcelJs, and tailwindcss as the css framework. The website contain every information about the company, and every products that it produce',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient'
			},
			{
				name: 'tailwindcss',
				color: 'green-text-gradient'
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient'
			}
		],
		image: lontara,
		source_code_link: 'https://lontara.app/company/'
	},
	{
		name: 'Aladin Mall',
		description:
			"It's national scale E-Commerce from MNC group, build using the latest version of Nextjs, Typescript and also tailwind css as it's css framework. Aladin Mall using supabase as it's main database, as its fast and convenience. It also has rpc to fasten up the data transfer even more",
		tags: [
			{
				name: 'Nextjs',
				color: 'blue-text-gradient'
			},
			{
				name: 'tailwindcss',
				color: 'green-text-gradient'
			},
			{
				name: 'Typescript',
				color: 'pink-text-gradient'
			},
			{
				name: 'Supabase',
				color: 'blue-text-gradient'
			}
		],
		image: aladinmall,
		source_code_link: 'https://aladinmall.id/'
	},
	{
		name: 'Desy Setyowati',
		description:
			"A personnal portfolio of a senior UI/UX Designer. focused on creating custom designs, components, and animations manually. Each element in this portfolio is uniquely crafted and developed, highlighting creativity in UI/UX and user interactions. Dynamic and functional frontend components are built from scratch with attention to detail, creating a responsive and intuitive user experience. Smooth and interactive animations are also incorporated to enhance the visual experience and provide a modern touch to every page.",
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient'
			},
			{
				name: 'tailwindcss',
				color: 'green-text-gradient'
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient'
			},
		],
		image: desy,
		source_code_link: 'https://desysetyo.com/'
	},
	{
		name: 'Paradex APIs Library',
		description:
			"As a freelance developer, I created a custom library to streamline the usage of Paradex APIs, supporting both HTTP and WebSocket protocols. The library simplifies interactions with Paradex by abstracting complex functionalities like authentication, real-time subscriptions, and order management into an intuitive and efficient API. It includes features like automated reconnections for WebSocket, robust error handling, and rate-limiting mechanisms.",
		tags: [
			{
				name: 'Javascript',
				color: 'blue-text-gradient'
			},
		],
		image: defaultImg,
		// source_code_link: 'https://desysetyo.com/'
	},
	{
		name: 'MAKA Motors Dashboard',
		description:
			"I developed a comprehensive dashboard for an electric motorcycle company to manage their factory operations. The dashboard was built with Vue.js, Pinia for state management, and Bootstrap for styling, enabling real-time monitoring and management of factory workflows. It included features such as inventory tracking, production status updates, and workforce management, offering both a user-friendly interface and efficient control for the management team. The application was designed to optimize the overall performance and streamline operations, ensuring a seamless experience for factory managers.",
		tags: [
			{
				name: 'VUE 3',
				color: 'blue-text-gradient'
			},
			{
				name: 'bootstrap 5',
				color: 'green-text-gradient'
			},
			{
				name: 'Pinia',
				color: 'pink-text-gradient'
			},
		],
		image: maka,
		// source_code_link: 'https://desysetyo.com/'
	},
	{
		name: 'EDC Kubota',
		description:
			"I developed a digital archive management dashboard for a machinery company to organize and manage various design models of their parts. Using Vue 3 and Pinia for state management, the dashboard enables seamless storage, retrieval, and categorization of the company's part designs in an easy-to-use interface. The application includes functionalities like quick search, file categorization, and version control, providing an efficient and scalable solution for managing large volumes of digital assets. It was designed to streamline workflows and improve access to essential design data for engineers and other stakeholders.",
		tags: [
			{
				name: 'VUE 3',
				color: 'blue-text-gradient'
			},
			{
				name: 'bootstrap 5',
				color: 'green-text-gradient'
			},
			{
				name: 'Pinia',
				color: 'pink-text-gradient'
			},
		],
		image: edc,
		// source_code_link: 'https://desysetyo.com/'
	}
]

export { services, technologies, experiences, testimonials, projects, sosmed }
