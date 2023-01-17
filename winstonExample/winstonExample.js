const {createLogger, transports, format} = require('winston')

//logging function
const exampleLogger = createLogger({
    transports:[
        //the code for logging a sucess
        new transports.File({
            //the file that it will log to
            filename:'example.log',
            //the type of log it is
            level:'info',
            //the format for the log
            format: format.combine(format.timestamp(),format.json())
        }),

        //the code for logging an error
        new transports.File({
            //the file that it will log to
            filename:'exampleError.log',
            //the type of log it is
            level:'error',
            //the format for the log
            format:format.combine(format.timestamp(),format.json())
        })
    ]
})

//exporting the module
module.exports = {exampleLogger}