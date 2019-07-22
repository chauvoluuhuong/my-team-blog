import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
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
        '&:hover': {
            background: "#4287f5"
        }
    },

    blogBriefsContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    
    blogBrief: {
        marginTop: "50px"
    },

    blogBriefContent: {
        display: 'flex',
        // alignItems: 'center',
        flexDirection: 'column',
    },

    blogBriefTitle: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "Rubik",
        fontSize: "56px",
        fontWeight: "700",
        color: '#000000'
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
        opacity: 1/props.opacity
    })
})

const useStylesBlogDetailPage = makeStyles({

})

export default useStyles