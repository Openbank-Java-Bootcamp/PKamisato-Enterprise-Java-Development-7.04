import React from 'react'

export default function Message(props) {
  console.log("message", props.message)
  
  return (
    <p className="message">{props.message}</p>
  )
}
