import { Button } from '@material-ui/core';
import ButtonDemoProps from "../interfaces";
import useStyles from "../styles";

const ButtonMUI = ({label, size}: ButtonDemoProps) => {
    const classes = useStyles()
    return(
        <Button className={`${classes[size]}`} variant='outlined'>{label}</Button>
    )
}

export default ButtonMUI
