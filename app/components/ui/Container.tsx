import clsx from "clsx";

export function Container({
  props = {},
  children,
  className,
}: {
  props?: any;
  children: React.ReactNode;
  className?: string;
}) {
  const classNames = clsx(
    "container max-w-6xl mx-auto px-2 sm:px-4 lg:px-6",
    className
  );
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
