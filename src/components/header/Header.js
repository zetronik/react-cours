import React from 'react'

function Header(props) {
    return (
        <header id="topnav" className="defaultscroll sticky">
            <div className="container">
                <a
                    href="https://www.instagram.com/yana_pitielina_ua/?igshid=1a7ani28uft1x"
                    target="_blank"
                >
                    <img
                        src="images/icon/instagram.png"
                        className="img-fluid shadow rounded"
                        alt="instagram"
                        style={{width: 40, margin: 10}}
                    />
                </a>
                <div className="buy-button">
                    <a href="#cta">
                        <div className="btn btn-primary login-btn-primary">Хочу пройти курс</div>
                        <div className="btn btn-light login-btn-light">Хочу пройти курс</div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;
