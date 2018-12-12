const app = require('../../src/app');

describe('\'assignments\' service', () => {
  it('registered the service', () => {
    const service = app.service('assignments');
    expect(service).toBeTruthy();
  });
});
