import { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import PropTypes from 'prop-types';

am4core.useTheme(am4themes_animated);

export const ColumnLineChart = ({chartData, commonX, lineFirstChartY, lineSecoundChartY, columnFirstChartY}) => {

  
  useLayoutEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("ColumnLineChart", am4charts.XYChart);

    // Export
    chart.exporting.menu = new am4core.ExportMenu();

    let data = chartData

    /* Create axes */
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = commonX;
    categoryAxis.renderer.minGridDistance = 30;

    /* Create value axis */
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    /* Create series */
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());

    columnSeries.dataFields.valueY = columnFirstChartY;
    columnSeries.dataFields.categoryX = commonX;

    columnSeries.columns.template.tooltipText =
      "[#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]";
    // "[#fff font-size: 15px]{categoryX} 년 조성액 :\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]";
    columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
    columnSeries.columns.template.propertyFields.stroke = "stroke";
    columnSeries.fill = am4core.color("#B1D0E0");
    columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
    columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
    columnSeries.tooltip.label.textAlign = "middle";

    let lineSeries = chart.series.push(new am4charts.LineSeries());

    lineSeries.dataFields.valueY = lineFirstChartY;
    lineSeries.dataFields.categoryX = commonX;

    lineSeries.stroke = am4core.color("#6998AB");
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.strokeDasharray = "lineDash";
    lineSeries.tooltip.label.textAlign = "middle";

    let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#6998AB"); // tooltips grab fill from parent by default
    bullet.tooltipText =
      "[#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]";
    // "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]";
    let circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#fff");
    circle.strokeWidth = 3;


    let lineSeries2 = chart.series.push(new am4charts.LineSeries());
    // lineSeries.dataFields.valueY = columnFirstChartY;
    lineSeries2.dataFields.valueY = lineSecoundChartY;
    lineSeries2.dataFields.categoryX = commonX;

    lineSeries2.stroke = am4core.color("#1A374D");
    lineSeries2.strokeWidth = 3;
    lineSeries2.propertyFields.strokeDasharray = "lineDash";
    lineSeries2.tooltip.label.textAlign = "middle";

    let bullet2 = lineSeries2.bullets.push(new am4charts.Bullet());
    bullet2.fill = am4core.color("#1A374D"); // tooltips grab fill from parent by default
    bullet2.tooltipText =
      "[#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]";
    // "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]";
    let circle2 = bullet2.createChild(am4core.Circle);
    circle2.radius = 4;
    circle2.fill = am4core.color("#fff");
    circle2.strokeWidth = 3;

    

    columnSeries.name = "컬럼차트";
    lineSeries.name ="라인차트1";
    lineSeries2.name =  "라인차트2";

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";

    var topContainer = chart.chartContainer.createChild(am4core.Container);
    topContainer.layout = "absolute";
    topContainer.toBack();
    topContainer.paddingBottom = 15;
    topContainer.width = am4core.percent(100);
    var axisTitle = topContainer.createChild(am4core.Label);
    axisTitle.text =  "범례";
    axisTitle.fontWeight = 600;
    axisTitle.align = "right";
    axisTitle.paddingLeft = 20;

    // valueAxis.title.valign = "bottom";
    chart.numberFormatter.numberFormat = "#,##a";

    chart.numberFormatter.bigNumberPrefixes = [{ number: 1e9, suffix: "" }];

    // Add data
    chart.data = data;
  }, []);
  return (
    <div
        id={"ColumnLineChart"}
        style={{ width: "100%", height: "500px" }}
    />
  );
};


ColumnLineChart.propTypes = {
    
    commonX: PropTypes.string,
    lineFirstChartY: PropTypes.string,
    lineSecoundChartY: PropTypes.string,
    columnFirstChartY: PropTypes.string,
    chartData: PropTypes.array,
  };
  
  ColumnLineChart.defaultProps = {
    commonX: "commonX",
    lineFirstChartY: "lineFirstChartY",
    lineSecoundChartY: "lineSecoundChartY",
    columnFirstChartY: "columnFirstChartY",
    chartData:[
        {
          commonX: "x3",
          lineFirstChartY: 1630,
          columnFirstChartY: 171,
          lineSecoundChartY: 100
        },
        {
          commonX: "x4",
          lineFirstChartY: 3050,
          columnFirstChartY: 219,
          lineSecoundChartY: 138
        },
        {
          commonX: "x5",
          lineFirstChartY: 3050,
          columnFirstChartY: 917,
          lineSecoundChartY: 623
        },
        {
          commonX: "x6",
          lineFirstChartY: 3050,
          columnFirstChartY: 2011,
          lineSecoundChartY: 986
        },
        {
          commonX: "x7",
          lineFirstChartY: 3300,
          columnFirstChartY: 2298,
          lineSecoundChartY: 1140
        },
        {
          commonX: "x8",
          lineFirstChartY: 4515,
          columnFirstChartY: 3353,
          lineSecoundChartY: 1590
        },
        {
          commonX: "x9",
          lineFirstChartY: 5181,
          columnFirstChartY: 4076,
          lineSecoundChartY: 2253
        },
        {
          commonX: "x10",
          lineFirstChartY: 5771,
          columnFirstChartY: 4371,
          lineSecoundChartY: 2846
        },
        {
          commonX: "x11",
          lineFirstChartY: 8397,
          columnFirstChartY: 4628,
          lineSecoundChartY: 3414
        },
      ], 
  };
  