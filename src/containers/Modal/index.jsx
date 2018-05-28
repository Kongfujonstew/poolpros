import React, { PureComponent } from 'react';
import Email from 'components/Email';
import styles from './styles.scss';

const {
  dialog
} = styles;

class Modal extends PureComponent {
  closeModal = (e) => {
    if (!e || e.target == this.dialog) {
      this.dialog.close();
    }
  }

  render() {
    return (
      <dialog
        className={dialog}
        ref={ref => this.dialog = ref}
        onClick={this.closeModal}
      >
        <Email
          closeModal={this.closeModal}
        />
      </dialog>
    );
  }
}

export default Modal;
