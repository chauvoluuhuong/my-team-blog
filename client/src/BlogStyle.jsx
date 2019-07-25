import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
    ////////////////////NAVBAR
    AppBar: {
        // marginTop: '20px'
        // height: '100px'
        // backgroundColor: 'hsl(180, 100%, 95%)'
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff'
    },

    toolBarTitle: {
        color: '#000000',
        "marginTop":"1.33em",
        "marginBottom":"1.33em",
        "marginLeft":"0",
        "marginRight":"0",
        "fontWeight":"bold",
        '&:hover': {
            // background: "#4287f5"
        }
    },
    ////////////////////NAVBAR
    blogBriefsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    
    blogBrief: {
        marginTop: "50px",
        maxWidth: "800px"
    },

    blogBriefContent: {
        display: 'block',
        alignItems: 'flex-start',
        flexFlow: 'column wrap',
        maxWidth: "800px"
    },

    blogBriefTitle: {
    "color":"#000000",
    "display":"flex",
    "fontSize":"4rem",
    "fontFamily":"'CircularStd',sans-serif",
    "lineHeight":"1.2em"
    ,"justifyContent":"center"
    },

    blogDetailContainer: {
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    blogTitile: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "Rubik",
        fontSize: "56px",
        fontWeight: "700"
    },  

    blogContent: {
    },

    headerImg: props => ({
        opacity: 1/props.opacity,
        width: "100%"
    })
})

const useStylesBlogDetailPage = makeStyles({

})

export default useStyles