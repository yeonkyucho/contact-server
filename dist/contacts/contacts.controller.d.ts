import { ContactsService } from './contacts.service';
import { Prisma, Contact } from '@prisma/client';
export declare class ContactsController {
    private contactsService;
    constructor(contactsService: ContactsService);
    getAll(): Promise<Contact[]>;
    get(id: number): Promise<Contact>;
    create(contactInput: Prisma.ContactCreateInput): Promise<Contact>;
    update(id: number, contactInput: Prisma.ContactCreateInput): Promise<Contact>;
    delete(id: number): Promise<Contact>;
}
