import React from 'react'
import Styles from '../css/LearnCSSModule2.module.css'
const LearnCSSModule2 = () => {
  return (
    <div>
        <hr />
        <p className={`${Styles.text_size} ${Styles.text_color}`}>This is CSS Module2</p>
        <hr />
    </div>
  )
}

export default LearnCSSModule2