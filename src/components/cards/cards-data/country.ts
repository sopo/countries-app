export interface Country {
  id: number;
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
  isDeleted: boolean;
}