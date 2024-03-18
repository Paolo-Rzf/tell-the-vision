import HomePage from "./HomePage"
import Nav from "components/Nav"
import 'components/i18n'; // Initialize i18next

function App() {

  return (
    <div className="App">
      <Nav />
      <HomePage />
    </div>
  )
}

export default App
