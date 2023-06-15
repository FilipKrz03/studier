"use client";
import CountUp from 'react-countup';
import classes from './Stats.module.scss';
import { stats } from '@/data/stats';

const Stats = () => {
    return(
        <aside className={classes.aside}>
            {stats.map(stat => {
                return <div key={stat} className={classes['stat-item']}>
                    <h2><CountUp start={0} end={100} duration={3}/>%</h2>
                    <p>{stat}</p>
                </div>
            })}
        </aside>
    )
}

export default Stats;