import { CatEntity } from '../entities/cat.entity';

export class CatDto {
  constructor(id: string = '') {
    this.id = id;
    this.name = '';
    this.age = 0;
    this.breed = '';
  }

  id: string;
  name: string;
  age: number;
  breed: string;

  static from(cat: CatDto): CatDto {
    const newCat = new CatDto();
    newCat.id = cat.id;
    newCat.name = cat.name;
    newCat.age = cat.age;
    newCat.breed = cat.breed;
    return newCat;
  }

  static fromEntity(cat: CatEntity): CatDto {
    const newCat = new CatDto();
    newCat.id = cat.id;
    newCat.name = cat.name;
    newCat.age = cat.age;
    newCat.breed = cat.breed;
    return newCat;
  }

  toEntity(): CatEntity {
    const newCat = new CatEntity();
    newCat.id = this.id;
    newCat.name = this.name;
    newCat.age = this.age;
    newCat.breed = this.breed;
    newCat.createdBy = 'SYSTEM';
    newCat.lastChangedBy = 'SYSTEM';
    return newCat;
  }
}
