import { SearchBar } from "@/components/searchResults/SearchBar";
import { ResultsContainer } from "@/components/searchResults/ResultsContainer";
import { ResultsSkeleton } from "@/components/searchResults/ResultsSkeleton";
import { Suspense } from "react";
interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
}
const Home: React.FC<Props> = ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.page || "1";
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <SearchBar />
      <Suspense fallback={<ResultsSkeleton />}>
        <ResultsContainer query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
};
export default Home;
