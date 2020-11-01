import React, { FC } from 'react'
import '../css/style.css'

type Props = {
    setGameStatus: any;
}

const WelcomeCard: FC<Props> = ({ setGameStatus }) => {

    return (
        <div className="welcome-container">
            <h3 id='welcome'>Welcome to the Quiz App</h3>
            <button className="wc-btn-styling" onClick={() => setGameStatus(true)}>Play</button>
        </div >
    )
}

export default WelcomeCard