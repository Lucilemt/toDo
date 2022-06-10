'use strict'
$(document).ready(function(){
    $("#table").hide();
    $("#creerTodo").click(function () {
        $("#table").show();
    });

    let apiLink = "https://jsonplaceholder.typicode.com/todos/";

    $.getJSON(apiLink, function(result){
        for (var i = 0; i < result.length; i++)
        {

            $("#tbody").append(
                "<tr>"+
                "<th>"+result[i]["id"]+"</th>"+
                "<td>"+result[i]["title"]+"</td>"+
                "<td>"+result[i]["completed"]+"</td>"+
                "<td>"+"<button class='btn btn-outline-secondary supprimer' id='supprimer'>Supprimer</button>"+"</td>"+
                "</tr>");
        };

        $("table").find(".supprimer").on ("click", function (){
            if (confirm("Si vous appuyez sur ok, l'élément sera supprimé")) {
                $(this).parents('tr').remove();
            } 
        });

        $("#ajouter").click(function(){
            var id = result.length+1;
            console.log(id);
            var titre = $('#title').val();
            var completed = $('#completed').val();
            console.log($('#title').val());
            $("#tbody").append(
            "<tr>"+
            "<th>"+id+"</th>"+
            "<td>"+titre+"</td>"+
            "<td>"+completed+"</td>"+
            "<td>"+"<button class='btn btn-outline-secondary supprimer' id='supprimer'>Supprimer</button>"+"</td>"+"</tr>");  
        });
        
    });
    
    
    
    
    
});





