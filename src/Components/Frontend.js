import Nav from "./Nav";
import Footer from "./Footer";


const projects =[
    {name: 'Little Lemon',
    description: 'Designing the Table Booking Page for a local restaurant',
    id:0
    },

    {name: 'News Page',
    description: 'Designing the Homepage for a News Firm on Frontend mentor',
    id:1
    },

    {name: 'MakeupAfro',
    description: 'Website for MakeupAfro. As a black woman, I could identify with this particular project.',
    id:2,
    }
];



const Frontend = () => {
        
    const projectList = projects.map(project=>
        <div className="frontend-cards">
            <img src={require('./daflusher.jpg')} style={{width:'100%'}}/>
            <div style={{padding: '0 1rem'}}>   
                <h2>{project.name}</h2>
                <p>{project.description}</p>
            </div>
            
        </div>
    
    
    )


    return ( 
        <div >
            
            <Nav/>
            <div className="projects" >
                    <h1 className="frontend" style={{margin:0, marginBottom:'1rem'}}>Frontend Projects</h1>
                    <div className="frontend-grid">
                        {projectList}
                        
                    </div>
                    

            </div>
            

            <Footer/>

        </div>
     );
}
 
export default Frontend;