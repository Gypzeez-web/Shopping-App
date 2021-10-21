import React from "react"

const LogOut = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default LogOut