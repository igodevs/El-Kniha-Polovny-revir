import React from 'react';
import InputFormSignToBook from './InputFormSignToBook'

class InputForm extends React.Component {

    constructor(){
        super();
        this.state = {
            isLoad: false,
            //update: true,
        }
    }

    componentDidMount(){
        const today = new Date();
         this.props.getLastInsertToBook();
        this.props.onDateChangeFirst(('0' + today.getDate()).slice(-2) + '.'
        + ('0' + (today.getMonth()+1)).slice(-2) + '.'
        + today.getFullYear());
        this.props.onTimeChangeFirst(( '0' + today.getHours()).slice(-2) + ":" + ( '0' + today.getMinutes()).slice(-2));
        this.props.onNameDbChangeFirst(this.props.user.name);
        this.props.onLocationChangeFirst(this.props.user.location);
        this.props.onHuntingChangeFirst(this.props.user.hunting_method);
    }

    componentDidUpdate(){
        const today = new Date();
        if(this.props.updateInputFormData){
            this.props.onDateChangeFirst(('0' + today.getDate()).slice(-2) + '.'
        + ('0' + (today.getMonth()+1)).slice(-2) + '.'
        + today.getFullYear());
        this.props.onTimeChangeFirst(( '0' + today.getHours()).slice(-2) + ":" + ( '0' + today.getMinutes()).slice(-2));
            this.props.onLocationChangeFirst(this.props.user.location);
            this.props.onHuntingChangeFirst(this.props.user.hunting_method);
            this.props.onUpdateInputFormData(false);
            // this.setState({isLoad: false})
        } 
        if(this.props.updateInputForm) {
            setTimeout(() => { 
                this.props.onDateChangeFirst(('0' + today.getDate()).slice(-2) + '.'
            + ('0' + (today.getMonth()+1)).slice(-2) + '.'
            + today.getFullYear());
            this.props.onTimeChangeFirst(( '0' + today.getHours()).slice(-2) + ":" + ( '0' + today.getMinutes()).slice(-2));
                this.props.getLastInsertToBook();
                this.props.onUpdateInputForm(false);
                
            }, 1000);
            
        }
        else {
            return false;
        }
    }

    componentWillMount(){
        this.props.getLastInsertToBook();
    }
    

    componentWillUnmount(){
        this.props.onLastInsertToBookChange("");
    }

    onLeaveSubmitButton = () => {
        const token = window.sessionStorage.getItem('token');
        fetch('http://localhost:3000/myBookLeave', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                id: this.props.last_insert[0].id,
                name_pz: this.props.user.name_pz,
                time: `${this.props.last_insert[0].time} - ${this.props.leave_time}`, 
                count:this.props.leave_count, 
                species_gender: this.props.leave_species_gender,
                time_location: this.props.leave_time_location, 
                u_n: this.props.leave_u_n, 
                tag_number:this.props.leave_tag_number, 
                other: this.props.leave_other
            })
        })
        .then(resp => resp.json())
        .catch(console.log)
        this.props.onUpdateDataBook(true);
        console.log(`${this.props.last_insert[0].time} - ${this.props.leave_time}`)
        this.props.onUpdateInputForm(true);
        
        // this.getLastInsertToBook();

    }

    
    
    isValidBookTime = (time) => {
        return time.includes('-');
    }

    render () {
        // const today = new Date();
        // const {onDateChange, onTimeChange, onNameDbChange, onLocationChange, onHuntingChange} = this.props;
        return (
           
            <section className="section_input-form">
                <div className="input-form">

                    {
                        this.props.isLoad && !this.isValidBookTime(this.props.last_insert[0].time)
                        ?
                        <div className="input-form__block">
                            <div className="input-form__block-row">
                            
                                <div className= "input-form__block-column1">

                                    <div className="input-form__inputs input-form__inputs-leave">
                                        <div className="input-form__inputs__row-leave">
                                            <div className="input-form__inputs-2">
                                                <input  onChange = {this.props.onLeaveTimeUpdate} type="text" className="form__input form__input-leave " placeholder= 'Čas odchodu' id= "leave_time" required/>
                                                <label htmlFor="leave_time" className="form__label form__label-1">Čas Odchodu</label>
                                            </div>
                                            <div className="input-form__inputs-2">
                                                <input   onChange = {this.props.onLeaveCountUpdate} type="text" className="form__input form__input-leave " placeholder= 'Počet' id= "leave_count" required/>
                                                <label htmlFor="leave_count" className="form__label form__label-1">Počet</label>
                                            </div>
                                        </div>

                                        <div className="input-form__inputs__row-leave">
                                            <div className="input-form__inputs-2">
                                                <input  onChange = {this.props.onLeaveSpeciesGenderUpdate} type="text" className="form__input form__input-leave " placeholder= 'Druh-pohlavie' id= "leave_gender" required/>
                                                <label htmlFor="leave_gender" className="form__label form__label-1">Druh-pohlavie</label>
                                            </div>
                                            <div className="input-form__inputs-2">
                                                <input  onChange = {this.props.onLeaveTimeLocationUpdate} type="text" className="form__input form__input-leave " placeholder= 'Čas - miesto lovu' id= "leave_loc" required/>
                                                <label htmlFor="leave_loc" className="form__label form__label-1">Čas - miesto lovu</label>
                                            </div>

                                            <div className="input-form__inputs-2">
                                                <input  onChange = {this.props.onLeaveUNUpdate} type="text" className="form__input form__input-leave " placeholder= 'U/N' id= "leave_un" required/>
                                                <label htmlFor="time" className="form__label form__label-1">Ulovená/Nájdený úhyn</label>
                                            </div>
                                        </div>

                                        <div className="input-form__inputs__row-leave">
                                            <div className="input-form__inputs-2">
                                                <input  onChange = {this.props.onLeaveTagNumberUpdate} type="text" className="form__input form__input-leave " placeholder= 'Číslo značky' id= "leave_tag" required/>
                                                <label htmlFor="leave_tag" className="form__label form__label-1">Číslo použitej značky</label>
                                            </div>
                                        </div>

                                        <div className="input-form__inputs__row-leave">
                                            <div className="input-form__inputs-2">
                                                <input  onChange = {this.props.onLeaveOtherUpdate} type="text" className="form__input  form__input-bottom " placeholder= 'Ostatné zistenia' id= "leave_other" required/>
                                                <label htmlFor="leave_other" className="form__label form__label-1">Ostatné zistenia</label>
                                            </div>
                                        </div>
                                        
                                        
                                    
                                    </div>  

                            <div className="input-form__inputs-btn">
                                <button 
                                onClick = {this.onLeaveSubmitButton} 
                                className="btn btn-green">Odpísať sa</button>
                            
                            </div>
                            </div>
                            <div className= "input-form__block-column2">

                                <p>Odpis z knihy návštev</p>
                            </div>
                            </div>
                        </div>
                        :
                        <InputFormSignToBook {...this.props} />
                    }
                    
                        

                    
                </div>
            </section>
        );
    }

        

}

export default InputForm;
