
import { useForm } from "react-hook-form";
import { BiSolidLock } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const LoginScreen = () => {
    // const [show, setShow] = useState(false)
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
                        Login
                    </h1>
                    <div className="w-full">
                        <div className="bg-gradient-to-r from-[#18273d] to-[#1f3e6c] flex items-center gap-5 px-4 rounded-full w-full active:bg-gradient-to-l active:from-[#1f3e6c] active:to-[#1f3e6c]">
                            <label htmlFor="userName"><MdEmail className="w-5 h-5" /></label>
                            <input
                                type="text"
                                {...register("userName",
                                    { required: "This field is required" }
                                )}
                                id="userName"
                                className="w-full bg-transparent border-transparent outline-none py-3 webkit-text-fill-color autofill:active:shadow-transparent autofill:active:bg-transparent autofill:transition-[background-color] autofill:duration-[5000s] autofill:delay-0 autofill:ease-in-out"
                                placeholder='User Name'
                            />
                        </div>
                        {errors?.userName?.message &&
                            <p className="text-red-400 text-xs flex items-center ml-5 mt-1"><CgDanger /> {errors?.userName?.message}</p>
                        }
                    </div>
                    
                    <div className="w-full">
                        <div className="bg-gradient-to-r from-[#18273d] to-[#1f3e6c] flex items-center gap-5 px-4 rounded-full w-full active:bg-gradient-to-l active:from-[#1f3e6c] active:to-[#1f3e6c]">
                            <label htmlFor="email"><BiSolidLock className="w-5 h-5" /></label>
                            <input
                                type="password"
                                onWheel={(e) => e.target.blur()}
                                {...register("password",
                                    { required: "This field is required" }
                                )}
                                id="password"
                                className="w-full bg-transparent border-transparent outline-none py-3 webkit-text-fill-color autofill:active:shadow-transparent autofill:active:bg-transparent autofill:transition-[background-color] autofill:duration-[5000s] autofill:delay-0 autofill:ease-in-out"
                                placeholder='Password'
                            />
                        </div>
                        {errors?.password?.message &&
                            <p className="text-red-400 text-xs flex items-center ml-5 mt-1"><CgDanger /> {errors?.password?.message}</p>
                        }
                    </div>
                    <div className="flex gap-10 items-center w-full justify-between">
                        <div>
                            <p>Forget password? <Link to={"#"} className="text-blue-400 hover:text-red-800" >click here</Link></p>
                        </div>

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
                        <p>Are you new here? <Link className="text-blue-400 hover:text-red-800" to={"/registration"}>sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginScreen;