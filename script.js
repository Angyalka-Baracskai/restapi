document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("insert").addEventListener("click", function(){
        let backendurl = "https://retoolapi.dev/4vV0ug/data";
        fetch(backendurl)
        .then(response => response.json())
        .then(data => adatokKartyaba(data));
    });
    function adatokKartyaba(adatok){
        console.log(adatok);
        let card = ``;
        // adatsorok létrehozása az adatok alapján
        for(let i=0; i<adatok.length; i++){
            card += `
                <div class="card" style="width: 18rem;">
                   
                    <div class="card-body">
                      <h5 class= "card-title" id="knev">${adatok[i].knev}</h5>
                      <p class ="card-title" id="vnev">${adatok[i].vnev}</p>
                    </div>
                  </div>`
        }
        // táblázat befejezése
        card += `</div>`;
        //táblázat megjelenítése
        document.getElementById("card").innerHTML = card;
    }
});