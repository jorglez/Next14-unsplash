"use server";
import { ImageTypes, SearchResults } from "@/types/unsplash";
import axios, { AxiosResponse } from "axios"
import { unstable_noStore as noStore } from "next/cache";

const path: string = process.env.NEXT_USP_API || ""
const key: string = process.env.NEXT_USP_KEY || ""

//Documentacion: https://unsplash.com/documentation#search-photos
export const getPhotos = async (query: string) => {
  noStore();
  try {
    const response: AxiosResponse<SearchResults> = await axios.get<SearchResults>(`${path}/search/photos/?per-page=10&client_id=${key}&query=${query || "naturaleza"}`)

    return response.data.results;
  } catch (error) {
    return { msg: "error al obtener imagenes" }
  }
}

//Documentacion: https://unsplash.com/documentation#get-a-photo
export const getPhotoById = async (id: string) => {
  noStore();
  try {
    const response: AxiosResponse<ImageTypes> = await axios.get<ImageTypes>(`${path}/photos/${id}?client_id=${key}`)
    return response.data
  } catch (error) {
    return { msg: "error al obtener información de la imagen" }
  }

}