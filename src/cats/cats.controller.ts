import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './dto/cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  /**
   * Find all cats
   * @returns {Promise<CatEntity>}
   */
  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  /**
   * Find one cat by uuid
   * @param {string} uuid
   */
  @Get(':id')
  async findOne(id: string) {
    return this.catsService.findOne(id);
  }

  /**
   * Create a cat
   * @param {CatDto} cat json body
   * @returns {boolean} success
   */
  @Post()
  async create(@Body() cat: CatDto) {
    return this.catsService.create(cat);
  }

  /**
   * Update a cat
   * @param id
   * @param {CatDto} cat json body
   * @returns {boolean} success
   */
  @Put(':id')
  async update(@Param('id') id: string, @Body() cat: CatDto) {
    return this.catsService.update(id, cat);
  }

  /**
   * Delete a cat
   * @returns {boolean} success
   * @param id
   */
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
