import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { appAuth } from '../firebase/config';
import { useState } from 'react';

export const useSignup = () => {
    //에러정보를 저장합니다
    const [error, setError] = useState(null);
    //현재 서버와 통신 상태를 저장합니다
    const [isPending, setIsPending] = useState(false);

    const signup = (email, password, displayName) => {
        setError(null); //아직 에러가 없기 때문에
        setIsPending(true); //통신을 진행중입니다.

        createUserWithEmailAndPassword(appAuth, email, password)//
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            if(!user) {
                throw new Error('회원가입에 실패했습니다');
            }

            updateProfile(appAuth.currentUser, {displayName})//
            .then(() => {
                setError(null);
                setIsPending(false);
            }).catch((err) => {
                setError(err.message);
                setIsPending(false);
            })
        }).catch((err) => {
            setError(err.message);
            setIsPending(false);
        })
    }
    return {error, isPending, signup}
}