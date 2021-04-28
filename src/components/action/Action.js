import React from 'react'
import { Accordion, Card } from "react-bootstrap"

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
                        <div className="col-12">
                            <div className="section-title">
                                <h4 className="title title-dark text-white mb-4">Для кого курс?</h4>
                                <p className="para-desc para-dark mb-2 text-light">
                                    Для осознанных девушек, которые понимают что тонны тоналки
                                    замазывающие прыщи не решают а лишь усугубляют проблему высыпаний
                                </p>
                                <p className="para-desc para-dark mb-2 text-light">
                                    Для милых леди которые хотят иметь как можно дольше красивую и подтянутую кожу
                                </p>
                                <p className="para-desc para-dark mb-2 text-light">
                                    Для мам детей от 10 лет, да.... именно с этого возраста уже нужно прививать уход детям)
                                </p>
                                <p className="para-desc para-dark mb-2 text-light">
                                    Для женщин которые хотят продлить молодость и встретить
                                    старость с улыбкой и гордо поднятой головой.
                                </p>
                                <p className="text-light">
                                    <span style={{fontWeight: 'bold', color: '#e43f52'}}>!!!!! Внимание !!!!</span>
                                    Обучающие видео не отличаются подачей и информативностью в любом обучающем пакете.
                                </p>
                                <Accordion>
                                    <Card style={{backgroundColor: 'rgba(0,0,0,.0)'}}>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="para-desc para-dark text-light"
                                        >
                                            Пакет 1
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="para-desc para-dark text-light">
                                                Вся вышезаявленная программа, кроме химических пилингов, практик и медитаций.
                                                В группу телеграмм я сбрасываю вам ссылки на все обучающие видео, доступ к которым у вас сохранится в течении 3-х месяцев.
                                                В этом пакете нет обратной связи от меня, вы всю информацию обрабатываете сами. Но не переживайте, как показали отзывы учеников, я подаю информацию максимально простым и понятным языком.
                                                <br />
                                                Цена 500 грн / 1400 руб / 20$
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card style={{backgroundColor: 'rgba(0,0,0,.0)'}}>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="1"
                                            className="para-desc para-dark text-light"
                                        >
                                            Пакет 2
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className="para-desc para-dark text-light">
                                                Вся вышезаявленная программа, кроме практик и медитаций.
                                                В группу телеграмм я сбрасываю вам ссылки на все обучающие видео, доступ к которым у вас сохранится в течении 3-х месяцев.
                                                В этом пакете нет обратной связи от меня, вы всю информацию обрабатываете сами. Но не переживайте, как показали отзывы учеников, я подаю информацию максимально простым и понятным языком.
                                                <br />
                                                Цена 800 грн / 2200 руб / 30$
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card style={{backgroundColor: 'rgba(0,0,0,.0)'}}>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="2"
                                            className="para-desc para-dark text-light"
                                        >
                                            Пакет 3
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body className="para-desc para-dark text-light">
                                                Пакет включает мое менторство и постоянную поддержку. В этом формате обучения я всегда с вами в течении 2х месяцев.
                                                Обучение в живом формате проходит в группе телеграмм.  Отвечаю на все вопросы, выхожу в прямые эфиры. Так же этот формат подразумевает бонус от меня (дальнейшее приобретение уголовной косметики со скидкой 25%).
                                                В базу этого обучения входят психологические и эзотерические практики, направленные на любовь к себе, чувствование себя и своего тела, знакомство с собой.
                                                Это глубокая психологическая работа. Ведь мы оцениваем свою внешность исходя из внутренних установок и директив. С этим собственно и поработаем.
                                                <br />
                                                Цена 1200 грн / 3300 руб / 45$
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Action
