import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from 'store/module';
import Checkbox from 'components/Checkbox';
import styles from './styles.scss';

//refactor to class

const {
  checkboxes,
  checkboxContainer,
  container,
  filter,
  hidden,
  postal,
  section
} = styles;

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showFilters: true };
  }

  componentDidMount = () => {
    this.setIsBig();
    window.addEventListener('resize', () => {
      this.setIsBig();
    });
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize');
  }

  setIsBig = () => {
    const isBig = document.documentElement.clientWidth > 752;
    if (this.state.isBig !== isBig) {
      this.setState({ isBig });
    }
  }

  toggleShowFilters = () => {
    this.setState({ showFilters: !this.state.showFilters });
  }

  render() {
    const {
      postalCode,
      results,
      selections,
      toggleSelection
    } = this.props;
    const {
      isBig,
      showFilters
    } = this.state;

    const displayFilters = isBig || showFilters;

    return (
      <section className={section}>
        <div className={container}>
          <div className={postal}>
            <span>{`${results.length} dealers in ${postalCode}`}</span>
          </div>
          <div
            className={`${filter} ${displayFilters ? '' : hidden}`}
            onClick={this.toggleShowFilters}
          >
            <span>Filter Results</span>
          </div>
          { displayFilters ?
            <div className={checkboxContainer}>
              <div className={checkboxes}>
                { selections.map((selection, i) => (
                  <Checkbox
                    key={i}
                    {...selection}
                    grey={!isBig}
                    handleClick={toggleSelection}
                  />
                ))}
              </div>
            </div> :
            null
          }
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  postalCode: PropTypes.number.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  selections: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired
  })).isRequired,
  toggleSelection: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  results: state.results,
  selections: state.selections,
  postalCode: state.postalCode
});

const mapDispatchToProps = dispatch => ({
  toggleSelection: (field) => {
    dispatch(actions.toggleSelection(field));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
