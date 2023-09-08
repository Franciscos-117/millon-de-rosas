export interface Categorie{
  'title': string,
  'subCategories': subCat[]
};

interface subCat{
  'title': string,
  'path': string
};
