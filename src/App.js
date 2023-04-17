import React, {Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
// import Login from './views/login/Login'
// import Home from './layout/DefaultLayout'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers

const Loginn = React.lazy(() => import('./pages/login/Login'))
// const Login = React.lazy(() => import('./views/login/Login'))
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages

const App = () => {
 
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Regist" element={<Loginn />} />
            <Route  path="*" name="Home" element={<DefaultLayout />} />
            <Route exact path="login" element={<Loginn />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  
}

export default App
