import React from "react";
import Super from "../hoc/super"
const About = () => {
    return(
        <div className="container">
            <h1 className="center">About</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolorum officia blanditiis ut unde inventore quidem repellendus odit quod reprehenderit sint minus ea eius nulla voluptas! Placeat vitae sint earum?</p>
        </div>
    )
}
export default Super(About);