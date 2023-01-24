
import { Home } from './components/Home'
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
