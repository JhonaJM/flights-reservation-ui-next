"use server";
import { IReservationResponse } from "@/reservations/interfaces/IReservation-response";

interface PaginationOptions {
    page?: number;
    limit?: number;
    startDate: string;
    endDate: string;
    pnrLocator?: string;
}

export const getPaginationReservations = async ({ page = 1, limit = 8, startDate, endDate, pnrLocator }: PaginationOptions): Promise<IReservationResponse> => {

    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;
    
    let url = `http://localhost:3000/api/reservations?page=${page}&limit=${limit}&startDate=${startDate}&endDate=${endDate}`;
    if (pnrLocator)
        url += `&pnrLocator=${pnrLocator}`

    const response: IReservationResponse = await fetch(url,{
         method: 'GET',
         headers: {
            'Cache-Control': 'no-cache'
          }
        })
        .then(res => res.json());

    console.log(url)
    console.log(response.data[0])
    return response;

}