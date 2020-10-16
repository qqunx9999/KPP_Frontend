import { baseUrl } from '../config/constant';

async function LoginUser(username: string, password: string): Promise<any | null> {
    const res = await fetch(`${ baseUrl }/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });
    const result = await res.json();
};

export default {
    LoginUser,
};