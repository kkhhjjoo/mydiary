import { signInWithEmailAndPassword} from 'firebase/auth';
import { appAuth } from '../firebase/config';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    //에러정보를 저장합니다
    const [error, setError] = useState(null);
    //현재 서버와 통신 상태를 저장합니다
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext();

    const login = (email, password) => {
        setError(null); //아직 에러가 없기 때문에
        setIsPending(true); //통신을 진행중입니다.

        signInWithEmailAndPassword(appAuth, email, password)//
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch({type: 'login', payload: user});
            setError(null);
            setIsPending(false);
            console.log(user);

            if(!user) {
                throw new Error('회원가입에 실패했습니다');
            }
        }).catch((err) => {
            setError(err.message);
            setIsPending(false);
        })
    }
    return {error, isPending, login}
}