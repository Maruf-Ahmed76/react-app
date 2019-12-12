import React from "react"

const Super = (WarperComponent) => {
    let color = ["red","green","blue","black"];
    let rndmColor = color[Math.floor(Math.random()*4)];
    let selectColor = rndmColor+"-text";
    return(props) => {
        return (
            <div className={selectColor}>
                <WarperComponent {...props}/>
            </div>
        )
    }
    
}
export default Super;