const Hero = () => {
    return ( 
       <section className="hero">

            <div className="hero-text">
                <h1 className="name">Hello! I am Joy Ibe</h1>
                <h5 className="job-title">Frontend Developer/Ux Designer</h5>
                <p>A wiseman once said <i>"Good design is little design"</i></p>
            </div>

            <div className="image">
                <img src={require('./daflusher.jpg')} width={100}  alt="an image of Joy Ibe" />
            </div>
       
       </section>
     );
}
 
export default Hero;