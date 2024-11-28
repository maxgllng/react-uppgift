
import { useState, useEffect } from 'react';
import Smiley from '../images/smiley.png'
import '../styles/generator.css';

export default function Generator() {
    const [affirmationsData, setAffirmationsData] = useState(null)

    const getAffirmation = async () => {
        const response = await fetch("http://localhost:8000/affirmations");
        const data = await response.json();
        const randomAffirmation = data[Math.floor(Math.random() * data.length)];
        setAffirmationsData(randomAffirmation);
    };

    return (

        <div className="generator">
            <img src={Smiley} alt="happyface" className="smiley" />
            {affirmationsData ? (
                <p className="affirmation">{affirmationsData.text}</p>
            ) : (
                <h4 className="start--text">Click the button to generate an affirmation</h4>
            )}
            <button className="generate--btn" onClick={getAffirmation}>Generate</button>
        </div>

    )
}