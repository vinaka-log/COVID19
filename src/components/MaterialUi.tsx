import React from 'react'
import {Button, makeStyles, Typography, Grid, Paper} from "@material-ui/core"
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    btnStyle: {
        background: "green",
        padding: "3px 50px",
    },
    typoStyle: {
        color: "blue",
    },
    paperStyle:{
        background: "orange",
        height: "50px"
    } 
});

const MaterialUi: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography  className={classes.typoStyle} color="secondary" variant="h1" align="right" gutterBottom noWrap>Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI</Typography>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paperStyle}>xs=10</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paperStyle}>xs=10</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paperStyle}>xs=10</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=10</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=10</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=10</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=10</Paper>
                </Grid>
            </Grid>
             <Button className={classes.btnStyle} variant= "contained" color="primary">
                 Button
            </Button>
            <Grid container spacing={1} direction="column" justify="center" alignItems="flex-end">
                <Grid item xs={1}>
                    <Paper className={classes.paperStyle}>xs=1</Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper className={classes.paperStyle}>xs=1</Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper className={classes.paperStyle}>xs=1</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="column">
                <Grid item xs={12}container >
                    <Grid item xs={2}>
                        Demo
                    </Grid>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={2}>
                        Test
                    </Grid>
                </Grid>
                <Grid item xs={12} container justify="space-around">
                <Grid item xs={3}>
                    Resources
                    JSONPlaceholder comes with a set of 6 common resources:
                    /posts	100 posts
                    /comments	500 comments
                    /albums	100 albums
                    /photos	5000 photos
                    /todos	200 todos
                    /users	10 users
                    Note: resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.
                </Grid>
                <Grid item xs={3}>
                    Resources
                    JSONPlaceholder comes with a set of 6 common resources:
                    /posts	100 posts
                    /comments	500 comments
                    /albums	100 albums
                    /photos	5000 photos
                    /todos	200 todos
                    /users	10 users
                    Note: resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.
                </Grid>
                <Grid item xs={3}>
                    Resources
                    JSONPlaceholder comes with a set of 6 common resources:
                    /posts	100 posts
                    /comments	500 comments
                    /albums	100 albums
                    /photos	5000 photos
                    /todos	200 todos
                    /users	10 users
                    Note: resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
}

export default MaterialUi;
