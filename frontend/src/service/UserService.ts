import AuthService from '../service/AuthService';
import { baseUrl } from "../config/constant";
import { Userinfo } from "../interfaces/userInfoEntity";

const User = AuthService

export async function fetchUser(): Promise<Userinfo[]> {
  const res = await fetch(`${ baseUrl }/user/${ User.getUserInfo }`)
  const user = res.json();
  return user
}

export async function isAdmin() {
  const res = User.getUserInfo();
  return res
}

export default {
  fetchUser,
};