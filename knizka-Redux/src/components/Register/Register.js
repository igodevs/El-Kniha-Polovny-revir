import React from 'react';


class Register extends React.Component {

    onSubmitRegister = () => {
        let newNewStr = this.props.register_name_pz.replace(/\s/g, "_");
        console.log(newNewStr)

    }




    render () {
        return (
            <section className="header"> 
                <div className="submit">
                    <div  className="submit__form">
                        <div className="u-margin-bottom-medium">
                            <h2 className="submit__form--h1 header-2">
                                Registrácia
                            </h2>
                        </div>
                        <div className="form__group">
                            <input 
                                onChange = {this.props.onRegisterNamePzChange}
                                type="text" 
                                className="form__input"
                                placeholder= "Názov poľovného združenia" 
                                id= "name" 
                                required/>
                            <label htmlFor="name" className="form__label">Názov poľovného združenia</label>
                        </div>

                        <div className="form__group">
                            <input 
                                onChange = {this.props.onRegisterNumberOfMembersChange}
                                type="number" 
                                className="form__input"
                                placeholder= "Počet členov" 
                                id= "number" 
                                required/>
                            <label htmlFor="number" className="form__label">Počet členov</label>
                        </div>

                        <div className="form__group">
                            <button 
                            onClick = {() => this.props.changeRoute('registration')
                            }
                            className="btn">Registrovať sa</button>
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }

        

}

export default Register;
