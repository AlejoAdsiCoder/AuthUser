import React from 'react'
import { AuthProps } from './context'

let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser") || "").user
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser") || "").auth_token
  : "";

export const initialState = {
    userDetails: "" || user,
    token: "" || token,
    isLoggedIn: false,
    isLoginPending: false,
    loginError: null
}

export const AuthReducer = (initialState: any, action: any) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                isLoggedIn: true,
                isLoginPending: true,
                loginError: null
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                isLoggedIn: true,
                isLoginPending: false,
                loginError: null
            };
        case "LOGOUT":
            return {
                ...initialState,
                isLoggedIn: false,
                isLoginPending: false,
                loginError: null
            };
        
        case "LOGIN_ERROR":
            return {
                ...initialState,
                isLoggedIn: false,
                isLoginPending: false,
                isLoginError: action.payload
            };
        default:
            break;
    }
}
