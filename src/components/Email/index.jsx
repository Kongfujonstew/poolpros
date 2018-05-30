import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Checkbox from 'components/Checkbox';
import styles from './styles.scss';

const {
  checkboxes,
  commentItem,
  container1,
  container2,
  div,
  inputItem,
  send
} = styles;

class Email extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: { pristine: true, value: '' },
      phone: { pristine: true, value: '' },
      email: { pristine: true, value: '' },
      yes: false
    };

    this.images = [
      //TODO: Add image for invalid state
      'images/circle-form.png',
      'images/checkmark-circle.png',
    ];
  }

  handleFormInput = ({ target: { name, value } }) => {
    this.setState({ [name]: { ...this.state[name], value } });
  }

  handleClickCheckbox = yesOrNo => () => {
    this.setState({ yes: yesOrNo });
  }

  render() {
    const { closeModal, results } = this.props;
    const dealer = results
      .filter(thisDealer => thisDealer.data.companyID === this.props.dealer)[0];
    const { name } = dealer.data;
    let emailValid = true;
    if (this.email) {
      emailValid = this.email.validity.valid
    }
    //TODO: Move inputs/text area out to separate component

    return (
      <div className={div}>
        <div className={container1}>
          <div onClick={() => closeModal(false)}>&#x2716;</div>
          <h3>EMAIL</h3>
          <span>{name}</span>
        </div>
        <div className={container2}>
          <div>
            <div className={inputItem}>
              <label htmlFor="name">First and last name</label>
              <img src={this.state.name.value.split(' ')[1] && this.state.name.value.split(' ')[1].length ?
                this.images[1] :
                this.images[0]}
              />
            </div>
            <input
              value={this.state.name.value}
              onChange={this.handleFormInput}
              style={{ width: 'calc(100% - 24px)' }}
              name="name"
              type="text"
            />
          </div>
          <div>
            <div className={inputItem}>
              <label htmlFor="phone">Phone number</label>
              <img src={this.state.phone.value.length > 7 ? this.images[1] : this.images[0]} />
            </div>
            <input
              value={this.state.phone.value}
              onChange={this.handleFormInput}
              name="phone"
              type="phone"
            />
          </div>
          <div>
            <div className={inputItem}>
              <label htmlFor="email">Email address</label>
              <img src={emailValid && this.state.email.value.length ?
                this.images[1] :
                this.images[0]
              } />
            </div>
            <input
              id="email"
              ref={(ref) => this.email = ref}
              value={this.state.email.value}
              onChange={this.handleFormInput}
              style={{ width: 'calc(100% - 24px)' }}
              name="email"
              type="email"
            />
          </div>
          <div className={commentItem}>
            <label htmlFor="comments">Comments or questions</label>
            <textarea></textarea>
          </div>
          <div className={checkboxes}>
            <label htmlFor="comments">Do you currently own a pool or spa?</label>
            <Checkbox
              grey
              field="yes"
              isChecked={this.state.yes}
              handleClick={this.handleClickCheckbox(true)}
            />
            <Checkbox
              grey
              field="no"
              isChecked={!this.state.yes}
              handleClick={this.handleClickCheckbox(false)}
            />
          </div>
        </div>
        <div
          onClick={() => closeModal(false)}
          className={send}
        >
          Send
        </div>
      </div>
    );
  }
}


Email.propTypes = {
  closeModal: PropTypes.func.isRequired,
  dealer: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape({
  }).isRequired).isRequired
};

Email.defaultProps = {
  dealer: 0
};

const mapStateToProps = state => ({
  dealer: state.dealer,
  results: state.results
});

export default connect(
  mapStateToProps,
  null
)(Email);

