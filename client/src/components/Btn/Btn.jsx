import React from 'react'
import style from './btn.module.scss'

export default function Btn({name, color, handler}) {
  return (
    <div className={style.btnBox} style={{backgroundColor: color}} onClick={handler}>
        <span>{name}</span>
    </div>
  )
}
