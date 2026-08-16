const scheduleData = {
	title: "Weekly Schedule Fall 2026",

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
			"Tuesday":   { text: "",	type: "sched"	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"9:00am": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "Office",	type: "help" 	},
			"Wednesday": { text: "MTH 589",	type: "class" 	},
			"Thursday":  { text: "Office",	type: "help" 	},
			"Friday":    { text: "C",	type: "meeting" }	
		},
		"9:30am": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "Office",	type: "help" 	},
			"Wednesday": { text: "MTH 589",	type: "class" 	},
			"Thursday":  { text: "Office",	type: "help" 	},
			"Friday":    { text: "C",	type: "meeting" }
		},
		"10:00am": {
			"Monday":    { text: "MTH 102",	type: "teach" 	},
			"Tuesday":   { text: "MTH 102",	type: "teach" 	},
			"Wednesday": { text: "MTH 102",	type: "teach" 	},
			"Thursday":  { text: "MTH 102",	type: "teach" 	},
			"Friday":    { text: "C",	type: "meeting" }
		},
		"10:30am": {
			"Monday":    { text: "MTH 102",	type: "teach" 	},
			"Tuesday":   { text: "MTH 102",	type: "teach" 	},
			"Wednesday": { text: "MTH 102",	type: "teach" 	},
			"Thursday":  { text: "MTH 102",	type: "teach" 	},
			"Friday":    { text: "C",	type: "meeting" }	
		},
		"11:00am": {
			"Monday":    { text: "ND",	type: "help" 	},
			"Tuesday":   { text: "TB",	type: "help" 	},
			"Wednesday": { text: "",	type: "sched"	},
			"Thursday":  { text: "DS",	type: "help" 	},
			"Friday":    { text: "",	type: "sched"	}	
		},
		"11:30am": {
			"Monday":    { text: "ND",	type: "help" 	},
			"Tuesday":   { text: "TB",	type: "help" 	},
			"Wednesday": { text: "",	type: "sched"	},
			"Thursday":  { text: "DS",	type: "help" 	},
			"Friday":    { text: "",	type: "sched"	}	
		},
		"12:00pm": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "Lunch",	type: "nosched" },
			"Wednesday": { text: "LR",	type: "help" 	},
			"Thursday":  { text: "Lunch",	type: "nosched" },
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"12:30pm": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "STA 661",	type: "class" 	},
			"Wednesday": { text: "LR",	type: "help" 	},
			"Thursday":  { text: "STA 661",	type: "class" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"1:00pm": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "STA 661",	type: "class" 	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "STA 661",	type: "class" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"1:30pm": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "STA 661",	type: "class" 	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "STA 661",	type: "class" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"2:00pm": {
			"Monday":    { text: "MTH 670",	type: "class" 	},
			"Tuesday":   { text: "LJ",	type: "help" 	},
			"Wednesday": { text: "AG",	type: "help" 	},
			"Thursday":  { text: "MTH 670",	type: "class" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"2:30pm": {
			"Monday":    { text: "MTH 670",	type: "class" 	},
			"Tuesday":   { text: "LJ",	type: "help" 	},
			"Wednesday": { text: "AG",	type: "help" 	},
			"Thursday":  { text: "MTH 670",	type: "class" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"3:00pm": {
			"Monday":    { text: "Lab",	type: "priv_t" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "Lab",	type: "priv_t" 	},
			"Thursday":  { text: "MTH 670",	type: "class" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"3:30pm": {
			"Monday":    { text: "Lab",	type: "priv_t" 	},
			"Tuesday":   { text: "MTH 643",	type: "class" 	},
			"Wednesday": { text: "Lab",	type: "priv_t" 	},
			"Thursday":  { text: "MTH 643",	type: "class" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"4:00pm": {
			"Monday":    { text: "Lab",	type: "priv_t" 	},
			"Tuesday":   { text: "MTH 643",	type: "class" 	},
			"Wednesday": { text: "Lab",	type: "priv_t" 	},
			"Thursday":  { text: "MTH 643",	type: "class" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"4:30pm": {
			"Monday":    { text: "Lab",	type: "priv_t" 	},
			"Tuesday":   { text: "MTH 643",	type: "class" 	},
			"Wednesday": { text: "Lab",	type: "priv_t" 	},
			"Thursday":  { text: "MTH 643",	type: "class" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"5:00pm": {
			"Monday":    { text: "CA",	type: "help" 	},
			"Tuesday":   { text: "DB",	type: "help" 	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"5:30pm": {
			"Monday":    { text: "CA",	type: "help" 	},
			"Tuesday":   { text: "DB",	type: "help" 	},
			"Wednesday": { text: "",	type: "sched" 	},
			"Thursday":  { text: "",	type: "sched" 	},
			"Friday":    { text: "",	type: "sched" 	}	
		},
		"6:00pm": {
			"Monday":    { text: "",	type: "sched" 	},
			"Tuesday":   { text: "",	type: "sched" 	},
			"Wednesday": { text: "",	type: "sched" 	},
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
		
	],

	archived: [

	]
};
