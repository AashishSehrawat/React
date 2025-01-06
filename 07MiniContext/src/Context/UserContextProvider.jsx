// Step 2 : We wrap all the components in UserContext which are needed to attributes or data

import React, { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return(
        <UserContext.Provider value={{user,  setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;





