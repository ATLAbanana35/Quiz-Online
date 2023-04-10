let STOP = false;
setInterval(() => {
  if (!STOP) {
    let xlm = new XMLHttpRequest();
    xlm.responseType = "json";
    xlm.open("GET", "../client/progress.json");
    xlm.send();
    xlm.onload = function (event) {
      let request = xlm.response;
      console.log(request);
      for (const key in request) {
        if (Object.hasOwnProperty.call(request, key)) {
          const element = request[key];
          let ifPseudoBefore = false;
          document.querySelectorAll("user").forEach((elements) => {
            if (elements.textContent == key) {
              ifPseudoBefore = true;
            }
          });
          if (!ifPseudoBefore) {
            document.querySelector("progress-barr").innerHTML += `
          <div id="myProgress">
          <user>${key}</user>
    <div id="myBar" class="s${key}"></div>
  </div>
          `;
            console.log("PSE");
          }
          let xlm2 = new XMLHttpRequest();
          xlm2.responseType = "json";
          xlm2.open("GET", "../client/qu.json");
          xlm2.send();
          xlm2.onload = function () {
            console.log(key);
            if (
              (100 / Object.keys(xlm2.response).length) * element + "%" !=
              document.querySelector(".s" + key).style.width
            ) {
              document.querySelector(".s" + key).style.width =
                (100 / Object.keys(xlm2.response).length) * element + "%";
            }

            console.log((100 / Object.keys(xlm2.response).length) * element);
            if ((100 / Object.keys(xlm2.response).length) * element == 100) {
              alert(key + " Has WON!");
              document.querySelector("progress-barr").textContent =
                key + " Has WON!";
              STOP = true;
            }
          };
        }
      }
    };
  }
}, 1000);
