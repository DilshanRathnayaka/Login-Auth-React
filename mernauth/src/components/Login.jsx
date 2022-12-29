import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Login() {
   
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
   

    const handlechange = (e) => {
        let name = e.target.name;
        let value = e.target.value

        setUser({ ...user, [name]: value })
    }


    const handlesubmit = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        try {
            const res = await fetch('/api/user/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });
            if (res.status === 400 || !res) {
                window.alert("Invalid Credentials")
            } else {
                navigate('/dashboard')
                window.location.reload();
                localStorage.setItem('email', email);
                
            }
        } catch (err) {

        }
    }
    return (
        <div >
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-white form">
                        <h1 className='display-4 fw-bolder'>Welcome Back</h1>
                        <p className='lead text-center'>Enter Your Credentials To Login</p>
                        <h5>OR</h5>
                        <a href="/Register"><button className='btn btn-outline-light rounded-pill pb-2 2-50 px-5 mb-4'>Register</button></a>
                    </div>
                    <div className='col-md-6 p-5'>
                        <h1 className='display-6 fw-bolder mb-5'>Login</h1>
                        <form onSubmit={handlesubmit} method="POST">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" name="email" value={user.email} onChange={handlechange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" name="password" value={user.password} onChange={handlechange} class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-dark w-100 rounded-pill" >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login