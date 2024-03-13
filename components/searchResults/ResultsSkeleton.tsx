import { Skeleton } from "../ui/skeleton";

export const ResultsSkeleton: React.FC = () => {
  const skeletonArray = Array.from({ length: 10 }, (_, index) => (
    <div className="flex flex-col space-y-3" key={index}>
      <Skeleton className="h-[270px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ));

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {skeletonArray}
    </section>
  );
};
