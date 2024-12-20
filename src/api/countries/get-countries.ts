import httpClient from '../axios';
import { Country } from '@/components/cards/cards-data/country';

export const updateCountry = async (data: Country): Promise<Country> => {
  try {
    const response = await httpClient.patch(`/countries/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error('error on update: ', error);
    throw error;
  }
};
export const getCountry = async (id: string): Promise<Country> => {
  try {
    const response = await httpClient.get(`/countries/${id}`);
    return response.data;
  } catch (error) {
    console.error('error on get country: ', error);
    throw error;
  }
};
export const openCountry = async ({ id }: { id: string }): Promise<Country> => {
  try {
    const response = await httpClient.get(`/countries/${id}`);
    return response.data;
  } catch (error) {
    console.error('error opening counry: ', error);
    throw error;
  }
};
export const likeCountry = async ({
  id,
  rating,
}: {
  id: string;
  rating: number;
}): Promise<Country> => {
  try {
    const response = await httpClient.patch(`/countries/${id}`, { rating });
    return response.data;
  } catch (error) {
    console.error('error on like: ', error);
    throw error;
  }
};
export const createCountry = async (
  data: Omit<Country, 'id'>,
): Promise<Country> => {
  try {
    const response = await httpClient.post(`/countries`, data);
    return response.data;
  } catch (error) {
    console.error('error on create country: ', error);
    throw error;
  }
};
export const deleteCountry = async (id: string): Promise<void> => {
  try {
    return await httpClient.delete(`/countries/${id}`);
  } catch (error) {
    console.error('error on delete country: ', error);
    throw error;
  }
};

export const getCountries = async (sort: string, offset: number) => {
  try {
    const order = sort === 'asc' ? 'rating' : '+rating';
    const response = await httpClient.get(
      `/countries?_sort=${order}&_page=${offset}`,
    );
    const isLastPage = response.data.last <= offset;
    return {
      rows: response.data.data,
      nextOffset: isLastPage ? undefined : offset + 1,
    };
  } catch (error) {
    console.error('error on sort: ', error);
    throw error;
  }
};
