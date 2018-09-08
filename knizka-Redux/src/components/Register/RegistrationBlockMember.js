import React from 'react';

var members = [];

class RegistrationBlockMember extends React.Component {

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            function_pz: '',
            open_edit_member: false,
            incorrect_open_edit_member: false,
            close_edit_member: false,

        }
    }

    onFormChange = (event) => {
		switch(event.target.name){
			case 'user-name':
                this.setState({name: event.target.value})
				break;
			case 'user-email':
				this.setState({email: event.target.value})
				break;
			case 'user-function_pz':
				this.setState({function_pz: event.target.value})
				break;
			default:
				return;
		}
	}

    onMemberAdd= (user, user_object) => {
        var arr = this.props.register_members;
        console.log(arr)

        let index = undefined;

        for(let i = 0; i< members.length; i++){ 
            if(members[i] === user[0]){
                index = i;   
                break;
            } 
        }

        if(index !== undefined) {
            arr.splice(index, 1,user_object);

        } else {
            arr.push(user_object)
            members.push(user[0])
        }
        console.log("index",index)
        console.log(arr)
        console.log("mem", members)

        this.props.onRegisterMembersChange(arr)
        // this.setState({registration_members: arr})
        setTimeout(() => {
            console.log("register_members", this.props.register_members)
        }, 20);

    }

    render () {
        const {index} = this.props
        return ( 
            <div className = "registration__block--member">
                <p className = 'registration__block--member--text' >{`${index+1}. Člen`}</p>
                <div className="registration__block--member--inputs">
                    <div className="registration__block--member--input">
                        <input 
                        
                            type="text" 
                            className="form__input registration__block--member--input_block"
                            placeholder= "Meno člena" 
                            name="user-name" 
                            id= "name_" 
                            required
                            onChange = {this.onFormChange}/>
                        <label htmlFor="name_" className="form__label registration__block--member--input_label">Meno člena</label>
                    </div>
                    <div className="rregistration__block--member--input">
                        <input 
                            
                            type="email" 
                            className="form__input registration__block--member--input_block"
                            placeholder= "E-mail" 
                            name="user-email" 
                            id= "email_" 
                            required
                            onChange = {this.onFormChange}/>
                        <label htmlFor="email_" className="form__label registration__block--member--input_label">E-mail</label>
                    </div>

                    <div className="rregistration__block--member--input">
                        <input 
                            
                            type="text" 
                            className="form__input registration__block--member--input_block"
                            placeholder= "Funkcia člena" 
                            name="user-function_pz" 
                            id= "function_pz" 
                            required
                            onChange = {this.onFormChange}/>
                        <label htmlFor="function_pz" className="form__label registration__block--member--input_label">Funkcia člena</label>
                    </div>
                </div>
                <div className="registration__block--member--btn">
                    <button 
                    onClick = {() => {
                        let user = [`user${index}`]
                        let user_object = { user: {
                            name: this.state.name,
                            email: this.state.email,
                            function_pz: this.state.function_pz
                            
                        }}
                        // console.log(user_object)
                         this.onMemberAdd(user, user_object)
                         this.setState({close_edit_member: true})
                         if(this.props.registration_open_edit_member){
                            this.props.onRegisterOpenEditMemberChange(false)
                            
                         }
                         
                        
                        }}
                    // }}
                    className="btn">Pridať člena</button>
                    
                </div> 
                {
                    this.state.close_edit_member && 
                    <div className= "registration__block--member-open registration__block--member-open-bgclose">
                        <p>Člen bol pridaný</p>
                        <div className="contact__button">
                            <button 
                                onClick = {() =>{
                                    if(!this.props.registration_open_edit_member){
                                    this.setState({open_edit_member: true})
                                    this.props.onRegisterOpenEditMemberChange(true)
                                    this.setState({close_edit_member: false})
                                    } else {
                                        this.setState({incorrect_open_edit_member: true})
                                    }
                                }}
                                className="btn ">Upraviť</button>
                        </div>
                    </div>
                }
                {
                    !this.state.open_edit_member && 
                    <div className= "registration__block--member-open">
                        <p>Upraviť člena</p>
                        <div className="contact__button">
                            <button 
                                onClick = {() =>{
                                    if(!this.props.registration_open_edit_member){
                                    this.setState({open_edit_member: true})
                                    this.props.onRegisterOpenEditMemberChange(true)
                                    } else {
                                        this.setState({incorrect_open_edit_member: true})
                                    }
                                }}
                                className="btn ">Pokračovať</button>
                        </div>
                    </div>
                }
                {
                    this.state.incorrect_open_edit_member && 
                    <div className= "registration__block--member-open registration__block--member-open-bg" style = {{backgroundColor: 'rgba($color-grey-light-2)'}}>
                            <p style = {{textAlign: 'center', color: 'orangered'}}>Dokončite úpravu predchádzajúceho člena</p>
                        
                        <div className="contact__button">
                            <button 
                                onClick = {() =>{
                                    
                                        this.setState({incorrect_open_edit_member: false})
                                    
                                }}
                                className="btn ">Rozumiem</button>
                        </div>
                    </div>
                }
                
            </div>
        );
    }

        

}

export default RegistrationBlockMember;
