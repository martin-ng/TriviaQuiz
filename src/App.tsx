import React, { useState } from 'react';
import "./css/App.styles.css"

// Components
import { WelcomeCard, TriviaCard } from './Components/index'

const App = () => {
  const [gameStatus, setGameStatus] = useState<boolean>(false)

  return (
    <div>
      {gameStatus ? <TriviaCard setGameStatus={setGameStatus} /> : <WelcomeCard setGameStatus={setGameStatus} />}
    </div>

  );
}

export default App;
