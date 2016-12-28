// Drugie zadanie to głównie praca ze zdarzeniami. Tego typu problemy są właściwie codziennością w pracy front-endowców przy tworzeniu stron internetowych i prostych aplikacji.
//
// # Zadanie:
// Stwórz aplikację w JavaScripcie i HTML. Aplikacja po uruchomieniu ma wyświetlać formularz, który umożliwia przeliczanie jednostek długości. Użytkownik ma możliwość wpisania liczby w polu oraz wyboru dwóch jednostek – wejściowej i wyjściowej.
//
// ## Założenia i wymagania:
// - użytkownik może wpisywać liczbę w pole
// - w trakcie wpisywania aplikacja ma automatycznie na bieżąco przeliczać i wyświetlać wynik – bez konieczności np. klikania w przycisk
// - ponadto, użytkownik może dokonać wyboru dwóch jednostek: metr, kilometr, decymetr, centymetr, milimetr, cal, stopa, jard, mila
// - wpisanie w pole bzdur nie powinno „popsuć” aplikacji
// - oceniane będą: Prawidłowa odpowiedź, obsługa błędów, czytelność kodu
// - dopuszczalne jest używanie bibliotek pomocniczych, np. jQuery
//
// ## Tagi:
// - zdarzenia (events)
// - el.addEventListener(…)
// - jQuery.on(…)


const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');

let selected1 = "metr";
let selected2 = "metr";

const meter = {
  metr: 1,
  km: 0.001,
  dm: 10,
  cm: 100,
  mm: 1000,
  cal: 39.3709,
  feet: 3.2809,
  yard: 1.0936,
  mile: 0.0006
}


function recount(){
  let value1 = option1.value;
  if(isNaN(value1)){
    option2.value = "Wpisz liczbę";
  } else {
    option2.value = value1/meter[selected1] * meter[selected2];
  }

}

option1.addEventListener('input', recount);

select1.addEventListener('change', e => {
  selected1 = select1.value;
  recount();
});


select2.addEventListener('change', e => {
  selected2 = select2.value;
  recount();
});
