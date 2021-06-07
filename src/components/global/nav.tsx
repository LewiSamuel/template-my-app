import React from 'react';

function Nav(){
    return(<nav className="navbar fixed-top navbar-light bg-light">
    <div className="container">

        <a className="navbar-brand" href="#">
            <img src="/fedora-hat.svg" alt="Lewix" width="24" height="24" className="d-inline-block align-text-top" />
            <b>Lewix</b>
        </a>

        <div className="btn-group">
            <button type="button" className="btn btn-outline-primary">Login</button>
            <button type="button" className="btn btn-primary">Cadastro</button>
        </div>

    </div>
  </nav>)
}
export default Nav;