async function scheduleHtmlProvider() {
	await loadTool('AIScheduleTools');

	try {
		let frmDesk = document.getElementById('frmDesk').contentWindow.document;
		let frame_1 = frmDesk.getElementById("frame_1").contentWindow.document;
		let frmReport = frame_1.getElementById("frmReport").contentWindow.document;
		let tableElement = frmReport.getElementById("mytable");

		return tableElement.innerHTML;
	}
	catch(e) {
		await AIScheduleAlert("请点击主控-教学安排，然后点击导入课表");
		return 'do not continue';
	}

}
