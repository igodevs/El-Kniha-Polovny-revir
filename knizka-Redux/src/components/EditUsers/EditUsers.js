import React from 'react'

class EditUsers extends React.Component {
    constructor(){
        super()
        this.state = {
            users: '',
            isLoad: false
        }
    }

    // componentDidUpdate(){
    //     if(this.state.isLoad){
    //         console.log(this.state.users[0].name)
    //         this.setState({isLoad: false})
    //     }
    // }

    componentDidMount(){
        this.getUsers();
    }

    getUsers = () => {
        fetch(`http://localhost:3000/getUsers/${this.props.user.name_pz}`, {
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
    
    
    render() {
      return (
        <section className="section-edit-users">
       
           { this.state.isLoad ?
               this.state.users.map((users, i) => {
                   return (<div key = {i} className="edit-user">
                    <p className = 'edit-user-p'> {this.state.users[i].name} </p>
                    <p className = 'edit-user-p'> {this.state.users[i].function_pz} </p>
                   </div>)
                   
               })
               : <p>Loading</p>
           }
       
        </section>
      )

    }
  }
  
export default EditUsers;