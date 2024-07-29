import { IReservation } from "./IReservation";

export interface IReservationResponse {
    data: IReservation[];
    meta: Meta;
}

export interface Meta {
    total:    number;
    page:     number;
    lastPage: number;
}
