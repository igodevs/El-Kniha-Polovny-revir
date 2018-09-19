import React from 'react'

class EditUsers extends React.Component {
    constructor(){
        super()
        this.state = {
            users: '',
            isLoad: false,
            name: '',
            email: '',
            function_pz: '',
            edited: null,
            registrationSuccess:false
        }
    }


    componentDidMount(){
        this.getUsers();
    }

    componentDidUpdate(){
        if(this.state.addNewMember) {
            this.getUsers();
            this.setState({addNewMember: false})
            
        }
    }

    getUsers = () => {
        fetch(`http://localhost:3000/getUsers/${this.props.user.name_pz}/${this.props.user.id}`, {
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': window.sessionStorage.getItem('token')
            }
        })
        .then( resp => resp.json())
        .then(data => {
            this.setState({users: data})
            console.log(this.state.users)
            this.setState({isLoad: true})
            console.log(this.state.users[0].name)
        }) 
        .catch(console.log)
        
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
    
    onSubmitRegister = () => {
    
        if( this.state.name !== '' && this.state.email !== '' && this.state.function_pz !== ''){
            let user_object =[ {user: {
                name: this.state.name,
                email: this.state.email,
                function_pz: this.state.function_pz
                
            } }]
            console.log( user_object[0].user)
            fetch('http://localhost:3000/registerUsers', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    users: user_object,
                    name_pz: this.props.user.name_pz
                })
            })
            .then(resp => 
            {
                if(resp.status === 200 || resp.status === 304){
                    this.setState({registrationSuccess: true,
                    addNewMember: true})
                }
            })
            .catch(console.log())

        }


    }

    clearInputs = () => {
        this.setState({name: '',
                    email: '',
                    function_pz: ''
                })
    }
    
    
    render() {
      return (
        <section className="section-edit-users">
            <div className="new-user-block">
                <p className = "new-user-block__header" >Registrácia nového člena</p>

                <div className = "registration__block--member" style ={{width: '90%'}}>
                
                <div className="registration__block--member--inputs">
                    <div className="registration__block--member--input">
                        <input 
                            value = {this.state.name}
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
                            value = {this.state.email}
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
                            value = {this.state.function_pz}
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
                    onClick = {this.onSubmitRegister}
                    // }}
                    className="btn">Pridať člena</button>
                </div> 

                {
                    this.state.registrationSuccess && 
                    <div className= "registration__block--member-open">
                        <p style = {{textAlign: 'center'}} >Registrácia prebehla úspešne.</p>
                        <div className="contact__button">
                            <button 
                                onClick = {() =>{
                                    
                                    this.setState({registrationSuccess: false})
                                    this.clearInputs()
                                    
                                }}
                                className="btn ">Pokračovať</button>
                        </div>
                    </div>
                }
                </div>


            </div>
            <div className="edit-users-block">
                <p className = "new-user-block__header">Úprava členov</p>
            <div className="edit">
            
           { this.state.isLoad  && this.state.users !== '' ?
               this.state.users.map((users, i) => {
                   if(this.state.edited !== i){
                    return (
                    <div key = {i} className="edit-user">
                    
                        <p className = 'edit-user-p'> {this.state.users[i].name} </p>
                        <p className = 'edit-user-p'> {this.state.users[i].function_pz} </p>
                        <div className="contact__button edit-user__button">
                                <button 
                                    onClick = {() => {
                                        // this.setState({editMember: true})
                                        this.setState({edited: i})
                                    }}
                                    className="btn ">Upraviť</button>
                                    
                        </div>
                    </div>)
                   } 
                   else {
                    return (
                    <div key = {i} className="edit-user">
                        <p className = 'edit-user-p'> {this.state.users[i].name} </p>
                        <input 
                                
                            type="text" 
                            className="form__input edit-user__input"
                            placeholder=  {this.state.users[i].function_pz}
                            name="edit-function_pz" 
                            id= "edit-function_pz" 
                            required
                            />
                        <label htmlFor="edit-function_pz" className="form__label registration__block--member--input_label edit-user__input-label">{this.state.users[i].function_pz}</label>

                        <div className="contact__button edit-user__button">
                            <button 
                                onClick = {() => this.setState({edited: null})}
                                className="btn ">Uložiť
                            </button>
                            {/* <button 
                                onClick = {() => this.setState({edited: null})}
                                className="btn " style = {{marginLeft: '1rem', backgroundColor: 'orangered'}}>Odstrániť
                            </button> */}
                           
                            
                                
                        </div>
                        <p style = {{marginTop: '1.5rem', color: 'orangered', textDecoration: 'underline', cursor: 'pointer'}}>Odstrániť člena</p>
                        
                   </div>)
                   }
                   
                   
               })
               : <p>Loading</p>
           }
           
           </div>
           </div>
       
        </section>
      )

    }
  }
  
export default EditUsers;