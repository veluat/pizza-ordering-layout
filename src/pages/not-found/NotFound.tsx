import React from 'react'

import s from './NotFound.module.scss'

export const NotFound: React.FC = () => {
  return (
    <div className={s.notFoundBlock}>
      <span>😕</span>
      <h1>Ничего не найдено...</h1>
      <p className={s.description}>
        К сожалению, данная страница отсутствует в нашей интернет-пиццерии.
      </p>
    </div>
  )
}
