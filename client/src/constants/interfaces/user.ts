export interface User {
  emailAddress: string;
}

export interface UserCreationCredentials {
  emailAddress: string;
  password: string;
}

export interface UserReturnedFromDB {
  _id: string;
  name: string;
  emailAddress: string;
  role: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
