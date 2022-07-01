import logo from './../../Assets/logo.svg'
import a from './../../Assets/a.svg'
import disc from './../../Assets/disc.svg'
import twitter from './../../Assets/twitter.svg'
import insta from './../../Assets/instagram.svg'
import logo_white from './../../Assets/logo_white.svg'
import "./footer.css"


function FooterComp(){
  return ( 
    <footer id="sticky-footer" class="flex-shrink-0 py-4" className="footer">

        <div className="upper-box">
            <div className="upper-box-logo">
                <img src={logo_white} alt="logo" className="logo" />
            </div>

            <div className="upper-box-text">
                <text className= "upper-box-text-text">
                    Code of Conduct     
                </text>
                <text  className= "upper-box-text-text">
                    Privacy Policy
                </text>
            </div>

        </div>
        <div className="lower-box">
            <text className="lower-box-text">
                Pictures from <span className="lower-box-text-underlined">Streamline</span>
            </text>
        </div>
    </footer>
  )
}

export default FooterComp
