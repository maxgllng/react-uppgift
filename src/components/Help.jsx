import Headspace from '../images/headspace-logo.png'
import Calm from '../images/calm-logo.png'
import Betterhelp from '../images/betterhelp-logo.png'
import '../styles/help.css';

export default function Help(props) {

    const handleClick = () => {
        window.open(props.url, '_blank');
    };

    return (
        <>
            <article className="network--wrapper">
                <div className="logo--wrapper">
                    <img src={props.img} alt={props.alt} onClick={handleClick} />
                </div>
                <div className="text--wrapper">
                    <h3 onClick={handleClick}>{props.title}</h3>
                    <p onClick={handleClick}>{props.info}</p>
                </div>
            </article>
        </>)

}