import utils from './utils.js';
import request from 'superagent-bluebird-promise';

export default function(options) {
    ['method', 'apiUrl', 'path', 'body'].forEach(option => {
        if (!options[option]) {
            throw new Error(`${option} must be specified`);
        }
    });

    let headers = {}
    let authToken = `Client-ID ${utils.CLIENT_ID}`;

    if(utils.bearer) {
        authToken = `Bearer ${utils.bearer}`;
    }

    _.extend(headers, additionalHeaders, {'Authorization': authToken});

    return request[options.method](`${options.apiUrl}/${options.path}`)
        .send(options.body)
        .set(headers)
        .promise();
};
