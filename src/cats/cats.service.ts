import { Injectable } from '@nestjs/common';
import { CatEntity } from './entities/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatDto } from './dto/cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private catsRepository: Repository<CatEntity>,
  ) {}

  /**
   * Find all cats
   * @returns {Promise<CatEntity>}
   */
  async findAll(): Promise<CatEntity[]> {
    return this.catsRepository.find();
  }

  /**
   * Find one cat by uuid
   * @param {string} uuid
   * @returns {Promise<CatEntity>}
   */
  async findOne(uuid: string): Promise<CatEntity> {
    return this.catsRepository.findOneBy({ id: uuid });
  }

  /**
   * Create a cat
   * @param {CatDto} cat
   * @returns {boolean} success
   */
  async create(cat: CatDto): Promise<boolean> {
    const result = await this.catsRepository.insert(cat.toEntity());
    return result.identifiers.length > 0;
  }

  /**
   * Update a cat
   * @param id
   * @param {CatDto} cat
   * @returns {boolean} success
   */
  async update(id: string, cat: CatDto): Promise<boolean> {
    const result = await this.catsRepository.update(id, cat.toEntity());
    return result.affected > 0;
  }

  /**
   * Delete a cat
   * @param {string} uuid
   * @returns {boolean} success
   */
  async delete(id: string): Promise<boolean> {
    const result = await this.catsRepository.delete(id);
    return result.affected > 0;
  }
}
