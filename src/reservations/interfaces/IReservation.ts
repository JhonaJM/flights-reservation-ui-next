export interface IReservation {
    id:                string;
    pnrLocator:        string;
    status:            string;
    currency:          string;
    ammount:           number;
    stripeChargeId:    string;
    receiptUrl:        string;
    createdAt:         Date;
    updatedAt:         Date;
    Segments:          Segment[];
    Passengers:        Passenger[];
    TicketInformation: any[];
}

export interface Passenger {
    id:             string;
    giveName:       string;
    surName:        string;
    identification: string;
    documentNumber: string;
    typeCode:       string;
    reservationId:  string;
}

export interface Segment {
    id:            string;
    flightId:      number;
    airlineCode:   string;
    departureCity: string;
    arrivalCity:   string;
    currency:      string;
    price:         number;
    createdAt:     Date;
    updatedAt:     Date;
    reservationId: string;
}
