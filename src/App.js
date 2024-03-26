import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import './App.scss'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/movie/:imdbID' exact element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
