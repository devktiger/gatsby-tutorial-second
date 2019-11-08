import React from 'react';
import { Link } from 'gatsby';
// import styles from './navbar.module.scss';

const Navbar = () => {
	return (
		<nav>
			<h2>company</h2>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/blog/'>Blog</Link>
				</li>
				<li>
					<Link to='/products/'>Products</Link>
				</li>
				<li>
					<Link to='/examples/'>examples</Link>
				</li>
				<li>
					<Link to='/images/'>images</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
