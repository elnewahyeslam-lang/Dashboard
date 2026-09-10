import loginImage from"./assets/login.png"
import landingImage from"./assets/Screenshot 2026-06-13 193259.png"
import portfolioImage from"./assets/Screenshot 2026-06-16 225832.png"
import profileImage from"./assets/Screenshot 2026-06-12 193856.png"
 import burgerImage from"./assets/Screenshot 2026-06-13 190009.png"
 import dashboardImage from"./assets/Screenshot 2026-09-10 221614.png"
function Projects(){
   
    return(
        <>
        <h1 className="title-project"> Projects</h1>
        <div className="page-project">
            <div className="table-project">
                <img src={loginImage}  />
                <div className="descript">
                <h1>Login page</h1>
                <p> A responsive loin form with from validation and local storge Functionality, built with HTML,CSS,and JavaScript</p>
                </div>
                <div className="tags">
                    <h2>Local Storge</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <div className="links">
                    <a href="https://login-page-iota-gilt.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/Login-page" target="blank">GitHub</a>
                </div>
            </div>
            </div>
        
        
            <div className="table-project">
                <img src={landingImage} />
                <div className="descript">
                <h1>Landing page</h1>
                <p>A simple and responsive landing page built with HTML,CSS,and JavaScript  </p>
                </div>
                <div className="tags">
                    <h2>Html</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <div className="links">
                    <a href="https://landing-page-gamma-eight-10.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/Landing-page" target="blank">GitHub</a>
                </div>
            </div>
            </div>


            <div className="table-project">
                <img src={portfolioImage} />
                <div className="descript">
                <h1>Portfolio</h1>
                <p> My personal Portfolio website to showcase my skills and projects  </p>
                </div>
                <div className="tags">
                    <h2>Html</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <div className="links">
                    <a href="https://my-protfolio-ashen-one.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/my-protfolio" target="blank">GitHub</a>
                </div>
            </div>
            </div>


            <div className="table-project">
                <img src={profileImage} />
                <div className="descript">
                <h1>Profile</h1>
                <p> Profile Eslam , a Front-End Developer from tanta. I built modern and responsive and user-friendly websites </p>
                </div>
                <div className="tags">
                    <h2>Html</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <div className="links">
                    <a href="https://eslam-profile-rho.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/Eslam-Profile" target="blank">GitHub</a>
                </div>
            </div>
            </div>


            <div className="table-project">
                <img src={burgerImage } />
                <div className="descript">
                <h1>Burger Dream</h1>
                <p> Simple Arabic landing page for a burger dream restaurant with modern and responsive design </p>
                </div>
                <div className="tags">
                    <h2>Html</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <div className="links">
                    <a href="https://burger-dream.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/Burger-Dream" target="blank">GitHub</a>
                </div>
            </div>
            </div>

            <div className="table-project">
                <img src={dashboardImage} />
                <div className="descript">
                <h1> Dashboard Tasks</h1>
                <p>A smart task manager dashboard Dynamic Featuring state cards,task progress charts, and a recent tasks overview . Built with React and modern UI design </p>
                </div>
                <div className="tags">
                    <h2>React</h2>
                    <h2>CSS</h2>
                    <h2>Hooks</h2>
                    <div className="links">
                    <a href="" target="blank">View project</a>
                    <a href="" target="blank">GitHub</a>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}
export default Projects