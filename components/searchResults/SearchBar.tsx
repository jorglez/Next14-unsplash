"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";

export const SearchBar: React.FC = () => {
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchparams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 450);
  return (
    <div className="w-72 border-solid border-slate-500 border-8 rounded-md mb-4">
      <Input
        type="text"
        placeholder="Buscar imagenes"
        defaultValue={searchparams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="text-black"
      />
    </div>
  );
};
