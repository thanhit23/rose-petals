export interface UserSubmitForm {
  name: string;
  email: string;
  password: string;
  verifyingCode: number;
  confirmPassword: string;
}

export interface VerifyCode {
  token: string;
  code: number;
}
