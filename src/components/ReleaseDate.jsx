import React, { Component } from 'react'

class ReleaseDate extends Component {
  formatDate = date => {
    const dateAsArr = date.split('')
    const year = date.slice(0, 4)
    let month = date.slice(5, 7)
    let day = date.slice(8, 10)
    let newDay = ''
    switch (month) {
      case '01':
        month = 'January'
        break
      case '02':
        month = 'February'
        break
      case '03':
        month = 'March'
        break
      case '04':
        month = 'April'
        break
      case '05':
        month = 'May'
        break
      case '06':
        month = 'June'
        break
      case '07':
        month = 'July'
        break
      case '08':
        month = 'August'
        break
      case '09':
        month = 'September'
        break
      case '10':
        month = 'October'
        break
      case '11':
        month = 'November'
        break
      case '12':
        month = 'December'
        break
    }
    let spltDay = day.split('')
    switch (spltDay[1]) {
      case '1':
        newDay = `${spltDay[0]}1st`
        break
      case '2':
        newDay = `${spltDay[0]}2nd`
        break
      case '3':
        newDay = `${spltDay[0]}3rd`
        break
      default:
        newDay = `${spltDay[0]}${spltDay[1]}th`
        break
    }
    switch (day) {
      case '01':
        newDay = '1st'
        break
      case '02':
        newDay = '2nd'
        break
      case '03':
        newDay = '3rd'
        break
      case '04':
        newDay = '4th'
        break
      case '05':
        newDay = '5th'
        break
      case '06':
        newDay = '6th'
        break
      case '07':
        newDay = '7th'
        break
      case '08':
        newDay = '8th'
        break
      case '09':
        newDay = '9th'
        break
      case '11':
        newDay = '11th'
        break
      case '12':
        newDay = '12th'
        break
      case '13':
        newDay = '13th'
        break
    }
    return `${month} ${newDay}, ${year}`
  }

  render() {
    return (
      <h5 className="releaseDate">
        {' '}
        '{this.props.title}' was released on:{' '}
        {this.formatDate(this.props.releaseDate)}
      </h5>
    )
  }
}

export default ReleaseDate
