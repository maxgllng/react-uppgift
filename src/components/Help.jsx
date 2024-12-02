import Headspace from '../images/headspace-logo.png'
import Calm from '../images/calm-logo.png'
import Betterhelp from '../images/betterhelp-logo.png'
import '../styles/help.css';

export default function Help(props) {
    return (
        <div className="network--wrapper">
            <div className="logo--wrapper">
                <img src={props.img} alt={props.alt} />
            </div>
            <div className="text--wrapper">
                <h3>{props.title}</h3>
                <p>{props.info}</p>
            </div>
        </div>)

}