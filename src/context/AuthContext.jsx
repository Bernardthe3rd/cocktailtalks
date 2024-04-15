import {createContext} from "react";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {


    const data = {

    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;

}

export default AuthContextProvider;