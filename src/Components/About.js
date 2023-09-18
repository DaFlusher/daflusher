import Nav from "./Nav";
import Footer from "./Footer";
const About = () => {
    return (  
        <div>
            <Nav/>
                <div className="about-grid">
                    <section className="contact">
                        
                        <img src={require('./daflusher.jpg')} alt="Joy Ibe" style={{width:'100%', margin:'0 auto',borderRadius:'50%'}}/>
                        
                        <div className="contact-text">
                            <div className="inline-title" style={{margin:'0 0.5rem 0 0'}}>
                                <h3 className="contact-subtext">Alias:</h3>
                            </div>
                            <div className="inline-text">
                                
                                <h3 className="contact-subtext">DaFlusher</h3>
                            </div>

                            
                        </div>
                        
                        
                    </section>

                    <section className="about"> 
                        <h1 className="about-header">Who am I?</h1>
                        <p className="about-text">I am Joy Chidinma Ibe, an entry-level UX Designer and Frontend Developer. Less than two years ago, I had never even heard of UX design or web development. I stumbled into the tech field by chance via a Google Scholarship program and ever since I have not stopped learning. </p>

                        <p className="about-text">I am always open to collaboration. Feel free to contact me via my social media handles below:</p>

                        
                    </section>
                </div>
                
            <Footer/>
        </div>
    );
}
 
export default About;