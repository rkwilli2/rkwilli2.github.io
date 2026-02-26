const scheduleData = {
	title: "Weekly Schedule Spring 2026",

	days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],

	rows: {
		"8:00am": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"8:30am": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "AM",	type: "help"	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"9:00am": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "AM",	type: "help" 	},
			"Wednesday": { text: "LC",	type: "help" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"9:30am": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "STA 546", type: "class" 	},
			"Wednesday": { text: "LC",      type: "help"  	},
			"Thursday":  { text: "STA 546", type: "class" 	},
			"Friday":    { text: "",        type: "sched" 	}
		},
		"10:00am": {
			"Monday":    { text: "C",       type: "meeting"	},
			"Tuesday":   { text: "STA 546", type: "class"	},
			"Wednesday": { text: "AE",      type: "help"	},
			"Thursday":  { text: "STA 546", type: "class"	},
			"Friday":    { text: "AE",      type: "help"	}
		},
		"10:30am": {
			"Monday":    { text: "C",	type: "meeting"	},
			"Tuesday":   { text: "STA 546",	type: "class"	},
			"Wednesday": { text: "AE",	type: "help"	},
			"Thursday":  { text: "STA 546",	type: "class"	},
			"Friday":    { text: "AE",	type: "help"	}	
		},
		"11:00am": {
			"Monday":    { text: "C",	type: "meeting"	},
			"Tuesday":   { text: "",	type: "sched"	},
			"Wednesday": { text: "",	type: "sched"	},
			"Thursday":  { text: "MM",	type: "help"	},
			"Friday":    { text: "",	type: "sched"	}	
		},
		"11:30am": {
			"Monday":    { text: "C",	type: "meeting"	},
			"Tuesday":   { text: "",	type: "sched"	},
			"Wednesday": { text: "",	type: "sched"	},
			"Thursday":  { text: "MM",	type: "help"	},
			"Friday":    { text: "",	type: "sched"	}	
		},
		"12:00pm": {
			"Monday":    { text: "MTH 635",	type: "class" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "MTH 635",	type: "class" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "MTH 635",	type: "class" 	}	
		},
		"12:30pm": {
			"Monday":    { text: "MTH 635",	type: "class" 	},
			"Tuesday":   { text: "MTH 615",	type: "class" 	},
			"Wednesday": { text: "MTH 635",	type: "class" 	},
			"Thursday":  { text: "MTH 615",	type: "class" 	},
			"Friday":    { text: "MTH 635",	type: "class" 	}	
		},
		"1:00pm": {
			"Monday":    { text: "JH",	type: "help" 	},
			"Tuesday":   { text: "MTH 615",	type: "class" 	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "MTH 615",	type: "class" 	},
			"Friday":    { text: "JH",	type: "help" 	}	
		},
		"1:30pm": {
			"Monday":    { text: "JH",	type: "help" 	},
			"Tuesday":   { text: "MTH 615",	type: "class" 	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "MTH 615",	type: "class" 	},
			"Friday":    { text: "JH",	type: "help" 	}	
		},
		"2:00pm": {
			"Monday":    { text: "MM",	type: "help" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "MB",	type: "help" 	},
			"Friday":    { text: "DW/AD",	type: "help" 	}	
		},
		"2:30pm": {
			"Monday":    { text: "MM",	type: "help" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "S",	type: "meeting"	},
			"Thursday":  { text: "MB",	type: "help" 	},
			"Friday":    { text: "DW/AD",	type: "help" 	}	
		},
		"3:00pm": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "LC",	type: "help" 	},
			"Friday":    { text: "GS",	type: "help" 	}	
		},
		"3:30pm": {
			"Monday":    { text: "LM",	type: "help" 	},
			"Tuesday":   { text: "LM",	type: "help" 	},
			"Wednesday": { text: "LM",	type: "help" 	},
			"Thursday":  { text: "LC",	type: "help" 	},
			"Friday":    { text: "GS",	type: "help" 	}	
		},
		"4:00pm": {
			"Monday":    { text: "LM",	type: "help" 	},
			"Tuesday":   { text: "LM",	type: "help" 	},
			"Wednesday": { text: "LM",	type: "help" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"4:30pm": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "AM",	type: "help" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"5:00pm": {
			"Monday":    { text: "LJ",	type: "help" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "AM",	type: "help" 	},
			"Thursday":  { text: "LJ",	type: "help" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"5:30pm": {
			"Monday":    { text: "LJ",	type: "help" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "GS",	type: "help" 	},
			"Thursday":  { text: "LJ",	type: "help" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"6:00pm": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "GS",	type: "help" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"6:30pm": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"7:00pm": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		}
	},

	importantDates: [
		"(May 18-22 2026. Campinas, Brazil) Workshop on Dynamic Equations on Time Scales, Difference Equations, and Applications in Mathematical Biology, in honor of Martin Bohner",
		"(July 13-17 2026. Milan, Italy) 31st International Conference on Difference Equations and Applications"
	],

	archived: [

	]
};
