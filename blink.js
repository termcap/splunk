require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/tableview',
    'splunkjs/mvc/simplexml/ready!'
], function (_, $, mvc, TableView) {


        console.log("Inside the JavaScript");
    var CustomRangeRenderer = TableView.BaseCellRenderer.extend({
        canRender: function (cell) {
            return _(['Sbjct']).contains(cell.field);
        },
        render: function ($td, cell) {
            var label = cell.value.split("|")[0];
            var val = cell.value.split("|")[1];

                        console.log("Inside the render");

            if (val == "Effective") {
                                console.log("Current Vals: " + val);
                $td.addClass("range-cell").addClass("css_for_effective");
            }
            else if (val.match(/After/)) {
                                console.log("Current Vals: " + val);
                $td.addClass("range-cell").addClass("css_for_after")
            }
            else if (val.match(/Term/)) {
                                console.log("Current Vals: " + val);
                $td.addClass("range-cell").addClass("css_for_term")
            }
            else if (val.match(/Rep/)) {
                                console.log("Current Vals: " + val);
                $td.addClass("range-cell").addClass("css_for_rep")
            }
            else if (val == "S Tday") {
                                console.log("Current Vals: " + val);
                $td.addClass("range-cell").addClass("css_for_s_tday")
            }
            else if (val == "E Tday") {
                                console.log("Current Vals: " + val);
                $td.addClass("range-cell").addClass("css_for_e_tday")
            }
            else if (val == "Can Tday") {
                                console.log("Current Vals: " + val);
                $td.addClass("range-cell").addClass("css_for_can_tdy")
            }
            else if (val == "Can") {
                                console.log("Current Vals: " + val);
                $td.addClass("range-cell").addClass("css_for_can")
            } else {
                                console.log("Current Vals Default: " + val);
                $td.addClass("range-cell").addClass("css_for_grey")
            }
            $td.text(label).addClass("string");
        }
    });

    var sh = mvc.Components.get("oitable");
    if (typeof (sh) != "undefined") {
        sh.getVisualization(function (tableView) {
            // Add custom cell renderer and force re-render
            tableView.table.addCellRenderer(new CustomRangeRenderer());
            tableView.table.render();
        });
    }
});
