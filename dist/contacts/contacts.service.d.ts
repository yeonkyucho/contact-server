import { PrismaService } from './prisma.service';
import { Prisma, Contact } from '@prisma/client';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Contact[]>;
    get(id: number): Promise<Contact>;
    create(contactInput: Prisma.ContactCreateInput): Promise<Contact>;
    delete(id: number): Promise<Contact>;
    update(id: number, contactInput: Prisma.ContactCreateInput): Promise<Contact>;
}
