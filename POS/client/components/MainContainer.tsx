import { cn } from "@/lib/utils";

const MainContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={cn(
        "p-2.5 md:p-4 !pt-2 h-[calc(100dvh-4rem)] overflow-y-scroll scroll-smooth scrollbar-hide",
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainContainer;
