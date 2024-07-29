import { IReservation } from '@/reservations/interfaces/IReservation';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoEarth, IoPrint } from 'react-icons/io5';
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    reservation: IReservation;
}
export const VoucherModal = ({ isOpen, onClose, reservation }: Props) => {

    const componentRef = useRef<HTMLDivElement>(null); // Inicializa el ref       
    if (!isOpen) return null;



    return (
        <div
            className="fixed w-full h-full inset-0 z-50 overflow-scroll flex justify-center items-center bg-black bg-opacity-70"
            onClick={onClose}
        >
            <div
                className="border border-teal-500 shadow-lg modal-container bg-white w-11/12   w-[500px] mx-auto rounded shadow-lg z-50 overflow-y-auto"
                onClick={e => e.stopPropagation()}
            >
                <div className="modal-content  text-left px-6 my-1">
                    {/* Title */}
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">Voucher</p>
                        <div
                            className="modal-close cursor-pointer z-50"
                            onClick={onClose}
                        >
                            <svg
                                className="fill-current text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                            >
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="my-1">
                        <div className=" z-10 bg-blue-900 rounded-3xl overflow-scroll h-[500px]" ref={componentRef} >
                            <div className="flex flex-col">
                                <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                                    <div className="flex-none sm:flex">
                                        <div className=" relative h-32 w-32   sm:mb-0 mb-3 hidden">
                                            <Image
                                                src={`https://storage.googleapis.com/gcp-production-cdn/cms/images/mobile/airlines/icon-${reservation.Segments.length > 0 ? reservation.Segments[0]?.airlineCode : 'LA'}.png`}
                                                width={50}
                                                height={50}
                                                alt={reservation.Segments.length > 0 ? reservation.Segments[0]?.airlineCode : 'LA'}
                                                priority={false}
                                            />
                                            <a href="#"
                                                className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="h-4 w-4">
                                                    <path
                                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                                    </path>
                                                </svg>
                                            </a>

                                        </div>
                                        <div className="flex-auto justify-evenly">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center  my-1">
                                                    <span className="mr-3 rounded-full bg-white w-8 h-8">
                                                        <h1 className="flex items-center text-lg md:text-2xl font-bold text-black">
                                                            <IoEarth className='mr-2 text-black' style={{ color: 'black' }} />
                                                            <span>Travel</span>
                                                            <span className='text-blue-500'>10</span>.
                                                        </h1>
                                                    </span>
                                                </div>
                                                <div className="ml-auto text-blue-900">USD {reservation.ammount}</div>
                                            </div>
                                            {
                                                reservation.Segments.map(segment => (
                                                    <>
                                                        <div className="flex items-center">


                                                            <div className="flex flex-col">
                                                                <div className="flex-auto text-xs text-gray-400 my-1">
                                                                    <span className="mr-1 "></span><span></span>
                                                                </div>
                                                                <div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">{segment.departureCity}</div>
                                                                {/* <div className="text-xs">Cochi</div> */}
                                                            </div>

                                                            <div className="flex flex-col mx-auto">
                                                                <Image
                                                                    src={`https://storage.googleapis.com/gcp-production-cdn/cms/images/mobile/airlines/icon-${segment.airlineCode}.png`}
                                                                    width={50}
                                                                    height={50}
                                                                    alt={reservation.Segments.length > 0 ? reservation.Segments[0]?.airlineCode : 'LA'}
                                                                    priority={false}
                                                                />
                                                            </div>

                                                            <div className="flex flex-col ">
                                                                <div className="flex-auto text-xs text-gray-400 my-1">
                                                                    <span className="mr-1"></span><span></span>
                                                                </div>
                                                                <div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">{segment.arrivalCity}</div>
                                                                <div className="text-xs"></div>

                                                            </div>

                                                            <div className="border-b border-dashed border-b-2 my-5 pt-5">
                                                                <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                                                                <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center mb-5 p-5 text-sm">
                                                            <div className="flex flex-col">
                                                                <span className="text-sm">Vuelo</span>
                                                                <div className="font-semibold">{`00${segment.flightId}` }</div>

                                                            </div>
                                                            <div className="flex flex-col ml-auto">
                                                                <span className="text-sm">Gate</span>
                                                                <div className="font-semibold">{`${segment.airlineCode}${segment.flightId}` }</div>

                                                            </div>
                                                        </div>

                                                        <div className="flex items-center mb-4 px-5">
                                                            <div className="flex flex-col text-sm">
                                                                <span className="">Abordaje</span>
                                                                <div className="font-semibold">11:50AM</div>

                                                            </div>
                                                            <div className="flex flex-col mx-auto text-sm">
                                                                <span className="">Salida</span>
                                                                <div className="font-semibold">11:30Am</div>

                                                            </div>
                                                            <div className="flex flex-col text-sm">
                                                                <span className="">llegada</span>
                                                                <div className="font-semibold">2:00PM</div>

                                                            </div>
                                                            <div className="border-b border-dashed border-b-2 my-5 pt-5">
                                                                <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                                                                <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                                                            </div>


                                                        </div>

                                                    </>



                                                ))
                                            }





                                            <div className="flex flex-col py-5  justify-center text-sm ">
                                                <h6 className="font-bold text-center">Tarjeta de embarque</h6>

                                                <div className="barcode h-14 w-0 inline-block mt-4 relative left-auto"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end my-1  mr-1">
                    <button
                        className="focus:outline-none modal-close px-2 py-1 bg-gray-400 rounded text-black text-sm hover:bg-gray-300"
                        onClick={onClose}
                    >
                        Cerrar
                    </button>
                    <ReactToPrint
                        trigger={() => <button
                            title='Imprimir'
                            className="focus:outline-none px-4 bg-blue-800 p-3 ml-3 rounded-lg text-white hover:bg-blue-600"
                        >
                            <IoPrint />
                        </button>}
                        content={() => componentRef.current as unknown as HTMLDivElement}
                        documentTitle='Voucher'
                        pageStyle='print'
                    />
                </div>
            </div >
        </div >

    );
};
