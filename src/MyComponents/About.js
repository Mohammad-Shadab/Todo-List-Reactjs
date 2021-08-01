import React from 'react'

export const About = () => {
    let myStyle={
        minHeight : "70vh",
        margin : "50px auto" ,
        textAlign :"center"

    }
    let h3 ={
        color : "#66b3ff",
        
    }
    return (
        <div className="container" style ={myStyle}>
            
           
            <h3 style={h3}>About this App</h3>
            <p>
            This React App is developed my Mohd. Shadab</p>
        </div>
    )
}
