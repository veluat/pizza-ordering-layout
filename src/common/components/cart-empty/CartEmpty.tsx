import React from 'react'

import img from '@/assets/empty-cart.png'
import { ReturnBack } from '@/common/components/return-back/ReturnBack'

import s from './CartEmpty.module.scss'

export const CartEmpty: React.FC = () => {
  return (
    <div className={s.cartContent}>
      <img alt={'cart'} src={img} />
      <div className={s.message}>
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вы ещё ничего не выбрали.
          <br />
          Для того, чтобы сделать выбор, вернитесь, пожалуйста, на главную страницу.
        </p>
        <div>
          <ReturnBack />
        </div>
      </div>
    </div>
  )
}
