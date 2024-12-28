// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'nancy',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'good morning,',
	greetingAfternoon: 'good afternoon,',
	greetingEvening: 'good evening,',
	greetingNight: 'go to sleep',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '85b8c87b4b7d20e0c1ea58fdec87cde2', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '43.741667',
	defaultLongitude: '-79.373333',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/pulls',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://app.fastmail.com',
		},
		{
			id: '3',
			name: 'Noteplan',
			icon: 'notebook-text',
			link: 'https://app.noteplan.co',
		},
		{
			id: '4',
			name: 'SDD',
			icon: 'train-track',
			link: 'https://static-data-dashboard.transitapp.com/',
		},
		{
			id: '5',
			name: 'Logs',
			icon: 'scroll-text',
			link: 'https://console.cloud.google.com/logs',
		},
		{
			id: '6',
			name: 'Kagi',
			icon: 'search',
			link: 'https://kagi.com',
		},
	],
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'navidrome',
					link: 'https://music.cantu.dev',
				},
				{
					name: 'bandcamp',
					link: 'https://bandcamp.com',
				},
				{
					name: 'apple music',
					link: 'https://music.apple.com',
				},
				{
					name: 'hearing things',
					link: 'https://www.hearingthings.co',
				},
			],
		},
		{
			icon: 'library-big',
			id: '2',
			links: [
				{
					name: '404 media',
					link: 'https://www.404media.co',
				},
				{
					name: 'hacker news',
					link: 'https://news.ycombinator.com/news',
				},
				{
					name: 'defector',
					link: 'https://defector.com',
				},
				{
					name: 'cbc',
					link: 'https://www.cbc.ca',
				},
			],
		},
	],
};
