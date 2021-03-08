import React from 'react';

function Layout({ children }) {
    return (
        <div className="layout">
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
