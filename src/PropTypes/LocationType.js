import PropTypes from 'prop-types';
export default {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
  lon: PropTypes.string.isRequired,
  timezone_id: PropTypes.string,
  localtime: PropTypes.string,
  localtime_epoch: PropTypes.number,
  utc_offset: PropTypes.string,
};
