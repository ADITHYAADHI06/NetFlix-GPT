import { useDispatch, useSelector } from "react-redux"
import logo from "../Netflix_Logo_PMS.png"
import { auth } from "../utils/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { addUser, removeUser } from "../store/userSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { clearGptSearchData, clearUserSearchData } from "../store/gptSlice"
import { languageOptions } from "../utils/constants"
import { changeLanguage } from "../store/appConfig"

import language from "../utils/langConstants"

const Header = () => {
    const user = useSelector((store) => store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const lang = useSelector((store) => store.config.lang)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // dispatch(handleUserData());
            dispatch(removeUser());
            navigate("/");
        }).catch((error) => {
            console.log(error);
            navigate("/error");
        });
    }

    const handleGPTSearchView = () => {
        // dispatch(toggleGptSearchView());
        console.log("called gpt");
        dispatch(clearGptSearchData());
    }
    const handleUserData = () => {
        dispatch(clearUserSearchData());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }
    // const handleLanguageSet = (language) => {
    //     console.log("called" + language);
    //     dispatch(setLanguage(language))
    // }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email, photoURL } = user;
                dispatch(addUser({ uid: uid, Name: displayName, email: email, photoURL: photoURL }))
                navigate("/browse");
            } else {
                removeUser();
                navigate("/")
            }
        });

        // handleLanguageSet(lang);
        return () => unsubscribe();

    }, [])
    return (
        <div className='absolute py-4 px-0 sm:px-12 w-screen z-10  bg-gradient-to-b from-black  flex flex-col sm:flex-row justify-between '>
            <div>
                <img className='w-44  sm:w-48 mx-auto ' src={logo} alt='logo' />
            </div>
            {
                user && (

                    <div className="flex gap-3 mt-4 sm:mt-0 align-middle justify-center text-white">
                        {
                            showGptSearch && (
                                <select onChange={handleLanguageChange} className="bg-gray-900 px-1 md:px-5 py-1 md:py-2 md:my-5 mr-1 md:mr-2 rounded-md " name="language" id="language">
                                    {
                                        languageOptions.map((lang) => <option key={lang.code} value={lang.code}>{lang.name}</option>)
                                    }
                                </select>
                            )
                        }

                        <button className="px-2 sm:px-3 md:px-4 py-2 sm:my-5 mr-2 font-medium bg-purple-600 rounded-md text-sm sm:text-md  md:text-md" onClick={handleGPTSearchView}>{showGptSearch ? `${language[lang].HOME}` : "GPT SEARCH"}</button>
                        <img className='w-4 hidden md:inline-block h-4 n md:w-12 md:h-12 my-auto' src={user?.photoURL} alt='logo' />
                        <button onClick={handleSignOut}>( {language[lang].SIGNOUT} )</button>
                    </div>
                )

            }
        </div>
    )
}

export default Header