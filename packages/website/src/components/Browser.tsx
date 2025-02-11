export interface BrowserProps {
  children: React.ReactNode;
}

export const Browser = ({ children }: BrowserProps) => {
  return (
    <div className="w-full">
      <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-400"></span>
      </div>
      <div className="bg-gray-100 border-t-0 w-full h-96 p-4">{children}</div>
    </div>
  );
};
