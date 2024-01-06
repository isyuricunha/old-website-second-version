export const CONFIG = {
	MAINPROJECTS: [
		{
			title: "Dongdedi: Song Dedication",
			description:
				"A free music dedication service suitable for a wedding, party or any event. Users can upload their songs and dedicate them to their loved ones. The songs will be played on the event day.",
			role: "dbA",
			what: "Here you can send the link for people to dedicate songs to you. And, they can even upload files in mp3!",
			img: "/projects/songdedi.jpg",
			linkto: "https://songdedi-admin.herokuapp.com/",
		},
		{
			title: "Alameda Dev",
			description:
				"We are a community of developers, designers, and tech enthusiasts. ",
			role: "Moderator and dbA",
			what: "The idea is to build a server where all developers, students and enthusiasts can exchange knowledge.",
			img: "/projects/community-dev.jpg",
			view: "https://discord.gg/qCXfvFxpAC",
			linkto: "https://discord.gg/JPS2bY6GVy",
		},
		{
			title: "From The Desk, by Yuri Cunha",
			description:
				"I'm writing, man! I will release a book. \n This blog is under development.",
			role: "Written by me. And coded by me.",
			what: "A blog about technology, development and innovation. Written by me.",
			img: "/projects/fromthedesk.jpg",
			view: "https://github.com/isyuricunha/blog",
			linkto: "https://www.blog.yuricunha.com/",
		},
	] as MAINPROJECTS[],

	SIDEPROJECTS: [
		{
			title: "Auto Github follow and unfollow.",
			description: "A script to follow and unfollow people from GitHub.",
			img: "/projects/follow_unfollow.png",
			linkto: "auto-github-follow-and-unfollow",
			view: "https://github.com/isyuricunha/auto-github-follow-and-unfollow",
			mode: "1",
		},
		{
			title: "LinkedIn mass unfollow.",
			description:
				"This script unfollows all of your friends, pages, and/or companies. It's a mass unfollow. It's a script. It's a bot. It's a tool.",
			img: "/projects/linkedin-script.jpg",
			linkto: "linkedin-mass-unfollow",
			view: "https://github.com/isyuricunha/linkedin-mass-unfollow",
			mode: "1",
		},
		{
			title: "Pokedex",
			description:
				"Develop a web platform for listing and viewing Pokémon. The project is based on the PokéAPI.",
			role: "Moderador e dbA",
			what: "The idea is to list all the Pokemons with the PokeAPI",
			img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/0631c195727849.5e9e445700dcf.png",
			linkto: "pokedex",
			view: "https://pokedex.yuricunha.com/",
		},
		{
			title: "List all followers and following Github user's.",
			description:
				"Easy view and filter all follows and following. Auto update by GitHub Action.",
			role: "Coded by me.",
			what: "The idea is to list all the GitHub users that you follow and that follow you.",
			img: "https://miro.medium.com/max/644/1*OwTbvxoHms-JFn3SOa1jBQ.png",
			linkto: "list-all-followers-and-following",
			view: "https://github.com/isyuricunha/list-all-followers-and-following",
		},
		{
			title: "Old website.",
			description:
				"My first website. I'm not using it anymore. But, I'm keeping it here. It's a good memory.",
			role: "Coded by me.",
			what: "My first website. I'm not using it anymore. But, I'm keeping it here. It's a good memory.",
			img: "https://github.com/isyuricunha/old-website/blob/main/src/assets/portfolio.gif?raw=true",
			linkto: "old-website",
			view: "http://www.old-website.yuricunha.com/",
		},
		{
			title: "Massage Alternativa.",
			description: "Website for Massage Alternativa.",
			role: "Coded by me.",
			what: "Website for Massage Alternativa.",
			img: "./projects/massage-alternativa.png",
			linkto: "massage-alternativa",
			view: "https://www.massagealternativa.com/",
		},
		{
			title: "Solution System Automation.",
			description: "Website Solution System Automation.",
			role: "Coded by me.",
			what: "Website Solution System Automation.",
			img: "./projects/ssautomation.png",
			linkto: "solution-system-autmation",
			view: "https://www.ssautomation.com.br/",
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
