export interface Child {
  title: string;
  id: string;
  is_parent_category: boolean;
}

export interface Category {
  title: string;
  id: string;
  is_parent_category: boolean;
  children: Child[];
}

export interface Links {
  privacy_policy: string;
  terms_of_use: string;
}

export interface CategoriesRootObject {
  categories: Category[];
  links: Links;
}
