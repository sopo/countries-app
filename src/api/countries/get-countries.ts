import httpClient from '../axios';
import { Country } from '@/components/cards/cards-data/country';
export const getCountries = async () => {
    try {
        return httpClient.get<Country[]>('/countries').then((response) => {
            return response.data;
          }); 
    } catch (error) {
        console.error('error on get countries: ', error);
        throw error
    }
};
export const updateCountry = async (data: Country) => {
  try {
    return httpClient.patch(`/countries/${data.id}`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.error('error on update: ', error);
    throw error
  }
};
export const getCountry = async (id: string) => {
    try {
      return httpClient.get(`/countries/${id}`).then((res) => {
        return res.data;
      });
    } catch (error) {
      console.error('error on get country: ', error);
      throw error
    }
  };
export const likeCountry = async ({
  id,
  rating,
}: {
  id: string;
  rating: number;
}) => {
  try {
    return httpClient.patch(`/countries/${id}`, { rating }).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.error('error on like: ', error);
    throw error
  }
};
export const createCountry = async (data: Omit<Country, 'id'>) => {
  try {
    return await httpClient.post(`/countries`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.error('error on create country: ', error);
    throw error
  }
};
export const deleteCountry = async (id: string) => {
  try {
    return await httpClient.delete(`/countries/${id}`);
  } catch (error) {
    console.error('error on delete country: ', error);
    throw error
  }
};
