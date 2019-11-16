const moment = require('moment');
const startTime = moment();

const serverStatus = () => {
    const {version, description} = require('../package');
    return {
        status: 'up', version, description,
        started_at: startTime.format(),
        uptime: moment().diff(startTime, 'seconds'),
        uptime_human: startTime.fromNow()
    };
};

const gitStatus = () => {
    return {branch: '', sha: ''};
};

module.exports.serverStatus = serverStatus;
module.exports.gitStatus = gitStatus;