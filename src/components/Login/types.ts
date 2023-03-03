export interface UserSubmitForm {
  email: string;
  password: string;
}

export interface SignInTypes {
  onSubmit: (data: object) => void;
}
