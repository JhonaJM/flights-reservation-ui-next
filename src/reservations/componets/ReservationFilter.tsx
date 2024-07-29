'use client'
import React from 'react'
import { useForm } from 'react-hook-form';

interface PaginationOptions {
    startDate: string;
    endDate: string;
    pnrLocator?: string;
}

interface Props {
    filters: PaginationOptions;
    setFilters: React.Dispatch<React.SetStateAction<PaginationOptions>>;
}


export default function ReservationFilter  ({filters,setFilters}:Props)  {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PaginationOptions>()
    const handleSearch = (data : PaginationOptions) => {
      console.log(data);
    };
    return (
        <div className="my-2 flex sm:flex-row flex-col justify-end items-center space-x-2">

            <div className="block relative">
                <input
                    type="date"
                    defaultValue={filters.startDate}
                    {...register('startDate')}
                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-2 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
            </div>
            <div className="block relative">
                <input
                    type="date"
                    defaultValue={filters.endDate}
                    {...register('endDate')}
                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-2 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
            </div>
            <div className="block relative">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                </span>
                <input
                    placeholder="Código reserva"
                    defaultValue={filters.pnrLocator}
                    {...register('pnrLocator')}
                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
            </div>
            <button
                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handleSubmit(handleSearch)}
            >
                Buscar
            </button>
        </div>
    )
}


