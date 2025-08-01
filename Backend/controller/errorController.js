const errorHnadlers = require ('./globalErrorHandler');

const {
    handleCastErrorDB,
    handleDuplicateFieldDB,
    handleValidationErrorDB,
    handleJWTError,
    handleJWTExpiredError

} = errorHnadlers;

module.exports = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    let error = { ...err, message: err.message};

    if (err.name === 'CastError') error = handleCastErrorDB(err);
    if (err.code === 11000) error = handleDuplicateFieldDB(err);
    if (err.name === 'ValidationError') error = handleValidationErrorDB(err);   
    if (err.name === 'JsonWebTokenError') error = handleJWTError();
    if (err.name === 'TokenExpiredError') error = handleJWTExpiredError();


    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        ...(process.env.NODE_ENV === 'development' && { error, stack: error.stack })
    });
    
};