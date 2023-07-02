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
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Responsive Web Design',
		icon: web,
	},
	{
		title: 'Progressive WebApp',
		icon: mobile,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Angular',
		icon: angular,
	},
	{
		name: 'Vue',
		icon: vue,
	},
	{
		name: 'Git',
		icon: git,
	},
	{
		name: 'Figma',
		icon: figma,
	},
];

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
			'Working as a team on a small project',
		],
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
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
];

const testimonials = [
	{
		testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'UI POD',
		description:
			'Web-based platform developed by Usaha Insan Aksara, where I was working as an Intern for 6 months. In this project, i was be able to help to develope the interface using angular and tailwindcss also other library. I was able to demonstrate my ability to work with the API to do the full CRUD operations in the project',
		tags: [
			{
				name: 'angular',
				color: 'blue-text-gradient',
			},
			{
				name: 'api',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: uipod,
		source_code_link: 'https://www.uipod.id/',
	},
	{
		name: 'Usaha Insan Aksara Company Profile',
		description:
			'It is a static website, that I develope when I was working as an Intern in Usaha Insan Aksara. It is build using parcelJs, and tailwindcss as the css framework. The website contain every information about the company, and every products that it produce',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: lontara,
		source_code_link: 'https://lontara.app/company/',
	},
];

export { services, technologies, experiences, testimonials, projects };
