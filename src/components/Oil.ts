export default class Oil {
    public name: string = '';
    public price: number = 0;
    public weight: number = 0;
    public naoh: number = 0;

    constructor(name: string, price: number = 0, weight: number = 0, naoh: number = 0) {
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.naoh = naoh;
    }
}