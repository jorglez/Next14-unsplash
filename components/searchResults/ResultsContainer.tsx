import { getPhotos } from "@/lib/actions";
import { ImageTypes } from "@/types/unsplash";
import React, { Suspense } from "react";
import { ImgCard } from "./ImgCard";
import { ResultsSkeleton } from "./ResultsSkeleton";
interface Props {
  query: string;
  currentPage: string;
}
export const ResultsContainer: React.FC<Props> = async ({
  query,
  currentPage,
}) => {
  const photos: ImageTypes[] | { msg: string } = await getPhotos(query);

  if (!("msg" in photos) && photos.length === 0) {
    return (
      <section className="w-full">
        <h2 className="text-center text-3xl">No se encontraron resultados</h2>
      </section>
    );
  }

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {Array.isArray(photos) &&
        photos.length > 0 &&
        photos.map((photo) => <ImgCard key={photo.id} img={photo} />)}
    </section>
  );
};
