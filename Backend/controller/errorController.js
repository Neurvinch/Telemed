const errorHnadlers = require ('./globalErrorHandler');

const {
    handleCastErrorDB,
    handleDuplicateFieldDB,
    handleValidationErrorDB,
    handleJWTError,
    handleJWTExpiredError

} = errorHnadlers;