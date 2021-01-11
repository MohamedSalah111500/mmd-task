

const damyUserData = {
    username: 'Login Page',
    address: 'User address',
    phone: '+019 XXXX XXXX XXX ',
    password: '',
    email: 'Usermeaail@example.com'
}
const initState = {
    user: damyUserData
};

export function userReducer (state = initState, action) {

    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload };

        case 'LOGOUT':
            return { ...state, user: {} };

        default:
            return state;
    }

};

