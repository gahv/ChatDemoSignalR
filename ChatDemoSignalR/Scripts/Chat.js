/// <reference path="jquery-1.7.1.min.js" />
/// <reference path="jquery.signalR-1.0.0-rc1.js" />

$(function () {
    var chat = $.connection.chatHub;

    chat.client.publicarMensagem = function (nome, mensagem) {
        var containerNome = $('<span/>').text(nome).html();
        var containerMensagem = $('<div/>').text(mensagem).html();

        $("#conversa").append(
            '<li><strong>'
                + containerNome +
                '</strong>: '
                + containerMensagem + '</li>');
    };
    
    $.connection.hub.start().done(function () {
        $("#enviar").click(function () {
            var nome = $("#nome").val();
            var mensagem = $("#mensagem").val();

            chat.server.enviarMensagem(nome, mensagem);

            $("#mensagem").val('');
        });
    });

});