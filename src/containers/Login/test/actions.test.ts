import { loginFailed, loginSuccess } from '../actions';
import { LOGIN_FAILED, LOGIN_SUCCESS } from '../constants';

describe('Login Actions', () => {
  describe('loginSuccess', () => {
    it('should return the correct type and the payload', () => {
      const data = {
        user: {
          role: 'user',
          isEmailVerified: false,
          lastLoginAt: null,
          gender: 1,
          phoneNumber: '0969067361',
          dob: null,
          location: null,
          social: null,
          name: 'fake name11',
          email: 'fake10@example.com',
          id: '645a52b80192b66ea21cabbe',
        },
        tokens: {
          access: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDVhNTJiODAxOTJiNjZlYTIxY2FiYmUiLCJpYXQiOjE2ODM4MDY1MTcsImV4cCI6MTY4Mzg5MjkxNywidHlwZSI6ImFjY2VzcyJ9.8qccP9InpnTk_TcxIzMoG0a8BRPm6-VhDnXLoVjg_mE',
            expires: '2023-05-12T12:01:57.016Z',
          },
          refresh: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDVhNTJiODAxOTJiNjZlYTIxY2FiYmUiLCJpYXQiOjE2ODM4MDY1MTcsImV4cCI6MTY4NjM5ODUxNywidHlwZSI6InJlZnJlc2gifQ.pdH9kpoe-FfMIN8b_Y7yY4NRJx-lxYJnigqKl5nTiWQ',
            expires: '2023-06-10T12:01:57.017Z',
          },
        },
      };
      const expectedResult = {
        type: LOGIN_SUCCESS,
        payload: { data },
      };
      expect(loginSuccess(data)).toEqual(expectedResult);
    });
  });
  describe('loginFailed', () => {
    it('should return the correct type', () => {
      const message = 'sai email';
      const expectedResult = {
        type: LOGIN_FAILED,
        payload: { message: 'sai email' },
      };
      expect(loginFailed(message)).toEqual(expectedResult);
    });
  });
});
