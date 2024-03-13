import { ImageTypes } from "@/types/unsplash";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { BiLike } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
interface Props {
  img: ImageTypes;
}
export const ImgCard: React.FC<Props> = ({ img }) => {
  return (
    <Card className="w-full h-96 overflow-hidden rounded-xl">
      <Link href={`/photo-info/${img.id}`}>
        <div className="w-full h-3/4 relative overflow-hidden">
          <Image
            fill
            alt={img.slug || "no description"}
            src={img.urls.small}
            className="object-cover object-center transition-transform duration-300 transform hover:scale-110 cursor-pointer"
          />
        </div>
      </Link>
      <CardFooter className="pt-2 flex flex-col">
        <div className="flex items-center gap-2 w-full">
          <BiLike />
          <p>{img.likes}</p>
        </div>
        <div className="flex items-center gap-2 w-full">
          <p>
            {" "}
            <span className="font-bold">Usuario:</span> {`${img.user.username}`}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};
