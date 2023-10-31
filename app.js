const player = {
    name: "jun",
    points: 10,
    handsome : true,
    fat : "little bit"
}

//불러오는 방식의 다양함
console.log(player.name);
console.log(player["name"]);

//수정하기
player.fat = false;
console.log(player.fat);

//추가하기
player.lastName = 'potato';
console.log(player.lastName);

//계산하기
console.log(player.points);
player.points = player.points + 15;
console.log(player.points);