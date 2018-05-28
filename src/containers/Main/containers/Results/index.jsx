import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './components/Card';
import styles from './styles.scss';

const {
  container
} = styles;

class Results extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { filteredResults: props.results };
  }

  componentWillReceiveProps(nextProps) {
    const { results, selections } = nextProps;
    const filters = selections.map((selection) => {
      if (selection.isChecked) {
        return selection.field;
      }
      return null;
    }).filter(filterField => !!filterField);
    const filteredResults = [...results].filter((result) => {
      const certString = result.data.certifications.join(' ');
      return filters.reduce((accum, filter) => {
        if (accum) {
          return certString.includes(filter);
        }
        return false;
      }, true);
    });
    this.setState({ filteredResults });
  }

  render() {
    return (
      <section className={container}>
        { this.state.filteredResults.map(result => <Card key={result.data.companyID} {...result.data} />)}
      </section>
    );
  }
}

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  selections: PropTypes.arrayOf({
    field: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired
  }).isRequired,
};

const mapStateToProps = state => ({
  results: state.results,
  selections: state.selections
});

export default connect(
  mapStateToProps,
  null
)(Results);
