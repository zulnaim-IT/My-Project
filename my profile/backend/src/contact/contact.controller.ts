import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    const contact = await this.contactService.create(createContactDto);
    return {
      success: true,
      message: 'Contact message received successfully',
      data: contact,
    };
  }

  @Get()
  async findAll() {
    const contacts = await this.contactService.findAll();
    return {
      success: true,
      count: contacts.length,
      data: contacts,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const contact = await this.contactService.findOne(id);
    return {
      success: true,
      data: contact,
    };
  }

  @Patch(':id/read')
  async markAsRead(@Param('id') id: string) {
    const contact = await this.contactService.markAsRead(id);
    return {
      success: true,
      data: contact,
    };
  }
}
