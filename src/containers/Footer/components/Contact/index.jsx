import React from 'react';
import styles from './styles.scss';

const {
  connectItem,
  container1,
  container2,
  container3,
  section
} = styles;

export default () => (
  <section className={section}>
    <div className={container1}>
      <img src="images/pool-pros-logo-footer.png" alt="pool pros logo" />
      <div className={container2}>
        <div className={connectItem}>
          CONNECT WITH US
        </div>
        <div className={connectItem}>
          <div className={container3}>
            <img src="images/twitter-icon.png" />
            <img src="images/facebook-icon.png" />
            <img src="images/youtube-icon.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
