// export class marcador{

//     constructor(public lat:number,public lng:number){

//     }
// }

export class Marcador{
    public lat:number;
    public lng:number;
    public desc:string="Sin descripcion";

    constructor( lat:number,lng:number){
        this.lat=lat;
        this.lng=lng;
    }
}