import { baseUrl } from '../config/constant';
import { Userinfo } from '../interfaces/userInfoEntity';

async function LoginUser(email: string, password: string): Promise<any | null> {
    const res = await fetch(`${ baseUrl }/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            "username": email,
            "password": password,
        }),
    });
    const result = await res.json();
    if (result.access_token) {
        localStorage.setItem("token", result.access_token);
        localStorage.setItem("userID", result.userID);
        localStorage.setItem("isAdmin", result.isAdmin);
        return result;
    } else {
        return null;
    };
};

async function SignupUser(username: string, email: string, password: string, conPassword: string): Promise<any | null> {
    const postOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            "username": username,
            "email": email,
            "password": password,
        }),
    };
    const res = await fetch(`${ baseUrl }/users`, postOption);
    const user = await res.json();
    console.log(user);
    return user;
};

async function ForgetPass(email: string, password: string, conPassword: string, verify: string): Promise<any | null> {
    const res = await fetch(`${ baseUrl }/auth/forget`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
            "conPassword": conPassword,
            "verify": verify,
        }),
    });
    const result = await res.json();
    if (result.access_token) {
        return result;
    } else {
        return null;
    };
};

async function fetchUser(userID: string): Promise<any | null> {
    const res = await fetch(`${ baseUrl }/users/${ userID }`);
    const result = await res.json();
    return result
};

function isUserLoggedIn(): boolean {
    return localStorage.token !== undefined;
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
        localStorage.clear();
    }
}

function getAccessToken(): string {
    return localStorage.token;
}

async function getUserInfo(): Promise<Userinfo | null> {
    return null
}

function getUserID(): any {
    if (isUserLoggedIn()) {
        return localStorage.userID;
    }
}

function checkAdmin(): boolean {
    console.log(localStorage)
    return localStorage.isAdmin;
}

async function sendVerify(email: string): Promise<any> {
    const res = await fetch(`${ baseUrl }/users/getverified`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            "email": email
        })
    });
    const verify = res.json();
    return verify;
}

export default {
    LoginUser,
    SignupUser,
    ForgetPass,
    fetchUser,
    isUserLoggedIn,
    getUserName,
    logOutUser,
    getAccessToken,
    getUserInfo,
    getUserID,
    checkAdmin,
    sendVerify,
};