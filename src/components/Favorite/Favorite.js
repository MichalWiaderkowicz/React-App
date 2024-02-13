import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
    return(
        <div className={styles.hero}>
            <PageTitle>favorite</PageTitle>
            <p>Lorem ipsum.</p>
        </div>
    );
};

export default Favorite;