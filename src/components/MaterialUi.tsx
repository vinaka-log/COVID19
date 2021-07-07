import React from 'react'
import {Button, makeStyles, Typography} from "@material-ui/core"
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    btnStyle: {
        background: "green",
        padding: "3px 50px",
    },
    typoStyle: {
        color: "blue",
    }
});

const MaterialUi: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography  className={classes.typoStyle} color="secondary" variant="h1" align="right" gutterBottom noWrap>Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI</Typography>
             <Button className={classes.btnStyle} variant= "contained" color="primary">
                 Button
            </Button>
        </div>
    )
}

export default MaterialUi;
