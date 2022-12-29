import React,{useEffect,useState} from 'react'
import axios from "axios";
import img from "../images/game.jpg"


function Dashboard() {
  const local = localStorage.getItem('email');
const [email, setEmail] = useState(local)
const [list, setList] = useState([]);
const [username, setUsername] = useState("")

useEffect(() => {
  axios.post("/api/user/",{
    email,
  }).then((res)=>{
    console.log(res)
    setList(res.data)
    localStorage.setItem('username',username)
  })
}, [])

  
  return (
   <div>
    <section id="Dashboard">
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 mt-3 text-center text-black'>
                        <h1 className='display-4 fw-bolder mb-4 text-center text-black'>Hello '{list.username}</h1> 
                        <a  href="https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=4d369ef08c8e484cace20264957ea5d5"><button className='btn-outline-primary'>Download Game</button> </a>
                    </div>
                </div>
            </div>
        </section>
        <div className='btn1'>
<a href="/Message"><button className='btn btn-primary me-4 rounded-pill px-4 py-2'>Give Us Message</button></a>
          
          
        </div>
<img className='img' src={img} alt="" />
  </div>
    
  )
}

export default Dashboard