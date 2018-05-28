import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const {
  close,
  menuItem,
  section,
  title
} = styles;

const Menu = (props) => {
  const { showMenu, toggleMenu } = props;

  if (!showMenu) {
    return false;
  }

  return (
    <section className={section}>
      <div className={close} onClick={toggleMenu}>&#x2716;</div>
      <div className={title}>
        MENU
      </div>
      <div>
        { ['Pools & Spas', 'Supplies', 'Resources', 'Services']
            .map((item, i) => (
              <div key={i} className={menuItem}>
                <div>{item}</div>
                <img src="images/next-arrow.png" alt="next" />
              </div>
            ))

        }
      </div>
    </section>
  );
};

Menu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default Menu;
