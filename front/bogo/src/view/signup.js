import React, {useState} from 'react'
import {signup} from "../api/auth";
import {BogoButton} from "../components/BogoButton";
import {withRouter} from "react-router-dom";

const SignUp = ({history, location, match}) => {
    const [signupForm, setSignupForm] = useState({
        id: '',
        pw: '',
        pwConfirm: ''
    });


    const handleSignup = (form) => {
        return signup(form).then(res => {
            history.push("/login")
        }).catch(err => {
            throw new Error(err);
        })
    }

    return (
        <div className={`signup-view container h-full flex flex-col max-w-xs justify-center content-center py-12`}>
            <h1 className={`text-4xl font-black px-8 mb-2`}>회원가입</h1>
            <h5 className={`text-base font-hairline px-8 mb-2`}>보고 앱에 회원가입해주세요</h5>
            <form className="px-8 h-full flex flex-col justify-center">
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="username">
                        아이디
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="아이디를 입력해주세요"
                        onKeyUpCapture={(e) => setSignupForm(form => {
                            form.id = e.target.value;
                            return form;
                        })}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                        비밀번호
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password"
                        onKeyUpCapture={(e) => setSignupForm(form => {
                            form.pw = e.target.value
                            return form;
                        })}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                        비밀번호 확인
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password-confirm" type="password"
                        onKeyUpCapture={(e) => setSignupForm(
                            form => {
                                form.pwConfirm = e.target.value;
                                return form;
                            }
                        )}
                    />
                </div>
                <div className="flex flex-col items-center justify-between h-20">
                    <BogoButton text={`확인`} clickAction={() => handleSignup(signupForm)}/>
                </div>
            </form>
        </div>
    )
}

export default withRouter(SignUp);