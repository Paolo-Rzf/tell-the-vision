import HomePage from "./HomePage"
import Nav from "components/Nav"
import DynamicCircle from "components/DynamicCircle";
import 'components/i18n'; // Initialize i18next
import { useState } from "react";
import Intro from "components/Intro";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <>
      {
        !isStarted ? <Intro onStart={() => { setIsStarted(true) }} /> : <div className="App overflow-x-hidden">
          <Nav />
          <HomePage />
          <DynamicCircle />
        </div>
      }
    </>
  )
}

export default App
