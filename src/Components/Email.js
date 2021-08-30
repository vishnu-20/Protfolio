import React from 'react'

function Email({send,sendMail}) {
    return (
        <div className= {"email_sideMenu "+ (!send?"":" email_sideMenu_active") }>
            
        </div>
    )
}

export default Email
