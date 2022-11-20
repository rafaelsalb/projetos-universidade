function list_walls()
{
    let list = '';

    for (let i = 0; i < walls.length; i++) {
        list += "<div data-coords='[{";
        list += '"x1":"' + walls[i].a.x.toString() + '", "y1":"' + walls[i].a.y.toString() + '", "x2":"' + walls[i].b.x.toString() + '", "y2":"' + walls[i].b.y.toString() + '"';
        list += "}]' ";
        list += 'id="wall-' + i.toString() + '">';
        list += '<input type="button" value="Remove" onclick="remove_wall(' + i.toString() + ')">';
        list += i.toString() + ':';
        list += 'x1(<input id="wall-' + i.toString() + '-x1" "type="text" value="' + walls[i].a.x.toString() + '"> ';
        list += 'y1(<input id="wall-' + i.toString() + '-y1" type="text" value="' + walls[i].a.y.toString() + '"> ';
        list += 'x2(<input id="wall-' + i.toString() + '-x2" type="text" value="' + walls[i].b.x.toString() + '"> ';
        list += 'y2(<input id="wall-' + i.toString() + '-y2" type="text" value="' + walls[i].b.y.toString() + '"> ';
        list += 'Cor: ' + '<input id="wall-' + i.toString() + '-color" type="color" value="#FFFFFF"> ';
        list += 'Altura: ' + '<input id="wall-' + i.toString() + '-height" type="text" value="' + walls[i].height + '"> ';
        list += '<input type="button" value="Atualizar" onclick="update_wall(' + i.toString() + ')">';
        list += '</div><br>';
    }

    document.getElementById("list_of_walls").innerHTML = list;
}