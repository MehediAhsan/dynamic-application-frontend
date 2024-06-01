
import { useForm } from "react-hook-form";


const RegistrationScreen = () => {
    // const [show, setShow] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (value) => {
        console.log(value);
        reset();
    };
    return (
        <div className='md:flex justify-center gap-10 items-center bg-white'>
            <div className='w-full md:w-1/2 py-10 bg-[#f5f7fc]'>
                {/* <img src={logo} className='w-20 h-20 mx-auto mb-5' /> */}
                {/* <h1 className='text-center font-bold'>নৌযান পরিবহন এবং বাণিজ্যকে আরো সহজ এবং দ্রুতগামী করতে
                    এখনই রেজিস্ট্রেশন করুন</h1> */}
                <img src="https://images.unsplash.com/photo-1595126731003-755959b6baf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='mx-auto object-cover px-10' />
            </div>
            <div
                className="text-black w-full md:w-1/2 py-10 md:py-0"
            >
                <div className='w-9/12 md:w-7/12 mx-auto'>
                    <h1 className='font-semibold text-xl mb-6'>Register your account</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-secondary">

                        <div className='mb-4'>
                            <label
                                className="text-sm font-semibold text-gray-600 after:content-['*'] after:text-red-400"
                            > Email
                            </label>
                            <input
                                {...register("email", { required: true })}
                                required
                                type="email"
                                placeholder='Your email here'
                                className="w-full px-3 py-5 mt-1 outline-none ring-none border border-gray-500 bg-[#E8F0FE] text-xs rounded"
                            />
                        </div>

                        <div className='mb-4'>
                            <label
                                className="text-sm font-semibold text-gray-600 after:content-['*'] after:text-red-400"
                            >  Phone Number
                            </label>
                            <input
                                onWheel={(e) => e.target.blur()}
                                {...register("phone", { required: true })}
                                required
                                type="number"
                                placeholder='Type your phone number'
                                className="w-full px-3 py-5 mt-1 outline-none ring-none border border-gray-500 bg-[#E8F0FE] text-xs rounded"
                            />
                        </div>

                        <div className='mb-4'>
                            <label
                                className="text-sm font-semibold text-gray-600 after:content-['*'] after:text-red-400"
                            > Password
                            </label>
                            <div className='relative'>
                                <input
                                    {...register("password", { required: true })}
                                    required
                                    // type={`${show ? 'text' : 'password'}`}
                                    placeholder='Type your password'
                                    className="w-full px-3 py-5 mt-1 outline-none ring-none border border-gray-500 bg-[#E8F0FE] text-xs rounded"
                                />
                                {/* {
                                    show ? <IoIosEye className='absolute top-6 right-4 text-xl text-gray-600 cursor-pointer' onClick={() => setShow(!show)} /> : <IoIosEyeOff className='absolute top-6 right-4 text-xl text-gray-600 cursor-pointer' onClick={() => setShow(!show)} />
                                } */}
                            </div>
                        </div>

                        <button
                            type='submit'
                            className="w-full rounded bg-blue-500 text-orange-50 p-3 text-center font-bold text-sm mt-5"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default RegistrationScreen;