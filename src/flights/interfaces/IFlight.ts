export interface IFlight {
    id:             number;
    airlineCode:    string;
    departureCity:  string;
    arrivalCity:    string;
    flightNumber:   string;
    departureHour:  string;
    arrivalHour:    string;
    dateFlight:     Date;
    availableSeats: number;
    currency:       string;
    price:          number;
    status:         number;
    createdAt:      Date;
    updatedAt:      Date;
}
