import React from 'react';
// import { GlobalStyle } from "../theme/global-style";


function Layout({ children }) {
    return (
        <div className="layout">
            {/* <GlobalStyle /> */}
            {/* <Navbar /> */}
            <div className="content">
                { children }  
            </div>
            <footer>
                <p>&copy; Alberto Romero - 2021</p>
            </footer>            
        </div>
    )
}

export default Layout
