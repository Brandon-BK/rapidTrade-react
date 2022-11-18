import React, { Fragment } from 'react'
import classes from './Layout.module.css'
import MainNavigationOne from './MainNavigation1'

const Layout = (props) => {
  return (
    <Fragment>
        <MainNavigationOne/>
        <main className={classes.main}>
            {props.children}  
        </main>
    </Fragment>
  )
}

export default Layout