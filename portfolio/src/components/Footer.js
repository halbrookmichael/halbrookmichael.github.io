import '../styles/footer.scss'

const Footer = (props) => {
	return (
		<section id="footer">
			<div className="footer-content">
				<p className="email">Email: <span>halbrookmichael@gmail.com</span></p>
				<p className="copyright">&copy; Altered Pixels. All rights reserved.</p>
				{/* <div className="social">* * * *</div> */}
				<p className="phone">Phone: <span>509.771.1384</span></p>
			</div>
		</section>
	)
}

export default Footer;