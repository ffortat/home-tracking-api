import { ICategory, Category } from '../model/category.model';

export class CategoryController {
  static listCategories(filter = {}): Promise<any[]> {
    return new Promise((resolve, reject) => {
      Category.find(filter, (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      });
    });
  }

  static addCategory(category: ICategory): Promise<any> {
    return new Promise((resolve, reject) => {
      const newCategory = new Category(category);

      Category.find(category, (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        if (result.length === 0) {
          newCategory.save().then((savedCategory) => resolve(savedCategory));
        } else {
          resolve(result[0]);
        }
      });
    });
  }

  static getCategory(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      Category.findById(id, (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      });
    });
  }

  static patchCategory(id: string, category: ICategory): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getCategory(id).then((existingCategory) => {
        existingCategory.name = category.name ? category.name : existingCategory.name;
        existingCategory.parent = category.parent ? category.parent : existingCategory.parent;

        existingCategory.save().then((savedCategory: any) => resolve(savedCategory));
      }, (error) => {
        reject(error);
      });
    });
  }

  static deleteCategory(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getCategory(id).then((existingCategory) => {
        existingCategory.remove().then((result: any) => {
          resolve(result);
        }, (error: any) => {
          reject(error);
        });
      }, (error) => {
        reject(error);
      });
    });
  }
}