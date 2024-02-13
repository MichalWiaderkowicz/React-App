import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => {
    return(
        <div className={styles.hero}>
            <PageTitle>about</PageTitle>
            <p>Lorem ipsum.</p>
        </div>
    );
};

export default About;