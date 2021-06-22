import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ButtonDemoProps from "../interfaces";
import useStyles from '../styles';


const ButtonBoot = ({label, size}:ButtonDemoProps) =>  {
 const classes = useStyles()
    return(
    <Button className={`${classes[size]}`} variant='primary'>{label}</Button>
    )
}
export default ButtonBoot