import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";


const Globe = () => {
  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = 9.5937;
    chart.deltaLongitude = -78.9629;
    chart.padding(20, 20, 20, 20);

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "India"; // Use {name} to display country names
    polygonTemplate.stroke = am4core.color("#000033");
    polygonTemplate.strokeWidth = 0.3;
    polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    polygonTemplate.url = "https://www.datadrum.com/main.php?package={id}";
    polygonTemplate.urlTarget = "_blank";

    // Conditional fill color for India
    polygonTemplate.adapter.add("fill", function (fill, target) {
      if (
        target.dataItem &&
        target.dataItem.dataContext &&
        target.dataItem.dataContext.name === "India"
      ) {
        // Define the colors of the Indian flag
        var saffron = am4core.color("#FF9933");
        var white = am4core.color("#FFFFFF");
        var green = am4core.color("#138808");

        // Create a gradient for the flag colors
        var gradient = new am4core.LinearGradient();
        gradient.addColor(saffron, 0.96);
        gradient.addColor(white, 0.16);
        gradient.addColor(green, 0.5);

        return gradient;
      }
      return fill;
    });

    let graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.stroke = am4core.color("#fff");
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
    graticuleSeries.fitExtent = false;

    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
    chart.backgroundSeries.mapPolygons.template.polygon.fill =
      am4core.color("#000");

    // Increase rotation speed
    chart.deltaLongitude = 20; // You can adjust this value to increase or decrease the rotation speed

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

    let animation;
    setTimeout(function () {
      animation = chart.animate(
        { property: "deltaLongitude", to: 100000 },
        20000000
      );
    }, 3000);

    chart.seriesContainer.events.on("down", function () {
      //  animation.stop();
    });

    // Cleanup when the component unmounts
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div style={{ backgroundColor: "gray", alignSelf: "center" }}>
      <div
        id="chartdiv"
        style={{
          width: "100vw",
          height: "90vh",
          backgroundColor: "#fff",
          position: "absolute",
          alignSelf: "center",
          top: 50,
          left: 0,
          zIndex: -1,
        }}
      ></div>
    </div>
  );
};

export default Globe;
