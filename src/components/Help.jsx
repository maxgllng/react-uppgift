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
                    <p>Headspace is your lifelong guide to better mental health. Through evidence-based meditation and mindfulness tools, sleep resources, mental health coaching, and more, Headspace helps you create life-changing habits to support your mental health and find a healthier, happier you.</p>
                </div>
            </div>
            <div className="calm--wrapper">
                <div className="logo--wrapper">
                    <img src={Calm} alt="Calm-Logo" />
                </div>
                <div className="text--wrapper">
                    <h3>Calm</h3>
                    <p>Calm is the #1 mental health app designed to help you manage stress, sleep better, and live a happier, healthier life. Our research-based tools help you build life-changing habits to support your mental health. If you're having trouble falling asleep, our 500+ Sleep Stories®, soundscapes, and guided sleep meditations can lull you to sleep.</p>
                </div>
            </div>
            <div className="betterhelp--wrapper">
                <div className="logo--wrapper">
                    <img src={Betterhelp} alt="Better Help-Logo" />
                </div>
                <div className="text--wrapper">
                    <h3>Better Help</h3>
                    <p>BetterHelp was founded in 2013 to remove the traditional barriers to therapy and make mental health care more accessible to everyone. Today, it is the world's largest therapy service — providing professional, affordable, and personalized therapy in a convenient online format. </p>
                </div>
            </div>
        </div>
    )
}