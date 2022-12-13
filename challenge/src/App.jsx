
import { Article } from './components/Article'
import { Home } from './components/Home'
import { Summary } from './components/Summary'
import { selectReducer } from './context/selectReducer'
import { inicialState } from './context/selectReducer'
import { TYPES } from './actions/selectActions'
import { UserProvider } from './context/UserProvider'


function App() {
  

  return (
    <>
    <UserProvider>
      <Home/>
    </UserProvider>
    </>
  )
}

export default App
