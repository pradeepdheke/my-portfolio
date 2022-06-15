import React from 'react'

export const AboutMe = () => {
  return (
    <div>
         {/* <!-- about me section  --> */}
         <section class="container">
            <div class="row">
                <div class="section-title font-weight-bold">
                    <h3>About me</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-md about-me p-3">
                    <img src="./assets/pd 1.png" class="img-thumbnail text-center mb-3" alt="dheke" width = "80%" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nemo dolor! Deserunt, consectetur. Nesciunt deserunt odio saepe, est sit temporibus possimus cupiditate maiores harum reiciendis modi minima repellendus laboriosam veritatis repellat molestiae, fuga amet maxime explicabo velit aliquid eligendi. Distinctio iusto voluptatem omnis harum eius? 
        
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A consequuntur ut, in reiciendis facere mollitia odio perspiciatis vero quibusdam libero omnis nisi, placeat at, veritatis cum consequatur iusto aliquid.
                </p>
            </div>
            <div class="row">
                <div class="col-md">
                    <div class="contact">
                        <a href=""> <i class="fab fa-viber"></i></a>
                        <a href="mailto: pradeepbarca029@gmail.com"><i class="fas fa-envelope-open-text"></i></a>
                        <a href=""><i class="fab fa-facebook-square"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                        <a href=""><i class="fab fa-linkedin"></i></a>
                        
                    </div>
                </div>
            </div>
                
                
            
            
        </section>
    </div>
  )
}
