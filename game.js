let game_map = document.getElementById('map')





///////////////////////////////////////////
//let question = prompt("Blue or Green?")
let player_tank = new Tank("green"/*`${question}`*/);
    player_tank.render();
let bot_tank = new Tank("blue");
    bot_tank.render();

function action(e){
    switch( e.keyCode ){
        case 38: player_tank.moveUp();    break;
        case 39: player_tank.moveRight(); break;
        case 40: player_tank.moveDown();  break;
        case 37: player_tank.moveLeft();  break;
    }
}
///////////////////////////////////////////



document.body.addEventListener( 'keydown', action);