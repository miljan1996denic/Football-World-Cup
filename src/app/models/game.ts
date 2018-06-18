export class Game {
    //public title: string; 
    // public year: number;
    // public rating: number;
    // public awards: string[];

    constructor(
        public id: number,
        public finised: false,
        public home: string,
        public guest: string,
        public goalHome:number,
        public goalGuest:number,
        public minut:number
    ) {

    }
}