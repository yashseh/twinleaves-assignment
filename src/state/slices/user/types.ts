export interface IUserSliceInitialState {
  user: IUser | null;
}

export interface IUser {
  name: string | null | undefined;
  email: string | null | undefined;
  token: string;
  image: string | null | undefined;
}
