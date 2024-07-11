
import { useForm } from "react-hook-form";
import { BiSolidLock } from "react-icons/bi";
import { FaFacebook, FaGoogle, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import { Link } from "react-router-dom";


const RegistrationScreen = () => {
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
        <div className='md:flex justify-center gap-10 items-center bg-[#101f36] h-screen text-cyan-700 '>
            <div className="m-auto flex flex-col items-center gap-10 rounded-3xl lg:w-[40%] md:w-[60%] w-[90%] p-10 border border-cyan-700">

                <form
                    className="flex flex-col items-center gap-10"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="text-[36px] font-semibold text-cyan-700 mb-10">
                        Registration
                    </h1>
                    <div className="bg-gradient-to-r from-[#18273d] to-[#1f3e6c] flex items-center gap-5 px-4 rounded-full w-[350px]">
                        <label htmlFor="email"><MdEmail className="w-5 h-5" /></label>
                        <input
                            type="email"
                            {...register("email")}
                            id="email"
                            className="w-full bg-transparent border-transparent outline-none py-3 webkit-text-fill-color autofill:active:shadow-transparent autofill:active:bg-transparent autofill:transition-[background-color] autofill:duration-[5000s] autofill:delay-0 autofill:ease-in-out"
                            placeholder='Email Address'
                        />
                    </div>
                    <div className="bg-gradient-to-r from-[#18273d] to-[#1f3e6c] flex items-center gap-5 px-4 rounded-full w-[350px]">
                        <label htmlFor="email"><PiPhoneFill className="w-5 h-5" /></label>
                        <input
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            {...register("phone")}
                            id="phone"
                            className="w-full bg-transparent border-transparent outline-none py-3 webkit-text-fill-color autofill:active:shadow-transparent autofill:active:bg-transparent autofill:transition-[background-color] autofill:duration-[5000s] autofill:delay-0 autofill:ease-in-out"
                            placeholder='Phone Number'
                        />
                    </div>
                    <div className="bg-gradient-to-r from-[#18273d] to-[#1f3e6c] flex items-center gap-5 px-4 rounded-full w-[350px]">
                        <label htmlFor="email"><BiSolidLock className="w-5 h-5" /></label>
                        <input
                            type="password"
                            onWheel={(e) => e.target.blur()}
                            {...register("password")}
                            id="password"
                            className="w-full bg-transparent border-transparent outline-none py-3 webkit-text-fill-color autofill:active:shadow-transparent autofill:active:bg-transparent autofill:transition-[background-color] autofill:duration-[5000s] autofill:delay-0 autofill:ease-in-out"
                            placeholder='Password'
                        />
                    </div>
                    <div className="flex gap-10 items-center">
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

                <div className="flex gap-10 items-center justify-around">
                    <FaFacebook className="w-7 h-7" />
                    <FaGoogle className="w-7 h-7" />
                </div>
            </div>
        </div>
    )
};

export default RegistrationScreen;