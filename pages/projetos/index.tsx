import { Header } from "@components/Header";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { CONFIG } from "@lib/config";

const index = function () {
  return (
    <div>
      <Header title="Projetos" />
      <Navbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-9/12 mt-4">
          {CONFIG.MAINPROJECTS.map((r) => (
            <div className="transition hover:scale-105 border-2 border-[#1f1f1f] group hover:border-[#242424] hover:bg-[#1f1f1f] rounded-xl text-gray-200">
              <a href={r.linkto}>
                <div className="border-b-2 border-[#1f1f1f] group-hover:border-[#242424] rounded-t-xl p-4 text-gray-200">
                  <img
                    src={r.img}
                    alt="ReponseLogo"
                    className="w-1/4 rounded-3xl"
                  />
                  <div className="mt-2">
                    <p className="font-semibold text-xl">{r.title}</p>
                    <p className="text-gray-600">{r.description}</p>
                  </div>
                </div>
                <div className="p-4 py-6">
                  <div>
                    <p className="font-bold text-xl">Cargo</p>
                    <p className="">{r.role}</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold text-xl">Sobre</p>
                    <p className="">{r.what}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-2">
        <div className="w-9/12">
          {CONFIG.SIDEPROJECTS.map((r) => (
            <div className="py-2">
              <div className="transition hover:border-[#242424] group hover:bg-[#1f1f1f] text-gray-200 md:flex border-2 border-[#1f1f1f] rounded-xl">
                <div className="md:flex p-4">
                  <img
                    src={r.img}
                    className="rounded-xl md:w-1/4"
                    alt={r.title + `'s photo`}
                  />
                  <div className="md:ml-4 ml-2 flex items-center">
                    <div className="mt-2 md:mt-0">
                      <p className="text-xl font-bold">{r.title}</p>
                      <p className="text-gray-600 md:w-3/4">{r.description}</p>
                    </div>
                  </div>
                </div>
                {CONFIG.SIDEPROJECTS[0].mode == "1" && (
                  <div className="grid md:justify-items-end rounded-xl group-hover:border-[#242424] border-[#1f1f1f] md:border-l-2 md:w-6/12">
                    <div className="md:grid flex items-center justify-center md:gap-x-0 gap-x-4 md:p-4 pb-4 w-full">
                      {CONFIG.SIDEPROJECTS[0].linkto && (
                        <a
                          className="bg-gray-600 group-hover:bg-gray-700 p-2 px-8 rounded-md text-center transition"
                          href={`https://github.com/isyuricunha/${r.linkto}`}
                        >
                          Github
                        </a>
                      )}
                      {CONFIG.SIDEPROJECTS[0].view && (
                        <a
                          className="bg-gray-600 group-hover:bg-blue-600 p-2 px-8 rounded-md text-center transition"
                          href={r.view}
                        >
                          Ver
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
