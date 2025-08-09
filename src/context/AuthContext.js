import { createContext, useReducer } from 'react';

// context 객체 생성
const AuthContext = createContext();

const authReducer = (state, action) => {
    switch(action.type) {
        case 'login':
            return {...state, user: action.payload}
        // 예시: 로그인/로그아웃 등 추가 가능
        default:
            return state;
    }
}

// context를 구독할 컴포넌트 묶음 범위를 설정
const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, { user: null });

    console.log('user state: ', state);
    
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }