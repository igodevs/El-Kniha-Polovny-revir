import React from 'react';
import RegistrationBlockMember from './RegistrationBlockMember';


class Registration extends React.Component {

    constructor(){
        super();
        this.state = {
            isLoad:false,
            registrationSuccess: false,
        }
    }


    registerPZ = () => {
        fetch('http://localhost:3000/registerPZ', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name_pz: this.props.register_name_pz
            })
        })
        .then( resp => {
            if(resp.status === 200 || resp.status === 304){
                fetch('http://localhost:3000/createTableAnn', {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name_pz: this.props.register_name_pz
                    })
                })
                .then(resp => {
                    if(resp.status === 200 || resp.status === 304){
                        fetch('http://localhost:3000/registerUsers', {
                            method: 'post',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify({
                                users: this.props.register_members,
                                name_pz: this.props.register_name_pz
                            })
                        })
                        .then(resp => 
                        {
                            if(resp.status === 200 || resp.status === 304){
                                this.setState({registrationSuccess: true})
                            }
                        })
                        .catch(console.log())
                    } else {
                        console.log('auch2')
                    }
                    // resp.json();
                })
                .catch(console.log())
            } else {
                console.log('auch1')
            }
            // resp.json();
        })
        .catch(console.log())

        
    }

    numberOfRegistrationBlocks = (number_of_members) => {
        let arrayOfBlocks = [];

        for(let i = 0; i < number_of_members; i++){
            arrayOfBlocks.push(<RegistrationBlockMember 
                registration_open_edit_member = {this.props.registration_open_edit_member}
                onRegisterOpenEditMemberChange = {this.props.onRegisterOpenEditMemberChange}
                key = {i} index = {i} register_members = {this.props.register_members}
                onRegisterMembersChange = {this.props.onRegisterMembersChange}/>)
        }
        // this.setState({isLoad: true})
        return <div style = {{height: '100%',
            width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>{arrayOfBlocks}</div>
        
    }

    

    render () {
        return (
                <div className="section_registration">
                    <div className="registration">
                        <div className="registration__header">
                            <p style = {{textAlign: 'center'}} >
                            Registácia členov {this.props.register_name_pz} do Elektronickej knihy návštev</p>
                            </div>
                            
                            <div className = "registration__block">
                            {
                                this.numberOfRegistrationBlocks(this.props.number_of_members)

                            }
                            <div className="registration__header-button">
                                <button 
                                onClick = {this.registerPZ}
                                className="btn ">Dokončiť registráciu</button>
                            </div>
                            
                                
                            
                            
                        </div>
                        {
                                this.state.registrationSuccess && 
                                <div className= "registration__block--member-open registration__block--member-open-succes-registration">
                                    <p>Registrácia prebehla úspešne</p>
                                    <div className="contact__button">
                                        <button 
                                            onClick = {() =>
                                                this.setState({registrationSuccess: false})
                                                } 
                                            className="btn ">Pokračovať</button>
                                    </div>
                                </div>
                            }
                    </div>
                
                    
                    
                </div>

        );
    }

        

}

export default Registration;
