// import React from 'react'
// import { graphql } from 'gatsby'
// import get from 'lodash/get'
// import Helmet from 'react-helmet'
// import Hero from '../components/hero'
// import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'

// class RootIndex extends React.Component {
//   render() {
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title')
//     const posts = get(this, 'props.data.allContentfulBlogPost.edges')
//     const [author] = get(this, 'props.data.allContentfulPerson.edges')

//     return (
//       <Layout location={this.props.location}>
//         <div style={{ background: '#fff' }}>
//           <Helmet title={siteTitle} />
//           <Hero data={author.node} />
//           <div className="wrapper">
//             <h2 className="section-headline">Recent articles</h2>
//             <ul className="article-list">
//               {posts.map(({ node }) => {
//                 return (
//                   <li key={node.slug}>
//                     <ArticlePreview article={node} />
//                   </li>
//                 )
//               })}
//             </ul>
//           </div>
//         </div>
//       </Layout>
//     )
//   }
// }

// export default RootIndex

// export const pageQuery = graphql`
//   query HomeQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//     allContentfulPerson(
//       filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
//     ) {
//       edges {
//         node {
//           name
//           shortBio {
//             shortBio
//           }
//           title
//           heroImage: image {
//             fluid(
//               maxWidth: 1180
//               maxHeight: 480
//               resizingBehavior: PAD
//               background: "rgb:000000"
//             ) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `








import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ListItemText, Avatar, LinearProgress, Hidden, Grid, Paper, Box, Card, CardContent, CardActions, Button, CardActionArea, CardMedia, GridList, GridListTile, ListSubheader, GridListTileBar } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


const drawerWidth = 320;

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#00a1a7"
        },
        secondary: {
            main: "#e3306d"
        }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "white",
        color: "black"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: "url(https://www.setaswall.com/wp-content/uploads/2018/01/Dark-Grey-Wallpaper-22-1600x1024.jpg)",
        // backgroundColor: "#444851",
        color: "white"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    avatarSize: {
        width: theme.spacing(16),
        height: theme.spacing(16),
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },



    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    cover: {
        width: 151,
    },


}));


const BorderLinearProgress = withStyles({
    root: {
        height: 12,
        backgroundColor: lighten('#1d77aa', 0.5),
        borderRadius: "15px",
        width: "87%",
        marginRight: 5
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#1d77aa',
    },
})(LinearProgress);

const BorderLinearProgressSkills = withStyles({
    root: {
        height: 17,
        backgroundColor: lighten('#00a1a7', 0.5),
        borderRadius: "15px",
        width: "93%",
        marginRight: 5
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#00a1a7',
    },
})(LinearProgress);

export default function RootIndex() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const [focus, setFocus] = useState([
        { id: 0, title: "Programming", value: 85 },
        { id: 1, title: "Database Management", value: 90 },
        { id: 2, title: "Software Development", value: 90 },
        { id: 3, title: "Web Design", value: 75 },
        { id: 4, title: "Teamwork", value: 95 },
        { id: 5, title: "Software Testing", value: 80 },
    ]);

    const [technologies, setTechnologies] = useState([
        { id: 0, title: "Javascript", src: require("../images/skills/JAVASCRIPT.jpg") },
        { id: 1, title: "ReactJS", src: require("../images/skills/REACTJS.jpg") },
        { id: 2, title: "jQuery", src: require("../images/skills/JQUERY.jpg") },
        { id: 3, title: "HTML", src: require("../images/skills/HTML5.jpg") },
        { id: 4, title: "CSS", src: require("../images/skills/CSS3.jpg") },
        { id: 5, title: "Docker", src: require("../images/skills/DOCKER.jpg") },
        { id: 6, title: "NodeJS", src: require("../images/skills/NODEJS.jpg") },
        { id: 7, title: "PostgreSQL", src: require("../images/skills/POSTGRESQL.jpeg") },
    ]);

    const [skills, setSkills] = useState([
        { id: 0, title: "Javascript", value: 90 },
        { id: 1, title: "ReactJS", value: 93 },
        { id: 2, title: "jQuery / VanillaJS", value: 80 },
        { id: 3, title: "HTML", value: 90 },
        { id: 4, title: "CSS", value: 90 },
        { id: 5, title: "Docker", value: 87 },
        { id: 6, title: "NodeJS", value: 95 },
        { id: 7, title: "PostgreSQL", value: 90 },
        { id: 8, title: "AWS", value: 40 },
        { id: 9, title: "PHP", value: 75 },
        { id: 10, title: "mySQL", value: 85 },
        { id: 11, title: "Socket.IO", value: 80 },
        { id: 12, title: "Git", value: 90 },
        { id: 13, title: "Cypress", value: 85 },
    ])

    const drawerDisplay = () => (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{
                paper: classes.drawerPaper,
            }}

        >
            <div
                style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: 20 }}
            >
                <Avatar alt="Remy Sharp" src="http://dev.partners.inc/static/8ffdc777ce62105dfa4d809112644477/bc3a8/kHbE36dpcRRmx5FzaZYI7t.jpg" className={classes.avatarSize} />
                <Typography variant="subtitle1"><b>ROMEO AARON C. LUMIBAO I</b></Typography>
                <Typography variant="subtitle1">JUNIOR DEVELOPER</Typography>
            </div>

            <Divider style={{ marginTop: "10px" }} />

            <div style={{ padding: 20 }}>
                <Typography variant="h6" style={{ textAlign: "center", textDecoration: "underline", textUnderlinePosition: "under" }}>ABOUT</Typography>
                <Typography variant="subtitle2" style={{ textAlign: "justify" }}>I am a software developer who's passion is learning new things. I enjoy engaging with challenging projects which improves my skills and pushes me to go out of my comfort zone.</Typography>


                <Typography variant="h6" style={{ textAlign: "center", textDecoration: "underline", textUnderlinePosition: "under", marginTop: 15 }}>FOCUS</Typography>
                {focus.map(focus => (
                    <div key={focus.id} style={{ margin: "1px 0" }}>
                        <Typography variant="subtitle2">{focus.title}</Typography>
                        {/* <LinearProgress variant="determinate" value={skill.value} style={{ color: "white" }} style={{ height: 10 }} /> */}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <BorderLinearProgress variant="determinate" value={focus.value} /><span>{focus.value}%</span>
                        </div>
                    </div>
                ))}

                <Typography variant="h6" style={{ textAlign: "center", textDecoration: "underline", textUnderlinePosition: "under", marginTop: 25 }}>SOCIAL MEDIA</Typography>
                <div style={{ marginTop: 10 }}>
                    <Typography variant="subtitle2" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => window.open("https://www.facebook.com/romeoaaron21", "_blank")}>
                        <Avatar variant="square" style={{ marginRight: 10, height: 36, width: 36 }} src="https://i.pinimg.com/originals/30/99/af/3099aff4115ee20f43e3cdad04f59c48.png" />
                        <u>facebook.com/romeoaaron21</u>
                    </Typography>

                    <Typography variant="subtitle2" style={{ marginTop: 2, display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => window.open("https://www.instagram.com/romeoaaron21", "_blank")}>
                        <Avatar variant="square" style={{ marginRight: 10, height: 38, width: 38 }} src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png" />
                        <u>instagram.com/romeoaaron21</u>
                    </Typography>

                    <Typography variant="subtitle2" style={{ marginTop: 2, display: "flex", alignItems: "center", cursor: "pointer" }}>
                        <Avatar variant="square" style={{ marginRight: 10, height: 35, width: 35 }} src="https://image.flaticon.com/icons/png/512/281/281769.png" />
                        <u>lumibao.romeo@gmail.com</u>
                    </Typography>

                    <Typography variant="subtitle2" style={{ marginTop: 2, display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => window.open("https://www.linkedin.com/in/romeo-aaron-lumibao-i-57a054196", "_blank")}>
                        <Avatar variant="square" style={{ marginRight: 10, height: 36, width: 36 }} src=" https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Linkedin-512.png" />
                        <u>linkedin.com/romeo-aaron-lumibao</u>
                    </Typography>



                </div>

            </div>



        </Drawer>
    );





    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Hidden only={["xs", "sm"]}>
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: true,
                        })}
                        style={{ background: "#3e3e3e" }}
                    >
                        <Toolbar>
                            <Typography variant="h5" noWrap style={{ color: "white", fontWeight: 700 }}>PORTFOLIO</Typography>
                        </Toolbar>
                    </AppBar>

                    {drawerDisplay()}
                </Hidden>

                <Hidden only={["md", "lg"]}>
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: false,
                        })}
                        style={{ background: "#3e3e3e" }}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={() => setOpen(true)}
                                edge="start"
                                className={clsx(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon style={{ color: "white" }} />
                            </IconButton>
                            <Typography variant="h5" noWrap style={{ color: "white", fontWeight: 700 }}>PORTFOLIO</Typography>
                        </Toolbar>
                    </AppBar>

                    <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
                        {drawerDisplay()}
                    </Drawer>


                </Hidden>











                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: true,
                    })}
                // style={{padding:0}}
                >
                    <div className={classes.drawerHeader} />

                    <Box>

                        <Typography variant="h5" style={{ fontWeight: 700, color: "#00a1a7", marginBottom: 10, textAlign: "center" }}>PRIMARY TECHNOLOGIES & SKILLS</Typography>
                        <Grid container spacing={2}>

                            {technologies.map(tech => (
                                <>
                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <Card style={tech.title !== "PostgreSQL" ? { maxWidth: "100%", padding: 5 } : { maxWidth: "100%" }}>
                                            <CardMedia
                                                component="img"
                                                image={tech.src}
                                            />
                                            <Typography variant="h6" color="textSecondary" style={{ textAlign: "center" }}>
                                                <b>{tech.title}</b>
                                            </Typography>
                                        </Card>

                                    </Grid>
                                </>
                            ))}

                        </Grid>




                        <Grid container spacing={1} style={{ marginTop: 15 }}>
                            {skills.map((skill, i) => (
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <div key={skill.id} style={{ margin: "5px" }}>

                                        <div style={i % 2 > 0 ? { display: "flex", alignItems: "center", marginLeft: 15 } : { display: "flex", alignItems: "center", marginRight: 15 }}>
                                            <div style={{ width: "20%" }}>
                                                <Typography variant="subtitle2" style={{ fontWeight: 550 }}>{skill.title}</Typography>
                                            </div>
                                            <div style={{ width: "80%", display: "flex", justifyContent: "space-between" }}>
                                                <BorderLinearProgressSkills variant="determinate" value={skill.value} />
                                                <span>{skill.value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            )
                            )
                            }
                        </Grid>
                    </Box>

                    <Box style={{ marginTop: 15 }}>
                        <Typography variant="h5" style={{ fontWeight: 700, color: "#00a1a7", margin: "10px 0", textAlign: "center" }}>PROJECTS</Typography>


                        <Grid container spacing={1}>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Card>
                                    <CardActionArea>
                                        <GridList cellHeight={350} style={{ marginTop: -40 }}>
                                            <GridListTile key={"Trendy"} style={{ width: "100%" }}>
                                                <img src={require("../images/trendy/viewTrendy.png")} alt={"Trendy"} />
                                                <GridListTileBar
                                                    title={"Trendy"}
                                                    actionIcon={
                                                        <IconButton aria-label={`info about Trendy`}>
                                                            <InfoIcon />
                                                        </IconButton>
                                                    }
                                                />
                                            </GridListTile>
                                        </GridList>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Card>
                                    <CardActionArea>
                                        <GridList cellHeight={350} style={{ marginTop: -40 }}>
                                            <GridListTile key={"Trendy"} style={{ width: "100%" }}>
                                                <img src={require("../images/boomfit/dashboard.png")} alt={"Trendy"} />
                                                <GridListTileBar
                                                    title={"BoomFit"}
                                                    actionIcon={
                                                        <IconButton aria-label={`info about BoomFit`}>
                                                            <InfoIcon />
                                                        </IconButton>
                                                    }
                                                />
                                            </GridListTile>
                                        </GridList>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Card>
                                    <CardActionArea>
                                        <GridList cellHeight={350} style={{ marginTop: -40 }}>
                                            <GridListTile key={"Trendy"} style={{ width: "100%" }}>
                                                <img src={require("../images/trendy/viewTrendy.png")} alt={"Trendy"} />
                                                <GridListTileBar
                                                    title={"Trendy"}
                                                    actionIcon={
                                                        <IconButton aria-label={`info about Trendy`}>
                                                            <InfoIcon />
                                                        </IconButton>
                                                    }
                                                />
                                            </GridListTile>
                                        </GridList>
                                    </CardActionArea>
                                </Card>
                            </Grid>




                        </Grid>







                    </Box>

                </main>
            </ThemeProvider>
        </div>
    );
}
