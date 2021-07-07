import React from 'react'
import {Button, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    btnStyle: {
        background: "green",
        padding: "3px 50px",
    },
});

const MaterialUi: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
             <Button className={classes.btnStyle} variant= "contained" color="primary">
                 Button
            </Button>
        </div>
    )
}

export default MaterialUi;
