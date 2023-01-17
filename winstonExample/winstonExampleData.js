//importing my winston example
const logger = require('./winstonExample')

//logging a sample sucessful log
logger.exampleLogger.log('info',"example message for sucess")
console.log('sucess example has been logged')

//logging a sample error log
logger.exampleLogger.log('error',"example message for error")
console.log('error example has been logged')