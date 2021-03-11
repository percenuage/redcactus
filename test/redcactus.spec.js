const redcactus = require('../src/redcactus');

describe('Status Suite', () => {
    let status;
    beforeAll(async () => {
        status = await redcactus.status();
    });

    it('Status should be an object', () => {
        console.log(status);
        expect(typeof status).toBe('object');
    });

    it('Status should has properties', () => {
        expect(status).toHaveProperty('server');
        expect(status).toHaveProperty('git');
    });

    it('Server should be an object', () => {
        expect(typeof status.server).toBe('object');
    });

    it('Should be an object', () => {
        expect(typeof status.git).toBe('object');
    });

    it('Server should has properties', () => {
        const packageJson = require('../package');
        expect(status.server).toHaveProperty('status', 'up');
        expect(status.server).toHaveProperty('name', packageJson.name);
        expect(status.server).toHaveProperty('description', packageJson.description);
        expect(status.server).toHaveProperty('version', packageJson.version);
        expect(status.server).toHaveProperty('uptime');
        expect(status.server).toHaveProperty('uptime_human');
        expect(status.server).toHaveProperty('started_at');
    });

    it('Should has properties', () => {
        expect(status.git).toHaveProperty('branch');
        expect(status.git).toHaveProperty('sha');
        expect(status.git).toHaveProperty('subject');
        expect(status.git).toHaveProperty('author');
    });

    it('Should disable git status with options', async () => {
        status = await redcactus.status({ disableGitStatus: true });
        expect(status.git).toBeUndefined();
    });

});
