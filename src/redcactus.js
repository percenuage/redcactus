const util = require('util');
const moment = require('moment');
const git = require('git-last-commit');

const getLastCommit = util.promisify(git.getLastCommit);
const startTime = moment();

const middleware = () => {
    return async (req, res) => res.json(await status());
};

const status = async () => {
    return {
        server: serverStatus(),
        git: await gitStatus()
    }
};

const serverStatus = () => {
    const {version, description, name} = require('../package');
    return {
        status: 'up', name, version, description,
        started_at: startTime.format(),
        uptime: moment().diff(startTime, 'seconds'),
        uptime_human: startTime.fromNow()
    };
};

const gitStatus = async () => {
    const {shortHash, subject, author, branch} = await getLastCommit();
    return {sha: shortHash, branch, subject, author};
};

module.exports = middleware;
module.exports.status = status;
