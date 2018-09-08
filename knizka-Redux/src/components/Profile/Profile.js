import React from 'react';
import Button from '../Button/Button';

class Profile extends React.Component {

    constructor(){
        super();
        this.state = {
          myBook: [],
          function: false,
          activeIndex: 0,
          numberOfCountRows: 0,
          isLoadNumberOfRows: false
        }

        
      }

    componentDidMount(){
        this.getNumberOfRowsTableMyBook();
        this.props.onUpdateMyBookData(true);
        this.loadData();
        this.props.onEventLocationChangeFirst(this.props.user.location)
        this.props.onEventHuntMethodChangeFirst(this.props.user.hunting_method)
        console.log(this.props)


        
    }

    componentDidUpdate(){
        if(this.props.updateTableMyBook){
            this.loadData();
            setTimeout(() => {
                this.props.onUpdateTableMyBook(false);
            }, 20);
        }
    }

    componentWillUnmount(){
        this.props.onOffsetDataMyBook(0);
    }

    getNumberOfRowsTableMyBook = () => {
        const token = window.sessionStorage.getItem('token');
        fetch(`http://localhost:3000/numberOfRowsMyBook/${this.props.user.id}/${this.props.user.name_pz}`, {
          method: 'get',
          headers: {
            'Content-type': 'application/json',
            'Authorization': token
          }
        })
        .then(resp => resp.json())
        .then(data => {
        //   console.log(Number(data[0].count))
          this.props.onNumberOfDataTableMyBookChange(Number(data[0].count))
          this.setState({isLoadNumberOfRows: true})
    
        })
        
        .catch(err => console.log(err))
    
      }
      clicked = (index) => {
        this.setState({activeIndex: index})
          setTimeout(() => {
            
          }, 20);
      }
      

      countOfButtons = (numberOfData, numberOfVisualizeData) => {
        console.log("number",Math.ceil(numberOfData / numberOfVisualizeData))
          return  Math.ceil(numberOfData / numberOfVisualizeData)
      }
    
      buttons = (numberOfData, numberOfVisualizeData, component) => {
        let a = [];
        for(let i = 0; i < this.countOfButtons(numberOfData, numberOfVisualizeData); i++){
            a.push(<Button key = {i} component = {component} 
              onOffsetData = {this.props.onOffsetDataMyBook}
              onUpdate = { this.props.onUpdateTableMyBook} 
              
    
              name="i" index={i} isActive={ this.state.activeIndex===i } clicked={ this.clicked }  />)
          }


        
          return <div>{a}</div>;
    
        
      }

    onButtonSubmit = (data) => {
        
        fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Authorization': window.sessionStorage.getItem('token')
            },
            body: JSON.stringify({formInput: data})
        }).then( resp => {
            if(resp.status === 200 || resp.status === 304){
                this.props.onProfileOpen(false);
                this.props.loadUser({...this.props.user, ...data});
                this.props.onUpdateInputFormData(true);
            } else {
                console.log('auch')
            }
        }).catch(console.log)
        
    }

    

    onUpdateBook = (id) => {
        const today = new Date();
        const token = window.sessionStorage.getItem('token');
        fetch(`http://localhost:3000/myBook/${id}`, {
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
                hunting_method: this.props.db_hunting_method
            })
            
            })
            .then(resp => {
                resp.json();
                this.props.onUpdateDataBook(true);
            
        })
        .catch(console.log)
    }

    loadData = () => {
        const token = window.sessionStorage.getItem('token');
        fetch(`http://localhost:3000/myBook/${this.props.user.id}/${this.props.user.name_pz}/${this.props.offsetDataMyBook}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        })
        .then(resp => resp.json())
        .then(data => {
          this.setState({myBook:data})
        //   console.log(this.state.myBook)
        //     if(this.props.isValidDate('09.07.2018 09:58')){
        //         console.log('true');
        //     } else {
        //         console.log('false');
        //     }
          
        })
        .catch(console.log)
      }

      setFirstData = (date, time, name, location, hunting_method) => {
          this.props.onDateChangeFirst(date);
          this.props.onTimeChangeFirst(time);
          this.props.onNameDbChangeFirst(name);
          this.props.onLocationChangeFirst(location);
          this.props.onHuntingChangeFirst(hunting_method);

          this.props.onUpdateMyBookData(false);
      }

	render(){
        
        const {location, hunting_method} = this.props;
        const {onDateChange, onTimeChange, onNameDbChange, onLocationChange, onHuntingChange} = this.props;
		return (
			<div className = "profile-modal">
                <div className="profile">
                    <div className="profile__content">
                        <div className="profile__content-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam, saepe hic nam doloribus officiis quae repudiandae cum ipsam accusamus minima quaerat iusto consequuntur porro. Suscipit repellendus omnis alias molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam omnis, eveniet alias magnam illum corrupti exercitationem commodi sit cum distinctio similique beatae. Dolor repellendus odio unde voluptatum porro magnam!
                        </div>
                            <div className="profile__content-edit">
                            <div className="form__group profile__content-edit-form__group">
                                <input 
                                    onChange = {this.props.onEventLocationChange}
                                    type="text" 
                                    className="form__input profile__content-edit-form__input"
                                    placeholder= {this.props.user.location}
                                    id= "location" 
                                    required/>
                                <label htmlFor="name" className="form__label">Lokalita</label>
                            </div>
                            <div className="form__group profile__content-edit-form__group">
                                <input 
                                    onChange = {this.props.onEventHuntMethodChange}
                                    type="text" 
                                    className="form__input profile__content-edit-form__input"
                                    placeholder= {this.props.user.hunting_method}
                                    id= "hunting_method" 
                                    required/>
                                <label htmlFor="name" className="form__label">Spôsob poľovania</label>
                            </div>
                            <div className="input-form__inputs-btn form__input profile__content-edit-form__btn">
                                <button 
                                onClick = {() => this.onButtonSubmit({location, hunting_method})}
                                className="btn btn-green">Zmeniť údaje</button>
                            </div>
                        </div>
                    </div>
                    <div className="profile__book">
                        <h1>Zápisy v knihe návštev poľovného revíru</h1>
                        <div className="profile__book-table">
                            <div className="table__thead">
                                <p className = "table__thead-p">Dátum</p>
                                <p className = "table__thead-p">Čas príchodu/odchodu</p>
                                <p className = "table__thead-p">Meno a priezvisko poľovníka</p>
                                <p className = "table__thead-p">Lokalita</p>
                                <p className = "table__thead-p">Spôsob poľovania</p>
                                
                            </div>

                            <div>

                                    {this.state.myBook.map((user, i) => {

                                            if(this.props.isValidDate(10, this.state.myBook[i].insert_time)){
                                                if(this.props.updateMyBookData === true){
                                                    this.setFirstData(this.state.myBook[i].date, this.state.myBook[i].time, this.state.myBook[i].name, this.state.myBook[i].location, this.state.myBook[i].hunting_method);
                                                }
                                                
                                                return (
                                                <div key= {`update${i}`} className="table__tbody-input">
                                                        <input onChange = {onDateChange} type="text" className="table__tbody-input-p form__input" placeholder= {this.state.myBook[i].date} id= "date" required/>
                                                        <input onChange = {onTimeChange} type="text" className="table__tbody-input-p form__input " placeholder= {this.state.myBook[i].time} id= "time" required/>
                                                        <input onChange = {onNameDbChange} type="text" className="table__tbody-input-p form__input" placeholder={this.state.myBook[i].name} id= "name" required/>
                                                        <input onChange = {onLocationChange} type="text" className="table__tbody-input-p form__input" placeholder= {this.state.myBook[i].location} id= "location" required/>
                                                        <input onChange = {onHuntingChange} type="text" className="table__tbody-input-p form__input" placeholder= {this.state.myBook[i].hunting_method}id= "hunting_method" required/>

                                                        <button 
                                                        onClick = {() => this.onUpdateBook(this.state.myBook[i].id)}
                                                        className="btn btn-green btn-profile-update">Upraviť</button>
                                                    {/* </div> */}
                                                </div>
                                                )
                                            } else {
                                                return (
                                                    <div  key= {`notUpdate${i}`} className = 'table__under'>
                                                        <div className="table__tbody" >
                                                            <p className="table__tbody-p">{this.state.myBook[i].date} </p>
                                                            <p className="table__tbody-p">{this.state.myBook[i].time} </p>
                                                            <p className="table__tbody-p">{this.state.myBook[i].name} </p>
                                                            <p className="table__tbody-p">{this.state.myBook[i].location}</p>
                                                            <p className="table__tbody-p">{this.state.myBook[i].hunting_method}</p>
                                                            

                                                        </div>

                                                    </div>
                                                )
                                            }
                                            
                                        
                                    })}
                                    {
                                        this.state.isLoadNumberOfRows ?
                                        <div className = 'buttons-profile'>
                                        {this.buttons(this.props.numberOfDataMyBook, 5, 'mybook')}
                                        
                                        </div>
                                        :
                                        <div className = 'buttons'>
                                        <p>Load</p>
                                        </div>
                                    }
                                        
                            </div>
                        </div>
                    </div>
                    
                    <div className='profile__close' onClick={() => this.props.onProfileOpen(false)} >&times;</div>
                </div>

                
                
			</div>
		);
	}
	
}

export default Profile;