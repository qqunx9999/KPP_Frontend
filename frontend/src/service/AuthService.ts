import { baseUrl } from '../config/constant';

async function LoginUser(email: string, password: string): Promise<any | null> {
    const res = await fetch(`${ baseUrl }/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    const result = await res.json();
    if (result.access_token) {
        localStorage.setItem("token", result.access_token);
        localStorage.setItem("username", result.username);
        return result;
    } else {
        return null;
    };
};

async function SignupUser(username: string, email: string, password: string, conPassword: string): Promise<any | null> {
    const res = await fetch(`${ baseUrl }/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            conPassword: conPassword,
        }),
    });
    const result = await res.json();
    if (result.access_token) {
        return result;
    } else {
        return null;
    };
};

function isUserLoggedIn(): boolean {
    return localStorage.accessToken !== undefined;
}

function getUserName(): string | null {
    if (isUserLoggedIn()) {
        return localStorage.username;
    } else {
        return null;
    }
}

function logOutUser(): void {
    if (isUserLoggedIn()) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
    }
}

function getAccessToken(): string {
    return localStorage.accessToken;
}

export default {
    LoginUser,
    SignupUser,
    isUserLoggedIn,
    getUserName,
    logOutUser,
    getAccessToken,
};