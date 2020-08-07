import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: 'https://www.linkedin.com/in/reynard-lee-a700a39b/',
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: 'https://github.com/reynard93',
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>
  )
}
