function adduser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player_name_input").value;

    localstorage.setitem("player1_name " , player1_name);
    localstorage.setitem("player2_name" , player1_name);

    window.location = "game_page.html";
}
