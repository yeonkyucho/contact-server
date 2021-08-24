import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Prisma, Contact } from '@prisma/client';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) {}

    @Get()      //모든 전화번호 출력
    async getAll(): Promise<Contact[]>{
        return await this.contactsService.getAll();
    }

    @Get('/:id')     //특정 id 전화번호 출력
    async get(@Param('id') id:number): Promise<Contact>{
        return await this.contactsService.get(Number(id));
    }

    @Post()     //id 생성
    create(@Body() contactInput: Prisma.ContactCreateInput): Promise<Contact> {
        return this.contactsService.create(contactInput);
    }

    @Put('/:id')  //수정
    update(@Param('id') id:number, @Body() contactInput: Prisma.ContactCreateInput, ) {
        return this.contactsService.update(Number(id), contactInput);
    }

    @Delete('/:id')
    delete(@Param('id') id:number) {
        return this.contactsService.delete(Number(id));
    }


}
