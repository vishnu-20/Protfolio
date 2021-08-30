import React from 'react'

function SkillCard({skillObj: {icon,title,about}}) {
    return (
        <div className="col-lg-6">
            <div className="skill_card">
                <img src={icon} alt="icon" className="skill_icon img-fluid" />
                <div className="skill_card_body">
                    <div className="card_title">{title}</div>
                    <div className="card_about">{about}</div>

                </div>

            </div>
            
        </div>
    )
}

export default SkillCard;
