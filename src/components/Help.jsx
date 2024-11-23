import Headspace from '../images/headspace-logo.png'
import Calm from '../images/calm-logo.png'
import Betterhelp from '../images/betterhelp-logo.png'
import '../styles/help.css';

export default function Help() {
    return (
        <div className="help--wrapper">
            <h2>Discover Help Networks</h2>
            <div className="headspace--wrapper">
                <div className="logo--wrapper">
                    <img src={Headspace} alt="Headspace-Logo" />
                </div>
                <div className="text--wrapper">
                    <h3>Headspace</h3>
                    <a href="https://www.headspace.com/">Take me to their website</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quos.  </p>
                </div>
            </div>
            <div className="calm--wrapper">
                <div className="logo--wrapper">
                    <img src={Calm} alt="Calm-Logo" />
                </div>
                <div className="text--wrapper">
                    <h3>Calm</h3>
                    <a href="https://www.calm.com/">Take me to their website</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quos.  </p>
                </div>
            </div>
            <div className="betterhelp--wrapper">
                <div className="logo--wrapper">
                    <img src={Betterhelp} alt="Better Help-Logo" />
                </div>
                <div className="text--wrapper">
                    <h3>Better Help</h3>
                    <a href="https://www.betterhelp.com/">Take me to their website</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quos.  </p>
                </div>
            </div>
        </div>
    )
}