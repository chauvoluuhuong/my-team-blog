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

const InterestingThings = () => {
    const [transparentHeaderLevel, setStransparentHeaderLevel] = useState(1)
    const [blogs, setBlogs] = useState([])
    const classes = useStyles({opacity: transparentHeaderLevel});
    
    const renderBlogBriefs = () => {
        return blogs.map(blog=>{
            return (
                    <div className={classes.blogBrief}>
                        <a className={classes.blogBriefTitle} href={`/DetailContent?date=${blog.date}`}>
                            {ReactHtmlParser(blog.title)}
                        </a>
                        <div className={classes.blogBriefContent}>
                             {ReactHtmlParser(blog.brief)}
                             {/* what is this */}
                        </div>
                    </div>       
                )
        })
    }

    useEffect(()=>{
        // console.log("page refresh>>>>>>>>compenet will mount")

        window.addEventListener('scroll', (e)=>{
            if(window.scrollY > 10) {
                setStransparentHeaderLevel(window.scrollY/100)
            } else {
                setStransparentHeaderLevel(1)
            }
        })

        async function fetchData() {
            let newestBlog = null
            newestBlog = await fetch(`/api/getLatestBlog`)
                                        .then(r => (r.json()))
                                        .then(data => (data))

            console.log("newestBlog: ", newestBlog)        
            let _blogs = await fetch(`/api/getBlogsBeforeDate?date=${newestBlog.date}`)
                                    .then(r=>(r.json()))
                                    .then(blogs=> (setBlogs(blogs)))
        }

        fetchData()

        return () => {

        }
    },[])

    const renderHeader = (    
            <div>
                <head>
                    <title>My Blog</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </head>
                    <img src="/static/headerImg.jpg"  className={classes.headerImg}></img>
                <OurAppBar />
            </div>
      )

      const  renderInterestingThings = () => {
          if(window.location.pathname === '/') {
              return (
                <>
                    {renderHeader}
                    <div className={classes.blogBriefsContainer}>
                        {renderBlogBriefs()}
                    </div>
                </>
            )
          }
      }
    
    return (
        <>
            {renderInterestingThings()}
        </>
    )
}

export default InterestingThings