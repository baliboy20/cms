import { SpyPipe } from './spy.pipe';

describe('SpyPipe', () => {
  it('create an instance', () => {
    const pipe = new SpyPipe();
    expect(pipe).toBeTruthy();
  });
});
