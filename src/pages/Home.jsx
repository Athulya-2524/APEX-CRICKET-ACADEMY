import React from 'react'

function Home() {

  return (
    <>
     <div>
    <div id="carouselExample" class="carousel slide" className="container-fluid row align-items-center justify-content-center">
        <div className=" carousel-item active ">
  <img src="https://www.cricinfo360.com/wp-content/uploads/2025/02/Top-Tier-Cricket-Academy-in-Gurgaon.jpeg" className="d-block w-100" alt="..." />
</div>

<div className="carousel-item">
  <img src="https://mantorsports.com/wp-content/uploads/2022/06/DSC_0201-scaled.jpg" className="d-block w-100" alt="..." />
</div>

<div className="carousel-item">
  <img src="https://sscricketacademy.co.in/wp-content/uploads/2023/06/gal-14.jpg" className="d-block w-100" alt="..." />
</div>
 

      <div className="row">
        
            <div className="col-md-4"></div>
            <div className="col-md-4 shadow border py-5 rounded mt-5 text-center position-relative" style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
                <h3 className='text-light'>APEX CRICKET ACADEMY-
                    <br/>“Where Champions Rise.”
                </h3>
                
            </div>
        </div>
    </div>
    {/* about */}
    <section id='about' className='m-5'>
            <h1 className="text-center">ABOUT US</h1>
            <div className="container row align-items-center">
                <div className="col-md-6">
                   <p>APEX Cricket Academy is dedicated to shaping the next generation of cricketing talent through structured coaching, modern facilities, and a passion-driven training environment. Our academy combines expert guidance, fitness conditioning, and match-focused practice sessions to help young athletes master the technical, tactical, and mental aspects of the game. With a team of experienced coaches and a curriculum designed for continuous improvement, we ensure every player receives personalized attention and the opportunity to grow at their own pace.
                    <br /> At APEX, we believe in building not just skilled cricketers, but disciplined, confident, and resilient individuals ready to excel both on and off the field.</p>
                    
                </div>
                <div className="col-md-6 mt-5">
                    <img width={'680px'} src="https://mantorsports.com/wp-content/uploads/2022/06/DSC_0201-scaled.jpg" alt="resume" />
                </div>
            </div>
        </section>
    <section style={{height:'450px',width:'100%',backgroundImage:'url("https://d12eu00glpdtk2.cloudfront.net/public/images/local/Bravo-Cricket-Academy1.jpeg")',backgroundPosition:'top',backgroundAttachment:'fixed',backgroundSize:'cover'}}>
    </section>
     </div>
     {/* vision and mission */}
     <section className='m-5'>
            <div className="row container">
                <div className="col-md-6 col-12">
                    <img width={'550px'} className='mt-5' src="https://im.whatshot.in/img/2023/May/istock-621823884-1682914060.jpg" alt="vision pic" />
               
                </div>
                <div className="col-md-6 col-12">
                    <div className="row ms-5 mt-4">
                       <h3> Our Vision</h3>
                       <p>APEX is constituted with the only view of ident ifying emerging talents and nurture to groom them in to good efficient cricketers, preparing them to meet any challenges in future by providing them expert coaching and other infrastructure facilities, emotional and mental support system which will enable them blossom into accomblished cricketers with a professional attitude and approach to cricket .</p>
                       <h3>Our Mission</h3>
                       <p>Our goal is to identify young cricketing talents and provide them with the right training using innovative methods and expert coaching. We closely observe each player’s abilities and offer personalized guidance tailored to their unique skill levels, helping them grow and refine their cricketing potential effectively.</p>
                    </div>
                </div>
            </div>
        </section>
        <section style={{height:'450px',width:'100%',backgroundImage:'url("https://dunescricketacademy.ae/wp-content/uploads/slider/cache/12acd9bd50df6b68d6a89203a3de8a35/DSC0061-scaled.jpg")',backgroundPosition:'top',backgroundAttachment:'fixed',backgroundSize:'cover'}}>
    </section>

    </>
  )
}

export default Home