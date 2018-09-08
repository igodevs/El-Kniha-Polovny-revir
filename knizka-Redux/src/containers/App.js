import React, { Component } from 'react';

import SignIn from './SignIn';
import Navigation from '../components/Navigation/Navigation';
import Home from './Home';
import Footer from '../components/Footer/Footer';
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';
import Modal from '../components/Modal/Modal';
import Profile from '../components/Profile/Profile';
import ChangePassword from '../components/ChangePassword/ChangePassword';
import AnotherBookInfoModal from '../components/AnotherBookInfoModal/AnotherBookInfoModal';
import Contact from '../components/Contact/Contact';
import Registration from '../components/Register/Registration';

import { connect } from 'react-redux';

import {setEmail, setPassword, setName, setLocation, setHuntMethod, setOldPassword, setNewPassword_1, setNewPassword_2,
    setUser, setAnotherBookInfo,
    setRoute, 
    setSignIn, 
    updateTable, updateInputForm, updateInputFormMyBook, reloadInputForm, updateTableMyBookInProfile,
    setDbDate, setDbTime, setDbName, setDbLocation, setDbHuntMethod, setDbGuestName, setLastInsertToBook,
    setProfileOpen, setChangePasswordOpen, setAnotherBookInfoOpen, 
    setIsPasswordChange,
    set_leave_time, set_leave_count, set_leave_species_gender, set_leave_time_location, set_leave_u_n, set_leave_tag_number, set_leave_other,
    setDownloadFileName,
    setUpdateAnnouncements,
    setNumberOfDataBookTable, setNumberOfDataAnnouncementsTable, setNumberOfVisualizeData, setOffsetOfDataTable, setOffsetOfDataTableAnnouncemets, setNumberOfDataMyBookTable,
    setOffsetOfDataTableMyBook,

    setRegisterNamePZ, setRegisterNumberOfMembers, setRegisterMembers, setRegisterOpenEditMember
} from '../actions';





  const mapStateToProps = state => {
      return {
        register_name_pz: state.register.register_name_pz,
        number_of_members: state.register.number_of_members,
        register_members: state.register.register_members,
        registration_open_edit_member: state.register.registration_open_edit_member,

        emailChange: state.setForm.email,
        passwordChange: state.setForm.password,
        nameChange: state.setForm.name,
        user: state.setUserData.user,
        location: state.setForm.location,
        hunting_method: state.setForm.hunting_method,
        anotherBookData: state.setAnotherBookData.anotherBookData,

        old_password: state.setForm.old_password,
        new_password_1: state.setForm.new_password_1,
        new_password_2: state.setForm.new_password_2,

        route: state.setRouteData.route,
        isSignIn: state.setRouteData.isSignedIn,

        updateDataBook: state.update.updateDataBook,
        updateInputFormData: state.update.updateInputFormData,
        updateMyBookData: state.update.updateMyBookData,
        updateInputForm: state.update.updateInputForm,
        updateTableMyBook: state.update.updateTableMyBook,

        db_date: state.updateInputsForm.date,
        db_time: state.updateInputsForm.time,
        db_name: state.updateInputsForm.name,
        db_location: state.updateInputsForm.location,
        db_hunting_method: state.updateInputsForm.hunting_method,
        db_guest_name: state.updateInputsForm.guest_name,
        

        isProfileOpen: state.updateIsOpen.isProfileOpen,
        isChangePasswordOpen: state.updateIsOpen.isChangePasswordOpen,
        isAnotherBookInfoOpen: state.updateIsOpen.isAnotherBookInfoOpen,

        isPasswordChange: state.updateIfSomething.isPasswordChange,

        last_insert: state.update_last_insert.last_insert,

        leave_time: state.setLeaveData.leave_time,
        leave_count: state.setLeaveData.leave_count,
        leave_species_gender : state.setLeaveData.leave_species_gender,
        leave_time_location: state.setLeaveData.leave_time_location,
        leave_u_n : state.setLeaveData.leave_u_n,
        leave_tag_number : state.setLeaveData.leave_tag_number,
        leave_other :state.setLeaveData.leave_other,

        selectedFile: state.setAnnouncementsData.selectedFile,
        updateAnnouncements: state.update.updateAnnouncements,

        numberOfDataTable: state.setNumberOf.numberOfDataTable,
        numberOfDataAnnouncements: state.setNumberOf.numberOfDataAnnouncements,
        numberOfDataMyBook: state.setNumberOf.numberOfDataMyBook,
        offsetDataTable: state.setNumberOf.offsetDataTable,
        numberOfVisualizeData: state.setNumberOf.numberOfVisualizeData,
        offsetDataAnnouncements: state.setNumberOf.offsetDataAnnouncements,
        offsetDataMyBook: state.setNumberOf.offsetDataMyBook
      }
  }

  const mapDispatchToProps = (dispatch) => {
      return {

        onRegisterNamePzChange: (event) => dispatch(setRegisterNamePZ(event.target.value)),
        onRegisterNumberOfMembersChange: (event) => dispatch(setRegisterNumberOfMembers(event.target.value)),
        onRegisterMembersChange: (event) => dispatch(setRegisterMembers(event)),
        onRegisterOpenEditMemberChange: (bool) => dispatch(setRegisterOpenEditMember(bool)),

        onEmailChange: (event) => dispatch(setEmail(event.target.value)),
        onPasswordChange: (event) => dispatch(setPassword(event.target.value)),
        onNameChange: (event) => dispatch(setName(event.target.value)),
        onEventLocationChangeFirst: (text) => dispatch(setLocation(text)),
        onEventLocationChange: (event) => dispatch(setLocation(event.target.value)),
        onEventHuntMethodChangeFirst: (text) => dispatch(setHuntMethod(text)),
        onEventHuntMethodChange: (event) => dispatch(setHuntMethod(event.target.value)),

        onAnotherBookDataChange: (array) => dispatch(setAnotherBookInfo(array)),

        onOldPasswordChange: (event) => dispatch(setOldPassword(event.target.value)),
        onNewPasswordChange_1: (event) => dispatch(setNewPassword_1(event.target.value)),
        onNewPasswordChange_2: (event) => dispatch(setNewPassword_2(event.target.value)),

        OldPasswordChange: (text) => dispatch(setOldPassword(text)),
        NewPasswordChange_1: (text) => dispatch(setNewPassword_1(text)),
        NewPasswordChange_2: (text) => dispatch(setNewPassword_2(text)),

        loadUser: (data) => dispatch(setUser(data)),
        onRouteChange: (route) => dispatch(setRoute(route)),
        onSignIn: (bool) => dispatch(setSignIn(bool)),

        onUpdateDataBook: (bool) => dispatch(updateTable(bool)),
        onUpdateInputFormData: (bool) => dispatch(updateInputForm(bool)),
        onUpdateMyBookData: (bool) => dispatch(updateInputFormMyBook(bool)),
        onUpdateInputForm: (bool) => dispatch(reloadInputForm(bool)),
        onUpdateTableMyBook: (bool) => dispatch(updateTableMyBookInProfile(bool)),

        onDateChangeFirst: (date) => dispatch(setDbDate(date)),
        onDateChange: (event) => dispatch(setDbDate(event.target.value)),
        onTimeChangeFirst: (time) => dispatch(setDbTime(time)),
        onTimeChange: (event) => dispatch(setDbTime(event.target.value)),
        onNameDbChangeFirst: (name) => dispatch(setDbName(name)),
        onNameDbChange: (event) => dispatch(setDbName(event.target.value)),
        onLocationChangeFirst: (location) => dispatch(setDbLocation(location)),
        onLocationChange: (event) => dispatch(setDbLocation(event.target.value)),
        onHuntingChangeFirst: (hunting_method) => dispatch(setDbHuntMethod(hunting_method)),
        onHuntingChange: (event) => dispatch(setDbHuntMethod(event.target.value)),
        onGuestNameChangeFirst: (guest_name) => dispatch(setDbGuestName(guest_name)),
        onGuestNameChange: (event) => dispatch(setDbGuestName(event.target.value)),

        onProfileOpen: (bool) => dispatch(setProfileOpen(bool)),
        onChangePasswordOpen: (bool) => dispatch(setChangePasswordOpen(bool)),
        onAnotherBookInfoOpen: (bool) => dispatch(setAnotherBookInfoOpen(bool)),

        onIsPasswordChange: (bool) => dispatch(setIsPasswordChange(bool)),

        onLastInsertToBookChange: (text) => dispatch(setLastInsertToBook(text)),

        onLeaveTimeUpdate: (event) => dispatch(set_leave_time(event.target.value)),
        onLeaveCountUpdate: (event) => dispatch(set_leave_count(event.target.value)),
        onLeaveSpeciesGenderUpdate: (event) => dispatch(set_leave_species_gender(event.target.value)),
        onLeaveTimeLocationUpdate: (event) => dispatch(set_leave_time_location(event.target.value)),
        onLeaveUNUpdate: (event) => dispatch(set_leave_u_n(event.target.value)),
        onLeaveTagNumberUpdate: (event) => dispatch(set_leave_tag_number(event.target.value)),
        onLeaveOtherUpdate: (event) => dispatch(set_leave_other(event.target.value)),

        onDownloadFileNameChange: (text) => dispatch(setDownloadFileName(text)),
        onUpdateAnnouncements: (bool) => dispatch(setUpdateAnnouncements(bool)),

        onNumberOfDataTableBookChange: (number) => dispatch(setNumberOfDataBookTable(number)),
        onNumberOfDataTableAnnouncementsChange: (number) => dispatch(setNumberOfDataAnnouncementsTable(number)),
        onNumberOfVisualizeDataChange: (number) => dispatch(setNumberOfVisualizeData(number)),
        onNumberOfDataTableMyBookChange: (number) => dispatch(setNumberOfDataMyBookTable(number)), 
        onOffsetDataTable: (number) => dispatch(setOffsetOfDataTable(number)),
        onOffsetDataAnnouncements: (number) => dispatch(setOffsetOfDataTableAnnouncemets(number)),
        onOffsetDataMyBook: (number) => dispatch(setOffsetOfDataTableMyBook(number))


  }
}


class App extends Component {




  componentDidMount(){
    this.props.onNumberOfVisualizeDataChange(5);
      console.log(this.props)
      const token = window.sessionStorage.getItem('token');
      if(token){
          fetch('http://localhost:3000/signin', {
              method: 'post',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': token
              }
          })
          .then(response => response.json())
          .then(data => {
              if(data && data.id){
                  fetch(`http://localhost:3000/profile/${data.id}`, {
                      method: 'get',
                      headers: {
                          'Content-Type': 'application/json',
                          'Authorization': token
                      }
                  })
                  .then(response => response.json())
                  .then(user => {
                      if(user && user.email){
                            this.props.loadUser(user);
                            this.changeRoute('book');
                      }
                  })
                  .catch(console.log)
              }
          })
          .catch(console.log)


      }

  }

    changeRoute = (route) => {
        if(route === 'home') {
            this.props.onRouteChange('home')
            this.props.onSignIn(false)
            
        } else if(route === 'signin-form'){
            this.props.onRouteChange('signin-form');
        } else if(route === 'register-form'){
            this.props.onRouteChange('register-form');
        } else if(route === 'contact') {
            this.props.onRouteChange('contact');
        } else if(route === 'registration') {
            this.props.onRouteChange('registration');
        } else if(route === 'book') {
            this.props.onRouteChange('book');
            this.props.onSignIn(true);
        } else if(route === 'announcements'){
            this.props.onRouteChange('announcements');
            this.props.onSignIn(true);
        }
    }

    

    isValidDate = (range, date) => {

        let valid;
        let day = '' , month = '', year = '', hour = '', minute ='';
        let today = new Date();

        let validActual = today.getFullYear() + ('0' + (today.getMonth()+1)).slice(-2) + ('0' + today.getDate()).slice(-2) +
        ( '0' + today.getHours()).slice(-2) + ( '0' + today.getMinutes()).slice(-2);
        for(let i = 0; i < date.length; i++){
            
            if( i < 2){
                day += (date[i]);
            }
            if(i > 2 && i < 5 ){
                month += (date[i]);
            }

            if(i>5 && i < 10){
                year += (date[i]);
            }
            if(i>10 && i < 13){
                hour += (date[i]);
            }
            if(i>13 && i < 16){
                minute += (date[i]);
            }  
        }
        valid = year + month + day + hour + minute;

        if(parseInt(valid, 10)+range >= parseInt(validActual, 10)){
            return true;
        } else{
            return false;
        }
    }

    



  render() {
    const {isSignIn, route, isProfileOpen, isChangePasswordOpen, isAnotherBookInfoOpen} = this.props;
    return (
      <div className="container">
      <Navigation { ...this.props} changeRoute = {this.changeRoute} onProfileOpen = {this.props.onProfileOpen} onChangePasswordOpen = {this.props.onChangePasswordOpen}/>
      {
            isProfileOpen &&
            <Modal>
                <Profile {...this.props}
                    updateTableMyBook  = {this.props.updateTableMyBook}
                    onUpdateTableMyBook = {this.props.onUpdateTableMyBook}
                    numberOfDataMyBook  = {this.props.numberOfDataMyBook}
                    offsetDataMyBook = {this.props.offsetDataMyBook}
                    onNumberOfDataTableMyBookChange = {this.props.onNumberOfDataTableMyBookChange}
                    onOffsetDataMyBook = {this.props.onOffsetDataMyBook}
                    onUpdateInputFormData = {this.props.onUpdateInputFormData}
                    onEventLocationChangeFirst = {this.props.onEventLocationChangeFirst}
                    onEventHuntMethodChangeFirst = {this.props.onEventHuntMethodChangeFirst}
                    location = {this.props.location}
                    hunting_method = {this.props.hunting_method}
                    onEventLocationChange = {this.props.onEventLocationChange} 
                    onEventHuntMethodChange = {this.props.onEventHuntMethodChange}
                    user = {this.props.user} 
                    loadUser = {this.props.loadUser} 
                    onProfileOpen = {this.props.onProfileOpen} 

                    onDateChange = {this.props.onDateChange}
                    onTimeChange = {this.props.onTimeChange}
                    onNameDbChange = {this.props.onNameChange}
                    onLocationChange = {this.props.onLocationChange}
                    onHuntingChange = {this.props.onHuntingChange}

                    onDateChangeFirst = {this.props.onDateChangeFirst}
                    onTimeChangeFirst = {this.props.onTimeChangeFirst}
                    onNameDbChangeFirst = {this.props.onNameDbChangeFirst}
                    onLocationChangeFirst = {this.props.onLocationChangeFirst}
                    onHuntingChangeFirst = {this.props.onHuntingChangeFirst}

                    updateMyBookData = {this.props.updateMyBookData}
                    onUpdateMyBookData = {this.props.onUpdateMyBookData}
                    onUpdateDataBook = {this.props.onUpdateDataBook}

                    db_date = {this.props.db_date}
                    db_time = {this.props.db_time}
                    db_name = {this.props.db_name}
                    db_location = {this.props.db_location}
                    db_hunting_method = {this.props.db_hunting_method}

                    isValidDate = {this.isValidDate}
                    />
            </Modal>
                
      }
      {
          isChangePasswordOpen && 
            <Modal>
                <ChangePassword 
                user = {this.props.user}
                old_password = {this.props.old_password}
                new_password_1 = {this.props.new_password_1}
                new_password_2 = {this.props.new_password_2}
                onOldPasswordChange = {this.props.onOldPasswordChange}
                onNewPasswordChange_1 = {this.props.onNewPasswordChange_1}
                onNewPasswordChange_2 = {this.props.onNewPasswordChange_2}
                onChangePasswordOpen = {this.props.onChangePasswordOpen}

                isPasswordChange = {this.props.isPasswordChange}
                onIsPasswordChange = {this.props.onIsPasswordChange}
                changeRoute = {this.changeRoute}

                OldPasswordChange = {this.props.OldPasswordChange}
                NewPasswordChange_1 = {this.props.NewPasswordChange_1}
                NewPasswordChange_2 = {this.props.NewPasswordChange_2}
                />
            </Modal>
      }
      {
          isAnotherBookInfoOpen &&
            <Modal>
                <AnotherBookInfoModal 
                isAnotherBookInfoOpen = {this.props.isAnotherBookInfoOpen}
                onAnotherBookInfoOpen = {this.props.onAnotherBookInfoOpen}
                anotherBookData = {this.props.anotherBookData}
                onAnotherBookDataChange = {this.props.onAnotherBookDataChange}
                />
            </Modal>
      }
      {
        isSignIn === false 
        ? (
          route === 'home' ? 
            
              <Home /> 

              : (
                  route === 'signin-form'
                   ? <Signin { ...this.props}  changeRoute = {this.changeRoute}/>
                   : ( route === 'register-form' ?
                   <Register  
                //    register_name_pz = {this.props.register_name_pz}
                //    number_of_members = {this.props.number_of_members}
                   onRegisterNamePzChange = {this.props.onRegisterNamePzChange}
                   onRegisterNumberOfMembersChange = {this.props.onRegisterNumberOfMembersChange} changeRoute = {this.changeRoute}/>
                   : ( route === 'registration' ?
                        <Registration 
                        registration_open_edit_member = {this.props.registration_open_edit_member}
                        onRegisterOpenEditMemberChange = {this.props.onRegisterOpenEditMemberChange}
                        register_name_pz = {this.props.register_name_pz}
                        number_of_members = {this.props.number_of_members}
                        register_members = {this.props.register_members}
                        onRegisterMembersChange = {this.props.onRegisterMembersChange}/>
                    : <Contact />
                   )
                   
                
                
                )

              )
            )
        : <SignIn { ...this.props} 
        db_guest_name = {this.props.db_guest_name}
        onGuestNameChangeFirst = {this.props.onGuestNameChangeFirst}
        onGuestNameChange = {this.props.onGuestNameChange}
        isValidDate = {this.isValidDate}
        last_insert_to_book = {this.props.last_insert_to_book}
        onLastInsertToBookChange = {this.props.onLastInsertToBookChange}
        onUpdateInputFormData = {this.props.onUpdateInputFormData} 
        updateInputFormData = {this.props.updateInputFormData}
        changeRoute = {this.changeRoute}
        selectedFile = {this.props.selectedFile}
        onDownloadFileNameChange = {this.props.onDownloadFileNameChange}
        updateAnnouncements = {this.props.updateAnnouncements}
        onUpdateAnnouncements = {this.props.onUpdateAnnouncements}
        />
      }
        
      <Footer changeRoute = {this.changeRoute}/>
      </div>
      
      );



  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
