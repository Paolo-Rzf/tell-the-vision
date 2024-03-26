import HomePage from "./HomePage"
import Nav from "components/Nav"
import DynamicCircle from "components/DynamicCircle";
import 'components/i18n'; // Initialize i18next

function App() {

  return (
    <div className="App overflow-x-hidden">
      <Nav />
      <HomePage />
      <DynamicCircle />
    </div>
  )
}

export default App
