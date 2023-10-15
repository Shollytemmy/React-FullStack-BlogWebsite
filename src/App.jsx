import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage'
import Article from './pages/Article'
import ArticleLististPage from './pages/ArticleLististPage'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

    <div className="App">
    <h1>My Awesome Blog</h1>
    <div className="page-body">
      <Routes>
        <Route path='/' element={<Home  />}  />
        <Route path='about' element={<AboutPage  />}  />
        <Route path='articles' element={<Article  />}  />
        <Route path='articles/:articleId' element={<ArticleLististPage  />}  />
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
