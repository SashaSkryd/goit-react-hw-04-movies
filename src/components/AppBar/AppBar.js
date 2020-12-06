import React from "react"
import Navigation from '../Navigation/Navigation.js'

const AppBar = ({children}) => (
  <div className="layout">
    <Navigation />
    {children}
  </div>
)
export default AppBar
