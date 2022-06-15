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
			'https://s3-alpha-sig.figma.com/img/aa4f/8cf6/f7fefb9582bc23c7847baf1f5f863fb0?Expires=1656288000&Signature=XVYld4-2ls-1KDWqgZQauxVednlOoCrb~ESvE5l3pzlpX1zh7QPQoTCcV2SvUqelL2B5n7zPAoq-OR47QzcY8GZpekljTvELfWMeAlHtSAgZZ0jJVdUUf8CC2kM2xeOMmFO9ASAgy~VB6sNnpS51hYvM8S5WQ-FkJ6fVOk3XRgLsalttavS4YNJunc0pea0vQ1VfUjd~TEYUF~uPMGyG6aLRCzJqd3jI57ciMuAhuLqLde0HAilldz0oHsjJ5EPkgviZmT2jQxastmql0xdZUSAdweWdze5xiInbuSbv~p0rLwpCzuO41FZQ1TCjXHkMJZQkqlOgiSMAouPSZUuRYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
			'https://s3-alpha-sig.figma.com/img/89fa/22b0/9af0f226591250d0c0dc45e952d8c0a6?Expires=1656288000&Signature=B8QqXNvh3XszxO22ROuObEmYLAa5gySitjsZKndUmbtmf-ROihtUXNoDP3ijRJxCqPIUZYU8LRWWRH-Cxjn7HtjR-vah1A~7XtAd1KYjrn2gemH-rCk9uDAlxtOpFDTmqzw9Wu3nyCKiqDRdYf8lb70qox2Xi6jSNMkKBFoOCyq~PaZKUV~l5LvRCIby0cKlhSWe1SXB1UUOUYqSZa8esjTAIB3h7br49FVcEjPCGGhksMV~Lajoy7VrJwR9kzCyJFovcfBtbZKxlnB3Tbiku-T6HRwscSbCULN8Yx2~T6koh6Qrn6L75jePxiNDnPMnp3267jOuru6SsCyNqnTs1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
			'https://s3-alpha-sig.figma.com/img/d1aa/af35/28ac5bd1a8440253c319d472993bdd34?Expires=1656288000&Signature=Ygq5baNpTiAt1D2UMjKrsaY0GkB3pEFI4uovHSXiaUOa1mUC2yAUrSyem9tjNYS5nOpEc2~1c1odT78sGvUgoHF1IAclNQv9Z0GPD4q8Ah5LTkoOdFYSH1w4k0Hlw2xmgrNzUrVCG-s5FFidVcjA9MEIPRtPlmjre04-wijTE~FCxriHq7LU7zQycGJyEM8gYpUyvO7h9SQ28O9u0kEMOZj~Y0q5lv0a6oKZsIoq08sLdoW-iL7j9qJSQfgra0EuoCwhV0yOHAyREVp3HaTAvYvPuMPAXpwKrGcT2IuT~Gsb8gI2w88dX5-MTbU9Ho58vDy6TpRuDyxMLV8gJFd6Ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
			'https://s3-alpha-sig.figma.com/img/d701/811a/217633f55a6713086b98c86f110c5d75?Expires=1656288000&Signature=L3EYJVd0Hd5dnVo7yeIhx~XAEwsKlMxqo5KcKTeEYlB51~0c3m0QqAUESzPp~E00VLlsi~8BdIUpJMyF1Hnuc2WFdqycHI2ef5F6O7~drsDps7sRKf1Dm6OTM9aytYH8vlTDRzhz-jkfcMQulKcbR7m26copRrrc1k9pGb~5R~u6vnMdT2GrRCXR3Djhm0fKifXyTCgkKlyasVOsspxpRHUXua2YyoDX3f5bzqZOVBi4dvj07PfBRZiUqqj5jUy3jXDZLJPFxtyFc4DClmanSgJ3eK97JcslyUa~DSmRO2vle7Xf8rf9x8hz~wXlkhzmpFIje6wr2zg51QryQ9cAAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
