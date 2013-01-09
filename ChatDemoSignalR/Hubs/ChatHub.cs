using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR.Hubs;

namespace ChatDemoSignalR.Hubs
{
    public class ChatHub: Hub
    {
        public void EnviarMensagem(string nome, string mensagem)
        {
            Clients.All.publicarMensagem(nome, mensagem);
        }
    }
}