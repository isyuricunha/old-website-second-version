import { FC } from "react";

export const Popup: FC = () => {
  return (
    <div className="">
      <aside className="fixed z-50 flex items-center justify-center px-5 py-3 text-white bg-black rounded-lg bottom-4 right-4">
        <a
          href="https://www.blog.yuricunha.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:opacity-75"
        >
          Ei, que tal ver o meu blog?
        </a>

        <a
          className="p-1 ml-3 rounded bg-white/20 hover:bg-white/10"
          href="https://www.blog.yuricunha.xyz/"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </aside>
    </div>
  );
};
