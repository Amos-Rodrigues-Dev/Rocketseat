import fs from 'fs';
import { parse as csvParse } from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCtegory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepositoy: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCtegory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCtegory[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existsCategory = this.categoriesRepositoy.findByName(name);

      if (!existsCategory) {
        this.categoriesRepositoy.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
