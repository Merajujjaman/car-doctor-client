import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // create user:
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-100 my-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className="md:w-1/2 md:mr-12">
                    <img src={loginImage} alt="Login Image" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Create Account</h1>
                        <form onSubmit={handleSignIn} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>

                        <p className='text-center my-4'>Already have an account? <Link className='font-bold text-error' to='/login'>Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;