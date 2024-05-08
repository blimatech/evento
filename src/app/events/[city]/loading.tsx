import SkeletonCard from "@/components/skeleton-card";

function Loading() {
  return (
    <div className="mx-auto flex max-w-[1100px] flex-wrap gap-20 px-[20px] py-24">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
export default Loading;
