import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {

    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMsg, SetErrorMsg] = useState(null);

    const Navigate = useNavigate();
    const dispatch = useDispatch();

    let email = useRef(null);
    let password = useRef(null);
    let name = useRef(null);

    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        // validate the form data
        let msg = checkValidData(email.current.value, password.current.value, name?.current?.value);
        SetErrorMsg(msg);

        if (msg) return;
        // sign in / sign up
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name?.current?.value, photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, displayName, email, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, Name: displayName, email: email, photoURL: photoURL }))
                        Navigate("/browse");

                    }).catch((error) => {
                        SetErrorMsg(error.errorMessage)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    SetErrorMsg(errorCode + "-" + errorMessage)
                });
        } else {
            console.log("called");
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    Navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    SetErrorMsg(errorMessage)
                });
        }

    }
    return (

        <div>
            <Header />
            <div className='absolute '>
                <img className='w-screen h-[110vh] md:h-[120vh] lg:h-screen object-cover' src={BG_URL} alt="bg" />
            </div>

            <div className={isSignInForm ? "absolute  w-11/12 sm:w-10/12 md:w-6/12 lg:w-4/12 py-4 px-4  mx-auto mt-60 sm:mt-32  md:mb-44 md:mt-25  text-white rounded-lg bg-opacity-80 right-0 left-0 bg-black" : "absolute  w-11/12 sm:w-10/12 md:w-6/12 lg:w-4/12 py-3 px-4  mx-auto mt-52 sm:mt-32 md:mt-22 md:mb-44 lg:mt-[110px]  text-white rounded-lg bg-opacity-80 right-0 left-0 bg-black"}>
                <h3 className='font-bold text-xl sm:text-2xl md:text-3xl py-1 pb-2 sm:py-3 md:py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h3>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <input ref={email} className='p-3 md:p-4 my-3 md:my-4 w-full bg-gray-700 rounded-md' type='email' placeholder='Email Address' />
                    {
                        !isSignInForm && (<input ref={name} className='p-3 md:p-4 my-4 w-full rounded-md bg-gray-700' type='text' placeholder='Name' />)
                    }
                    <input ref={password} className='p-3 md:p-4 my-3 md:my-4 w-full bg-gray-700 rounded-md' type='password' placeholder='password' />
                    <p className='ml-1 text-xs sm:text-base md:text-lg text-red-700 font-semibold'>{errorMsg}</p>
                    <button onClick={handleButtonClick} className='p-3 md:p-4 my-5 md:my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                    <p className="py-2 sm:py-3 sm:pt-2  md:py-4 md:pt-3 text-sm md:text-xl  cursor-pointer text-center" onClick={toggleSignInForm}>
                        {isSignInForm
                            ? "New to Netflix? Sign Up Now"
                            : "Already registered? Sign In Now."}
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login