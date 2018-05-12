import React  from 'react'
import Moment from 'react-moment'

const TimeFromNow = (prop) => <Moment fromNow ago>{prop.value}</Moment>

export default TimeFromNow