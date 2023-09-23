import React from 'react'

export default function card(props) {
  return (
    <div className="course-col">
    <h3>{props.heading}</h3>
    <p>{props.description}</p>
</div>
  )
}
