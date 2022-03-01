import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import React, { useState } from 'react'
import esLocale from '@fullcalendar/core/locales/ru'
import './style.calendar.css'
import { useSelector } from 'react-redux'
import ModalCalendar from './madalBlockInCalendar/modalCalendar'

const DAY_NAMES = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

function FullCalendarApp () {
  const events = useSelector((state) => state?.counter.events)
  const [show, setShow] = useState('0')
  const handleModalClose = (e) => {
    setShow('0')
  }
  const handleModalOpen = () => {
    setShow('1')
  }
  return (
        <div className="App_calendar">
            <button onClick={handleModalOpen}>Добавить</button>
            <button onClick={handleModalClose}>Свернуть</button>
            <ModalCalendar name = {show}/>
            <div className={'calendarLine'}/>
             <FullCalendar
                locale={esLocale}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                dayHeaderContent={function (arg) { return DAY_NAMES[arg.date.getDay()] }}
                fixedWeekCount={false}
                height={850}
                headerToolbar={{
                  left: 'new prev, title ,next'
                }}
                events={events}
                eventColor="light blue"
                nowIndicator
                dateClick={(e) => console.log(e)}
                eventClick={(e) => console.log(e.event.id)}
             />
        </div>
  )
}

export default FullCalendarApp
