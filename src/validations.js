export const validateName = (name) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
};
  
export const validateEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};
  
export const validateMessage = (message) => {
    return message.length >= 10;
};
  