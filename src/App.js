import React, { useContext, Suspense } from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router, Redirect } from '@reach/router'
import { Navbar } from './components/Navbar'
import { Context } from './Context'
import { Spinner } from './styles/animations'

const Home = React.lazy(() => import('./pages/Home'))
const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))

const App = () => {
  const { isAuth } = useContext(Context)
  console.log(Home)
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <GlobalStyle />
        <Logo />
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:categoryId' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <NotRegisteredUser path='/login' />}
          {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
          {!isAuth && <Redirect from='/user' to='/login' noThrow />}
          {isAuth && <Redirect from='/login' to='/' noThrow />}
          <Favs path='/favs' />
          <User path='/user' />
        </Router>
        <Navbar />
      </Suspense>
    </>
  )
}

export default App
