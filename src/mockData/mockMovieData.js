const mockMovieData = [
	{
		id: 0,
		title: 'Pulp Fiction',
		posterLink:
			'https://s3-alpha-sig.figma.com/img/89fa/22b0/9af0f226591250d0c0dc45e952d8c0a6?Expires=1655078400&Signature=OJ4occZr7QNbGp2h9yACekG7MUyptX9bN8r12QzLdFOtc~~kbSU-Lp2gPxpcHa9piqzIpjlOsUOBZNxXXbvdXJeVeTqBjtsvO8gujLmsh8B4AN2sp5gDOl0Zb8wtoKURg9EKMS3mnRojchhpmzt0aSG9Orijsp2LG43c7mqxS1urCKe5YqsB22HiUE1WLiAoHYvgeSF-bhc5kKxpAdIiuBPCzptOoUQJ5z6RmUUdnDDoKsidV0spL4PbS0B2dpQkRACGOhLznw2kTreqEAc1TG1zfPG8ZYdnslW9tUuZnifNJ2upYeWMa59a85NvjAhdAna03BqTFxaCRiniQGPvsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		releaseYear: 1994,
		genre: 'Action & Adventure',
		duration: '2h34min',
		rating: 8.9,
		description: `Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra`
	},
	{
		id: 1,
		title: 'Bohemian Rhapsody',
		posterLink:
			'https://s3-alpha-sig.figma.com/img/aa4f/8cf6/f7fefb9582bc23c7847baf1f5f863fb0?Expires=1655078400&Signature=CM21FPvlAh~cn3prZTOBeuJUaVyq-g5cmktp5NfV7y4ZipoYETr0ZiRQwJsxIWOl0wxd48aWqDk-VnDlVRdEJgoBR~DBseo8nDQw4ffeVHPVW9ZnO5nDzbEImyHhXCNsa983L6ofdKYTkcZXdVScly9OQnnMxUqvI2ftIJS0s~VZb3b28olCSHEOc0qFRgbK3ZdeBE9OQW1j-xe6fmfBoOxAHrrsrPBA7x9Wlt8GyXzftjNR9l88fQlHciA1q6gmcPFMVnrsluJsX~aNo6D4B2I39DarXATRIBia6IMtczSgbtoafhJkYzckcqIMpoDFaAhsx3rqiUhNj4FDmZ2ylg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		releaseYear: 2003,
		genre: 'Drama, Biography, Music',
		duration: '2h14min',
		rating: 7.9,
		description: `Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.—Twentieth Century Fox
        `
	},
	{
		id: 2,
		title: 'Kill Bill: Vol 2',
		posterLink:
			'https://s3-alpha-sig.figma.com/img/d1aa/af35/28ac5bd1a8440253c319d472993bdd34?Expires=1655078400&Signature=gGby94i-BkFTGvNe7GcIUCNlyXT4p3G~kIhzUBAVHddYBFzlrNudmAL0tv9JqOuC72ptKW~~Gm7j~4wkAvRMIlPllCfx-SkVRHV48WWX9O1fxPULVcoOz5M1jtUcZBD4Kn~7btkI7pWb8yvhMYekw8OXmKnVAd2foMvhW8l~JSg2ls1KXdu~w3ZIoLFkVySr9aH1hT~k8g4MYhHb1BB5wABfdNHTxSb8rIZCQ2ACMpsHLDf8UnarrfEynrxoQv3gnIhPnr8mFX9FjsMZmKBMk6JZoMIXyuAM5SRf7Y-nlvN1IH4V5keNqYj3H7vcvPCS4zZAusmtcHine2R-Zm7IJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		releaseYear: 1994,
		genre: 'Oscar winning Movie',
		duration: '2h17min',
		rating: 8.0,
		description: `The murderous Bride is back and she is still continuing her vengeance quest against her ex-boss, Bill, and taking aim at Bill's younger brother Budd and Elle Driver, the only survivors from the squad of assassins who betrayed her four years earlier. It's all leading up to the ultimate confrontation with Bill, the Bride's former master and the man who ordered her execution!—Anthony Pereyra {hypersonic91@yahoo.com}`
	},
	{
		id: 3,
		title: 'Avengers: War of Infinity',
		posterLink: 'https://fwcdn.pl/fpo/37/58/693758/7839647.3.jpg',
		releaseYear: 2004,
		genre: 'Action & Adventure',
		duration: '2h34min',
		rating: 8.9,
		description: ``
	},
	{
		id: 4,
		title: 'Inception',
		posterLink:
			'https://s3-alpha-sig.figma.com/img/d701/811a/217633f55a6713086b98c86f110c5d75?Expires=1655078400&Signature=ViErLIz7dF1CIkcUbP9-igV2G8hyZb52Atf6sz3PcwSo97BhmD6JA5VUgkiGTsPUFTJUhSor1sIhb6Vu6MIwU45WbkJ~7m2aOYfm~DzKPs4n-PATpOcjjOK91GtjTS5qpNOqtxD3XnKlRiI42iNrmWZYhRxU9s~zzxQddQasOo1b2uxJ64-jsVRcGrtpmj00OwCsrKSXpTejL-d9SPhLbi0dgw4eFS6--bK6QYF1DvyA9C-8DEeP3SUixlvMnC-dcl5xEDDO4H~knOQ7mVG-qd-fXFr30r20b6GkU0cbRYqVvdklOkKHY5202RxuuDp~qXFROwXm7AYBFSWdKcRdTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		releaseYear: 2003,
		genre: 'Action & Adventure',
		duration: '2h14min',
		rating: 7.9,
		description: ''
	},
	{
		id: 5,
		title: 'Reservoir dogs',
		posterLink: 'https://i0.wp.com/moviemovesme.com/wp-content/uploads/2022/02/12760-reservoir-dogs.jpg?ssl=1',
		releaseYear: 1994,
		genre: 'Oscar winning Movie',
		duration: '2h17min',
		rating: 8.0,
		description: ``
	}
];

export default mockMovieData;
