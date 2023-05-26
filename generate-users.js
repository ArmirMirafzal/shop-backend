// const { faker } = require("@faker-js/faker");

// const oldUsers = [
// 	{
// 		id: "846f4aef-937d-4d42-9592-3644b9df3598",
// 		username: "Cali_Feeney1",
// 		email: "Federico_Bernhard43@yahoo.com",
// 		phoneNumber: "+998 66 767 00 05",
// 		age: 38,
// 		address: "Denton",
// 		avatarURL:
// 			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/274.jpg",
// 	},
// 	{
// 		id: "ec65a5b7-00c6-4ead-b0ae-3fd762380020",
// 		username: "Eileen_Deckow81",
// 		email: "Tessie_Padberg@gmail.com",
// 		phoneNumber: "+998 18 499 64 00",
// 		age: 36,
// 		address: "Jalontown",
// 		avatarURL:
// 			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1165.jpg",
// 	},
// 	{
// 		id: "1a5148b7-77e7-4001-a760-7ca03590da1b",
// 		username: "Maye66",
// 		email: "Domenic4@hotmail.com",
// 		phoneNumber: "+998 28 964 34 49",
// 		age: 66,
// 		address: "Gerdabury",
// 		avatarURL:
// 			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/306.jpg",
// 	},
// 	{
// 		id: "363a2b13-52ef-4bcf-8215-6bf11cfe9530",
// 		username: "Kyle75",
// 		email: "Jason_Hettinger@gmail.com",
// 		phoneNumber: "+998 04 361 91 08",
// 		age: 15,
// 		address: "Shemarberg",
// 		avatarURL:
// 			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg",
// 	},
// 	{
// 		id: "7d65a133-1ce0-4498-8843-84c947e1d0ba",
// 		username: "Sincere46",
// 		email: "Sharon57@yahoo.com",
// 		phoneNumber: "+998 06 301 02 09",
// 		age: 51,
// 		address: "Layton",
// 		avatarURL:
// 			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/809.jpg",
// 	},
// 	{
// 		id: "a381cea1-568e-41e9-b259-4af50efb5110",
// 		username: "Tracey_Prosacco",
// 		email: "Waldo_Klein@yahoo.com",
// 		phoneNumber: "+998 89 441 17 08",
// 		age: 42,
// 		address: "Port Sunnyberg",
// 		avatarURL:
// 			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1195.jpg",
// 	},
// 	{
// 		id: "c3ab3697-c0a4-4323-a9aa-82012c623a76",
// 		username: "Francisca.Greenfelder",
// 		email: "Laverne93@gmail.com",
// 		phoneNumber: "+998 32 441 09 69",
// 		age: 58,
// 		address: "New Moniquefort",
// 		avatarURL:
// 			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/909.jpg",
// 	},
// 	{
// 		id: "98c157b7-a14d-4773-9847-6f6b0466868f",
// 		username: "Gabrielle.Runolfsdottir",
// 		email: "Destany47@yahoo.com",
// 		phoneNumber: "+998 14 836 99 35",
// 		age: 0,
// 		address: "West Rozellaworth",
// 		avatarURL:
// 			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/96.jpg",
// 	},
// 	{
// 		id: "38ffaea4-3663-45ea-ab77-05db9bdf51fa",
// 		username: "Max28",
// 		email: "Edison61@hotmail.com",
// 		phoneNumber: "+998 86 487 30 69",
// 		age: 65,
// 		address: "Youngstown",
// 		avatarURL:
// 			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/428.jpg",
// 	},
// 	{
// 		id: "5b19e505-bf7d-4456-9c4d-0ddca0d91480",
// 		username: "Loyal_Goyette19",
// 		email: "Shany_Harvey@yahoo.com",
// 		phoneNumber: "+998 45 741 30 55",
// 		age: 54,
// 		address: "Cathrinebury",
// 		avatarURL:
// 			"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/739.jpg",
// 	},
// ];

// const generateUsers = (isNewGenerate = false) => {
// 	if (!isNewGenerate) return oldUsers;
// 	const users = [];

// 	for (let i = 0; i < 10; i++) {
// 		const user = {
// 			id: faker.string.uuid(),
// 			username: faker.internet.userName(),
// 			email: faker.internet.email(),
// 			phoneNumber: faker.phone.number("+998 ## ### ## ##"),
// 			age: faker.number.int(70),
// 			address: faker.location.city(),
// 			avatarURL: faker.internet.avatar(),
// 		};

// 		users.push(user);
// 	}

// 	return users;
// };

// module.exports = { generateUsers };
