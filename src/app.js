window.onload = function() {

    let who = ['Maduro', 'Trump', 'Padrino', 'El marine'];
    let action = ['disparó', 'salto', 'comió', 'se cagó'];
    let what = ['la misión', 'la talanquera', 'en fuerte tiuna'];
    let when = ['en plena mision', 'en las elecciones', 'de madrugada', 'cuando estaba jartando'];

    
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

   
    let finalExcuse = who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];

    document.querySelector("#excuse").innerHTML = finalExcuse;
};