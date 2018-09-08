import React from 'react';

const initialState = {
    name: '',
    email: '',
    text: '',
    send: false,
    resetStates: false,
}
class Contact extends React.Component {


    constructor(){
        super();
        this.state = initialState;
    }

    componentDidUpdate(){
        if(this.state.send && this.state.resetStates){
            this.setState({
                name: '',
                email: '',
                text: '',
                resetStates: false,
            })
        }
    }
    onChangeName = (event) => {
        this.setState({name: event.target.value})
        setTimeout(() => {
            console.log(this.state.name)
        }, 20);
    }

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
        setTimeout(() => {
            console.log(this.state.email)
        }, 20);
    }

    onChangeText = (event) => {
        this.setState({text: event.target.value})
        setTimeout(() => {
            console.log(this.state.text)
        }, 20);
    }

    onSubmitContactButton = () => {
        console.log(this.state)
        fetch(`http://localhost:3000/contactus`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                text:this.state.text
            })
        })
        .then(resp => {
            if(resp.status === 200 || resp.status === 304){
                
                setTimeout(() => {
                    this.setState({send: true})
                this.setState({resetStates: true})
                }, 20);
            } else {
                console.log('auch')
            }
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="section-contact">
                <div className="section-contact-right">
                    <div className="contact">
                        <h2 className="header-2">
                            Kontaktný formulár
                        </h2> 
                        <input value = {this.state.name} onChange = {this.onChangeName} type="text" className="form__input" placeholder= 'Meno a priezvisko'/>
                        <input value = {this.state.email} onChange = {this.onChangeEmail} type="text" className="form__input" placeholder = 'E-mail'/>
                        <textarea  value = {this.state.text} onChange = {this.onChangeText} type="text" className="form__input announcements-inputs__input" placeholder = 'Text'/>
                        
                    </div>
                    <div className="contact__button">
                        <button 
                            onClick = {
                                 this.onSubmitContactButton
                            }
                            className="btn ">Odoslať</button>
                    </div>
                    
                </div>
                {
                    this.state.send &&

                    <div className= "contact-send">
                        <p>Správa bola odoslaná</p>
                        <div className="contact__button">
                            <button 
                                onClick = {() =>
                                    this.setState({send: false})
                                }
                                className="btn ">Pokračovať</button>
                        </div>
                    </div>

                }
                
                
                
            </div>
        )
    }
}

export default Contact;