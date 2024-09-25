import "./Landing.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Landing = ({ setshowlogin, setSignin, username, setSignadmin }) => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(username);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/readcourse"); // Make GET request to backend
        setCourses(response.data); // Set the response data to state
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) =>
    course.Coursename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <header>
          <nav>
            <div className="left">
              <img src="" className="" alt="" />
              <img src="" alt="" />
            </div>
            <div></div>
            <div className="right">
              {/* <a href="http://localhost:5000/Admin-clg" className="adminbtn">Admin<button className="signupbtn"></button> </a> */}
              <button onClick={() => setSignadmin(true)} className="signupbtn">
                Admin
              </button>
              <button onClick={() => setSignin(true)} className="signupbtn">
                Sign up
              </button>
              <button onClick={() => setshowlogin(true)} className="loginbtn">
                Log in
              </button>
              {/* {!setshowlogin && <Loginpopup setshowlogin={setshowlogin} setUserName={setUserName} userName={userName} />}
                            // <p>Hello, {userName}</p> */}
              {username && <p className="welcome">Welcome, {username}</p>}
            </div>
          </nav>
        </header>
        <main>
        <aside className="sidebar">
                        <ul>
                            <input type="checkbox" id="dropdown1" />
                            <label for="dropdown1">Research facilities</label>
                            <div class="dropdown-container">
                                <a href="#">Ph.D. : Arts – English, Marathi, Hindi</a>
                                <a href="#">Ph.D. : Science – Chemistry, Physics, Microbiology, Botany</a>
                                <a href="#">Ph.D. : Commerce – Accountancy, Costing, Business Practices, Business Administration & Law</a>
                            </div>
                            <input type="checkbox" id="dropdown2" />
                            <label for="dropdown2">Post-Graduate Degree</label>
                            <div class="dropdown-container">
                                <a href="#">M.Sc</a>
                                <a href="#">M.Com</a>
                                <a href="#">Management / MBA</a>
                                <a href="#">M.A</a>
                                
                            </div>
                            <input type="checkbox" id="dropdown3" />
                            <label for="dropdown3">Under-Graduate Degree</label>
                            <div class="dropdown-container">
                                <a href="#">B.Sc</a>
                                <a href="#">B.Com</a>
                                <a href="#">B.A</a>
                                <a href="#">B.Pharmacy</a>
                                <a href="#">B.Ed</a>
                                
                            </div>
                            <input type="checkbox" id="dropdown4" />
                            <label for="dropdown4">Diploma Courses</label>
                            <div class="dropdown-container">
                                <a href="#">Diploma in Business Management (DBM)</a>
                                <a href="#">Diploma in Capital Market Management (DCMM)</a>
                                <a href="#">Diploma in Import & Export Management (DIEM)</a>
                                <a href="#">Diploma in Materials & Logistics Management (DMLM)</a>
                                <a href="#">Diploma in Fruit Production (DFP)</a>
                                <a href="#">Diploma in Vegetable Production (DVP)</a>
                                <a href="#">Diploma in Floriculture & Landscaping (DFL)</a>
                                <a href="#">Diploma in Horticulture</a>
                                <a href="#">Diploma in Agro Journalism</a>
                                <a href="#">Diploma in Agricultural Business Management</a>
                                <a href="#">Diploma in Interior Decoration & Designing</a>
                                <a href="#">Diploma in Fashion Designing & Garment Manufacturing</a>
                                <a href="#">Diploma in Information Technology (DIT)</a>
                                <a href="#">Diploma in RGNM (3.5 years)</a>
                                <a href="#">Diploma in Pharmaceutical (D.Pharm)</a>
                            </div>
                            <input type="checkbox" id="dropdown5" />
                            <label for="dropdown5">Certificate Courses</label>
                            <div class="dropdown-container">
                                <a href="#">English</a>
                                <a href="#">French</a>
                                <a href="#">German</a>
                                <a href="#">Interior Decoration & Designing</a>
                                <a href="#">Fashion Designing & Garment Manufacturing</a>
                                <a href="#">Information Technology</a>
                                <a href="#">‘C’ Programming</a>
                                <a href="#">Java Programming</a>
                                <a href="#">Advanced Java Programming</a>
                                <a href="#">Tally 9.0 with ERP Certificate in VB.NET</a>
                                <a href="#">Basic Statistics</a>
                                <a href="#">Autonomous Certificate Course in Entrepreneurship Development (CCED)</a>
                                <a href="#">NSC NCFM Certificate Courses</a>
                                <a href="#">Communicative English</a>
                            </div>
                            <input type="checkbox" id="dropdown6" />
                            <label for="dropdown6">Training Programmes</label>
                            <div class="dropdown-container">
                                <a href="#">Nursing Management</a>
                                <a href="#">Poultry Management</a>
                                <a href="#">Food Processing</a>
                            </div>
                            <input type="checkbox" id="dropdown7" />
                            <label for="dropdown7">UGC Sponsored Career Oriented Courses</label>
                            <div class="dropdown-container">
                                <a href="#">Food Processing & Preservation</a>
                                <a href="#">Information and Communication Technology</a>
                            </div>
                            <input type="checkbox" id="dropdown1" />
                            <label for="dropdown1">Junior College Courses</label>
                            <div class="dropdown-container">
                                <a href="#">Conventional 11th & 12th Standard : Science, Home–Science Arts & Commerce.</a>
                                <a href="#">11th & 12th Vocational / MCVC Courses </a>
                            </div>
                            <input type="checkbox" id="dropdown1" />
                            <label for="dropdown1">Engineering Degree</label>
                            <div class="dropdown-container">
                                <a href="#">Masters (ME)</a>
                                <a href="#">Bachelor (BE)</a>
                                <a href="#">Polytechnic Engineering</a>
                            </div>
                            <input type="checkbox" id="dropdown1" />
                            <label for="dropdown1">Law</label>
                            <div class="dropdown-container">
                                <a href="#">Masters</a>
                                <a href="#">Bachelors</a>
                                <a href="#">Diploma</a>
                            </div>
                            <input type="checkbox" id="dropdown1" />
                            <label for="dropdown1">Professional Degree Courses</label>
                            <div class="dropdown-container">
                                <a href="#">Masters of Library & Information Science (M.Lib. I. Sc.)</a>
                                <a href="#"> P.G. Diploma in Business Management (PGDBM)</a>
                                <a href="#"> P.G.  Diploma in Computer Management (PGDCM)</a>
                                <a href="#">P.G. Advanced Diploma in Entrepreneurship Management Development (PGADED)</a>
                                
                            </div>
                            <input type="checkbox" id="dropdown1" />
                            <label for="dropdown1">Enrichment and Remedial Programme</label>
                            <div class="dropdown-container">
                                <a href="#"></a>
                                <a href="#"></a>
                            </div>
                            

                        </ul>
                    </aside>
          <section className="main-content">
            <div className="hero">
              <h1>Gokhale Education Society</h1>
              <p>Find what fascinates you as you explore various courses.</p>
              <button className="get-started">Enroll for a course</button>
            </div>
            <section className="course">
              <h1>ALL COURSE WE OFFER</h1>
              <p>
                Our University offers various courses for students. We have
                highly qualified teachers for each course.
              </p>
              {/* Search Input */}
              <input
              style={{ width: "45%", height: "40px", borderRadius: "15px", border: "1px solid #ccc", padding: "0 10px",fontSize: "16px", fontWeight: "bold" }}
                type="text"
                
                placeholder="Search by course name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                className="search-input"
              />
              {/* <div className="row">
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
                            </div> */}
              <div className="row">
                {/* <div className="career-card">
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
                                </div> */}
                {/* <h1 display >Course List</h1> */}
                <ul>
                  {/* 
Coursename
"Dipesh"
Department
"sgfsbs"
Duration
13
Eligibility
"sjdgb"
Fees
100
Intake
 */}

                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                      
                            <div className="career-card">
                                    <h2 class="course-name">{course.Coursename}</h2>
                                    <div class="course-details">
                                        <p class="course-college">College - R. H. Sapat college of Engineering</p>
                                        <p class="course-department">Department - {course.Department}</p>
                                        <p class="course-fees">Fees - {course.Fees}</p>
                                        <p class="course-duration">Duration - {course.Duration}</p>
                                        <p class="course-intake">Intake - {course.Intake}</p>
                                        <p class="course-ec">Eligibility - {course.Eligibility}</p>
                                    </div>
                                </div>
                    ))
                  ) : (
                    <p>No courses found.</p>
                  )}
                </ul>
              </div>
            </section>
          </section>
        </main>
        <footer>
          <div className="footer-section">
            <h3>Gokhale Education Society</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Prin. T. A. Kulkarni
              Vidyanagar,
              <br /> College Road, Nashik, Pin. 422 005.
            </p>
            <p>
              <i className="fas fa-phone"></i> 0253-2574682
            </p>
            <p>
              <i className="fas fa-envelope"></i> gokhale_edu@hotmail.com
            </p>
            <p>
              <i className="fas fa-clock"></i> 10:30 AM - 5:30 PM
            </p>
          </div>
          <div className="footer-section">
            <h3>Latest News</h3>
            <ul>
              <li>
                <a href="#f">
                  Application invited for the post of Assistant Professor
                </a>
              </li>
              <li>
                <a href="#f">Walk-in-Interview for various posts</a>
              </li>
              <li>
                <a href="#f">
                  Application invited for various posts @ Nursing Institute in
                  Nashik
                </a>
              </li>
              <li>
                <a href="#f">Walk in Interview for various posts @ CHB Basis</a>
              </li>
              <li>
                <a href="g">
                  Various Posts @ Sir Dr. M.S. Gosavi College of Physiotherapy
                  and Health Care Management
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#x">Campus Services</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Online Payment</h3>
            <ul>
              <li>
                <a href="#f">Payments, Refunds & Cancellation</a>
              </li>
              <li>
                <a href="#f">Privacy Policy</a>
              </li>
              <li>
                <a href="#f">Terms & Conditions</a>
              </li>
              <li>
                <a href="#f">Fees Chart</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
