import "../styles.css";

export default function About() {
  return (
      <div className="contact">
          <div className="contactText col-sm-8 mx-auto">
            <h3 style={{color:"brown"}}>Contact Me</h3>
             You can find me here:<br/>
             <a href={"https://www.linkedin.com/in/vismita-prabhu-3b3b381a4/"}  id="a-social"><i className="fab fa-linkedin" id="social"></i></a>
             <a href={"https://github.com/vismitap"}  id="a-social"><i className="fab fa-github" id="social"></i></a>
             <a href={"mailto:vismita.prabhu@gmail.com"}  id="a-social"><i className="far fa-envelope" id="social"></i></a>
             <h3 style={{textAlign:'center',padding:20}}>All rights reserved © 2021 by Vismita Prabhu</h3>
        </div> 
      </div>
      
     );
}
