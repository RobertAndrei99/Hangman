document.body.style.background = "url('background.jpg') " ;
const animale = ["BRONTOZAUR" , "CAINE" , "RAC" , "PIROPOPIRCANITA"] ;
const mancare = ["BRANZOAICE" , "CALTABOS" , "COLIVA" , "COZONAC"] ;
const categorii = ["Animale" , "Mancare"] ;
function ascundeVieti() {
  document.getElementById("Vieti").style.display = "none";
  document.getElementById("categorieAleasa").style.display = "none";
}
function ascundeJoc() {
  document.getElementById("joc").style.display = "none";
}
function ascundeLitera(idButon) {
  document.getElementById(idButon).style.display = "none";
}
function ascundeCategorie(idCategorie){
  document.getElementById(idCategorie).style.display = "none";
  document.getElementById("titlu").style.display = "none";
}
ascundeVieti() ;
function arataVieti() {
  document.getElementById("Vieti").style.display = "block";
  document.getElementById("categorieAleasa").style.display = "block";
}
function incepeJoc() {
    ascundeJoc() ;
     $('#categorie').append(`
        <h5 id = "titlu">Alege categoria : </h5>
       `)
   for ( var i = 0 ; i < categorii.length ; i++) {
     $('#categorie').append(`
       <button id = "` + i + `" onclick = "return alegeCuv(`+ i +`)"> `+ categorii[i] +`</button>
       `)
   }
   return false ;
}
var underScore = [] ;
var cuvant ;
var vieti = 5 ;
function alegeCuv(idCuv) {
  if ( idCuv == 0 ) {
    var random = Math.floor(Math.random() * animale.length) ;
    cuvant = animale[random] ;
    ascundeCategorie(idCuv + 1 ) ;
  }
  if ( idCuv == 1 ) {
    var random = Math.floor(Math.random() * mancare.length) ;
    cuvant = mancare[random] ;
    ascundeCategorie(idCuv - 1 ) ;
  }
  var generezUnderScore = () => {
     for ( var i = 0 ; i < cuvant.length ; i++) {
       underScore.push('_') ;
     }
     return underScore ;
  }
  document.getElementById('cuvantAles').innerHTML = generezUnderScore() ;
  for ( var i = 65 ; i <= 90 ; i++ ) {
      $('#litere').append(`
        <button id = "`+ i +`" onclick = "return corect(`+ i +`)">`+String.fromCharCode(i)+`</button>
        `)
  }
  $('#nrVieti').append(`
    `+ vieti +`
    `)
    arataVieti() ;
}
var i = 0 , numarCorecte = 0;
function corect(idButon) {
 ascundeLitera(idButon) ;
 var verific = document.getElementById(idButon).innerText;
 var exista = 0  ;
 if( cuvant.indexOf(verific , i ) > -1 ) {
    var pozitie = cuvant.indexOf(verific , i );
    ++i ;
    underScore.splice( pozitie , 1 , verific) ;
    document.getElementById('cuvantAles').innerHTML = underScore  ;
    while ( cuvant.indexOf(verific, i) > -1 ) {
      pozitie = cuvant.indexOf(verific , i );
      underScore.splice( pozitie , 1 , verific) ;
      document.getElementById('cuvantAles').innerHTML = underScore ;
      ++i ;
    }
    i = 0 ;
    exista = 1 ;
 }
 if ( exista == 0 ) {
   gresit() ;
 }
 if ( underScore.indexOf("_") == -1) {
     finalJoc() ;
 }
}
function gresit() {
  vieti = vieti - 1 ;
  if ( vieti == 0 ) {
    location.reload() ;
  }
  document.getElementById('nrVieti').innerText = vieti ;
}
function finalJoc()  {
  document.getElementById('litere').style.display = "none" ;
  document.getElementById('categorie').style.display = "none" ;
  ascundeVieti() ;
  document.getElementById('finalJoc').style.display = "block" ;

}
