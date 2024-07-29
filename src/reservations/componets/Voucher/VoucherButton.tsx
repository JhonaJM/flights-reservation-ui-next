'use client'
import React, { useState } from 'react'
import { IReservation } from '../../interfaces/IReservation'
import '../../styles/styles.css'
import { VoucherModal } from './VoucherModal';
interface Props {
    reservation: IReservation;
}


export const VoucherButton = ({ reservation }: Props) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(!isModalOpen)} // Asegúrate de que esta línea llame a la función
                className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex justify-center items-center">
                <p className={`text-sm font-medium leading-none text-center text-blue-600`}>
                    Ver Voucher
                </p>
            </button>

            <VoucherModal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)} reservation={reservation} />
        </>

    )
}
