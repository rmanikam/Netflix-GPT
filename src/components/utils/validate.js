export const checkValidData = (userName, email, password) =>
  {
  
   const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
   const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   

   if (userName && !/^[0-9A-Za-z]{6,16}$/.test(userName)) {
    return "User is not valid";
  }
   if(!isEmailValid) return "Email is not valid";
   if(!isPasswordValid) return "Password is not Valid";
   return null;

  }