import React from 'react'

function Header(props) {
    return (
        <header id="topnav" className="defaultscroll sticky">
            <div className="container">
                <div className="buy-button">
                    <a href="#cta">
                        <div className="btn btn-primary login-btn-primary">Хочу пройти курс</div>
                        <div className="btn btn-light login-btn-light">Хочу пройти курс</div>
                    </a>
                </div>
                {/*<div className="menu-extras">*/}
                {/*    <div className="menu-item">*/}
                {/*        <div className="navbar-toggle">*/}
                {/*            <div className="lines">*/}
                {/*                <span/>*/}
                {/*                <span/>*/}
                {/*                <span/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div id="navigation">*/}
                {/*    <ul className="navigation-menu nav-light">*/}
                {/*        <li><a href="/">Home</a></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>
        </header>
    )
}

export default Header;
