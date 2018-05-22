import React, { Component } from 'react'
import Header from './components/header/Header'
import Main from './components/Main'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
