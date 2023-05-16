import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser);
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
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} >
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>

                        <p className='text-center my-4'>Don not have an accout? <Link className='font-bold text-error' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;