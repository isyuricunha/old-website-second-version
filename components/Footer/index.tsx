import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="flex items-center justify-center p-2 bg-[#1a1a1a]">
      <div className="flex md:w-7/12 w-10/12 justify-between">
        <div className="flex items-center">
          <p className="flex text-md font-medium text-gray-400">
            Feito por&nbsp;
            <a
              href="https://github.com/isyuricunha"
              className="text-gray-100 hover:underline underline-violet-700 underline-1"
            >
              Yuri Cunha
            </a>
          </p>
        </div>

        <div className="flex items-center text-gray-300">
          <p>com {"💙"}</p>
        </div>
      </div>
    </div>
  );
};
