import React, { useState } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { addedEvent } from '../../../../../reduxToolkit/slice'

const ModalCalendar = (name) => {
  const [value, setValue] = useState('')
  const [start, setStart] = useState()
  const [end, setEnd] = useState()
  const dispatch = useDispatch()
  console.log(start, end, value)

  function addEvent () {
    dispatch(addedEvent({
      id: Math.random(),
      title: value,
      start: start,
      end: end
    }))
    setValue('')
    setEnd('')
    setStart('')
  }

  return <section className='modalBlock' style={{ position: 'absolute', opacity: `${name.name}` }}>
      <form>
          <label>
              Событие
              <input placeholder='Введите название события' value={value} onChange={(e) => setValue(e.target.value)}/>
          </label>
          <label>
              Дата начала
              <input type='date' value={start} onChange={(e) => setStart(e.target.value)}/>
          </label>
          <label>
              Дата конца
              <input type='date' value={end} onChange={(e) => setEnd(e.target.value)}/>
          </label>

          <div onClick={addEvent}>Создать</div>
      </form>
    </section>
}

export default ModalCalendar
