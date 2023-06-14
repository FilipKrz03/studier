import Link from 'next/link';
import classes from './FeatureItem.module.scss';

type Props = {
    title:string , 
    description:string ,
}

const FeatureItem = ({title , description}:Props) => {
    return(
        <div className={classes.item}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link href='/register'>Get started</Link>
        </div>
    )
}

export default FeatureItem;