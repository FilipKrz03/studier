import classes from './Support.module.scss';
import Image from 'next/image';

const Support = () => {
    return(
        <section className={classes.support}>
            <Image src={'/img/undraw_devices_re_dxae.svg'} width={600} height={600} alt='Support-pic' />
            <div className={classes['support-info']}>
            <h2>Our support ! </h2>
            <p>Our website works excelent in all kinds of devices</p>
            </div>
        </section>
    )
}

export default Support;