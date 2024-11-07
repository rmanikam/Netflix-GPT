   export const checkValidData = (userName, email, password) =>
   {
    const isUserValid = /^[0-9A-Za-z]{6,16}$/.test(userName);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    

    if(!isUserValid) return "User is Not Valid";
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not Valid";
    return null;

   }


