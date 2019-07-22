import React, { useState, useEffect, useContext, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from "./BlogStyle"

const OurAppBar  = () => {
    const classes = useStyles()
    return (
         <AppBar color="default" position="static" className={classes.AppBar}>
                    <Toolbar className={classes.toolBar}>
                        <a href='/'>
                            <Typography variant="h6" className={classes.toolBarTitle}>
                                    The Interesting Things
                            </Typography>
                        </a>                    
                        
                        <a href='/'>
                            <Typography variant="h6" className={classes.toolBarTitle}>
                                Our Projects
                            </Typography>
                        </a>
                        
                        <a href='/About'>
                            <Typography variant="h6" className={classes.toolBarTitle}>
                                Let's Coffe  :)
                            </Typography>
                        </a>
                        
                </Toolbar>
        </AppBar>
    )
}

export default OurAppBar