import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import { connect } from 'react-redux';
import { actions } from 'store/module';
import styles from './styles.scss';

const {
  buttonItem,
  certificationItem,
  container1,
  container2,
  div,
  h1,
  hoursItem,
  nameItem,
  phoneItem,
  talkItem
} = styles;

const Card = (props) => {
  const {
    certifications,
    companyID,
    name,
    phone1,
    updateDealer,
    weekHours
  } = props;

  return (
    <div className={div}>
      <div className={container1}>
        <div className={nameItem}><h1>{name}</h1></div>
        <div className={phoneItem}>
          <img src="images/phone-icon-desktop.png" alt="who ya gonna call" />
          <h1>{phone1}</h1>
        </div>
        <div className={talkItem}><i>Can't talk now? Click below to send an email.</i></div>
        <div className={buttonItem}>
          <Button
            light
            handleClick={() => updateDealer(companyID)}
            text="Contact this Pro"
            imageSrc="images/email-icon.png"
          />
        </div>
        <div className={hoursItem}>
          <b>Business Hours</b>
          <span>Weekdays: {weekHours.mon}</span>
          <span>Saturdays: {weekHours.sat || 'CLOSED'}</span>
          <span>Weekdays: {weekHours.sun || 'CLOSED'}</span>
        </div>
      </div>
      <div className={container2}>
        { certifications.map((certification, i) => {
            const images = {
              'Service Pro': 'images/gear-service-pro.png',
              'Installation Pro': 'images/star-installation-pro.png',
              'Residential Pro': 'images/home-residential-pro.png',
              'Commercial Pro': 'images/users-commercial-pro.png'
            };

            return (
              <div key={i} className={certificationItem}>
                <img src={images[certification]} alt={`${certification}`} />
                <span>{certification}</span>
              </div>
            );
        })}
      </div>
    </div>
  );
};

Card.propTypes = {
  certifications: PropTypes.arrayOf(PropTypes.string).isRequired,
  companyID: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone1: PropTypes.string.isRequired,
  updateDealer: PropTypes.func.isRequired,
  weekHours: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  dealer: state.contactDealer
});

const mapDispatchToProps = dispatch => ({
  updateDealer: (dealer) => {
    dispatch(actions.updateDealer(dealer));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
