
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoAirplane, IoHeartOutline } from 'react-icons/io5'
import { IReservation } from '../interfaces/IReservation'
import moment from 'moment'
import { VoucherButton } from './Voucher/VoucherButton'

interface Props {
    reservation: IReservation
}

const ReservationCard = ({ reservation }: Props) => {
    return (
        <div className="mx-auto right-0 mt-2 w-60">

            <div className="bg-white rounded overflow-hidden shadow-lg">
                
                <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        src={`https://storage.googleapis.com/gcp-production-cdn/cms/images/mobile/airlines/icon-${reservation.Segments.length > 0 ? reservation.Segments[0]?.airlineCode : 'LA'}.png`}
                        width={50}
                        height={50}
                        alt={reservation.Segments.length > 0 ? reservation.Segments[0]?.airlineCode : 'LA'}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{reservation.pnrLocator}</p>
                    <br />
                    <p className="text-sm text-gray-100">Fecha {moment(reservation.createdAt).format('DD/MM/YYYY')}</p>
                    <div className="mt-5">
                        <Link href={`#`}
                            className={`border rounded-full py-2 px-4 text-xs font-semibold ${reservation.status == 'ISSUED' ? ('text-green-500 ') : 'text-red-500 '}`}
                        >
                            {reservation.status == 'ISSUED' ? ('EMITIDO') : 'PENDIENTE'}
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center" >
                        <div className="">
                            <IoAirplane />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none flex flex-wrap">
                                {
                                    reservation.Segments.map((segment, index) => (
                                        <span key={segment.id}>
                                            {segment.departureCity} - {segment.arrivalCity}
                                            {index < reservation.Segments.length - 1 && ' |  '}
                                        </span>
                                    ))
                                }
                            </p>

                            <p className="text-xs text-gray-500">Vuelo(s)</p>
                        </div>
                    </Link>
                    <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex">

                        <div className="text-gray-800">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="pl-3">

                            <p className="text-xs text-gray-500">
                                {reservation.Passengers.length} Pasajero(s)</p>
                        </div>

                    </Link>
                </div>

                <div className="">
                    {
                        reservation.status === 'ISSUED' ?
                            (
                                <VoucherButton reservation={reservation} />
                            )
                            :
                            (
                                <button
                                    className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex justify-center items-center">
                                    <p className={`text-sm font-medium  leading-none text-center  text-red-600 `}>
                                        Pagar
                                    </p>
                                </button>
                            )
                    }
                </div>

            </div>
        </div>

    )
}

export default ReservationCard
