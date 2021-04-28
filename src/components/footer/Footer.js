import React from 'react'
import Form from '../UI/form/Form'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <h3 className="para-desc para-dark mb-2 text-light text-center">
                            Записаться на курс
                        </h3>
                        <Form />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
