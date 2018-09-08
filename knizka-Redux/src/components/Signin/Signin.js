import React from 'react';

class Signin extends React.Component {

    constructor(){
        super();
        this.state = {
            requestSignIn: 'form__error-text-notvisit'
        }
    }

    
    saveAuthTokenInSession = (token) => {
        window.sessionStorage.setItem('token', token);
	}

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.props.emailChange,
                password: this.props.passwordChange
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.userId && data.success === 'true'){
                this.saveAuthTokenInSession(data.token);
                fetch(`http://localhost:3000/profile/${data.userId}`, {
		            method: 'get',
		            headers: {
		              'Content-Type': 'application/json',
		              'Authorization': data.token
		            }
		          })
		          .then(resp => resp.json())
		          .then(user => {
		            if(user && user.email){
                        console.log("user", user);
                        console.log("propsLoadUser", this.props.loadUser(user))
                        this.props.loadUser(user);
                        this.props.changeRoute('book');
		            }
		          })
                
                
            }
            else{
                this.setState({requestSignIn: 'form__error-text'})
                setTimeout(() => {
                    console.log(this.state.requestSignIn)
                }, 50);
            }
        })
    }

   

    render () {
        const {onEmailChange, onPasswordChange} = this.props;
        return (
            <section className="header"> 
                <div className="submit">
                    <div  className="submit__form">
                        <div className="u-margin-bottom-medium">
                            <h2 className="submit__form--h1 header-2 submit__form--h1-mg-bot">
                                Prihlásenie
                            </h2>
                        </div>
                        <div className="form__group">
                            <input 
                                onChange = {onEmailChange}
                                type="email" 
                                className="form__input" 
                                placeholder= "E-mail" 
                                id= "email" 
                                onClick = {() => this.setState({requestSignIn: 'form__error-text-notvisit '})}
                                required/>
                            <label htmlFor="email" className="form__label">E-mail</label>
                            <div className= 'form__error'>
                            <p className = {this.state.requestSignIn} >Zlé meno alebo heslo.</p>
                            </div>
                            
                        </div>

                        <div className="form__group">
                            <input 
                                onChange = {onPasswordChange}
                                type="password" 
                                className="form__input" 
                                placeholder= "Heslo" 
                                id= "password" 
                                onClick = {() => this.setState({requestSignIn: 'form__error-text-notvisit '})}
                                required/>
                            <label htmlFor="password" className="form__label">Heslo</label>
                        </div>

                        <div className="form__group">
                            <button 
                            onClick = {this.onSubmitSignIn}
                            className="btn ">Prihlásiť sa</button>
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }

        

}

export default Signin;
