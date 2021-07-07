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
        </div>
    )
}

export default MaterialUi;
