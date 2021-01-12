import React from 'react';

import NavItem from '../components/NavItem';

import '../styles/footer.scss'

 const Footer = (props) => {
	return (
		<section id="footer">
			<div className="footer-content">
				<p className="copyright">&copy; Michael Halbrook</p>
				<p className="email">halbrookmichael@gmail.com</p>
				<div className="social">* * * *</div>
			</div>
		</section>
	)
}

export default Footer;