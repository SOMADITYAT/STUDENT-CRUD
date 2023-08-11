import React from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FormLists from './components/FormLists';
import EditFormList from './components/EditFormList';

const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/form'  Component={Form}/>
            <Route path='/details'  Component={FormLists}/>
            <Route path='/edit/:index'  Component={EditFormList}/>
        </Routes>
    </Router>
  )
}

export default App
