import classes from './ActionContainer.module.scss';

type Props = {
    children:React.ReactNode , 
}

const ActionContainer = ({children}:Props) => {
    return(
        <div className={classes.container}>
            {children}
        </div>
    )
}

export default ActionContainer