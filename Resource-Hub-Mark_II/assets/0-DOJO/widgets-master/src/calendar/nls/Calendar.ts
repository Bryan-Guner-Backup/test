const locales = {
	zh: () => import('./zh-CN/Calendar'),
	'zh-TW': () => import('./zh-TW/Calendar'),
};

const messages = {
	chooseMonth: 'Choose Month',
	chooseYear: 'Choose Year',
	previousMonth: 'Previous Month',
	nextMonth: 'Next Month',
	previousYears: 'Earlier years',
	nextYears: 'Later years',
	sunShort: 'Sun',
	monShort: 'Mon',
	tueShort: 'Tue',
	wedShort: 'Wed',
	thuShort: 'Thu',
	friShort: 'Fri',
	satShort: 'Sat',
	sunday: 'Sunday',
	monday: 'Monday',
	tuesday: 'Tuesday',
	wednesday: 'Wednesday',
	thursday: 'Thursday',
	friday: 'Friday',
	saturday: 'Saturday',
	janShort: 'Jan',
	febShort: 'Feb',
	marShort: 'Mar',
	aprShort: 'Apr',
	mayShort: 'May',
	junShort: 'Jun',
	julShort: 'Jul',
	augShort: 'Aug',
	sepShort: 'Sep',
	octShort: 'Oct',
	novShort: 'Nov',
	decShort: 'Dec',
	january: 'January',
	february: 'February',
	march: 'March',
	april: 'April',
	may: 'May',
	june: 'June',
	july: 'July',
	august: 'August',
	september: 'September',
	october: 'October',
	november: 'November',
	december: 'December',
};

export default { locales, messages };
