import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    CHANGE_OLD_PASSWORD,
    CHANGE_NEW_PASSWORD_1,
    CHANGE_NEW_PASSWORD_2,
    CHANGE_USER,
    CHANGE_NAME,
    CHANGE_LOCATION,
    CHANGE_HUNT_METHOD,
    CHANGE_ROUTE,
    CHANGE_ISSIGNIN,
    CHANGE_ANOTHER_BOOK_DATA,

    UPDATE_TABLE,
    UPDATE_INPUT_FORM,
    MY_BOOK_OPEN,
    RELOAD_INPUT_FORM,
    UPDATE_ANNOUNCEMENTS,

    DB_DATE,
    DB_TIME,
    DB_NAME,
    DB_LOCATION,
    DB_HUNT_METHOD,
    DB_LAST_INSERT_TO_BOOK,
    DB_GUEST_NAME,

    CHANGE_PROFILE_OPEN,
    CHANGE_RASSWORD_OPEN,
    CHANGE_ANOTHER_BOOK_INFO_OPEN,

    IS_PASSWORD_CHANGE,

    SET_LEAVE_TIME,
    SET_LEAVE_COUNT,
    SET_LEAVE_SPECIES_GENDER,
    SET_LEAVE_TIME_LOCATION,
    SET_LEAVE_U_N,
    SET_LEAVE_TAG_NUMBER,
    SET_LEAVE_OTHER,

    DOWNLOAD_FILE_NAME,
    NUMBER_OF_DATA_IN_BOOK_TABLE,
    NUMBER_OF_DATA_IN_ANNOUNCEMENTS_TABLE,
    NUMBER_OFFSET_TABLE_BOOK,
    NUMBER_OF_VISUALIZE_DATA,
    NUMBER_OFFSET_TABLE_ANNOUNCEMENTS,
    NUMBER_OFFSET_TABLE_MYBOOK,
    NUMBER_OF_DATA_IN_MY_BOOK_TABLE,
    UPDATE_TABLE_MY_BOOK,

    REGISTER_NAME_PZ,
    REGISTER_NUMBER_OF_MEMBERS,
    REGISTER_MEMBERS,
    REGISTRATION_OPEN_EDIT_MEMBER
} from './constants'

export const setRegisterNamePZ = (text) => ({
    type: REGISTER_NAME_PZ,
    payload: text
})

export const setRegisterNumberOfMembers = (text) => ({
    type: REGISTER_NUMBER_OF_MEMBERS,
    payload: text
})

export const setRegisterMembers = (array) => ({
    type: REGISTER_MEMBERS,
    payload: array
})

export const setRegisterOpenEditMember = (bool) => ({
    type: REGISTRATION_OPEN_EDIT_MEMBER,
    payload: bool
})



export const setDownloadFileName = (text) => ({
    type: DOWNLOAD_FILE_NAME,
    payload: text
})

export const setEmail = (text) => ({
    type: CHANGE_EMAIL,
    payload: text
})

export const setPassword = (text) => ({
    type: CHANGE_PASSWORD,
    payload: text
})
export const setOldPassword = (text) => ({
    type: CHANGE_OLD_PASSWORD,
    payload: text
})

export const setNewPassword_1 = (text) => ({
    type: CHANGE_NEW_PASSWORD_1,
    payload: text
})

export const setNewPassword_2 = (text) => ({
    type: CHANGE_NEW_PASSWORD_2,
    payload: text
})


export const setName = (text) => ({
    type: CHANGE_NAME,
    payload: text
})

export const setLocation = (text) => ({
    type: CHANGE_LOCATION,
    payload: text
})

export const setHuntMethod = (text) => ({
    type: CHANGE_HUNT_METHOD,
    payload: text
})

export const setLastInsertToBook = (text) => ({
    type: DB_LAST_INSERT_TO_BOOK,
    payload: text
})

export const setRoute = (route) => ({
    type: CHANGE_ROUTE,
    payload: route
})

export const setSignIn = (bool) => ({
    type: CHANGE_ISSIGNIN,
    payload: bool
})

export const setUser = (object) => ({
    type: CHANGE_USER,
    payload: object
})

export const setAnotherBookInfo= (array) => ({
    type: CHANGE_ANOTHER_BOOK_DATA,
    payload: array
})

export const updateTable = (bool) => ({
    type: UPDATE_TABLE,
    payload: bool
})

export const updateTableMyBookInProfile = (bool) => ({
    type: UPDATE_TABLE_MY_BOOK,
    payload: bool
})

export const updateInputForm = (bool) => ({
    type: UPDATE_INPUT_FORM,
    payload: bool
})
export const updateInputFormMyBook = (bool) => ({
    type: MY_BOOK_OPEN,
    payload: bool
})

export const setUpdateAnnouncements = (bool) => ({
    type: UPDATE_ANNOUNCEMENTS,
    payload: bool
})

export const reloadInputForm = (bool) => ({ type: RELOAD_INPUT_FORM, payload: bool })

export const setDbDate = (text) => ({
    type: DB_DATE,
    payload: text
})

export const setDbTime = (text) => ({
    type: DB_TIME,
    payload: text
})

export const setDbName = (text) => ({
    type: DB_NAME,
    payload: text
})

export const setDbLocation = (text) => ({
    type: DB_LOCATION,
    payload: text
})

export const setDbHuntMethod = (text) => ({
    type: DB_HUNT_METHOD,
    payload: text
})

export const setDbGuestName = (text) => ({
    type: DB_GUEST_NAME,
    payload: text
})

export const setProfileOpen = (bool) => ({
    type: CHANGE_PROFILE_OPEN,
    payload: bool
})

export const setAnotherBookInfoOpen = (bool) => ({
    type: CHANGE_ANOTHER_BOOK_INFO_OPEN,
    payload: bool
})

export const setChangePasswordOpen = (bool) => ({
    type: CHANGE_RASSWORD_OPEN,
    payload: bool
})

export const setIsPasswordChange = (bool) => ({
    type: IS_PASSWORD_CHANGE,
    payload: bool
})


export const set_leave_time = ( text) => ({ type: SET_LEAVE_TIME, payload: text })
export const set_leave_count = (text) => ({ type: SET_LEAVE_COUNT, payload: text })
export const set_leave_species_gender = (text) => ({ type: SET_LEAVE_SPECIES_GENDER, payload: text })
export const set_leave_time_location = (text) => ({ type: SET_LEAVE_TIME_LOCATION, payload: text })
export const set_leave_u_n = (text) => ({ type: SET_LEAVE_U_N, payload: text })
export const set_leave_tag_number = (text) => ({ type: SET_LEAVE_TAG_NUMBER, payload: text })
export const set_leave_other = (text) => ({ type: SET_LEAVE_OTHER, payload: text })

export const setNumberOfDataBookTable = (number) => ({ type: NUMBER_OF_DATA_IN_BOOK_TABLE, payload: number})
export const setNumberOfDataAnnouncementsTable = (number) => ({type: NUMBER_OF_DATA_IN_ANNOUNCEMENTS_TABLE, payload: number})
export const setNumberOfDataMyBookTable = (number) => ({type: NUMBER_OF_DATA_IN_MY_BOOK_TABLE, payload: number})
export const setNumberOfVisualizeData = (number) => ({ type: NUMBER_OF_VISUALIZE_DATA, payload: number })
export const setOffsetOfDataTable = (number) => ({ type: NUMBER_OFFSET_TABLE_BOOK, payload: number })
export const setOffsetOfDataTableAnnouncemets = (number) => ({ type: NUMBER_OFFSET_TABLE_ANNOUNCEMENTS, payload: number })
export const setOffsetOfDataTableMyBook = (number) => ({ type: NUMBER_OFFSET_TABLE_MYBOOK, payload: number })




