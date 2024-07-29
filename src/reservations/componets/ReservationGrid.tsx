import React from 'react'
import ReservationCard from './ReservationCard'
import { IReservation } from '../interfaces/IReservation'


interface Props {
  reservations : IReservation []
}
const ReservationGrid = ({reservations} : Props) => {
  return (
    <div className='flex flex-wrap gap-5 items-center justify-center'>
    {
      reservations.map(reservation => (
        <ReservationCard 
          key={reservation.id}
          reservation={reservation}
        />   
      ))
    }
    </div>
  )
}

export default ReservationGrid
