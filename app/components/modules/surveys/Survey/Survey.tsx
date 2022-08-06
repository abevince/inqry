import * as React from 'react'

const SurveyComponent = ({ survey }) => {
  return (
    <li>
      <h2 className="font">{survey.title}</h2>
      <p>{survey.description}</p>
    </li>
  )
}

export default SurveyComponent
