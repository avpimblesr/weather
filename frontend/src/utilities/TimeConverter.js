// Converts milliseconds into a useable date/time object

export const fromMilliseconds = (milliseconds) => {
  const dateTime = {}

  const dateObject = new Date(milliseconds)
  // const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15

  dateTime.weekday = dateObject.toLocaleString('en-US', { weekday: 'long' }) // Monday
  dateTime.month = dateObject.toLocaleString('en-US', { month: 'long' }) // December
  dateTime.day = dateObject.toLocaleString('en-US', { day: 'numeric' }) // 9
  dateTime.year = dateObject.toLocaleString('en-US', { year: 'numeric' }) // 2019

  const twelveHour = dateObject
    .toLocaleString('en-US', { hour: 'numeric' })
    .split(' ')
  dateTime.hour = twelveHour[0]
  dateTime.am_pm = twelveHour[1]

  dateTime.minute = dateObject.toLocaleString('en-US', { minute: 'numeric' }) // 30
  dateTime.second = dateObject.toLocaleString('en-US', { second: 'numeric' }) // 15
  dateTime.time_zone_name = dateObject.toLocaleString('en-US', {
    timeZoneName: 'short',
  }) // 12/9/2019, 10:30:15 AM CST

  return dateTime
}

export const dayDateTime = () => {
// Today's date
let [day, month, date, year, time] = Date().toString().split(' ')

// Get AM/PM
let meridiem = (parseInt(time.substr(0,2)) < 12) ? 'AM' : 'PM'

// Extract the hours and minutes
let theHour = parseInt(time.substr(0,5))
let minutes = time.substr(3,2)

// Convert 24-hour time to 12-hour time
let twelveHour = (theHour > 12) ? theHour - 12 : theHour

// Present the hour in a two digit format by placing a zero
// in front of single digit numbers
let hour = (twelveHour < 10) ? `0${twelveHour}` : twelveHour.toString()
  return `${day}, ${month} ${date} ${hour}:${minutes} ${meridiem}`
}
