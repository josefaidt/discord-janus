const chalk = process.env.NODE_ENV === 'PRODUCTION' ? null : require('chalk')

const logger = phrase => {
  const d = new Date()
  const timeStr = `[${d.toTimeString().split(' ')[0]}]`
  const result = chalk !== null ? chalk.gray(timeStr) : timeStr
  return result.concat(' ', phrase)
}

module.exports = logger
