import React from 'react';


const Layout = ({children}) => {
  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg bg-primary text-light">
        <div className="container d-flex w-100 justify-content-between">
          <div>
            <spam>VOLTAR</spam>
          </div>
          <div className="text-center">
            <strong>Links</strong>
          </div>
          <div>
            <span>Sair</span>
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;