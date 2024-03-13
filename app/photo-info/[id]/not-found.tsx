import Link from "next/link";
import { FaRegFaceSadTear } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 my-5">
      <FaRegFaceSadTear className="text-6xl" />

      <h2 className="text-2xl font-semibold">404 Not Found</h2>
      <p>No se encontró la imagen solicitada.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Volver
      </Link>
    </main>
  );
}
