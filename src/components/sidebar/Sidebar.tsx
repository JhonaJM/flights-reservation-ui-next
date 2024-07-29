import Image from 'next/image'
import React from 'react'
import { IoAirplane, IoBrowsers, IoCalculator, IoCalendar, IoConstruct, IoEarth, IoFootball, IoGlobe} from 'react-icons/io5'
import { SiderbarMenuItem } from './SiderbarMenuItem'


const menuItems = [
    {
        path: "/reservation",
        icon: <IoCalendar size={40} />,
        title: 'Reservas',
        subTitle: 'Listado de reservas',
    },
    {
        path: "/flights",
        icon: <IoGlobe size={40} />,
        title: 'Vuelos',
        subTitle: 'Listado de vuelos',
    },
    {
        path: "/airlines",
        icon: <IoAirplane size={40} />,
        title: 'Aerolíneas',
        subTitle: 'Listado de aerolíneas',
    }
    
]
export const Sidebar = () => {
    return (
        <div  id="menu" style={{width:'400px'}} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoEarth className='mr-2'/>  
                    <span>Travel</span> 
                    <span className='text-blue-500'>10</span>.
                </h1>
                <p className="text-slate-500 text-sm">Panel Administrativo</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Bienvenido,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image 
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                            alt="user avatar"
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Jhonatan Jimenez
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">

                {
                    menuItems.map(item => (
                        <SiderbarMenuItem key={item.path} {...item}/>
                    ))
                }

            </div>
        </div>
    )
}

