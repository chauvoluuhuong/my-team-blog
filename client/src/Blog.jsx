import React, { useState, useEffect, useContext, useRef } from 'react';
import useStyles from './BlogStyle'
import ReactHtmlParser from 'react-html-parser';

const Blog = () => {
    const [pageDetailContent, setPageDetailContent] = useState()
    const classes = useStyles()

    useEffect(()=>{
        fetch(`/api/getBlogByDate${window.location.search}`)
            .then(r=>(r.json()))
            .then(blog=>{
                console.log('blog get: ', blog)
                setPageDetailContent(blog)
            })

        return () => {

        }
    }, [])

    return (
            <div className={classes.blogDetailContainer}>
                <div className={classes.blogTitile}>
                    {pageDetailContent ? ReactHtmlParser(pageDetailContent.title) : null}
                </div>
                <div className={classes.blogContent}>
                    {pageDetailContent ? ReactHtmlParser(pageDetailContent.content) : null}
                </div>
            </div>)
}

export default Blog