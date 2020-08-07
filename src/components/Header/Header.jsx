import React, { useState } from 'react'

import { NavLinks } from '../../UI/NavLinks/NavLinks';

import classes from './Header.module.css'

export const Header = (props) => {
    const [ showLinks, setShowLinks ] = useState(false)

    const closeNavHandler = () => {
        setShowLinks(false)
    }

    let navLinks = null
    if (showLinks) {
        navLinks = <NavLinks 
            closed={closeNavHandler}
        />
    }

    return (
        <div className={classes.header}>
           <div className={classes.logo}>
               <div>Logo</div>
            </div>
           <div 
            className={classes.info}
            onClick={() => setShowLinks(true)}> 
                <div></div>
                <div></div> 
                <div></div>
           </div>
            {navLinks}
        </div>
    )
}
