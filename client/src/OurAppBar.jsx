import React, { useState, useEffect, useContext, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import useStyles from "./BlogStyle"

const OurAppBar  = () => {
    const classes = useStyles()
    return (
         <AppBar color="default" position="static" className={classes.AppBar}>
                    <Toolbar className={classes.toolBar}>
                        <Link href='/' className={classes.toolBarTitle}>
                                The Interesting Things
                        </Link>
                                        
                        <Link href='/' className={classes.toolBarTitle}>
                                Our Projects
                        </Link>
                        
                        <Link className={classes.toolBarTitle} href='/About'>
                                Let's Coffe  :)
                        </Link>
                </Toolbar>
        </AppBar>
    )
}

export default OurAppBar