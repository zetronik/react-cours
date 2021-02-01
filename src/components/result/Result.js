import React from 'react';

function Result(props) {
    return (
        <section className="section" id="courses">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Результат после обучения</h4>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">

                    <div className="col-sm-12 col-md-10 col-lg-8">
                        <div className="card courses-desc overflow-hidden rounded shadow border-0">
                            <div className="position-relative d-block overflow-hidden">
                                <img src="images/courese_1.jpg" className="img-fluid rounded-top mx-auto"
                                     alt=""/>
                                <div className="overlay-work bg-dark"/>
                            </div>

                            <div className="card-body text-justify">
                                <h5 className="title text-dark">
                                    - знания, которые вы начнёте применять "здесь и сейчас"<br/>
                                    - протоколы домашнего ухода<br/>
                                    - схемы БАДов для чистой и здоровой кожи<br/>
                                    - список анализов и домашние тесты<br/>
                                    - навыки, которые останутся с вами навсегда<br/>
                                    - вы будете чувствовать себя как "рыба в воде" при выборе косметики для домашнего ухода<br/>
                                    - сертификат об окончании даст вам приятные скидки лично от меня, на покупку косметики
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-4 pt-2 text-center">
                        <a href="#cta" className="btn btn-primary">
                            Хочу
                            <i className="mdi mdi-chevron-right"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Result
