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
                width:'100%' ,
                background:  'url(/img/undraw_design_notes_re_eklr.svg)' , 
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat' , 
                }}/>
        </section>
    )

}

export default Hero;