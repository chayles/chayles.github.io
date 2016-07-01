var continent = prompt ("Which continent have you travelled to the least?").toLowerCase();

switch (continent) {
	case 'Australia':
		var str = "All about Australia!";
		var result = str.link ("https://www.lonelyplanet.com/australia");
		console.log("We haven't been to Australia, but you can check this out:" str);
		break;
	case 'Antarctica':
		console.log("No surprise there! Maybe you should look around the site for something a little easier to get to.");
		break;
	default:
		var pickCity = prompt ("Which city would you most like to visit in" + " " + continent + "?").toLowerCase();
		if (pickCity === ("banff" || "seattle" || "calgary" || "san francisco" || "belize city" || "golden" || "portland" || "nassau" ||
			|| "kelowna" || "los angeles" || "bridgetown" || "montreal" || "anaheim" || "tikal" || "toronto" || "scottsdale" || "vancouver"
			|| "sedona" || "victoria" || "albuquerque" || "las vegas" || "park city" || "salt lake city" || "sun valley" || "big sky"
			|| "jackson hole" || "telluride" || "dallas" || "rapid city" || "cody" || "chicago" || "philadelphia" || "jersey city"	
			|| "new york city" || "new haven" || "baltimore" || "nashville" || "orlando" || "charlotte"	
			|| "maui" ||"lanai")) {
				console.log("Looks like we have that city! Scroll down to the first section of the page to check it out.");
		}
		if else (pickCity === ('quito' || 'galapagos' || 'buenos aires')){
				console.log("Looks like we have that city! Scroll down to the second section of the page to check it out.");
		}
		if else (pickCity ===('york' || 'rome' || 'paris' || 'palermo' || 'nice' || 'london' || 'istanbul'
								|| 'edinburgh' || 'birmingham' || 'bilbao' || 'barcelona')){
				console.log("Looks like we have that city! Scroll down to the third section of the page to check it out.");
		}
		if else (pickCity ===('maun' || 'cape town' || 'victoria falls')){
				console.log("Looks like we have that city! Scroll down to the fourth section of the page to check it out.");
		}
		if else (pickCity === ('bodrum' || 'cappadocia')) {
				console.log("Looks like we have that city! Scroll down to the fifth section of the page to check it out.");
		}
		else {console.log("Hmmm, we can't seem to find that. Maybe look in our footer to find a good link for more info!")};
};
