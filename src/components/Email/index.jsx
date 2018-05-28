import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Checkbox from 'components/Checkbox';
import styles from './styles.scss';

const {
  container1,
  container2,
  container3,
  dialog
} = styles;

class Modal extends PureComponent {
  closeModal = (e) => {
    if (e.target == this.dialog) {
      this.dialog.close();
    }
  }

  render() {
    let dealer = this.props.results.filter(thisDealer => thisDealer.data.companyID === this.props.dealer)[0];

    const { name } = dealer.data;

    return (
      <dialog className={dialog}
        ref={ref => this.dialog = ref}
        onClick={this.closeModal}
      >
        <div>
          <div className={container1}>
            <span>EMAIL</span>
            <span>{name}</span>
          </div>
          <div className={container2}>
            <div className={'fz'}>
              <label htmlFor="name">First and last name</label>
              <img src="images/checkmark-circle.png" />
              <input name="name" type="text" />
            </div>
            <div className={'fz'}>
              <label htmlFor="phone">Phone number</label>
              <img src="images/checkmark-circle.png" />
              <input name="phone" type="phone" />
            </div>
            <div className={'fz'}>
              <label htmlFor="email">Phone number</label>
              <img src="images/checkmark-circle.png" />
              <input name="email" type="email" />
            </div>
            <div className={'fz'}>
              <label htmlFor="comments">Comments or questions</label>
              <textarea></textarea>
            </div>
            <div className={'fz'}>
              <label htmlFor="comments">Comments or questions</label>
              <Checkbox grey field="yes" handleClick={() => console.log('click yes')}/>
              <Checkbox grey field="no" handleClick={() => console.log('click no')} />
            </div>
          </div>
          <div>
            Send
          </div>
        </div>
      </dialog>
    );
  }
}


Modal.propTypes = {
  dealer: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape({
  }).isRequired).isRequired
};

Modal.defaultProps = {
  dealer: 0
}

const mapStateToProps = state => ({
  dealer: state.dealer,
  results: state.results
});

export default connect(
  mapStateToProps,
  null
)(Modal);

