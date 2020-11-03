import { baseUrl } from '../config/constant';

export async function fetchMessage() {
  const res = await fetch(`${ baseUrl }/`);
  const message = res.json();
  return message;
}

export default {
  fetchMessage,
};