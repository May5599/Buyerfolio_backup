import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  residentStatus: '',
  emailConsent: true,
  // Fields from the second form
  gender: '',
  race: '',
  veteranStatus: '',
  disability: '',
  // New field for the third form
  location: '',
  // New field for the sixth form
  incomeSource: '',
  // New fields for the seventh form
  currentRent: '',
  desiredPayment: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      const { userId, firstName, lastName, phoneNumber, email, residentStatus, emailConsent } = action.payload;
      state.userId = userId;
      state.firstName = firstName;
      state.lastName = lastName;
      state.phoneNumber = phoneNumber;
      state.email = email;
      state.residentStatus = residentStatus;
      state.emailConsent = emailConsent;
    },
    updateAdditionalInfo: (state, action) => {
      const { gender, race, veteranStatus, disability } = action.payload;
      state.gender = gender;
      state.race = race;
      state.veteranStatus = veteranStatus;
      state.disability = disability;
    },
    updateLocation: (state, action) => {
      const location = action.payload;
      state.location = location;
    },
    updateIncomeSource: (state, action) => {
      const incomeSource = action.payload;
      state.incomeSource = incomeSource;
    },
    updateForm7: (state, action) => {
      const { currentRent, desiredPayment } = action.payload;
      state.currentRent = currentRent;
      state.desiredPayment = desiredPayment;
    },
  },
});

export const { updateUserInfo, updateAdditionalInfo, updateLocation, updateIncomeSource, updateForm7 } = userSlice.actions;

export const selectUserInfo = (state) => state.user;

export default userSlice.reducer;
