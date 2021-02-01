import React from 'react'
import Input from '../input/Input'
import emailjs from 'emailjs-com'
import {mail} from '../../../config/config'
import is from 'is_js'
import {Button} from 'react-bootstrap'

class Form extends React.Component {
    state = {
        isRegistration: false,
        formControl: {
            name: {
                title: 'Имя',
                value: '',
                isValid: false,
                isInvalid: false,
                type: 'text',
                name: 'name',
                placeholder: 'Введите имя'
            },
            email: {
                title: 'Почта',
                value: '',
                isValid: false,
                isInvalid: false,
                type: 'email',
                name: 'email',
                placeholder: 'Введите email'
            },
            phone: {
                title: 'Телефон',
                value: '',
                isValid: false,
                isInvalid: false,
                type: 'text',
                name: 'phone',
                placeholder: '380ХХХХХХХХХ'
            }
        }
    }
    buttonDisable = () => {
        const name = this.state.formControl.name.isValid
        const email = this.state.formControl.email.isValid
        const phone = this.state.formControl.phone.isValid

        return !(name && email && phone)
    }
    inputChangeHandler = (event) => {
        const value = event.target.value
        const name = event.target.name
        const formControl = this.state.formControl

        if (name === 'name') {
            if (value.length > 2) {
                formControl[name].value = value
                formControl[name].isInvalid = false
                formControl[name].isValid = true
            } else {
                formControl[name].value = value
                formControl[name].isInvalid = true
                formControl[name].isValid = false
            }
        }

        if (name === 'email') {
            if (is.email(value.trim())) {
                formControl[name].value = value.trim()
                formControl[name].isInvalid = false
                formControl[name].isValid = true
            } else {
                formControl[name].value = value.trim()
                formControl[name].isValid = false
                formControl[name].isInvalid = true
            }
        }

        if (name === 'phone') {
            if (is.number(+value.trim())) {
                if (value.trim().length === 12) {
                    formControl[name].value = value.trim()
                    formControl[name].isInvalid = false
                    formControl[name].isValid = true
                } else {
                    formControl[name].value = value.trim()
                    formControl[name].isValid = false
                    formControl[name].isInvalid = true
                }
            }
        }
        this.setState({formControl})
    }
    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(mail.serviceID, mail.templateID, e.target, mail.userID)
            .then((result) => {
                this.setState({
                    isRegistration: true,
                    formControl: {
                        name: {
                            title: 'Имя',
                            value: '',
                            isValid: false,
                            isInvalid: false,
                            type: 'text',
                            name: 'name',
                            placeholder: 'Введите имя'
                        },
                        email: {
                            title: 'Почта',
                            value: '',
                            isValid: false,
                            isInvalid: false,
                            type: 'email',
                            name: 'email',
                            placeholder: 'Введите email'
                        },
                        phone: {
                            title: 'Телефон',
                            value: '',
                            isValid: false,
                            isInvalid: false,
                            type: 'text',
                            name: 'phone',
                            placeholder: '380ХХХХХХХХХ'
                        }
                    }
                })
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            });
    }
    render() {
        return (
            <form onSubmit={this.sendEmail}>
                <div className="row">

                    <div className="col-lg-12">
                        <div className="form-group position-relative">
                            <label>Имя : <span className="text-danger">*</span></label>
                            <Input
                                isInvalid={this.state.formControl.name.isInvalid}
                                isValid={this.state.formControl.name.isValid}
                                type={this.state.formControl.name.type}
                                name={this.state.formControl.name.name}
                                placeholder={this.state.formControl.name.placeholder}
                                value={this.state.formControl.name.value}
                                onChange={event => this.inputChangeHandler(event)}
                            />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group position-relative">
                            <label>Почта : <span className="text-danger">*</span></label>
                            <Input
                                isInvalid={this.state.formControl.email.isInvalid}
                                isValid={this.state.formControl.email.isValid}
                                type={this.state.formControl.email.type}
                                name={this.state.formControl.email.name}
                                placeholder={this.state.formControl.email.placeholder}
                                value={this.state.formControl.email.value}
                                onChange={event => this.inputChangeHandler(event)}
                            />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group position-relative">
                            <label>Телефон : <span className="text-danger">*</span></label>
                            <Input
                                isInvalid={this.state.formControl.phone.isInvalid}
                                isValid={this.state.formControl.phone.isValid}
                                type={this.state.formControl.phone.type}
                                name={this.state.formControl.phone.name}
                                placeholder={this.state.formControl.phone.placeholder}
                                value={this.state.formControl.phone.value}
                                onChange={event => this.inputChangeHandler(event)}
                            />
                        </div>
                    </div>

                    {
                        this.state.isRegistration && <div className="col-lg-12">
                            <div className="form-group position-relative">
                                <h3 className="text-center text-danger">Заявка отправлена</h3>
                            </div>
                        </div>

                    }

                    <div className="col-lg-12 mt-2 mb-0">
                        <Button
                            disabled={this.buttonDisable()}
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Регистрация
                        </Button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form
