import React from 'react'
import Styles from '../css/LearnCSSModule.module.css'
const LearnCSSModule = () => {
  return (
    <div>
        <hr />
        <p className={`${Styles.text_size} ${Styles.text_color}`}>This is CSS Module 1</p>
        <hr />
    </div>
  )
}

export default LearnCSSModule