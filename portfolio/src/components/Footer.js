import '../styles/footer.scss'

import ScrollAnimation from 'react-animate-on-scroll'

import BSIDE from '../img/b-side.png';
import WHWF from '../img/whwf_logo.webp';
import GM from '../img/greatmats.svg';

const Footer = (props) => {
	return (
    <div id="footer-container">
      <section id="logos">
        <ScrollAnimation animateIn='animate__fadeInLeft' animateOnce={true} delay={200}>
          <div className="company-logos-container">
            <div className="company-logos container">
              <div className="logo">
                <a href="https://www.bsideboardgamesandpuzzles.com/" target="_blank" rel="noreferrer"><img src={BSIDE} alt="B-Side logo"/></a>
              </div>
              <div className="logo">
                <a href="https://www.whwfspokane.org/" target="_blank" rel="noreferrer"><img src={WHWF} alt="WHWF logo"/></a>	
              </div>
              <div className="logo">
                <a href="https://www.greatmats.com/" target="_blank" rel="noreferrer"><img src={GM} alt="WHWF logo"/></a>	
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
      <section class="footer">
        <div className="footer-content">
          <p className="email">Email: <a href="mailto:info@altered-pixels.tech">info@altered-pixels.tech</a></p>
          <p className="copyright">&copy; Altered Pixels. All rights reserved.</p>
          <p>Phone: <a className="phone" href="tel:509-771-1384"><span>509.771.1384</span></a></p>
        </div>
      </section>
    </div>
	)
}

export default Footer;