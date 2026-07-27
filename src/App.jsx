import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import FlightsPage from './pages/FlightsPage'
import AboutPage from './pages/AboutPage'
import PackagesPage from './pages/PackagesPage'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import './App.css'
import Floating3DBackground from "./Floating3DBackground";

export default function App() {
  const [currentPage, setCurrentPage]   = useState(
    () => sessionStorage.getItem('sw_page') || 'home'
  )
  const [searchParams, setSearchParams] = useState(null)
  const [pendingSearch, setPendingSearch] = useState(null)
  const [currentUser, setCurrentUser]   = useState(
    () => JSON.parse(localStorage.getItem('currentUser')) || null
  )

  useEffect(() => {
    const protectedPages = ['flights', 'packages']
    if (protectedPages.includes(currentPage) && !currentUser) {
      sessionStorage.setItem('sw_page', 'login')
      window.history.replaceState({ page: 'login' }, '')
      setCurrentPage('login')
    }
  }, [currentPage, currentUser])

  useEffect(() => {
    const savedPage = sessionStorage.getItem('sw_page') || 'home'
    window.history.replaceState({ page: savedPage }, '')

    const handlePopState = (e) => {
      if (!e.state) {
        // went back before app history — anchor to home
        window.history.pushState({ page: 'home' }, '')
        setCurrentPage('home')
        sessionStorage.setItem('sw_page', 'home')
        return
      }
      const page = e.state.page || 'home'
      setCurrentPage(page)
      sessionStorage.setItem('sw_page', page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const goTo = (page) => {
    const protectedPages = ['flights', 'packages']
    if (protectedPages.includes(page) && !currentUser) {
      sessionStorage.setItem('sw_page', 'login')
      window.history.pushState({ page: 'login' }, '')
      setCurrentPage('login')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    sessionStorage.setItem('sw_page', page)
    window.history.pushState({ page }, '')
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleSearch(data) {
    if (!currentUser) {
      // login nahi → search data save karo, login page par bhejo
      setPendingSearch(data)
      goTo('login')
      return
    }
    setSearchParams(data)
    goTo('flights')
  }

  function handleLogin(user) {
    localStorage.setItem('currentUser', JSON.stringify(user))
    setCurrentUser(user)

    // agar login se pehle search karna chahta tha → seedha flights par
    if (pendingSearch) {
      setSearchParams(pendingSearch)
      setPendingSearch(null)
      goTo('flights')
    } else {
      goTo('home')
    }
  }

  function handleLogout() {
    localStorage.removeItem('currentUser')
    setCurrentUser(null)
    sessionStorage.setItem('sw_page', 'home')
    window.history.pushState({ page: 'home' }, '')
    setCurrentPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={goTo}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {currentPage === 'home'     && <Home onSearch={handleSearch} />}
      {currentPage === 'flights'  && <FlightsPage searchParams={searchParams} currentUser = {currentUser} goToLogin = {() => goTo('login')} />}
      {currentPage === 'about'    && <AboutPage />}
      {currentPage === 'packages' && <PackagesPage />}
      {currentPage === 'login'    && <LoginPage  onLogin={handleLogin}  goToSignup={() => goTo('signup')} />}
      {currentPage === 'signup'   && <SignupPage onSignup={handleLogin} goToLogin={() => goTo('login')}   />}

      <Footer />
    </div>
  )
}
