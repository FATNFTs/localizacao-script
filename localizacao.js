document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById('mensagem_localizacao');

    if (!container) {
      console.log("Container de localização não encontrado.");
      return;
    }

    fetch('https://ipinfo.io/json?token=2a1a90e8f75445')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        var cidade = data.city;
        var estado = data.region;

        if(cidade && estado){
          var msg = document.createElement('p');
          msg.style.fontStyle = "italic";
          msg.innerText = "Our system has detected that this number frequently communicates with a person located near👇";

          var localDiv = document.createElement('div');
          localDiv.style.fontWeight = "bold";
          localDiv.style.color = "#00FF00";
          localDiv.style.marginTop = "5px";
          localDiv.innerText = cidade + " - " + estado;

          container.appendChild(msg);
          container.appendChild(localDiv);

        } else {
          container.innerText = "Unknown Location";
        }
      })
      .catch(error => {
        console.log("Erro ao buscar localização:", error);
        container.innerText = "Location not found";
      });
});
