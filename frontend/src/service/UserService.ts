import AuthService from '../service/AuthService';
import { baseUrl } from "../config/constant";
import { Userinfo } from "../interfaces/userInfoEntity";

const User = AuthService.getUserID()

export async function fetchUser(): Promise<Userinfo[]> {
  const res = await fetch(`${ baseUrl }/user/${ User }`)
  const user = res.json();
    return user
}

export default {
  fetchUser,
};