import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import React from 'react'
import esLocale from '@fullcalendar/core/locales/ru'
import './style.calendar.css'
import { useSelector } from 'react-redux'

const DAY_NAMES = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

function FullCalendarApp () {
  const events = useSelector((state) => state?.counter.events)
  return (
        <div className="App_calendar">
            <FullCalendar
                locale={esLocale}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                dayHeaderContent={function (arg) { return DAY_NAMES[arg.date.getDay()] }}
                fixedWeekCount={false}
                height={850}
                headerToolbar={{
                  left: 'new prev, title ,next'
                }}
                customButtons={{
                  new: {
                    text: 'Добавить',
                    click: () => console.log('new event')
                  }
                }}
                events={events}
                eventColor="light blue"
                nowIndicator
                dateClick={(e) => console.log(e.dateStr)}
                eventClick={(e) => console.log(e.event.id)}
            />
        </div>
  )
}

export default FullCalendarApp
