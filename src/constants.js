export const ME = "me";
export const TOKEN_KEY = "tokenKey";
export const validatePassword = (value) => {
  if (value.length < 6 || value.length > 20) {
    return "Password must be between 6 and 20 characters long";
  }
  if (!/[a-z]/.test(value)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!/[A-Z]/.test(value)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!/\d/.test(value)) {
    return "Password must contain at least one number";
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    return "Password must contain at least one special character";
  }
  if (/^[!@#$%^&*(),.?":{}|<>]/.test(value) || /[!@#$%^&*(),.?":{}|<>]$/.test(value)) {
    return "Special character cannot be at the beginning or end";
  }
  return true;
};
