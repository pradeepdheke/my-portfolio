import React from 'react'

export const Hero = () => {
  return (
  <>
    
        
        {/* <!-- hero section --> */}
        <div class="hero pb-5">
            <div class="container">
                <div class="top-nav">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                          <a class="navbar-brand" href="#">
                              <img src="./assets/Group 1.svg" alt="" width="80px" />
                          </a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Skills</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Projects</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">
                                  About us
                                </a>
                              </li> 

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact</a>
                                </li>  
                                </ul>
                             
                              
                            
                            
                          </div>
                        </div>
                      </nav>
                      

            </div>

            <div class="row mt-5">
                <div class="col-md-5 text-center order-md-2 mb-5">
                    <img src="./assets/pd 1.png" width="40%" alt="" border-radius="50%" />
                </div>
            
    
                <div class="col-md-7">
                    <div class="mb-3">Hi, This is Pradeep Dheke.</div>
                    <h1>👩‍🚒Full-stack MERN Developer!</h1>
                    <p class="mt-5 mb-2">I am passionate student who loves to learn software development.</p>
                    <button class="btn btn-danger">Download Resume <i class="fas fa-cloud-download-alt"></i> 
                    </button>
    
                </div>
           
        </div>
        </div>
        </div>
                 

   
    


  </>
  )
}
