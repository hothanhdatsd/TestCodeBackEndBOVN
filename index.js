const express = require("express");
const app = express();
const data = require("./data");

app.listen("3000", () => {
  const a = "Bác Cổ";
  const b = "Bến xe Yên Nghĩa";
  data.forEach((bus) => {
    const busStops = bus.busName.split(" - ");
    let startStop = busStops[0].replace(/\[.*?\]/g, "");
    startStop = startStop.replace("Tuyến  ", "");
    const endStop = busStops[1];

    if (a === startStop && b === endStop) {
      console.log(bus.busName);
      console.log("So diem dung chuyen di : ", bus.goFullPath.length);
      console.log("So diem dung chuyen ve : ", bus.reFullPath.length);
    }
  });
});
