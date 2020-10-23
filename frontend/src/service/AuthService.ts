import { baseUrl } from '../config/constant';
import { Userinfo } from '../interfaces/userInfoEntity';

async function LoginUser(email: string, password: string): Promise<any | null> {
    const res = await fetch(`${ baseUrl }/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": email,
            "password": password,
        }),
    });
    const result = await res.json();
    console.log(result);
    if (result.access_token) {
        localStorage.setItem("user", result);
        localStorage.setItem("token", result.access_token);
        localStorage.setItem("username", result.username);
        localStorage.setItem("userID", result.userID);
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

async function ForgetPass(email: string, password: string, conPassword: string, verify: string): Promise<any | null> {
    const res = await fetch(`${ baseUrl }/auth/forget`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password,
            conPassword: conPassword,
            verify: verify,
        }),
    });
    const result = await res.json();
    if (result.access_token) {
        return result;
    } else {
        return null;
    };
};

function fetchVerifyCode() {

}

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

function getUserInfo(): Userinfo | null {
    if (isUserLoggedIn()) {
        return localStorage.user;
    } else {
        return null;
    }
}

function getUserID(): any {
    if (isUserLoggedIn()) {
        return localStorage.userID;
    }
}

export default {
    LoginUser,
    SignupUser,
    ForgetPass,
    fetchVerifyCode,
    isUserLoggedIn,
    getUserName,
    logOutUser,
    getAccessToken,
    getUserInfo,
    getUserID,
};