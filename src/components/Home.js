import React from 'react'


function Home() {
  return (
    <div class="box1container row border-bottom border-bottom-gray">
    <div class="box1">
        <div className='d-flex justify-content-between container-fluid'>
            <h1 class="mt-3 netflix-logo mytitle"> NETFLIX</h1>
            <button class="btn myred  text-white mt-3 mb-3 mytxt">Sign In</button>
        </div>
        
        <div class="text-center text-white container-sm  pt-5 mt-5 sm-px-1">
                <h1 class="text-center  fw-bolder mt-2 pt-3 mx-4 mx-sm-0 px-sm-0 fs-lg-1 mytitle">Unlimited movies, TV shows, and more</h1>
                <p class="mt-lg-3 mytxt">Watch anywhere. cancel anytime.</p>
                <p class=" mx-4 mt-3 mb-2 text-center mytxt"> Ready to watch? Enter your email to create or restart your
                    membership.</p>
                <div class=" d-lg-flex mt-0 justify-content-center align-items-center">

                    <div class="col-lg-5 col-sm-11 px-lg-0 px-3 px-md-5 pt-lg-4  mx-lg-3 mx-4">
 <input id="placeholder"
class=" form-control custom-input d-block  py-sm-2 ms-md-0 mx-lg-2 mt-lg-4 pt-lg-2 col-md-6 mb-3 mb-lg-4   pb-lg-2  px-4  px-lg-5 mytxt"
                            type="text" placeholder="Email address" />
</div>
<div >
<button class="btn myred mx-3 px-lg-4 mt-lg-4 mb-0 mx-lg-1 text-white  pt-lg-2 pb-lg-2 mytxt" type="button">Get&nbsp;started</button>

                    </div>
                </div>
            </div>
    </div>
</div>
  )
}

export default Home
