import React, { forwardRef } from "react";

export const RawTable = forwardRef((props: any, ref: any) => {
  return (
    <div className="overflow-x-auto overflow-y-clip">
      <table
        ref={ref}
        {...props}
        className="w-full border-separate border-spacing-0"
      />
    </div>
  );
});

export const Tr = ({
  onClick,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => {
  const isClickable = Boolean(onClick);

  const classNameTr = isClickable
    ? "border-l-8 border-l-transparent hover:bg-gray-50 hover:dark:bg-slate-700 hover:border-l-indigo-500 hover:cursor-pointer active:bg-gray-100 border-b border-b-gray-100"
    : "border-b border-b-gray-100";

  return (
    <tr
      onClick={onClick}
      className={classNameTr + " " + className || ""}
      {...props}
    />
  );
};

export const Td = (props: React.HTMLAttributes<HTMLTableCellElement>) => {
  return <td className="py-4 px-8 dark:text-gray-200" {...props} />;
};

export const Th = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) => {
  return (
    <th
      className={
        "py-4 px-8 bg-gray-100 dark:bg-slate-600 text-left uppercase text-sm text-gray-600 dark:text-gray-200 tracking-wide " +
        className
      }
      {...props}
    />
  );
};

RawTable.displayName = "RawTable";
