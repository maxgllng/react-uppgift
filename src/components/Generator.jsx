
import Smiley from '../images/smiley.png'

export default function Generator() {
    return (
        <main>
            <div className="generator">
                <img src={Smiley} alt="happyface" className="smiley" />
                <p className="affirmation">You are doing a great job.</p>
                <button className="generate--btn">Generate</button>
            </div>
        </main>
    )
}