import { Pagination } from '@/components/pagination/Pagination';
import ReservationGrid from '@/reservations/componets/ReservationGrid'
import { IReservationResponse } from '@/reservations/interfaces/IReservation-response';
import { getPaginationReservations } from '@/services/reservation/reservation-pagination';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'




type PaginationOptions = {
  startDate: string;
  endDate: string;
  pnrLocator?: string;
}

interface Props {
  searchParams : {
    page?:string;
  }
}
export default async function page({searchParams} : Props) {

  const page = searchParams.page ? parseInt(searchParams.page ) : 1 ;
  const reservationResponse: IReservationResponse = await getPaginationReservations({ startDate: "2000-07-22", endDate: "2025-07-22", page});
  const { data: reservations, meta } = reservationResponse;

  if(reservations.length == 0)
  {
    redirect('/');
  }
    

  const {lastPage} = meta;

  
  return (
    <div className="flex flex-col">
      {/* <ReservationFilter filters={filters} setFilters={setFilters} /> */}
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <ReservationGrid reservations={reservations} />
      
      </div>
      <Pagination totalPages={ lastPage } />
    </div>
  )
}
