import Link from 'next/link'

const categories = [
	{ label: 'Home  ', category: '' },
	{ label: 'Business', category: 'business' },
	{ label: 'Sports', category: 'sports' },
	{ label: 'Politics', category: 'politics' },
	//   { label: 'Technology', category: 'technology' },
	{ label: 'Health', category: 'health' },
	//   { label: 'Science', category: 'science' },	
	//   { label: 'Entertainment', category: 'entertainment' },
	{ label: 'Education', category: 'education' },
];


export default function Menu() {
	return (
		<>
			<ul className="main-menu">
				{categories.map((item) => (
					<li key={item.category} >
						<Link
							href={`/${item.category}`}
							title={item.category} style={{ textDecoration: 'none', color: 'inherit' }} className="active">
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
