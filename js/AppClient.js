let ServeurQuestions;
let index = 0;
let true2 = false;

if (document.querySelector("username").textContent !== "NOT CONNECTED!") {
  function GetJson(URL) {
    let url2;
    if (URL == "def") {
      url2 = "client/qu.json";
    } else {
      url2 = URL;
    }
    const XLM = new XMLHttpRequest();
    XLM.open("GET", url2);
    XLM.responseType = "json";
    XLM.send();
    XLM.onload = function () {
      ServeurQuestions = XLM.response;
      console.log(ServeurQuestions);
      return XLM.response;
    };
  }

  function NewQuestion() {
    this.Question = "[ERROR TO LOAD]";
    this.Responses = {};
    let self = this;
    this.Setup = function () {
      let Data_Question = 1;
      document.querySelector("main").innerHTML = `
    <question>
    <question-header> <h1>${self.Question}</h1></question-header>
    <question-main>

    </question-main>
  </question>
    `;
      const keys = Object.keys(self.Responses);

      // Mélanger le tableau de clés
      keys.sort(() => Math.random() - 0.5);

      // Créer un nouvel objet en parcourant le tableau de clés mélangé
      const newObj = {};
      for (let key of keys) {
        newObj[key] = self.Responses[key];
      }

      // Le nouvel objet mélangé
      self.Responses = newObj;
      for (const key in self.Responses) {
        if (Object.hasOwnProperty.call(self.Responses, key)) {
          const element = self.Responses[key];
          let Color = "rgb(255, 67, 67)";
          if (Data_Question == 1) {
            Color = "rgb(255, 67, 67)";
          } else if (Data_Question == 2) {
            Color = "rgb(67, 255, 123)";
          } else if (Data_Question == 3) {
            Color = "rgb(80, 67, 255)";
          } else if (Data_Question == 4) {
            Color = "rgb(242, 67, 255)";
          }
          document.querySelector("question-main").innerHTML += `
        <choice
        style="background: ${Color}"
        data-number="${Data_Question}"
        data-if-true="${element}"
        ><animation-choice></animation-choice>${key}</choice
      >
        `;
          Data_Question++;
        }
      }
    };
    this.SetAddEventListener = function () {
      document.querySelectorAll("choice").forEach((elements) => {
        elements.addEventListener("click", () => {
          console.log(elements.dataset.ifTrue);
          if (elements.dataset.ifTrue == "T") {
            index++;
            document.querySelector("h1").textContent = "Bravo!";
            document.querySelectorAll("choice").forEach((elements2) => {
              elements2.style.background = "rgb(25, 31, 32)";
            });
            elements.style.background = "green";
            document.body.innerHTML += `
          <style>
          animation-choice {
            display: inline-block;
            width: 40px;
            height: 40px;
            border: 2px solid white;
            border-radius: 50%;
            animation-name: scale-up;
            animation-duration: 2s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
          }
          animation-choice::after {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            content: "✔️";
          }
          
          @keyframes scale-up {
            0% {
              transform: scale(1);
              opacity: 0;
            }
            50% {
              transform: scale(1.5);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
          </style>
          `;
            setTimeout(() => {
              true2 = true;
            }, 2000);
          } else {
            document.querySelector("h1").textContent = "Non, Faux!";
            alert("FAUX!");
            document.querySelectorAll("choice").forEach((elements2) => {
              elements2.style.background = "rgb(25, 31, 32)";
            });
            elements.style.background = "red";
            setInterval(() => {
              location.reload();
            }, 1000);
          }
        });
      });
    };
  }
  GetJson("def");

  setTimeout(() => {
    console.log(ServeurQuestions);
    if (ServeurQuestions == undefined) {
      alert(
        "ERROR: Le serveur n'a pas répondu avant le temp donné, 100 Millisecondes (REQUEST_TIMED_OUT) Vérifiez la rapidité de votre connexion"
      );
      location.reload();
    } else {
      let key2 = [];
      for (const key in ServeurQuestions) {
        //   if (true2) {
        //     if (Object.hasOwnProperty.call(ServeurQuestions, key)) {
        //       const element = ServeurQuestions[key];
        //       const Question = new NewQuestion();
        //       Question.Question = element.Question;
        //       for (const key2 in element) {
        //         if (Object.hasOwnProperty.call(element, key2)) {
        //           const element2 = element[key2];
        //           if (key2 != "Question") {
        //             Question.Responses[key2] = element2;
        //           }
        //         }
        //       }
        //       Question.Setup();
        //       Question.SetAddEventListener();
        //     }
        //   }
        key2.push(key);
      }
      console.log(key2);
      let key = key2[index];
      const element = ServeurQuestions[key];
      const Question = new NewQuestion();
      Question.Question = element.Question;
      for (const key2 in element) {
        if (Object.hasOwnProperty.call(element, key2)) {
          const element2 = element[key2];
          if (key2 != "Question") {
            Question.Responses[key2] = element2;
          }
        }
      }
      Question.Setup();
      Question.SetAddEventListener();
      true2 = false;
      setInterval(() => {
        console.log(index);
        if (index < key2.length) {
          if (true2) {
            let key = key2[index];
            const element = ServeurQuestions[key];
            const Question = new NewQuestion();
            Question.Question = element.Question;
            for (const key2 in element) {
              if (Object.hasOwnProperty.call(element, key2)) {
                const element2 = element[key2];
                if (key2 != "Question") {
                  Question.Responses[key2] = element2;
                }
              }
            }
            Question.Setup();
            Question.SetAddEventListener();

            true2 = false;
          }
        }
      }, 100);
      setInterval(() => {
        const XLMH = new XMLHttpRequest();
        if (index == 0) {
          XLMH.open(
            "GET",
            "./client/setQuestion.php?Question=Z&username=" +
              document.querySelector("username").textContent
          );
        } else {
          XLMH.open(
            "GET",
            "./client/setQuestion.php?Question=" +
              index +
              "&username=" +
              document.querySelector("username").textContent
          );
        }
        XLMH.responseType = "text";
        XLMH.send();
        if (index == "Z") {
          index = 1;
        }
      }, 1000);
    }
  }, 1000);
  function Win() {
    // WINNER
    let self = this;
    this.animation = function (WHO, EVENT) {
      document.querySelector("main").style.animation = "1s";
      document.querySelector("main").style.top = "-10000px";
      document.body.innerHTML = WHO + " Has WIN!";
      let players = EVENT;
      let playerArray = [];
      for (let player in players) {
        console.log(players[player]);
        playerArray.push([player, Number(players[player])]);
      }
      console.log(playerArray);
      playerArray.sort(function (a, b) {
        return Number(b)[1] - Number(a)[1];
      });
      for (let i = 0; i < playerArray.length; i++) {
        let player = playerArray[i];
        document.body.innerHTML +=
          "</br></br></br></br></br></br> <class> Classement #" +
          (i + 1) +
          ": " +
          player[0] +
          " - Score: " +
          player[1] +
          "</br> </class>";
      }

      console.log("WIN_2");
    };
    this.isWin = function (event) {
      let xlm2 = new XMLHttpRequest();
      xlm2.responseType = "json";
      xlm2.open("GET", "./client/progress.json");
      xlm2.send();
      xlm2.onload = function () {
        for (const key in event) {
          if (Object.hasOwnProperty.call(event, key)) {
            const element = event[key];
            console.log(
              Object.keys(ServeurQuestions).length + " /// " + element
            );
            if (Number(element) == Object.keys(ServeurQuestions).length) {
              self.animation(key, xlm2.response);
              console.log("WIN_1");
            }
          }
        }
      };
    };
  }
  setInterval(() => {
    let WIN = new Win();
    let xlm22 = new XMLHttpRequest();
    xlm22.responseType = "json";
    xlm22.open("GET", "./client/progress.json");
    xlm22.send();
    xlm22.onload = function () {
      WIN.isWin(xlm22.response);
    };
  }, 500);
} else {
  alert("Vous n'êtes pas connecté");
  window.location = "https://sing.loines.ch/";
}
