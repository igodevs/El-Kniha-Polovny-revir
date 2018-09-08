import React from 'react';
// import Modal from '../Modal/Modal';
class ChangePassword extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            update: true,
            equal_class: 'p'
        }
    }

    componentDidUpdate(){
        if(this.props.new_password_1 === this.props.new_password_2 & this.props.new_password_1 !== '' & this.props.new_password_2 !== '' & this.state.update === true){
            this.setState({equal_class: 'p-equal'})
            this.setState({update: false})
        } else if(this.props.new_password_1 !== this.props.new_password_2 && this.state.equal_class !== 'p') {
            this.setState({equal_class: 'p'});
            this.setState({update: true})
        } else {
            return false;
        }
    }


    onButtonSubmit = (data) => {
        
        if(this.props.new_password_1 === this.props.new_password_2 && this.props.new_password_1 !== '' ){
            this.setState({equal_class: 'p-equal'})
            fetch(`http://localhost:3000/profilePassword/${this.props.user.id}`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Authorization': window.sessionStorage.getItem('token')
            },
            body: JSON.stringify({formInput: data})
        }).then( resp => {
            if(resp.status === 200 || resp.status === 304){
                // this.props.onProfileOpen(false);
                // this.props.loadUser({...this.props.user, ...data});
                // this.props.onUpdateInputFormData(true);
                this.props.onIsPasswordChange(true);
                console.log(this.props.isPasswordChange)
            } else {
                console.log('auch')
            }
        }).catch(console.log)
        }
        else{
            this.setState({equal_class: 'p'})
            console.log("error");
        }
        
    }

	render(){

        const {old_password, new_password_2, isPasswordChange} = this.props;
		return (
			<div className = "profile-modal">
           
                <div className="profile">
                    <div className="profile__content">
                        <div className="profile__content-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam, saepe hic nam doloribus officiis quae repudiandae cum ipsam accusamus minima quaerat iusto consequuntur porro. Suscipit repellendus omnis alias molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam omnis, eveniet alias magnam illum corrupti exercitationem commodi sit cum distinctio similique beatae. Dolor repellendus odio unde voluptatum porro magnam!
                        </div>
                            <div className="profile__content-edit" >
                            { isPasswordChange ?

                                <div className="profile__content-edit-password-change">
                                    <h1 className=""> Vaše heslo bolo zmenené. Znova sa prihláste.
                                    </h1>
                                    <div className="input-form__inputs-btn form__input profile__content-edit-form__btn">
                                                <button 
                                                onClick = {() => {
                                                    this.props.onIsPasswordChange(false);
                                                    this.props.onChangePasswordOpen(false);
                                                    window.sessionStorage.removeItem('token');
                                                    this.props.changeRoute('home');
                                                }}
                                                className="btn btn-green">Rozumiem</button>
                                            </div>
                                </div>
                                :
                                <div className="profile__content-edit-password-inputs">
                                    <div className="form__group profile__content-edit-form__group">
                                        <input 
                                            onChange = {this.props.onOldPasswordChange}
                                            type="password" 
                                            className="form__input profile__content-edit-form__input"
                                            placeholder= 'Staré heslo'
                                            id= "oldPassword" 
                                            required/>
                                        <label htmlFor="name" className="form__label">Staré heslo</label>
                                    </div>
                                    <div className="form__group profile__content-edit-form__group">
                                        <input 
                                            onChange = {this.props.onNewPasswordChange_1}
                                            type="password" 
                                            className="form__input profile__content-edit-form__input"
                                            placeholder= "nové heslo"
                                            id= "new_password_1" 
                                            required/>
                                        <label htmlFor="name" className="form__label">Nové heslo</label>
                                        
                                    </div>
                                    <div className = 'a'>
                                        <p className={this.state.equal_class}>
                                        &bull;
                                        </p>
                                        <div className="form__group profile__content-edit-form__group">

                                            <input 
                                                onChange = {this.props.onNewPasswordChange_2}
                                                type="password" 
                                                className="form__input profile__content-edit-form__input"
                                                placeholder="nové heslo"
                                                id= "new_password_2" 
                                                required/>

                                            <label htmlFor="name" className="form__label">Nové heslo</label>

                                        
                                        
                                        
                                        </div>
                                    </div>
                                    <div className="input-form__inputs-btn form__input profile__content-edit-form__btn">
                                        <button 
                                        onClick = {() => this.onButtonSubmit({old_password, new_password_2 })}
                                        className="btn btn-green">Zmeniť heslo</button>
                                    </div>
                                </div>

                            }
                                
                                
                                
                            </div>
                    </div>
                    
                    <div className='profile__close' onClick={() => {
                        this.props.OldPasswordChange("");
                        this.props.NewPasswordChange_1("");
                        this.props.NewPasswordChange_2("");
                        this.props.onChangePasswordOpen(false);

                    }} >&times;</div>

                     
                </div>
                
			</div>
            
		);
	}
	
}

export default ChangePassword;