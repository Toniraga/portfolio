import React, {useEffect, useState, useContext } from 'react'
import { Redirect } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState'

const Failed = () => {
    const [ redirect, setRedirect ] = useState(false)
    const { redirected } = useContext(GlobalContext);

    useEffect(() => {
        let isMounted =  true
        if (isMounted) {
            setTimeout(() => {
                setRedirect(true)
                redirected()
            }, 5000);
        }
        return () => isMounted = false
    }, [redirected])

    let redirecting = (
        <div style={{
            backgroundColor: "#fff",
            boxShadow: "1px 3px 5px #ccc",
            padding: "15px",
            color: '#777'
        }}> 
            <h1> SORRY, LET'S HAVE ANOTHER GO SHALL WE?... </h1>
        </div>
    )
    if (redirect) {
        redirecting = <Redirect exact to="/" />
    }


    return redirecting
}

export default Failed