const { createLogger, format, transports } = require('winston');
const moment = require('moment-timezone')
const { prettyPrint } = format;


/**
 * Logt Informationen in ein LogFile
 */
class Logger {

    /**
     *   Erstellt ein Logger Objekt der Klasse mit dem benötigten Path fürs Logfile
    */
    constructor() {
        let today = moment().tz('Europe/Berlin').format('YYYY-MM-DDTHH-mm')

        this.logger = createLogger({
            format:
                prettyPrint(),
            transports: [
                new transports.File({
                    filename: `./logfiles/${today}-sl-trackingnumber-uploader.log`,
                }),
                new transports.Console({
                    format: format.combine(
                        format.colorize(),
                        format.simple()
                    )
                })]
        })
    }

    /**
     * Schreibt die Informationen in das LogFile weg
     * @param {object} options Logging Optionen (level default 'info')
     * @param {String} [options.level='info'] error, warn, info, debug sind möglich
     * @param {String} options.message Lognachricht
     */
    async log({ level = 'info', message } = {}) {
        let now = moment().tz('Europe/Berlin').format('YYYY-MM-DD HH:mm:ss')

        this.logger.log({
            date: now,
            level: level,
            message: message
        });
    }
}
let logger = new Logger()
module.exports = logger
