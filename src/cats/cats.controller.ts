import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto'
import { getEnabledCategories } from 'trace_events';
import { declareExportDeclaration } from '@babel/types';
import { CatsService } from './cats.service';
import { CatsInterface } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {

    constructor(private catsFactory: CatsService) {

    }

    @Get()
    getAllCats(): Array<CatsInterface> {
        return this.catsFactory.getCats();
    }

    @Get(':id')
    getCat(@Param('id') id: number) {
        return this.catsFactory.getCatById(id);
    }

    @Post()
    createCat(@Body() createAnCat: CatsInterface) {
        return { "inserted": this.catsFactory.createCat(createAnCat)};
    }

    @Put(':id')
    updateCat(@Param('id') id:number,@Body() bodyUpdateCat:CatsInterface) {
        return { "updated": this.catsFactory.updateCat(id,bodyUpdateCat)};   
    }

    @Delete(':id')
    deleteCat(@Param('id') id:number) {
        return { "deleted": this.catsFactory.deleteCat(id)};
    }

}
