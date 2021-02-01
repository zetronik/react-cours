import React from 'react';

function Features(props) {
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div
                            className="card course-feature text-center overflow-hidden rounded shadow border-0"
                            style={{height: 300}}
                        >
                            <div className="card-body py-5">
                                <div className="icon">
                                    <img src="../images/icon/insurance.svg" className="avatar avatar-small"
                                         alt=""/>
                                </div>

                                <h4 className="mt-3"> Обучение в живом формате</h4>
                                <a href="#cta" className="text-primary read-more">
                                    Хочу
                                    <i className="mdi mdi-chevron-right"/></a>
                                <img src="../images/icon/insurance.svg" className="full-img" height="300" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div
                            className="card course-feature text-center overflow-hidden rounded shadow border-0"
                            style={{height: 300}}
                        >
                            <div className="card-body py-5">
                                <div className="icon">
                                    <img src="../images/icon/graduation-hat.svg" className="avatar avatar-small"
                                         alt=""/>
                                </div>

                                <h4 className="mt-3"> Ответы на все вопросы </h4>
                                <a href="#cta" className="text-primary read-more">Хочу
                                    <i className="mdi mdi-chevron-right"/></a>
                                <img src="../images/icon/graduation-hat.svg" className="full-img" height="300"
                                     alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card course-feature text-center overflow-hidden rounded shadow border-0"
                            style={{height: 300}}
                        >
                            <div className="card-body py-5">
                                <div className="icon">
                                    <img src="../images/icon/ai.svg" className="avatar avatar-small" alt=""/>
                                </div>

                                <h4 className="mt-3"> Сертификат об окончании курса, который предоставит ряд бонусов</h4>
                                <a href="#cta" className="text-primary read-more">Хочу
                                    <i className="mdi mdi-chevron-right"/></a>
                                <img src="../images/icon/ai.svg" className="full-img" height="300" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features
