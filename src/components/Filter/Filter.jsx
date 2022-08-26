import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, contactSearch }) => {
  return (
    <div>
      <p>Search by Name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={contactSearch}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  contactSearch: PropTypes.func.isRequired,
};

export default Filter;
