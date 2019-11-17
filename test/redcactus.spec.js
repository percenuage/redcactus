const redcactus = require('../src/redcactus');

describe('ServerStatus Suite', () => {
    let server;
    beforeEach(() => {
        server = redcactus.serverStatus();
    });

    it('Should be an object', () => {
        console.log(server);
        expect(typeof server).toBe('object');
    });

    it('Should has properties', () => {
        const packageJson = require('../package');
        expect(server).toHaveProperty('status', 'up');
        expect(server).toHaveProperty('name', packageJson.name);
        expect(server).toHaveProperty('description', packageJson.description);
        expect(server).toHaveProperty('version', packageJson.version);
        expect(server).toHaveProperty('uptime');
        expect(server).toHaveProperty('uptime_human');
        expect(server).toHaveProperty('started_at');
    });
});

describe('GitStatus Suite', () => {
    let git;
    beforeEach(async () => {
        git = await redcactus.gitStatus();
    });

    it('Should be an object', () => {
        console.log(git);
        expect(typeof git).toBe('object');
    });

    it('Should has properties', () => {
        expect(git).toHaveProperty('branch');
        expect(git).toHaveProperty('sha');
        expect(git).toHaveProperty('subject');
        expect(git).toHaveProperty('author');
    });
});