module.exports = function() {
	var client = './src/client/';

	var config = {

		/**
			* Files path
			*/
		// temporary folder
		temp: './tmp/',
		// scss source
		scss: client + 'styles/styles.scss'
	}

	return config;
}