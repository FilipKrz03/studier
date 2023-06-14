import Link from 'next/link';
import classes from './Header.module.scss';


const Header = () => {

    return(
        <header className={classes.header}>
            <h3>Studier</h3>
            <nav className={classes['login-options']}>
            <Link href='/login'>Login</Link> 
            <Link href='/register'>Sign Up</Link> 
            </nav>
        </header>
    )
}

export default Header;