import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UserForm from './pages/UserForm'
import History from './pages/History'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'
import UserInputs from './components/UserInputs'


function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<UserForm/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
