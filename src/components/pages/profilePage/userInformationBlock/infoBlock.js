import './style.css'
import React, { useState } from 'react'
import { FetchUser } from '../apiUserFoto/userFoto'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const InfoUser = () => {
  const orders = useSelector((state) => state?.counter.events)
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  FetchUser(0)
    .then((res) => {
      setPhoto(res.avatar)
      return res
    })
    .then((res) => setName(res.first_name))

  return (
        <section className='infoUser_block'>
          <h2>Информация о пользователе</h2>
          <div className='infoUser_block_photo' >
            <img src={`${photo}`} alt='undefined user photo' />
          </div>
            <h3 className='infoUser_block_name'>{name}</h3>
            <h4>Список зафиксированных событий</h4>
            <div className='redirectToCalendar'>
                <Link to='/calendar'>
                    <button>Перейти к календарю</button>
                </Link>
            </div>

            <ol>
                {
                  orders.map((order) => <li key={order.id} >
                      <p><span>Название:</span> {order.title}</p>
                      <p><span>Начало события:</span> {order.start}</p>
                      <p><span>Конец события: </span>{order.end}</p>
                  </li>)
                }

            </ol>
                {/* // orders.map((item) => <li key={item.id}>{item}</li>) */}

        </section>
  )
}

export default InfoUser
