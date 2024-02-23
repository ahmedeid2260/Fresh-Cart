import React, { createContext, useState } from 'react'
export const authContext = createContext()

export default function LoggedAuthProvider({children}) {
    const [token, setToken] = useState(null)
return <authContext.Provider value={{token, setToken}}>
{children}
</authContext.Provider>
}
