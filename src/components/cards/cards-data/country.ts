export interface Country {
  id: string;
  name: {
    ka: string;
    en: string;
  };
  title: {
    ka: string;
    en: string;
  };
  population: number;
  capital: {
    ka: string;
    en: string;
  };
  description: {
    ka: string;
    en: string;
  };
  imageUrl: string;
  rating: number;
}
