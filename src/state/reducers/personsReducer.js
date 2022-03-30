const INITIAL_STATE = {
    data: [
        {
            firstName: 'John',
            lastName: 'Doe',
            street: 'Washington Road',
            houseNo: 41,
            apartmentNo: 11,
            postal: 'E15-1GL',
            town: 'London',
            phoneNo: '07848840333',
            dateOfBirth: '07.10.1990',
        },
        {
            firstName: 'Mark',
            lastName: 'Calister',
            street: 'Oxford Circus',
            houseNo: 5,
            apartmentNo: 87,
            postal: 'W07-C53',
            town: 'London',
            phoneNo: '07273683625',
            dateOfBirth: '12.05.2001',
        },
    ],
};

// const reducer = (state = INITIAL_STATE, action) => {
//   switch (action.type){
//     case 'addPerson':
//       return {...state, data.action}
//   }
// };
