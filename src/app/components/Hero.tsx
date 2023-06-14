import Link from 'next/link';
import classes from './Hero.module.scss';
const Hero = () => {
    return(
        <section className={classes.hero}>
            <div className={classes['hero-info']}>
            <h2>More than just studie planner</h2>
            <p>Build your own lesson plan , add tests , presetation and own grades. We will deliver analythics </p>
            <Link href='/register'>Get Started</Link>
            </div>
            <div className={classes['hero-image']}
            style={{
                backgroundImage:'url(/img/undraw_Design_notes_re_eklr.png)' , 
                backgroundSize:'580px ',
                backgroundRepeat:'no-repeat' , 
                backgroundPosition:'15% -20%',
                height:'90vh'
                }}/>
        </section>
    )

}

export default Hero;