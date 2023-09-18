const Hero = () => {
    return ( 
       <section className="hero">

            <div className="hero-text">
                <h1 className="name">Hello! I am Joy Ibe</h1>
                <h5 className="job-title">Frontend Developer/Ux Designer</h5>
                <p><q>Good design is little design</q> Dieter Rams</p>
            </div>

            <div className="image">
                <img src={require('./daflusher.jpg')} width={100}  alt="Joy Ibe" className='hero-image' />
            </div>
       
       </section>
     );
}
 
export default Hero;