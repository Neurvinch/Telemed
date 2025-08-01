const AppError = require ('../appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}. Please provide a valid value.`;
  return new AppError(message, 400);
} ;

const handleDuplicateFieldDB = (err) => {
    const value= err.keyValue ? JSON.stringify(err.keyValue) : "duplicate value";

    const message = `Duplicate field value: ${value}. Please use another value!`;

    return new AppError(message, 400);
} 

const handleValidationErrorDB = (err) => {

    const errors = Object.values(err.errors).map(el => el.message);
    
}