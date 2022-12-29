import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Register() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username:"",
        email:"",
        password:"",
    })

    const handleinput =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user,[name]:value});
    }
    const Handlesubmit =async(e)=>{
        e.preventDefault();
        const {username,email,password} = user;
        try{
            const res = await fetch('/api/user/register',{
                method : "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username,email,password
                })
            })
            if(res.status===400 || !res){
                window.alert("Alredy Registered")
            }else{
                let timerInterval
                Swal.fire({
                  title: 'Register Success!',
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                      b.textContent = Swal.getTimerLeft()
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                }).then((result) => {
                  /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                  }
                })
                navigate('/Login')
            }
        }catch(err){
                console.log(err);
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-white form order-2">
                        <h1 className='display-4 fw-bolder'>Hello' There</h1>
                        <p className='lead text-center'>Enter Your Detais To Register</p>
                        <h5>OR</h5>
                        <a href="/Login"><button className='btn btn-outline-light rounded-pill pb-2 2-50 px-5 mb-4'>Login</button></a>
                    </div>
                    <div className='col-md-6 p-5'>
                        <h1 className='display-6 fw-bolder mb-5'>Register</h1>
                        <form onSubmit={Handlesubmit} method="POST">
                            <div class="mb-3">
                                <label class="form-label">User name</label>
                                <input type="text" onChange={handleinput} name="username" value={user.username} class="form-control" id="name" aria-describedby="name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" onChange={handleinput} name="email" value={user.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" onChange={handleinput} name="password" value={user.password} class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">I  Agree Terms and Conditions</label>
                            </div>
                            <button type="submit" class="btn btn-outline-dark w-100 mt-4 rounded-pill">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register