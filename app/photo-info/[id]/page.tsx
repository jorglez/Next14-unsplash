import { getPhotoById } from "@/lib/actions";
import { DefaultError } from "@/types/defaults";
import { ImageTypes } from "@/types/unsplash";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
interface Props {
  params: {
    id: string;
  };
}
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const response: ImageTypes | DefaultError = await getPhotoById(params.id);

  if (!("msg" in response)) {
    return {
      title: response.slug.replaceAll("-", " ").replace(params.id, ""),
      description: response.description || response.alt_description,
    };
  }
  return {
    title: "Image Info",
    description: "Description",
  };
};

const Page: React.FC<Props> = async ({ params }) => {
  const { id } = params;
  const response: ImageTypes | DefaultError = await getPhotoById(id);
  if ("msg" in response) {
    return notFound();
  }

  return (
    <>
      <div className="w-full items-center py-4 px-2 md:w-4/5 mx-auto">
        <button className="bg-none hover:bg-slate-600 text-white font-bold py-2 px-4 rounded flex transition-colors duration-300 w-28">
          <Link href={"/"} className="w-full flex">
            <IoMdArrowRoundBack className="text-2xl" />
            Volver
          </Link>
        </button>
      </div>
      <section className="w-full h-full px-2 md:w-4/5 m-auto">
        <div className="w-100 grid sm:grid-cols-1 lg:grid-cols-2">
          <div className="relative w-full  h-96 bg-slate-700 rounded-lg overflow-hidden">
            <a
              href={response.links.download}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={response.urls.regular}
                fill
                alt={response.description}
                className="object-contain"
              />
            </a>
          </div>
          <div className=" lg:ml-7 ">
            <div className="w-full sm:w-fit mt-5 lg:mt-0 flex justify-center">
              <a
                href={response.links.download}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Descargar</span>
                </button>
              </a>
            </div>
            <h1 className="text-3xl mb-2">Información de la imagen</h1>
            <p className="text-xl">
              <span className="font-bold">Título: </span>
              {response.description ||
                response.alt_description ||
                "Imagen sin descripción"}
            </p>
            <p className="text-xl">
              <span className="font-bold">Autor: </span>
              {`${response.user.first_name ?? ""} ${
                response.user.last_name ?? ""
              }`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
