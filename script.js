const animals = ["HIPPOPOTAMUS" , "DOG" , "BUFFALO" , "CROCODILE"] ;
const food = ["SPAGHETTI" , "PIZZA" , "HAMBURGER" , "JALAPENO" ] ;
const categories = ["Animals" , "Food"] ;
function hideLifes() {
  document.getElementById("lifes").style.display = "none";
  document.getElementById("categoryChosen").style.display = "none";
}
function hideGame() {
  document.getElementById("game").style.display = "none";
}
function hideLetter(idButton) {
  document.getElementById(idButton).style.display = "none";
}
function hideCategory(idCategory){
  document.getElementById(idCategory).style.display = "none";
  document.getElementById("title").style.display = "none";
}
hideLifes() ;
function showLifes() {
  document.getElementById("lifes").style.display = "block";
  document.getElementById("categoryChosen").style.display = "block";
}
function startGame() {
    hideGame() ;
     $('#category').append(`
        <h5 id = "title">Chose category : </h5>
       `)
   for ( var i = 0 ; i < categories.length ; i++) {
     $('#category').append(`
       <button id = "` + i + `" onclick = "return choseWord(`+ i +`)"> `+ categories[i] +`</button>
       `)
   }
   return false ;
}
var underScore = [] ;
var word ;
var lifes = 5 ;
function choseWord(idWord) {
  if ( idWord == 0 ) {
    var random = Math.floor(Math.random() * animals.length) ;
    word = animals[random] ;
    hideCategory(idWord + 1 ) ;
  }
  if ( idWord == 1 ) {
    var random = Math.floor(Math.random() * food.length) ;
    word = food[random] ;
    hideCategory(idWord - 1 ) ;
  }
  var generateUnderScore = () => {
     for ( var i = 0 ; i < word.length ; i++) {
       underScore.push('_') ;
     }
     return underScore ;
  }
  document.getElementById('wordChosen').innerHTML = generateUnderScore() ;
  for ( var i = 65 ; i <= 90 ; i++ ) {
      $('#letters').append(`
        <button id = "`+ i +`" onclick = "return correct(`+ i +`)">`+String.fromCharCode(i)+`</button>
        `)
  }
  $('#numberLifes').append(`
    `+ lifes +`
    `)
    showLifes() ;
}
var i = 0 , numberOfCorrect = 0;
function correct(idButton) {
 hideLetter(idButton) ;
 var check = document.getElementById(idButton).innerText;
 var exist = 0  ;
 if( word.indexOf(check , i ) > -1 ) {
    var position = word.indexOf(check , i );
    ++i ;
    underScore.splice( position , 1 , check) ;
    document.getElementById('wordChosen').innerHTML = underScore  ;
    while ( word.indexOf(check, i) > -1 ) {
      position = word.indexOf(check , i );
      underScore.splice( position , 1 , check) ;
      document.getElementById('wordChosen').innerHTML = underScore ;
      ++i ;
    }
    i = 0 ;
    exist = 1 ;
 }
 if ( exist == 0 ) {
   gresit() ;
 }
 if ( underScore.indexOf("_") == -1) {
     finalGame() ;
 }
}
function gresit() {
  lifes = lifes - 1 ;
  if ( lifes == 0 ) {
    location.reload() ;
  }
  document.getElementById('numberLifes').innerText = lifes ;
}
function finalGame()  {
  document.getElementById('letters').style.display = "none" ;
  document.getElementById('category').style.display = "none" ;
  hideLifes() ;
  document.getElementById('finalGame').style.display = "block" ;

}
