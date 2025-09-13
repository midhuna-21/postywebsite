import Link from 'next/link'

const categories = [
	{ label: 'Home  ', category: '' },
	{ label: 'Business', category: 'business' },
	{ label: 'Investing', category: 'investing' },
	{ label: 'Enterprise', category: 'enterprise' },
	{ label: 'Innovation', category: 'innovation' },
	//   { label: 'Science', category: 'science' },	
	//   { label: 'Entertainment', category: 'entertainment' },
	{ label: 'U.S', category: 'us' },
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
