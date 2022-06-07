const mockMovieData = [
	{
		id: 0,
		title: 'La La Land',
		tagline: "Here's to the fools who dream.",
		vote_average: 7.9,
		vote_count: 6782,
		release_date: '2016-12-29',
		poster_path: 'https://marudzenie.pl/wp-content/uploads/2017/02/La-La-Land-recenzja.jpg',
		overview:
			'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
		budget: 30000000,
		revenue: 445435700,
		runtime: 128,
		genres: [ 'Comedy', 'Drama', 'Romance' ]
	},
	{
		id: 1,
		title: 'Bohemian Rhapsody',
		tagline: 'We are the champions',
		vote_average: 7.9,
		vote_count: 4782,
		release_date: '2003-04-05',
		poster_path:
			'https://s3-alpha-sig.figma.com/img/aa4f/8cf6/f7fefb9582bc23c7847baf1f5f863fb0?Expires=1655078400&Signature=CM21FPvlAh~cn3prZTOBeuJUaVyq-g5cmktp5NfV7y4ZipoYETr0ZiRQwJsxIWOl0wxd48aWqDk-VnDlVRdEJgoBR~DBseo8nDQw4ffeVHPVW9ZnO5nDzbEImyHhXCNsa983L6ofdKYTkcZXdVScly9OQnnMxUqvI2ftIJS0s~VZb3b28olCSHEOc0qFRgbK3ZdeBE9OQW1j-xe6fmfBoOxAHrrsrPBA7x9Wlt8GyXzftjNR9l88fQlHciA1q6gmcPFMVnrsluJsX~aNo6D4B2I39DarXATRIBia6IMtczSgbtoafhJkYzckcqIMpoDFaAhsx3rqiUhNj4FDmZ2ylg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		overview: `Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.—Twentieth Century Fox
        `,
		budget: 66000000,
		revenue: 445863700,
		runtime: 134,
		genres: [ 'Drama', 'Biography', 'Music' ]
	},
	{
		id: 2,
		title: 'Pulp Fiction',
		tagline:
			"Girls like me don't make invitations like this to just anyone! You won't know the facts until you've seen the fiction.",
		vote_average: 8.9,
		vote_count: 7682,
		release_date: '1994-05-05',
		poster_path:
			'https://s3-alpha-sig.figma.com/img/89fa/22b0/9af0f226591250d0c0dc45e952d8c0a6?Expires=1655078400&Signature=OJ4occZr7QNbGp2h9yACekG7MUyptX9bN8r12QzLdFOtc~~kbSU-Lp2gPxpcHa9piqzIpjlOsUOBZNxXXbvdXJeVeTqBjtsvO8gujLmsh8B4AN2sp5gDOl0Zb8wtoKURg9EKMS3mnRojchhpmzt0aSG9Orijsp2LG43c7mqxS1urCKe5YqsB22HiUE1WLiAoHYvgeSF-bhc5kKxpAdIiuBPCzptOoUQJ5z6RmUUdnDDoKsidV0spL4PbS0B2dpQkRACGOhLznw2kTreqEAc1TG1zfPG8ZYdnslW9tUuZnifNJ2upYeWMa59a85NvjAhdAna03BqTFxaCRiniQGPvsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		overview: `Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra`,
		budget: 99900000,
		revenue: 995435700,
		runtime: 154,
		genres: [ 'Action & Adventure' ]
	},
	{
		id: 3,
		title: 'Kill Bill: Vol 2',
		tagline: 'Revenge is a dish best served cold. Kill is love.',
		vote_average: 8.0,
		vote_count: 5682,
		release_date: '1994-12-07',
		poster_path:
			'https://s3-alpha-sig.figma.com/img/d1aa/af35/28ac5bd1a8440253c319d472993bdd34?Expires=1655078400&Signature=gGby94i-BkFTGvNe7GcIUCNlyXT4p3G~kIhzUBAVHddYBFzlrNudmAL0tv9JqOuC72ptKW~~Gm7j~4wkAvRMIlPllCfx-SkVRHV48WWX9O1fxPULVcoOz5M1jtUcZBD4Kn~7btkI7pWb8yvhMYekw8OXmKnVAd2foMvhW8l~JSg2ls1KXdu~w3ZIoLFkVySr9aH1hT~k8g4MYhHb1BB5wABfdNHTxSb8rIZCQ2ACMpsHLDf8UnarrfEynrxoQv3gnIhPnr8mFX9FjsMZmKBMk6JZoMIXyuAM5SRf7Y-nlvN1IH4V5keNqYj3H7vcvPCS4zZAusmtcHine2R-Zm7IJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		overview: `The murderous Bride is back and she is still continuing her vengeance quest against her ex-boss, Bill, and taking aim at Bill's younger brother Budd and Elle Driver, the only survivors from the squad of assassins who betrayed her four years earlier. It's all leading up to the ultimate confrontation with Bill, the Bride's former master and the man who ordered her execution!—Anthony Pereyra {hypersonic91@yahoo.com}`,
		budget: 54900990,
		revenue: 445435700,
		runtime: 137,
		genres: [ 'Oscar winning Movie' ]
	},
	{
		id: 4,
		title: 'Inception',
		tagline: 'Your mind is the scene of the crime',
		vote_average: 7.9,
		vote_count: 7856,
		release_date: '2003-02-02',
		poster_path:
			'https://s3-alpha-sig.figma.com/img/d701/811a/217633f55a6713086b98c86f110c5d75?Expires=1655078400&Signature=ViErLIz7dF1CIkcUbP9-igV2G8hyZb52Atf6sz3PcwSo97BhmD6JA5VUgkiGTsPUFTJUhSor1sIhb6Vu6MIwU45WbkJ~7m2aOYfm~DzKPs4n-PATpOcjjOK91GtjTS5qpNOqtxD3XnKlRiI42iNrmWZYhRxU9s~zzxQddQasOo1b2uxJ64-jsVRcGrtpmj00OwCsrKSXpTejL-d9SPhLbi0dgw4eFS6--bK6QYF1DvyA9C-8DEeP3SUixlvMnC-dcl5xEDDO4H~knOQ7mVG-qd-fXFr30r20b6GkU0cbRYqVvdklOkKHY5202RxuuDp~qXFROwXm7AYBFSWdKcRdTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		overview: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.`,
		budget: 154600990,
		revenue: 11445435700,
		runtime: 134,
		genres: [ 'Action & Adventure' ]
	},
	{
		id: 5,
		title: 'Avengers: War of Infinity',
		tagline: 'An entire universe. Once and for all. Destiny arrives.',
		vote_average: 8.9,
		vote_count: 8956,
		release_date: '2004-12-08',
		poster_path: 'https://fwcdn.pl/fpo/37/58/693758/7839647.3.jpg',
		overview: `A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.`,
		budget: 154600990,
		revenue: 11445435700,
		runtime: 134,
		genres: [ 'Action & Adventure' ]
	}
];

export default mockMovieData;
