const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

const env = process.env.IONIC_ENV;

useDefaultConfig[env].resolve.alias = {
    "@app":  path.resolve( "./src/app/" ),
    "@assets":  path.resolve( "./src/assets/" ),
    "@env":  path.resolve( "./src/environments/environment" ),
    "@pages":  path.resolve( "./src/pages/" ),
    "@providers":  path.resolve( "./src/providers/" ),
    "@tests":  path.resolve( "./src/*" ),        
    "@theme":  path.resolve( "./src/theme/" )

};

module.exports = function () {
    return useDefaultConfig;
};