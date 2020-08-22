function scheduleHtmlParser(html) {
	let result = [];

	$("tbody tr").each(function() {
		$(this).children("td").filter(function() {
		     return $(this).attr("class") == "td";
		}).map(function(index) {
			return {
				day: index + 1,
				classHtmls: $(this).find("div")
			}
		}).filter(function(){
			return !(this.classHtmls.length == 1 && !$(this.classHtmls[0]).text().trim()); // 没课
		}).each(function() {
			let day = this.day;

			this.classHtmls.each(function() {
				let classProperty = $(this).html().split("<br>").map(function(item) {
					return $('<div/>').html(item).text().trim();
				});
				if (classProperty.length != 4) {
					return;
				}

				let classItem = {
					name: classProperty[0],
					teacher: classProperty[1],
					position: classProperty[3],

					day: day,
					
					sections: [],
					weeks: []
				};

				classProperty[2].split("[")[0].split(",").forEach(function(week1, i1) { // 5,7,9,13-16
					if (week1.indexOf("-") != -1) { // 13-16
						for (var week = Number(week1.split("-")[0]); week <= Number(week1.split("-")[1]); week++) {
							classItem.weeks.push(week);
						}
					} else {
						classItem.weeks.push(Number(week1));
					}
				})

				let sectionRange = classProperty[2].split("[")[1].replace("]", "");
				for (var section = Number(sectionRange.split("-")[0]); section <= Number(sectionRange.split("-")[1]); section++) {
					classItem.sections.push({
						section: section
					});
				}

				result.push(classItem)
			})
			
		})
	})

	return {courseInfos: result};
}