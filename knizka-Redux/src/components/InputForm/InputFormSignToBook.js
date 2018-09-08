import React from 'react';


class InputFormSignToBook extends React.Component {

    onSubmitButton = () => {
        //console.log(this.props.user.email)
        const today = new Date();
        const token = window.sessionStorage.getItem('token');
        fetch('http://localhost:3000/book', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                id_user: this.props.user.id,
                email: this.props.user.email,
                name_pz: this.props.user.name_pz,
                date: this.props.db_date,
                insert_time: ('0' + today.getDate()).slice(-2) + '.'
                + ('0' + (today.getMonth()+1)).slice(-2) + '.'
                + today.getFullYear() + ' ' + ( '0' + today.getHours()).slice(-2) + ":" + ( '0' + today.getMinutes()).slice(-2),
                time: this.props.db_time,
                name: this.props.db_name,
                location:this.props.db_location,
                hunting_method: this.props.db_hunting_method,
                guest_name: this.props.db_guest_name
            })
        })
        .then(resp => resp.json())
        .catch(console.log)
        this.props.onUpdateDataBook(true);
        console.log("Dasfsda")
        this.props.onUpdateInputForm(true);
        // this.getLastInsertToBook();
        console.log(String(this.props.db_date))
        this.props.onDateChangeFirst('');
        
    }

    render () {
        const today = new Date();
        const {onDateChange, onTimeChange, onNameDbChange, onLocationChange, onHuntingChange, onGuestNameChange} = this.props;
        return (
                        <div className="input-form__block">
                            <div className="input-form__block-row">
                            
                            <div className= "input-form__block-column1">
                                <div className="input-form__inputs">
                                    <div className="input-form__inputs__row">
                                        <div className="input-form__inputs-2">
                                            <input defaultValue= {('0' + today.getDate()).slice(-2) + '.' + ('0' + (today.getMonth()+1)).slice(-2) + '.' + today.getFullYear()}  
                                            onChange = {onDateChange} type="text" className="form__input form__input-signtobook" 
                                            placeholder= {('0' + today.getDate()).slice(-2) + '.' + ('0' + (today.getMonth()+1)).slice(-2) + '.' + today.getFullYear()} id= "date" required/>
                                            <label htmlFor="date" className="form__label form__label-1">Dátum</label>
                                        </div>
                                        <div className="input-form__inputs-2">
                                            <input defaultValue= { ('0' + today.getHours()).slice(-2) + ":" + ( '0' + today.getMinutes()).slice(-2)} 
                                            onChange = {onTimeChange}type="text" className="form__input form__input-signtobook " 
                                            placeholder= { ('0' + today.getHours()).slice(-2) + ":" + ( '0' + today.getMinutes()).slice(-2)} id= "time" required/>
                                            <label htmlFor="time" className="form__label form__label-1">Čas</label>
                                        </div>
                                        <div className="input-form__inputs-2">
                                            <input  onChange = {onNameDbChange}type="text" className="form__input form__input-signtobook" placeholder={this.props.user.name} id= "name" required/>
                                            <label htmlFor="name" className="form__label form__label-1">Meno</label>
                                        </div>
                                    </div>
                                    
                                    <div className="input-form__inputs__row">
                                        <div className="input-form__inputs-2">
                                            <input  onChange = {onLocationChange}type="text" className="form__input form__input-signtobook" placeholder= {this.props.user.location} id= "location" required/>
                                            <label htmlFor="location" className="form__label form__label-1">Lokalita</label>
                                        </div>
                                        <div className="input-form__inputs-2">
                                            <input  onChange = {onHuntingChange}type="text" className="form__input form__input-signtobook" placeholder= {this.props.user.hunting_method}id= "hunting_method" required/>
                                            <label htmlFor="hunting_method" className="form__label form__label-1">Spôsob poľovania</label>
                                        </div>
                                        <div className="input-form__inputs-2">
                                            <input onChange = {onGuestNameChange} type="text" className="form__input form__input-signtobook" style = {{width: '100%' }} placeholder= 'Hosť' id= "guest_name" required/>
                                            <label htmlFor="guest_name" className="form__label form__label-1">Hosť</label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="input-form__inputs-btn">
                                    <button 
                                    onClick = {this.onSubmitButton} 
                                    className="btn btn-green">Zapísať sa</button>
                                </div>
                            </div>
                           
                            <div className= "input-form__block-column2">
                                <p className="dsaf">Zápis do knihy návštev</p>
                            </div>
                            </div>
                        </div>
                    
                    
                        

                    

        );
    }

        

}

export default InputFormSignToBook;
