import PropTypes from 'prop-types';
export default {
	name: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	region: PropTypes.string.isRequired,
	lat: PropTypes.number.isRequired,
	lon: PropTypes.number.isRequired,
	timezone_id: PropTypes.string,
	localtime: PropTypes.string,
	localtime_epoch: PropTypes.number,
	utc_offset: PropTypes.string,
};
