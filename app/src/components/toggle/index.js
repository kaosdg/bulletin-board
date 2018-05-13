import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

const Toggle = ({active, toggleActive}) => {
  return (
  // <input type="checkbox" checked={_.isUndefined(active) ? false: active} onChange={() => toggleActive()}/>        
    <label className="switch">
      <input type="checkbox" checked={_.isUndefined(active) ? false: active} onChange={() => toggleActive()}/>
      <div className="slider"></div>
    </label>
  );
};

Toggle.propTypes = {
  toggleActive: PropTypes.func,
  active: PropTypes.bool
};

export default Toggle;
