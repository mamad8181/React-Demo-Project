import React from "react"


const MyP = (props) => {

    console.log('MYP RUNNING')

    return(
        <p>{props.children}</p>
    )
}

export default MyP