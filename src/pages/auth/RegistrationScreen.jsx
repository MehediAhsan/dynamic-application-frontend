
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSolidLock } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { emailRegex } from "../../helpers/regex.js";


const RegistrationScreen = () => {
    const [show, setShow] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (value) => {
        console.log(value);
        reset();
    };
    return (
        <div className='flex justify-center gap-10 items-center bg-[#101f36] h-screen text-cyan-700 '>
            <div className="m-auto flex flex-col items-center gap-10 rounded-3xl lg:w-[30%] md:w-[60%] w-[95%] py-10 px-8 md:px-16 border border-cyan-700">

                <form
                    className="flex flex-col items-center gap-10 w-full"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="text-[36px] font-semibold text-cyan-700 mb-10">
                        Registration
                    </h1>
                    <div className="w-full">
                        <div className="bg-gradient-to-r from-[#18273d] to-[#1f3e6c] flex items-center gap-5 px-4 rounded-full w-full">
                            <label htmlFor="email"><MdEmail className="w-5 h-5" /></label>
                            <input
                                type="email"
                                {...register("email",
                                    { 
                                        required: "This field is required",
                                        pattern: { value: emailRegex,
                                            message: "Please enter a valid email address"
                                        }
                                    },
                                    
                                )}
                                id="email"
                                className="w-full bg-transparent border-transparent outline-none py-3 webkit-text-fill-color autofill:active:shadow-transparent autofill:active:bg-transparent autofill:transition-[background-color] autofill:duration-[5000s] autofill:delay-0 autofill:ease-in-out"
                                placeholder='Email Address'
                            />
                        </div>
                        {errors?.email?.message &&
                            <p className="text-red-400 text-xs flex items-center ml-5 mt-1"><CgDanger /> {errors?.email?.message}</p>
                        }
                    </div>
                    <div className="w-full">
                        <div className="bg-gradient-to-r from-[#18273d] to-[#1f3e6c] flex items-center gap-5 px-4 rounded-full w-full">
                            <label htmlFor="email"><PiPhoneFill className="w-5 h-5" /></label>
                            <input
                                type="number"
                                onWheel={(e) => e.target.blur()}
                                {...register("phone",
                                    { required: "this field is required" }
                                )}
                                id="phone"
                                className="w-full bg-transparent border-transparent outline-none py-3 webkit-text-fill-color autofill:active:shadow-transparent autofill:active:bg-transparent autofill:transition-[background-color] autofill:duration-[5000s] autofill:delay-0 autofill:ease-in-out"
                                placeholder='Phone Number'
                            />
                        </div>
                        {errors?.phone?.message &&
                            <p className="text-red-400 text-xs flex items-center ml-5 mt-1"><CgDanger /> {errors?.phone?.message}</p>
                        }
                    </div>
                    <div className="w-full">
                        <div className="bg-gradient-to-r from-[#18273d] to-[#1f3e6c] flex items-center gap-5 px-4 rounded-full w-full">
                            <label htmlFor="email"><BiSolidLock className="w-5 h-5" /></label>
                            <div className="relative w-full">
                                <input
                                    type={show ? "text" : "password"}
                                    onWheel={(e) => e.target.blur()}
                                    {...register("password",
                                        { required: "This field is required" }
                                    )}
                                    id="password"
                                    className="w-full bg-transparent border-transparent outline-none py-3 webkit-text-fill-color autofill:active:shadow-transparent autofill:active:bg-transparent autofill:transition-[background-color] autofill:duration-[5000s] autofill:delay-0 autofill:ease-in-out"
                                    placeholder='Password'
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xl cursor-pointer" onClick={() => setShow(!show)}>
                                    {
                                        show ? <HiMiniEyeSlash /> : <HiMiniEye />
                                    }
                                </div>
                            </div>
                        </div>
                        {errors?.password?.message &&
                            <p className="text-red-400 text-xs flex items-center ml-5 mt-1"><CgDanger /> {errors?.password?.message}</p>
                        }
                    </div>
                    <div className="flex gap-10 items-center w-full justify-center">

                        <button
                            type="submit"
                            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#18273d] to-[#1f3e6c] text-cyan-300 hover:bg-gradient-to-l hover:from-[#1f3e6c] hover:to-[#1f3e6c]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="space-y-3">
                    <div className="flex gap-10 items-center justify-center">
                        <FaFacebook className="w-7 h-7" />
                        <FaGoogle className="w-7 h-7" />
                    </div>
                    <div>
                        <p>Already have an account? please <Link className="text-blue-400 hover:text-red-800" to={"/login"}>sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RegistrationScreen;