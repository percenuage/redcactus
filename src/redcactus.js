const util = require('util');
const moment = require('moment');
const git = require('git-last-commit');

const getLastCommit = util.promisify(git.getLastCommit);
const startTime = moment();

const serverStatus = () => {
    const {version, description, name} = require('../package');
    return {
        status: 'up', version, description, name,
        started_at: startTime.format(),
        uptime: moment().diff(startTime, 'seconds'),
        uptime_human: startTime.fromNow()
    };
};

const gitStatus = async () => {
    const {shortHash, subject, author, branch} = await getLastCommit();
    return {branch, subject, author, sha: shortHash};
};

module.exports.serverStatus = serverStatus;
module.exports.gitStatus = gitStatus;