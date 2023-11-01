const checkValidData = (email, password, name) => {
    let isemailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    let ispasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (name) {
        let isnameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[]*)+/.test(name);
        if (!isnameValid) {
            return "Name starts from capital letter & atleast 2 charectors long"
        }
    }

    if (!isemailValid) {
        return "Email is not valid"
    }
    if (!ispasswordValid) {
        return "Password is not valid"
    }

    return null;
}

export default checkValidData;