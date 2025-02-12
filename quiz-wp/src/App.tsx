import Header from './components/layout/Header'
import {Routes, Route} from 'react-router-dom'
import QuizList from './components/quiz/QuizList'
import './App.css'

function App() {


  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<QuizList/>} />
    </Routes>
    </>
  )
}

export default App
