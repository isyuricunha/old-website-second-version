export const CONFIG = {
  MAINPROJECTS: [
    {
      title: "Dongdedi: Song Dedication",
      description:
        "Um serviço gratuito de dedicação de música adequado para casamentos, festas ou qualquer evento.",
      role: "Fundador e dbA",
      what: "Aqui você pode enviar o link para as pessoas te dedicarem músicas. E, elas podem até subir arquivos em mp3!",
      img: "/projects/songdedi.jpg",
      linkto: "https://songdedi-admin.herokuapp.com/",
    },
    {
      title: "Alameda Dev",
      description:
        "Servidor do Discord para a comunidade de desenvolvedores e entusiastas da tecnologia.",
      role: "Moderador e dbA",
      what: "A ideia é montar um servidor aonde todos os desenvolvedores, estudantes e entusiastas possam trocar conhecimentos.",
      img: "/projects/community-dev.jpg",
      view: "https://discord.gg/qCXfvFxpAC",
      linkto: "https://discord.gg/JPS2bY6GVy",
    },
    {
      title: "From The Desk, by Yuri Cunha",
      description: "Eu estou escrevendo, cara! Vou lançar um livro.",
      role: "Moderador e dbA",
      what: "Um blog sobre tecnologia, desenvolvimento e inovação. Escrito por Yuri Cunha.",
      img: "/projects/fromthedesk.jpg",
      view: "https://github.com/isyuricunha/blog",
      linkto: "https://www.blog.yuricunha.xyz/",
    },
  ] as MAINPROJECTS[],

  SIDEPROJECTS: [
    {
      title: "GitHub Auto Unfollow e Follow",
      description: "Um bot para seguir e deixar de seguir pessoas do GitHub.",
      img: "/projects/follow_unfollow.png",
      linkto: "Auto-Github-Follow-e-Unfollow",
      view: "https://github.com/isyuricunha/Auto-Github-Follow-e-Unfollow",
      mode: "1",
    },
    {
      title: "LinkedIn Auto Unfollow",
      description:
        "Esse script dá unfollow em todos os seus amigos, páginas e/ou empresas.",
      img: "/projects/linkedin-script.jpg",
      linkto: "linkedin-mass-unfollow",
      view: "https://github.com/isyuricunha/linkedin-mass-unfollow",
      mode: "1",
    },
    {
      title: "Pokedex",
      description:
        "Desenvolver uma plataforma web para listagem e visualização de pokémons.",
      role: "Moderador e dbA",
      what: "A ideia é montar um servidor aonde todos os desenvolvedores, estudantes e entusiastas possam trocar conhecimentos.",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/0631c195727849.5e9e445700dcf.png",
      linkto: "pokedex",
      view: "https://pokedex.yuricunha.xyz/",
    },
  ] as SIDEPROJECTS[],
};

interface MAINPROJECTS {
  title: string;
  description: string;
  role: string;
  what: string;
  img: string;
  linkto: string;
}

interface SIDEPROJECTS {
  title: string;
  description: string;
  img: string;
  linkto: string;
  view: string;
  mode: string;
}
