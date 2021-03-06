import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Loader type="Circles" color="#4a56e2" height={50} width={50} />
    </div>
  );
};

export default Spinner;
