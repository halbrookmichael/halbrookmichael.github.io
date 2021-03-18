import '../styles/footer.scss'

const Footer = (props) => {
	return (
		<section id="footer">
			<div className="footer-content">
				<p className="email">Email: <a href="mailto:info@altered-pixels.tech">info@altered-pixels.tech</a></p>
				<p className="copyright">&copy; Altered Pixels. All rights reserved.</p>
				<p>Phone: <a className="phone" href="tel:509-771-1384"><span>509.771.1384</span></a></p>
			</div>
		</section>
	)
}

export default Footer;