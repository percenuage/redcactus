const util = require('util');
const moment = require('moment');
const git = require('git-last-commit');

const getLastCommit = util.promisify(git.getLastCommit);
const startTime = moment();

const middleware = options => async (req, res) => res.json(await status(options));

const status = async (options = {}) => {
    const { enableGitStatus } = options;
    const res = { server: serverStatus() }
    if (enableGitStatus) {
        res.git = await gitStatus();
    }
    return res;
};

const serverStatus = () => {
    const root = process.cwd();
    const { version, description, name } = require(root + '/package');
    return {
        status: 'up', name, version, description,
        started_at: startTime.format(),
        uptime: moment().diff(startTime, 'seconds'),
        uptime_human: startTime.fromNow()
    };
};

const gitStatus = async () => {
    const { shortHash, subject, author, branch } = await getLastCommit();
    return { sha: shortHash, branch, subject, author };
};

module.exports = middleware;
module.exports.status = status;
