import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <div>
            <div className="container d-flex justify-content-center">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        </div>
    )
}
