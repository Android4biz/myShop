// import React from 'react'
import Navbar from './components/navbar/Navbar'
// import NoMatch from './components/nomatch/NoMatch'
import style from './App.module.scss'
// import {
//   Routes,
//   Route
// } from 'react-router-dom'

function App(): JSX.Element {

  return (
    <div className={style.app}>
      <Navbar/>
      {/* <Routes>
        <Route path="*" element={<NoMatch/>}/>
      </Routes> */}
    </div>
  )
}

export default App
