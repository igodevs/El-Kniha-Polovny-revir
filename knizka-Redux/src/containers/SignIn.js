import React, { Component } from 'react';

import Table from '../components/Table/Table';
import InputForm from '../components/InputForm/InputForm';
import AnnouncementsInputForm from '../components/AnnouncementsInputForm/AnnouncementsInputForm';
import Button from '../components/Button/Button'
import Announcements from '../components/Announcements/Announcements';




class SignIn extends Component {

  constructor(){
    super();
    this.state = {
      activeIndex: 0,
      activeIndex2: 0,
      isLoad: false
    }
  }

  componentDidMount(){
    this.getNumberOfRowsTable();
    this.getNumberOfAnnouncements();
    
  }

  componentDidUpdate(){
    if(this.props.updateInputForm) {
          this.getLastInsertToBook();
          this.props.onUpdateInputForm(false);
  }
  }


  clicked = (index, component) => {
    if(component === 'book'){
      this.setState({activeIndex: index})
      setTimeout(() => {
        
      }, 20);
    } else if(component === 'announcements'){
      this.setState({activeIndex2: index})
      setTimeout(() => {
        
      }, 20);
    }
    
  }
  

  getNumberOfRowsTable = () => {
    const token = window.sessionStorage.getItem('token');
    fetch(`http://localhost:3000/numberOfRowsBook/${this.props.user.name_pz}`, {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        'Authorization': token
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.props.onNumberOfDataTableBookChange(Number(data[0].count))

    })
    
    .catch(err => console.log(err))

  }

  getNumberOfAnnouncements = () => {
    const token = window.sessionStorage.getItem('token');
    fetch(`http://localhost:3000/numberOfRowsAnnouncements/${this.props.user.name_pz}`, {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        'Authorization': token
      }
    })
    .then(resp => resp.json())
    .then(data => {
      // this.props.onNumberOfDataTableChange(Number(data[0].count))
      this.props.onNumberOfDataTableAnnouncementsChange(Number(data[0].count))

    })
    
    .catch(err => console.log(err))

  }

  countOfButtons = (numberOfData, numberOfVisualizeData) => {
    console.log("number",Math.ceil(numberOfData / numberOfVisualizeData))
      return   Math.ceil(numberOfData / numberOfVisualizeData)
  }

  buttons = (numberOfData, numberOfVisualizeData, component) => {
    
    console.log('aa')
    let a = [];
    console.log( this.state.activeIndex===0)
    console.log( this.state.activeIndex===1)

    if(component === 'book'){
      for(let i = 0; i < this.countOfButtons(numberOfData, numberOfVisualizeData); i++){
        a.push(<Button key = {i} component = {component} 
          onOffsetData = {this.props.onOffsetDataTable}
          onUpdate = {this.props.onUpdateDataBook} 
          

          name="i" index={i} isActive={ this.state.activeIndex===i } clicked={ this.clicked }  />)
      }
    }
    else if(component === 'announcements'){
      for(let i = 0; i < this.countOfButtons(numberOfData, numberOfVisualizeData); i++){
        a.push(<Button key = {i} component = {component} 
          onOffsetData = {this.props.onOffsetDataAnnouncements}
          onUpdate = {this.props.onUpdateAnnouncements}
          
          name="i" index={i} isActive={ this.state.activeIndex2===i } clicked={ this.clicked }  />)
      }
    }

    // if(component === 'book'){
    //   for(let i = 0; i < this.countOfButtons(numberOfData, numberOfVisualizeData); i++){
    //     a.push(<Button key = {i} component = {component} onOffsetDataTableBook = {this.props.onOffsetDataTable}
    //       onOffsetDataAnnouncements = {this.props.onOffsetDataAnnouncements}
    //       onUpdateDataBook = {this.props.onUpdateDataBook}
    //       name="i" index={i} isActive={ this.state.activeIndex===i } clicked={ this.clicked }  />)
    //   }
    // }
    // else if(component === 'announcements'){
    //   for(let i = 0; i < this.countOfButtons(numberOfData, numberOfVisualizeData); i++){
    //     a.push(<Button key = {i} onOffsetDataTableBook = {this.props.onOffsetDataTable}
    //       onOffsetDataAnnouncements = {this.props.onOffsetDataAnnouncements}
    //       onUpdateDataBook = {this.props.onUpdateDataBook}
    //       onUpdateAnnouncements = {this.props.onUpdateAnnouncements}
    //       name="i" index={i} isActive={ this.state.activeIndex===i } clicked={ this.clicked }  />)
    //   }
    // }
    
      // this.props.onNumberOfVisualizeDataChange(numberOfVisualizeData);
      return <div>{a}</div>;

    
  }

  

  getLastInsertToBook = () => {
    const token = window.sessionStorage.getItem('token');
    fetch(`http://localhost:3000/bookInsert/${this.props.user.id}/${this.props.user.name_pz}`, {
        method: 'get',
        headers: {
            'Content-type': 'application/json',
            'Authorization': token
        }

    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        this.props.onLastInsertToBookChange(data)
        console.log("last_insert",this.props.last_insert[0].date)
        this.setState({isLoad: true})
    })
    .catch(err => console.log('err'));
}


  render() {
    
    return (
      <div className="container">
        {/* <Navigation { ...this.props}/> */}
        { this.props.route === 'book' ?
        <div>
          <InputForm { ...this.props} 
          isLoad = {this.state.isLoad}
          getLastInsertToBook = {this.getLastInsertToBook}
          isValidDate = {this.props.isValidDate} last_insert = {this.props.last_insert}
            onLastInsertToBookChange = {this.props.onLastInsertToBookChange}
            updateInputFormData = {this.props.updateInputFormData} onUpdateInputFormData = {this.props.onUpdateInputFormData}
            onGuestNameChangeFirst = {this.props.onGuestNameChangeFirst}
            onGuestNameChange = {this.props.onGuestNameChange}
          />
          <Table 
          getLastInsertToBook = {this.getLastInsertToBook}
            numberOfVisualizeData = {this.props.numberOfVisualizeData}
            offsetDataTable = {this.props.offsetDataTable}
            onAnotherBookDataChange = {this.props.onAnotherBookDataChange}
            isAnotherBookInfoOpen = {this.props.isAnotherBookInfoOpen}
            onAnotherBookInfoOpen = {this.props.onAnotherBookInfoOpen}
            user = {this.props.user} updateDataBook = {this.props.updateDataBook} onUpdateDataBook = {this.props.onUpdateDataBook} />

            { this.props.numberOfDataTable > 2 &&
              <div className = 'buttons'> 
                { this.buttons(this.props.numberOfDataTable, this.props.numberOfVisualizeData, 'book')}
              </div>

            }
        </div>
          
        : <div>
          <AnnouncementsInputForm user = {this.props.user}
          updateAnnouncements = {this.props.updateAnnouncements}
          onUpdateAnnouncements = {this.props.onUpdateAnnouncements}/>
          <Announcements user = {this.props.user}
          offsetDataAnnouncements = {this.props.offsetDataAnnouncements}
          selectedFile = {this.props.selectedFile}
          onDownloadFileNameChange = {this.props.onDownloadFileNameChange}
          updateAnnouncements = {this.props.updateAnnouncements}
          onUpdateAnnouncements = {this.props.onUpdateAnnouncements}
          />
          { this.props.numberOfDataTable > 2 &&
              <div className = 'buttons-ann'> 
                { this.buttons(this.props.numberOfDataAnnouncements, 5, 'announcements')}
              </div>

            }
        </div>

        
          
        }
        
        
      </div>
      
      );



  }
}

export default SignIn;
