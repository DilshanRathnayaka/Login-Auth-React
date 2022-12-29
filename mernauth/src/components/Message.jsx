import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Message() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")
    const [heading, setHeading] = useState("")
   
    const Submit = () => {
        axios.post("/api/message/", {
            email,
            message,
            heading
        }).then((res) => {
            if (res.status === 200) {
              
                let timerInterval
                Swal.fire({
                    title: 'Message Send Success!',
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
            }
        }

        )
    }

  
    

    return (
        <div id='message'> <form>
            <div class="mb-3">
                <label class="form-label">Heading</label>
                <input type="text" onChange={(e) => setHeading(e.target.value)} class="form-control" aria-describedby="name" />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Message</label>
                <textarea class="form-control" onChange={(e) => setMessage(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button onClick={Submit} class="btn btn-primary w-100 mt-4 rounded-pill">Send</button>
        </form>
       </div>
    )
}

export default Message