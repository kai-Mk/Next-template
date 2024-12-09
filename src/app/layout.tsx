import Link from 'next/link';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html>
			<body>
				<nav style={{ gap: '10px', display: 'flex' }}>
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
				</nav>
				{children}
			</body>
		</html>
	);
};

export default layout;
