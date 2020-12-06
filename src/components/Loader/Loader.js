import React from "react"
import { LoaderContainer } from "./Loader.styles"

const Loader = () => (
  <LoaderContainer>
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </LoaderContainer>
)

export default Loader
