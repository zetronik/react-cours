import React from 'react';
import {Accordion, Card} from "react-bootstrap";

function Program() {
    const program = [
        {
            title: 'Пакет 1',
            collapse: '0',
            list: [
                '1. Кожа, ее функции, строение.',
               ' 2. Основы дерматологии.',
                '3. Типы старений.',
                '4. Купероз.',
                '5. Типы кожи. Тесты для определения.',
                '6. Акне. Этиология.',
                '7. Акне. Лечение. Диета.',
                '8. Активные вещества.',
                '9. Пигментация.',
                '10. Домашний уход. Протоколы.',
                '11. Чистка лица.',
                '12. Первая помощь при высыпаниях.',
                '13. БАДы молодости.',
                '14. Аппараты дома.',
                '15. Уход подростка. Протокол.'
            ]
        },
        {
            title: 'Пакет 2',
            collapse: '1',
            list: [
                '1. Кожа, ее функции, строение.',
                '2. Основы дерматологии.',
                '3. Типы старений.',
                '4. Купероз.',
                '5. Типы кожи. Тесты для определения.',
                '6. Акне. Этиология.',
                '7. Акне. Лечение. Диета.',
                '8. Активные вещества.',
                '9. Пигментация.',
                '10. Домашний уход. Протоколы.',
                '11. Чистка лица.',
                '12. Первая помощь при высыпаниях.',
                '13. БАДы молодости.',
                '14. Химические пилинги.',
                '15. Аппараты дома.',
                '16. Уход подростка. Протокол.'
            ]
        },
        {
            title: 'Пакет 3',
            collapse: '2',
            list: [
                'Все выше перечисленное + БОНУСЫ'
            ]
        },
    ]
    const listRender = list => {
        return list.map((l, i) => {
            return (
                <li className="list-group-item" key={i}>{l}</li>
                )
        })
    }
    const accordionRender = prog => {
        return prog.map((p, i) => {
            return (
                <Card style={{backgroundColor: 'rgba(0,0,0,.0)'}} key={i}>
                    <Accordion.Toggle
                        as={Card.Header}
                        eventKey={p.collapse}
                    >
                        {p.title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={p.collapse}>
                        <Card.Body className="para-desc para-dark">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    {listRender(p.list)}
                                </ul>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )
        })
    }
    return (
        <section className="section" id="program">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Я постаралась сделать эти знания максимально доступными для каждой женщины. По этому есть несколько пакетов обучения.</h4>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12">

                        <Accordion>
                            { accordionRender(program) }
                        </Accordion>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Program
