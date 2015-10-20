import imgurAPICall from '../imgurAPICall';
import utils from './utils.js';

export default function(options) {
    options.imgurAPICall = imgurAPICall.bind(options);
    options.apiUrl = options.apiUrl || `${utils.API_URL}/${utils.API_VERSION}`;

    return options;
}

