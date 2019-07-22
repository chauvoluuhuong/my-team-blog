import React, { useState, useEffect, useContext, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ReactHtmlParser from 'react-html-parser';

import OurAppBar from './OurAppBar';
import About from './About'
import Blog from './Blog'
import useStyles from './BlogStyle'
import RootPage from './RootPage'

const App = () => {
    return (
        <>
            {window.location.pathname !== '/' ? <OurAppBar /> : null}
            <Router>
                <Route path='/' component={RootPage} />
                <Route path="/About" component={About} />
                <Route path="/DetailContent" component={Blog} />
            </Router>
        </>
    )
}

export default App