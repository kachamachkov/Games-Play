import { login } from "../api/auth-api";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {

        const result = await login(email, password);

        changeAuthState(result);
        console.log(result);

    };

    return loginHandler;
};