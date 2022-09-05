import React from 'react'
import Login from './Components/Login/Login'
import Header from './Components/Login/Header'
import Home from './Components/Login/Home'
import Detail from './Components/Login/Detail'
// import Footer from './Components/Login/Footer'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/detail/:id" component={Detail}/>
        <Redirect to="/"/>
      </Switch>
      {/* <Footer/> */}
    </Router>
    </>
  )
}

export default App