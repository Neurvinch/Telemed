const AppError = require ('../appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}. Please provide a valid value.`;
  return new AppError(message, 400);
} ;

