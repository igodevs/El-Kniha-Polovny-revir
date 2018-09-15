import React from 'react'

class EditUserBlock extends React.Component {
    constructor(){
        super()
        this.state = {
            users: '',
            isLoad: false,
            editMember: false,
        }
    }


    
    
    
    render() {
      return (
        
            <div>
           { this.state.isLoad  && this.state.users !== '' ?
               this.state.users.map((users, i) => {
                   if(!this.state.editMember){
                    return (<div key = {i} className="edit-user">
                    
                    <p className = 'edit-user-p'> {this.state.users[i].name} </p>
                    <p className = 'edit-user-p'> {this.state.users[i].function_pz} </p>
                    <div className="contact__button edit-user__button">
                            <button 
                                onClick = {() => this.setState({editMember: true})}
                                className="btn ">Upraviť</button>
                        </div>
                   </div>)
                   } 
                   else {
                    return (<div key = {i} className="edit-user">
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
                                onClick = {() => this.setState({editMember: false})}
                                className="btn ">Uložiť</button>
                        </div>
                   </div>)
                   }
                   
                   
               })
               : <p>Loading</p>
           }
           </div>
                   
      )

    }
  }
  
export default EditUserBlock;