import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticleLististPage from './pages/ArticleLististPage'
import Home from './pages/Home'
import NavBar from './NavBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

    <div className="App">
    <NavBar  />
    <div id="page-body">
      <Routes>
        <Route path='/' element={<Home  />}  />
        <Route path='about' element={<AboutPage  />}  />
        <Route path='articles' element={<ArticleLististPage  />}  />
        <Route path='articles/:articleId' element={<ArticlePage  />}  />
        <Route path='*' element={
          <h1>404: Page Not Found</h1>
        }  />
      </Routes>
    </div>

    </div>
    
      

    </BrowserRouter>
  
  )
}

export default App
