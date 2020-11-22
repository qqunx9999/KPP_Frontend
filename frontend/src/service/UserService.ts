import AuthService from '../service/AuthService';
import { baseUrl } from "../config/constant";
import { Userinfo } from "../interfaces/userInfoEntity";

export async function fetchUser(): Promise<Userinfo[]> {
  const userInfo = AuthService.getUserID();
  const res = await fetch(`${ baseUrl }/users/${ userInfo }`)
  const user = res.json();
  return user
}

export async function changeName(userID: string, patchBody: any) {
  const res = await fetch(`${ baseUrl }/users/${ userID }`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patchBody)
  });
  const result = res.json();
  return result;
}

export async function changePass(patchBody: any) {
  const res = await fetch(`${baseUrl}/users/newpass`, {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patchBody)
  });
  const result = res.json();
  return result;
}

export async function notification(userID: string) {
  const res = await fetch(`${ baseUrl }/notifications/any/users/${ userID }`);
  const noti = res.json();
  return noti;
}

export default {
  fetchUser,
  changeName,
  changePass,
  notification,
};