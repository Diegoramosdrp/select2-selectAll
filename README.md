# select2-selectAll
Script extension for select2

CREATED BY : Diego Ramos 
DATE : 10/12/2018
VERSION : 1.0


 * This code is open source
 * If found any bugs, contact the author by email : diegoramosdrp@gmail.com
 * This script is a extension for select2
 * This only will work if select2.js is declared in your header
 * The script don't will work if params are null or empty
 * The its main function is add buttons add all and clear all at select


Instance :

$(function () {
		var $paramsCon = {
					placeholder: "Select states",
					allowClear: true,
					containerCssClass: "con-dropdown",
					closeOnSelect: false
		};
    $("#selectAll").select2All($paramsCon);
});
