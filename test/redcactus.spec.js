const redcactus = require('../src/redcactus');

describe('Status Suite', () => {
  let status;
  beforeAll(async () => {
    status = await redcactus.status();
  });

  it('Status should be an object', () => {
    expect(typeof status).toBe('object');
  });

  it('Status should has properties', () => {
    expect(status).toHaveProperty('server');
    expect(status).not.toHaveProperty('git');
  });

  it('Server should be an object', () => {
    expect(typeof status.server).toBe('object');
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

  it('Should enable git status with options', async () => {
    status = await redcactus.status({ enableGitStatus: true });
    expect(status.git).toHaveProperty('branch');
    expect(status.git).toHaveProperty('sha');
    expect(status.git).toHaveProperty('subject');
    expect(status.git).toHaveProperty('author');
  });

});
