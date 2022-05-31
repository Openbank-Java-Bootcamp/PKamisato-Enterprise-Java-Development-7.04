import React from 'react'

export default function Timestamp(props) {
  console.log("time", props.time)
  return (
    <span className="timestamp">{props.time}</span>
  )
}
