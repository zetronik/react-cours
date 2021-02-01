import React from 'react'
import Form from '../UI/form/Form'

function Action() {
    return (
        <React.Fragment>
            <a name="cta"/>
            <section
                className="section bg-cta"
                style={{background: 'url("images/bg-cta.jpg") center center'}}
            >

                <div className="bg-overlay"/>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-7 col-12">
                            <div className="section-title">
                                <h4 className="title title-dark text-white mb-4">Для кого курс?</h4>
                                <p className="para-desc para-dark mb-4 text-light">
                                    Для осознанных девушек, которые понимают что тонны тоналки
                                    замазывающие прыщи не решают а лишь усугубляют проблему высыпаний
                                </p>
                                <p className="para-desc para-dark mb-4 text-light">
                                    Для милых леди которые хотят иметь как можно дольше красивую и подтянутую кожу
                                </p>
                                <p className="para-desc para-dark mb-4 text-light">
                                    Для мам детей от 10 лет, да.... именно с этого возраста уже нужно прививать уход детям)
                                </p>
                                <p className="para-desc para-dark mb-4 text-light">
                                    Для женщин которые хотят продлить молодость и встретить
                                    старость с улыбкой и гордо поднятой головой.
                                </p>
                                <h3 className="text-light">
                                    И самое главное
                                </h3>
                                <h3 className="text-light">
                                    Цена курса, для первого потока:
                                </h3>
                                <h3 style={{fontWeight: 'bold', color: '#e43f52'}}> 800 грн</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="card border-0 rounded">
                                <div className="card-body">
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Action
