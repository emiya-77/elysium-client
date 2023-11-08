import { useContext, useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Register = () => {
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        const user = { name, email };

        // reset error and success
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters or longer');
            toast.warn(registerError, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must have at least one upper case character.');
            toast.warn(registerError, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setRegisterError('Password must have at least one special character.');
            toast.warn(registerError, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        // create user in firebase
        createUser(email, password)
            .then(result => {
                axios.post('https://elysium-server.vercel.app/user', user)
                    .then(res => console.log(res.data));

                setSuccess('User Created Successfully');
                e.target.reset();

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => console.log('profile updated'))

                toast.success('Registration complete!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate('/');
            })
            .catch(error => {
                setRegisterError(error.message);
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }

    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Elysium | Register</title>
            </Helmet>
            <div className='w-full pt-20 flex justify-center items-center bg-split h-screen'>
                <div className='mx-2 lg:mx-0 container relative bg-white lg:w-[1200px] h-[750px] flex flex-col-reverse md:flex-row justify-center rounded-3xl shadow-lg'>
                    <Link to='/home'>
                        <img className='w-40 md:w-48 absolute top-[270px] md:top-10 left-[76px] md:left-12' src="/img/logo/elysium-light.png" alt="logo" />
                    </Link>
                    <div className='p-0 md:pl-20 w-full md:w-1/3 h-full relative flex justify-center items-center'>
                        <div className='w-full md:absolute'>
                            <form onSubmit={handleRegister} className='flex flex-col items-center md:items-start'>
                                <input className="input-text" type="text" name="name" placeholder="Name" required />
                                <input className="input-text" type="text" name="photo" placeholder="Photo URL" />
                                <input className="input-text" type="email" name="email" placeholder="E-mail" required />
                                <div className='relative'>
                                    <input className="input-text" type={!showPassword ? "password" : "text"} name="password" placeholder="Password" required />
                                    <span onClick={() => setShowPassword(!showPassword)} className='absolute top-6 md:top-8 text-orange-500 text-2xl right-7 md:right-11 font-semibold cursor-pointer'>
                                        {
                                            !showPassword ? <FaEyeSlash></FaEyeSlash>
                                                : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <input className="w-[200px] cursor-pointer text-xl font-medium py-4 text-white bg-[#161f26] border-2 border-[#161f26] hover:bg-opacity-0 hover:border-orange-500 hover:text-orange-500 transition duration-200 ease-in-out rounded-full mx-4 my-6 shadow-lg" type="submit" value="Register" />
                            </form>
                            <div className='relative flex justify-center md:justify-start items-center md:flex-none'>
                                <p className='text-sm md:absolute md:ml-7 md:top-[72px] md:text-base tracking-wider'>Already have an account? <Link to='/login' className="font-medium text-orange-500 opacity-100 underline">Login</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-96 md:w-2/3 md:h-full rounded-3xl flex justify-center items-center overflow-hidden'>
                        <img className='w-full h-full object-cover' src='/img/food3.jpg' alt="dinner" />
                    </div>
                </div>
            </div>
            <ToastContainer className="z-10"></ToastContainer>
        </>
    );
};

export default Register;