import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Help from '../components/Help'
import Headspace from '../images/headspace-logo.png'
import Calm from '../images/calm-logo.png'
import Betterhelp from '../images/betterhelp-logo.png'

export default function Networks() {
    return (
        <div>
            <Navbar />
            <div className="help--wrapper">
                <h2>Discover Help Networks</h2>
                <Help img={Headspace} title="Headspace" alt="Headspace-Logo" info="Headspace is your lifelong guide to better mental health. Through evidence-based meditation and mindfulness tools, sleep resources, mental health coaching, and more, Headspace helps you create life-changing habits to support your mental health and find a healthier, happier you." />
                <Help img={Calm} title="Calm" alt="Calm-Logo" info="Calm is the #1 mental health app designed to help you manage stress, sleep better, and live a happier, healthier life. Our research-based tools help you build life-changing habits to support your mental health. If you're having trouble falling asleep, our 500+ Sleep Stories®, soundscapes, and guided sleep meditations can lull you to sleep." />
                <Help img={Betterhelp} title="Better Help" alt="Better Help-Logo" info="BetterHelp was founded in 2013 to remove the traditional barriers to therapy and make mental health care more accessible to everyone. Today, it is the world's largest therapy service — providing professional, affordable, and personalized therapy in a convenient online format." />
            </div>
            <Footer />
        </div>
    )
}