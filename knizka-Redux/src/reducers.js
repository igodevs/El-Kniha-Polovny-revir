import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    CHANGE_OLD_PASSWORD,
    CHANGE_NEW_PASSWORD_1,
    CHANGE_NEW_PASSWORD_2,
    CHANGE_NAME,
    CHANGE_LOCATION,
    CHANGE_HUNT_METHOD,
    CHANGE_USER,
    CHANGE_ROUTE,
    CHANGE_ISSIGNIN,
    CHANGE_ANOTHER_BOOK_DATA,

    UPDATE_TABLE,
    UPDATE_INPUT_FORM,
    RELOAD_INPUT_FORM,
    UPDATE_TABLE_MY_BOOK,

    DB_DATE,
    DB_TIME,
    DB_NAME,
    DB_LOCATION,
    DB_HUNT_METHOD,
    DB_LAST_INSERT_TO_BOOK,
    DB_GUEST_NAME,

    SET_LEAVE_TIME,
    SET_LEAVE_COUNT,
    SET_LEAVE_SPECIES_GENDER,
    SET_LEAVE_TIME_LOCATION,
    SET_LEAVE_U_N,
    SET_LEAVE_TAG_NUMBER,
    SET_LEAVE_OTHER,

    CHANGE_PROFILE_OPEN,
    CHANGE_RASSWORD_OPEN,
    CHANGE_ANOTHER_BOOK_INFO_OPEN,
    MY_BOOK_OPEN,
    UPDATE_ANNOUNCEMENTS,

    IS_PASSWORD_CHANGE,

    DOWNLOAD_FILE_NAME,

    NUMBER_OF_DATA_IN_BOOK_TABLE,
    NUMBER_OF_DATA_IN_ANNOUNCEMENTS_TABLE,
    NUMBER_OF_DATA_IN_MY_BOOK_TABLE,
    NUMBER_OF_VISUALIZE_DATA,
    NUMBER_OFFSET_TABLE_BOOK,
    NUMBER_OFFSET_TABLE_ANNOUNCEMENTS,
    NUMBER_OFFSET_TABLE_MYBOOK,

    REGISTER_NAME_PZ,
    REGISTER_NUMBER_OF_MEMBERS,
    REGISTER_MEMBERS,
    REGISTRATION_OPEN_EDIT_MEMBER

} from './constants'

const initialStateForm = {
    email: '',
    password: '',
    name: '',
    location: '',
    hunting_method: '',
    old_password: '',
    new_password_1: '',
    new_password_2: '', 

}

export const setForm = (state = initialStateForm, action = {}) => {
    switch(action.type){
        case CHANGE_EMAIL:
            console.log(state)
            return Object.assign({}, state, {email: action.payload});
        case CHANGE_PASSWORD:
            return Object.assign({}, state, {password: action.payload});
        case CHANGE_NAME:
            return Object.assign({}, state, {name: action.payload});
        case CHANGE_LOCATION:
            return Object.assign({}, state, {location: action.payload});
        case CHANGE_HUNT_METHOD:
            return Object.assign({}, state, {hunting_method: action.payload});
        case CHANGE_OLD_PASSWORD:
            return Object.assign({}, state, {old_password: action.payload});
        case CHANGE_NEW_PASSWORD_1:
            return Object.assign({}, state, {new_password_1: action.payload});
        case CHANGE_NEW_PASSWORD_2:
            return Object.assign({}, state, {new_password_2: action.payload});
        default:
            return state;
    }
}

const initialStateRoute ={
    route: 'home',
    isSignedIn: false
}

export const setRouteData = (state = initialStateRoute, action = {}) => {
    switch(action.type){
        case CHANGE_ROUTE:
            console.log(state);
            return Object.assign({}, state, {route: action.payload});
        case CHANGE_ISSIGNIN:
            return Object.assign({}, state, {isSignedIn: action.payload})
        default:
            return state;
    }
}


const initialStateUser = {
    user: {
        id: '',
        name: '',
        email: '',
        name_pz: '',
        joined: '',
        location: '',
        hunting_method: ''
        
    }
}

export const setUserData  = (state = initialStateUser, action = {}) => {
    switch(action.type){
        case CHANGE_USER:
            console.log("state setUserDAta", state);
            return Object.assign({}, state, {user: action.payload});
        default:
            return state;
    }
}


const initialAnotherBookInfo = {
    anotherBookData: []
}
export const setAnotherBookData  = (state = initialAnotherBookInfo, action = {}) => {
    switch(action.type){
        case CHANGE_ANOTHER_BOOK_DATA:
            return Object.assign({}, state, {anotherBookData: action.payload});
        default:
            return state;
    }
}

const initialStateLastInputToBook = {
    last_insert: {
        id: '',
        id_user: '',
        name_pz: '',
        email: '',
        date: '',
        insert_time : '',
        time : '',
        name : '',
        guest_name: '',
        location : '',
        hunting_method : '',
        species_gender : '',
        count : '',
        time_location: '',
        u_n : '',
        tag_number : '',
        other : ''
    }
}

export const update_last_insert = (state = initialStateLastInputToBook, action = {}) => {
    switch(action.type){
        case DB_LAST_INSERT_TO_BOOK:
            return Object.assign({}, state, {last_insert: action.payload})
        default:
            return state;
    }
}

const initialStateUpdateTableData = {
    updateDataBook: false,
    updateInputFormData: false,
    updateMyBookData: false,
    updateInputForm: false,
    updateAnnouncements: false,
    updateTableMyBook: false
    
    // last_insert_to_book: ''
}

export const update = (state = initialStateUpdateTableData, action ={}) => {
    switch(action.type){
        case UPDATE_TABLE:
            return Object.assign({}, state, {updateDataBook: action.payload});
        case UPDATE_INPUT_FORM:
            return Object.assign({}, state, { updateInputFormData: action.payload});
        case MY_BOOK_OPEN:
            return Object.assign({}, state, {updateMyBookData: action.payload})
        case RELOAD_INPUT_FORM:
            return Object.assign({}, state, {updateInputForm: action.payload})
        case UPDATE_ANNOUNCEMENTS:
            return Object.assign({}, state, {updateAnnouncements: action.payload})
        case UPDATE_TABLE_MY_BOOK:
            return Object.assign({}, state, {updateTableMyBook: action.payload})
        default:
            return state;
    }

} 

const initialStateInputsForm = {
    date: '',
    time: '',
    name: '',
    location: '',
    hunting_method: '',
    guest_name: ''
    
}

export const updateInputsForm = (state = initialStateInputsForm, action = {}) => {
    switch(action.type){
        case DB_DATE:
            return Object.assign({}, state, {date: action.payload});
        case DB_TIME:  
            return Object.assign({}, state, {time: action.payload});
        case DB_NAME:
            return Object.assign({}, state, {name: action.payload});
        case DB_LOCATION:
            return Object.assign({}, state, {location: action.payload});
        case DB_HUNT_METHOD:
            return Object.assign({}, state, {hunting_method: action.payload});
        case DB_GUEST_NAME: 
            return Object.assign({}, state, {guest_name: action.payload});
        default:
            return state;
    }
}

const initialStateProfileOpen = {
    isProfileOpen: false,
    isChangePasswordOpen: false,
    isAnotherBookInfoOpen: false,

}

export const updateIsOpen = (state = initialStateProfileOpen, action = {}) => {
    switch(action.type) {
        case CHANGE_PROFILE_OPEN:
            return Object.assign({}, state, {isProfileOpen: action.payload});
        case CHANGE_RASSWORD_OPEN:
            return Object.assign({}, state, {isChangePasswordOpen: action.payload});
        case CHANGE_ANOTHER_BOOK_INFO_OPEN:
            return Object.assign({}, state, {isAnotherBookInfoOpen: action.payload});
        default: 
            return state;
    }
}

const initiaStateUpdateIf = {
    isPasswordChange: false
}

export const updateIfSomething = (state = initiaStateUpdateIf, action = {}) => {
    switch(action.type) {
        case IS_PASSWORD_CHANGE:
            return Object.assign({}, state, {isPasswordChange: action.payload});
        default: 
            return state;
    }
}

const initalStateLeave = {
    leave_time: '',
    leave_count: '',
    leave_species_gender : '',
    leave_time_location: '',
    leave_u_n : '',
    leave_tag_number : '',
    leave_other : ''
}

export const setLeaveData = (state = initalStateLeave, action = {}) => {
    switch(action.type){
        case SET_LEAVE_TIME:
            return Object.assign({}, state, {leave_time: action.payload});
        case SET_LEAVE_COUNT:
            return Object.assign({}, state, {leave_count: action.payload});
        case SET_LEAVE_SPECIES_GENDER:
            return Object.assign({}, state, {leave_species_gender: action.payload});
        case SET_LEAVE_TIME_LOCATION:
            return Object.assign({}, state, {leave_time_location: action.payload});
        case SET_LEAVE_U_N:
            return Object.assign({}, state, {leave_u_n: action.payload});
        case SET_LEAVE_TAG_NUMBER:
            return Object.assign({}, state, {leave_tag_number: action.payload});
        case SET_LEAVE_OTHER:
            return Object.assign({}, state, {leave_other: action.payload});
        default:
            return state;
    }
}

const initalAnnouncements = {
    selectedFile: null
}

export const setAnnouncementsData = (state = initalAnnouncements, action = {}) => {
    switch(action.type){
        case DOWNLOAD_FILE_NAME:
            return Object.assign({}, state, {selectedFile: action.payload});
        default:
            return state;
    }

}

const initalStateNumberOf = {
    numberOfDataTable: 0,
    numberOfVisualizeData: 0,
    offsetDataTable: 0,
    numberOfDataAnnouncements: 0,
    offsetDataAnnouncements: 0,
    numberOfDataMyBook: 0,
    offsetDataMyBook: 0
}

export const setNumberOf = (state = initalStateNumberOf, action = {}) => {
    switch(action.type){
        case NUMBER_OF_DATA_IN_BOOK_TABLE:
            return Object.assign({}, state, {numberOfDataTable: action.payload});
        case NUMBER_OF_DATA_IN_ANNOUNCEMENTS_TABLE:
            return Object.assign({}, state, {numberOfDataAnnouncements: action.payload})
        case NUMBER_OF_VISUALIZE_DATA:
            return Object.assign({}, state, {numberOfVisualizeData: action.payload});
        case NUMBER_OFFSET_TABLE_BOOK:
            return Object.assign({}, state, {offsetDataTable: action.payload})
        case NUMBER_OFFSET_TABLE_ANNOUNCEMENTS:
            return Object.assign({}, state, {offsetDataAnnouncements: action.payload})
        case NUMBER_OF_DATA_IN_MY_BOOK_TABLE:
            return Object.assign({}, state, {numberOfDataMyBook: action.payload})
        case NUMBER_OFFSET_TABLE_MYBOOK:
            return Object.assign({}, state, {offsetDataMyBook: action.payload})
        default:
            return state;
    }
}

const initalStateRegisterPZ = {
    register_name_pz: '',
    number_of_members: 0,
    register_members: [],
    registration_open_edit_member: false
}

export const register = (state = initalStateRegisterPZ, action = {}) => {
    switch(action.type){
        case REGISTER_NAME_PZ:
            return Object.assign({}, state, {register_name_pz: action.payload});
        case REGISTER_NUMBER_OF_MEMBERS:
            return Object.assign({}, state, {number_of_members: action.payload});
        case REGISTER_MEMBERS: 
            return Object.assign({}, state, {register_members: action.payload});
        case REGISTRATION_OPEN_EDIT_MEMBER: 
            return Object.assign({}, state, {registration_open_edit_member: action.payload})
        default:
            return state;
    }
}


