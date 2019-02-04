import { UserApi } from './user-api';

describe('UserApi', () => {
  it('should create an instance', () => {
    expect(new UserApi(0,0,0)).toBeTruthy();
  });
});
