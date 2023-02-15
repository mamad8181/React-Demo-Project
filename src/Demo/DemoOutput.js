import React from "react";
import MyP from "./MyP";


const DemoOutput = (props) => {

    console.log('DEMO RUNNING')

    return(
        <MyP>{props.show ? 'this is new' : ''}</MyP>
    )
}

export default React.memo(DemoOutput); 