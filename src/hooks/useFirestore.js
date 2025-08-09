import { collection } from 'firebase/firestore';
import { useReducer } from 'react'
import { appFireStore } from '../firebase/config';

const initState = {
    document : null,
    isPending: false,
    error: null,
    success: false
}

const storeReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

//저장할 컬랙션을 인자로 전달합니다.
export const useFirestore = (transaction) => {

    const [response, dispatch] = useReducer(storeReducer, initState);

    //colRef : 컬렉션의 참조를 요구합니다
    const colRef = collection(appFireStore, transaction);

    //컬랙션에 문서를 추가합니다
    const addDocument = () => {

    }

    //컬랙션에서 문서를 제거합니다
    const deleteDocument = (id) => {

    }

    return {addDocument, deleteDocument, response}
}