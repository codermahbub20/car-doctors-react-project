import { Link } from 'react-router-dom';
import loginPagePhoto from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const Signup = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const name = from.name.value;
        const password = from.password.value;
        const user = { name, email, password }

        console.log(user)

        createUser(email,password)
        .then(res =>{
            const user = res.user;
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginPagePhoto} alt="" />
                </div>
                <div className="card flex-shrink-0 p-3 border w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-2xl text-center'>SignUp Now</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
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
                            <button className="btn bg-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-xl text-center'>Already You Have An Account please? <Link className='text-[#FF3811]'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;