import { Clamp } from "@axelarjs/ui";
import { cn } from "@axelarjs/ui/utils";
import type { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

const Page: FC<Props> = ({ children, className, ...props }) => {
  return (
    <Clamp
      $as="section"
      className={cn("flex flex-1 flex-col px-4 xl:px-2 2xl:px-0", className)}
      {...props}
    >
      {children}
    </Clamp>
  );
};
export default Page;
