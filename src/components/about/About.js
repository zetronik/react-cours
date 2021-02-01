import React from 'react'

function About(props) {
    return (
        <section className="section pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6 col-12">
                        <img src="images/courese_2.jpg" className="img-fluid shadow rounded" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ml-lg-4">
                            <h4 className="title mb-4">Привет!</h4>
                            <p className="text-muted">Я, <span className="text-primary font-weight-bold">Пителина Яна, </span>
                                косметолог со стажем работы более 6 лет, создала этот курс для женщин. Курс, который поможет каждой из вас научится ухаживать за собой.
                                Понять внутренний механизм  работы изнутри, и осознать истинные потребности, такого важного, но такого недооценённого органа, как кожа.
                            </p>
                            <p className="text-muted">
                                Что важно знать обо мне:
                                <br/>
                                Я косметолог-практик. И за время работы с клиентами через мои руки прошли около 1000 лиц, как женского так и мужского пола.
                                Повседневная работа с клиентами позволила наработать свои "фишки" и протоколы, которыми я, собственно, и хочу поделиться с тобой.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
