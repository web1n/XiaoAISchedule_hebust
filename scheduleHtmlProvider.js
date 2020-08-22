function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {

	// 获取最内层嵌套
	let frmReport = document.getElementById("frmbody").contentWindow.document
		.getElementById('frmDesk').contentWindow.document
		.getElementById("frame_1").contentWindow.document
		.getElementById("frmReport").contentWindow.document;

	// 获取课表 table
	let tableElement = frmReport.getElementById("mytable");

	// 获取 html
	return tableElement.innerHTML;
}