import { Injectable } from '@nestjs/common';
import { CatsInterface } from './interfaces/cats.interface'

@Injectable()
export class CatsService {

    private cats: Array<CatsInterface> = [];

    getCats(): Array<CatsInterface> {
        return this.cats;
    }

    getCatByName(nombre: string): CatsInterface {
        return this.cats.find(cat => cat.name == nombre);
    }

    getCatById(id: number): CatsInterface {
        return this.cats.find(cat => cat.id == id);
    }

    updateCat(id: number, cat: CatsInterface): boolean {
        let catAux: CatsInterface = this.cats.find(cat => cat.id == id)
        if (catAux) {
            return true;
        } else {
            return false;
        }
    }

    deleteCat(id: number): boolean {
        let catAux = this.cats.find(cat => { if (cat.id == id) return true });
        if (catAux) {
            return true;
        } else {
            return false;
        }
    }

    createCat(cat: CatsInterface) {
        try{
            this.cats.push(cat);
            return true;
        }catch(e){
            return false;
        }
    }

}
