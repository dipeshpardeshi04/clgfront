import React from 'react'
import './Landing.css';

const Landing = ({setshowlogin,setSignin}) => {
  return (
    <>
    <div>
      
      <header>
            <nav>
                <div className="left">
                    <img src="" className="" alt=""/>
                    <img src="" alt=""/>
                </div>
                <div className="rigth">
                    <button onClick={() => setSignin(true)}  className="signupbtn">Sign up</button>
                    <button onClick={() => setshowlogin(true)} className="loginbtn">Log in</button>
                </div>
            </nav>
        </header>
        <main>
            <aside className="sidebar">
                <ul>
                    <li>Research facilities for M.Phil. / Ph.D. in various faculties.</li>
                    <li>Post-Graduate Degree</li>
                    <li>Under-Graduate Degree</li>
                    <li>Diploma Courses</li>
                    <li>Certificate Courses</li>
                    <li>Training Programmes</li>
                    <li>UGC Sponsored Career Oriented Courses</li>
                    <li>Junior College Courses</li>
                    <li>Engineering Degree</li>
                    <li>Law</li>
                    <li>Professional Degree Courses</li>
                    <li>Enrichment and Remedial Programme</li>
                </ul>
            </aside>
            <section className="main-content">
                <div className="hero">
                    <h1>Gokhale Education Society</h1>
                    <p>Find what fascinates you as you explore various courses.</p>
                    <button className="get-started">Enroll for a course</button>
                </div>
                <section className="course">
                    <h1>COURSE WE OFFER</h1>
                    <p>Our University offers various courses for students. We have highly qualified teachers for each course.</p>
                    <div className="row">
                        <div className="career-card">
                            <h3>Intermediate</h3>
                            <p>Intermediate is a two year course. It is the first step of your career. We have highly qualified teachers for each course.</p>
                            <button className="apply-button">Apply</button>
                        </div>
                        <div className="career-card">
                            <h3>Degree</h3>
                            <p>Degree is a three year course. It is the second step of your career. We have highly qualified teachers for each course.</p>
                            <button className="apply-button">Apply</button>
                        </div>
                        <div className="career-card">
                            <h3>Post Graduation</h3>
                            <p>Post Graduation is a two year course. It is the third step of your career. We have highly qualified teachers for each course.</p>
                            <button className="apply-button">Apply</button>
                        </div>
                         
                    </div>
                    <div className="row">
                        <div className="career-card">
                            <h3>Pharmacy</h3>
                            <p>B.Ed.: SPPU – 1-year course; Indira Gandhi Open University, New Delhi ( Distance Mode 2 year course )</p>
                            <button className="apply-button">Apply</button>
                        </div>
                        <div className="career-card">
                            <h3>Law</h3>
                            <p>Masters: Master of Law ( LLM); Master of Labour Laws & Labour Welfare (MLL & LW) Bachelors: LL.B. ( 3 years ); BA.LLB ( 5 years )</p>
                            <button className="apply-button">Apply</button>
                        </div>
                        <div className="career-card">
                            <h3>Engineering</h3>
                            <p>Mechanical Design Engineering, Computer Engineering, Digital System Engineering, Power Electronics & Drives Engineering.</p>
                            <button className="apply-button">Apply</button>
                        </div>
                    </div>
                  </section>
            </section>
        </main>
      

        <footer>
        <div className="footer-section">
            <h3>Gokhale Education Society</h3>
            <p><i className="fas fa-map-marker-alt"></i> Prin. T. A. Kulkarni Vidyanagar,<br></br> College Road, Nashik, Pin. 422 005.</p>
            <p><i className="fas fa-phone"></i> 0253-2574682</p>
            <p><i className="fas fa-envelope"></i> gokhale_edu@hotmail.com</p>
            <p><i className="fas fa-clock"></i> 10:30 AM - 5:30 PM</p>
        </div>
        <div className="footer-section">
            <h3>Latest News</h3>
            <ul>
                <li><a href="#f">Application invited for the post of Assistant Professor</a></li>
                <li><a href="#f">Walk-in-Interview for various posts</a></li>
                <li><a href="#f">Application invited for various posts @ Nursing Institute in Nashik</a></li>
                <li><a href="#f">Walk in Interview for various posts @ CHB Basis</a></li>
                <li><a href="g">Various Posts @ Sir Dr. M.S. Gosavi College of Physiotherapy and Health Care Management</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#x">Campus Services</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Online Payment</h3>
            <ul>
                <li><a href="#f">Payments, Refunds & Cancellation</a></li>
                <li><a href="#f">Privacy Policy</a></li>
                <li><a href="#f">Terms & Conditions</a></li>
                <li><a href="#f">Fees Chart</a></li>
            </ul>
        </div>
    </footer>
 
    </div>
    </>
  )
}

export default Landing
