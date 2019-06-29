import React, {useState} from 'react'
import {AuthStore, login} from "../api/auth";
import {BogoButton} from "../components/BogoButton";
import {withRouter} from "react-router-dom";

const Login = ({history, location, match}) => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const handleLoginRequest = (id, pw) => {
        return login(id, pw).then(result => {
            if (!AuthStore.isAuthenticated) {
                AuthStore.authenticate(result);
                history.push("/")
            } else {
                throw new Error("Already Authenticated!");
            }
        })
    };
    return (
        <div
            className={`login-view container mx-auto w-full h-full max-w-xs flex flex-col content-center justify-center`}>
            <h1 className={`text-4xl font-black px-8 mb-2`}>로그인</h1>
            <h5 className={`text-base font-hairline px-8`}>보고 앱에 로그인해주세요</h5>
            <form className="px-8 pt-6 pb-8 mb-4 flex flex-col justify-center">
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="username">
                        아이디
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="아이디를 입력해주세요"
                        onKeyUpCapture={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                        비밀번호
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder={`비밀번호를 입력해주세요`}
                        onKeyUpCapture={(e) => setPw(e.target.value)}
                    />
                </div>
                <div className="flex flex-col items-center justify-between h-24">
                    <BogoButton text={`로그인`} clickAction={() => handleLoginRequest(id, pw)}/>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                       href="/signup">
                        회원가입
                    </a>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                       href="#">
                        비밀번호 찾기
                    </a>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Login)