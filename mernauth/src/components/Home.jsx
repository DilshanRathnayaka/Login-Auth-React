import React from 'react'
import './Home.css'
import img from '../images/zero.png'
import img2 from '../images/zero2.png'


function Home() {
  return (
    <div>
        <section id="home">
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 mt-5'>
                        <h1 className='display-4 fw-bolder mb-4 text-center text-white'>Fortnite</h1>
                        <p className='lead text-center fs-4 mb-5 text-white'>For every month you’re an active Fortnite Crew subscriber, you’ll unlock a new Stage of the Photonic Legacy Set for up to six total Stages. After Stage 1, which is unlocked immediately, the Stages unlock at the same time you receive your monthly Crew Pack while subscribed (the last day of each month at 8 PM EDT / 7 PM EST). </p>
                        <div className='buttons d-flex justify-content-center'>
                            <button className='btn btn-light me-4 rounded-pill px-4 py-2'>Buy Game</button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='gamming'>
            <img className='vert-move' src={img} alt="" />
            <div className='note'>
            <h3>TAKE THE OFFENSIVE IN FORTNITE ZERO BUILD: NO-BUILD BATTLE ROYALE.</h3>
            <p>ZERO BUILD IS A TACTICAL TAKE ON FORTNITE BATTLE ROYALE. SHOW OFF YOUR SHARP SHOOTING, SHARP THINKING, AND SHARP SENSE OF SPACE AS YOU TAKE ON THE BATTLE FULL-TILT!</p>
            </div>
        </section>
        <section id='gamming-2'>
            <div className='note'>
            <h3>ZERO BUILD IS A PURE TEST OF WEAPON, ITEM, AND TRAVERSAL SKILL - NO BUILDING REQUIRED.</h3>
            <p>WITHOUT BUILDING, ALL PLAYERS HAVE THE RECHARGING OVERSHIELD AS THEIR FIRST LINE OF DEFENSE IN ZERO BUILD. SLIDE DOWNHILL TO AVOID ENEMY FIRE OR USE MANTLING TO GET THE HIGH GROUND ON OPPONENTS. DON’T FORGET TO SPRINT BETWEEN COVER ON YOUR WAY TO A VICTORY ROYALE!</p>
            </div>
            <img className='vert-move' src={img2} alt="" />
        </section>
    </div>
  )
}

export default Home