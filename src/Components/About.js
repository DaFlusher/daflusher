import Nav from "./Nav";
import Footer from "./Footer";
const About = () => {
    return (  
        <div>
            <Nav/>
                <div className="about-grid">
                    <section className="contact">
                        <h1>Contact</h1>
                        
                        <img src={require('./daflusher.jpg')} alt="Joy Ibe" style={{width:'50%', margin:'0 auto',borderRadius:'50%'}}/>
                        
                        <div className="contact-text">
                            <div className="inline-title">
                                <h3 className="contact-subtext">Name: </h3>
                                <h3 className="contact-subtext">Alias: </h3>
                            </div>
                            <div className="inline-text">
                                <h3 className="contact-subtext"> Joy Chidinma Ibe</h3>
                                <h3 className="contact-subtext"> DaFlusher</h3>
                            </div>

                            
                        </div>
                        
                        <button className="resume" type="button" name="resume">Download Resume</button>
                    
                    </section>

                    <section className="about"> 
                        <h1>About me</h1>
                    </section>
                </div>
                
            <Footer/>
        </div>
    );
}
 
export default About;