
import "../App.css";
import profile from "../Assets/profile.jpg";
import resume from "../Assets/CV_Vishnu_Lal.pdf";



function Profile({send,sentEmailDirect}) {
    const sendEmail=()=>{
window.open("https://mail.google.com/mail/u/0/#inbox?compose=vishnulaleng@gmail.com")
    }
    
 

  
  return (
    <div className="profile_main">
      <img src={profile} alt="profile" className="profile_photo" />
      <div className="profile_name h3">Vishnu Lal</div>
      <div className="profile_item profile_title">Java full stack</div>
      <div className="profile_item">
        <i className="fa fa-download " aria-hidden="true"></i>
        <a href={resume} className="a" download="CV_Vishnu_Lal.pdf">
          <span className="profile_resume">Download Resume</span>
        </a>
      </div>

      <div className="profile_social_media fa-lg profile_item">
        <a href="https://www.facebook.com/" >
          <i className="fa fa-facebook " aria-hidden="true"></i>
        </a>
        <span className="intagram_profile"> 
        <a href="https://www.instagram.com/">
          <i
            className="fa fa-instagram"
            style={{ color: "pink" }}
            aria-hidden="true"
          ></i>
        </a>
        </span>
      </div>
      <div className="profile_item">
        <i className="fa fa-github fx-lg" aria-hidden="true"></i>
        <a href="https://github.com/vishnu-20/" className="a">
          <span className="profile_github">GitHub</span>
        </a>
      </div>
      <div className="profile_contact profile_item">
        <div className="profile_contact">Muvattupuzha, Kerala ,India</div>
        <div className="profile_contact">vishnulaleng@gmail.com</div>
        <div className="profile_contact">+91 9207450908, 7025507115</div>
      </div>
      <div className="profile_contact profile_email profile_item" onClick={()=>sentEmailDirect(!send)}>Email me</div>
    </div>
  );
}

export default Profile;
