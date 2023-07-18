import GradesItem from './GradesItem/GradesItem';
import classes from './HeroContainer.module.scss';
import ScheaduleItem from './ScheaduleItem/ScheaduleItem';
import AnalythicsItem from './AnalythicsItem/AnalythicsItem';
import EventsItem from './EventsItem/EventsItem';

const HeroContainer = () => {
    return(
        <div className={classes.container}>
        <ScheaduleItem />
        <GradesItem />
        <AnalythicsItem />
        <EventsItem />
        </div>
    )
}

export default HeroContainer;