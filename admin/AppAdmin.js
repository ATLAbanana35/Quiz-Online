let Q = 0;

document.querySelector(".addAsk").addEventListener("click", () => {
  Q++;
  document.querySelector(".remove").remove();

  document.querySelector("form").innerHTML += `
  <div class="s${Q}">
  <label for="q1">Question ${Q}</label>
  <input type="text" name="q${Q}XQ" id="q${Q}">
  <h5>Réponses : </h5>
  <input type="text" name="q${Q}R1_F_XR" id="q${Q}" placeholder="Wrong">
  <input type="text" name="q${Q}R2_F_XR" id="q${Q}" placeholder="Wrong">
  <br>
  <input type="text" name="q${Q}R3_T_XR" id="q${Q}" placeholder="True">
  <input type="text" name="q${Q}R4_F_XR" id="q${Q}" placeholder="Wrong">
  <br>
  <hr>
  <br>
  </div>
  <input type="submit" value="Valider" class="remove">
    `;
});
