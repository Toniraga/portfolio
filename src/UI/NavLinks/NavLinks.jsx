import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

import classes from './NavLinks.module.css';

const NavLink = props => {
    return (
        <Link 
            to={props.link}
            onClick={() => props.closed()}
        > {props.linkName} </Link>
    )
}


export const NavLinks = (props) => {
    const { authenticated } = useContext(GlobalContext)
    const { closed } = props

    let links = (
        <NavLink 
          link="/" 
          linkName="HOME"
          closed={closed} />
    )
    if (authenticated) {
        links = (
            <React.Fragment>
                <NavLink 
                    link="/portfolio" 
                    linkName="HOME"
                    closed={closed} />
                <NavLink 
                    link="/projects"  
                    linkName="PROJECTS"
                    closed={closed} />
                <NavLink 
                    link="/about"
                    linkName="ABOUT"
                    closed={closed} />
                <NavLink 
                    link="/contact"
                    linkName="CONTACT"
                    closed={closed} />
            </React.Fragment>
		);
    }

    return (
        <div 
          className={classes.backdrop}
          onClick={() => closed()}>
            <div className={classes.links}>
                {links}
            </div>
        </div>
	);
}
