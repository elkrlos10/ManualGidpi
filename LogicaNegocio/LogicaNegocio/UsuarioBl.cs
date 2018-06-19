﻿using Datos;
using Datos.Modelos;
using LogicaNegocio.Mail;
using LogicaNegocio.SecurityEncode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class UsuarioBl
    {
        public Usuario ConsutarUsuario(Usuario oUsuario)
        {

            Model1 entity = new Model1();
            var desencriptar = SecurityEncode.SecurityEncode.Encriptar(oUsuario.Contrasena);
            oUsuario.Contrasena = desencriptar;
            var usuario = (from i in entity.Usuario
                           where i.Usuario1 == oUsuario.Usuario1
                           && i.Contrasena == oUsuario.Contrasena
                           select i).FirstOrDefault();
            return usuario;
        }

        public string ConsutarEmail(string correo)
        {
            var mensaje = "";

            Model1 entity = new Model1();
            var emailN = (from i in entity.PersonaNatural
                         where i.Email == correo
                         select i).FirstOrDefault();


            if (emailN == null )
            {
                var emailJ = (from i in entity.PersonaJuridica
                              where i.Email == correo
                              select i).FirstOrDefault();
                if (emailJ != null)
                {
                    var Usuario = (from i in entity.Usuario
                                  where i.IdUsuario == emailJ.IdUsuario
                                  select i).FirstOrDefault();
                    var contrasena = SecurityEncode.SecurityEncode.Desencriptar(Usuario.Contrasena);

                    var Asunto = "Recuperación contraseña GIDPI";
                    //var Plantilla ="Gracias pa"+"<b>Usuario:</b> " + Usuario.Usuario1 + "<br/> <b>Contraseña:</b> " + Usuario.Contrasena;
                    var body = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\">";
                    body += "<HTML><HEAD><META http-equiv=Content-Type content=\"text/html; charset=iso-8859-1\">";
                    body += "</HEAD><BODY><DIV style='height:100%; width:43%;  margin-left:25%; '><div style='height:70px; width:100%;  '><center><H3 STYLE='color:rgb(89,181,72)'>GIDPI</H3></center></div><P>Hola</P><P>La solicitud para recuperar su contraseña ha sido aceptada</P>";
                    body += "<H3>INFORMACION DE CONTACTO</H3></br><H3><B>Usuario: </B></H3>" + Usuario.Usuario1 + " <H3><B> Contraseña: </B></H3> " + contrasena;
                    body += "<P>Puede dirigirse a la pagina principal de GIDPI para ingresar al aplicativo en el siguiente enlace.</P><A href='www.gidpi.com/#/Login'>www.gidpi.com/</A>";
                    body += "<P><I>Esto es un correo electronico generado automaticamente enviado por el aplicativo GIDPI. Su correo no se enviara a GIDPI si responde a este mensaje.</I></P></DIV></BODY></HTML>";
                    SendMail.SendMailMessage(Asunto, body, emailJ.Email);

                    mensaje = "Su contraseña fue enviada " + emailJ.Email;
                }
                else
                {
                    mensaje = "El correo ingresado no se encuentra registrado";
                }
                
            }
            else
            {
                var Usuario = (from i in entity.Usuario
                               where i.IdUsuario == emailN.IdUsuario
                               select i).FirstOrDefault();
                var contrasena = SecurityEncode.SecurityEncode.Desencriptar(Usuario.Contrasena);
                var Asunto = "Recuperación contraseña GIDPI";

                //var Plantilla = "<div><img src='/GIDPIManual/GIDPI/images/Adriana.png' /> </div>" +
                //       " <div style='float:right; background:blue; height: 120%;'><br><b>Usuario:</b> " + Usuario.Usuario1 + "<br/> <b>Contraseña:</b> " + Usuario.Contrasena+"</div>";
                var body = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\">";
                body += "<HTML><HEAD><META http-equiv=Content-Type content=\"text/html; charset=iso-8859-1\">";
                body += "</HEAD><BODY><DIV style='height:100%; width:43%;  margin-left:25%; '><div style='height:70px; width:100%;  '><center><H3 STYLE='color:rgb(89,181,72)'>GIDPI</H3></center></div><P>Hola</P><P>La solicitud para recuperar su contraseña ha sido aceptada</P>";
                body += "<H3>INFORMACION DE CONTACTO</H3></br><H3><B>Usuario: </B></H3>" + Usuario.Usuario1 + " <H3><B> Contraseña: </B></H3> " + contrasena;
                body += "<P>Puede dirigirse a la pagina principal de GIDPI para ingresar al aplicativo en el siguiente enlace.</P><A href='www.gidpi.com/#/Login'>www.gidpi.com/</A>";
                body += "<P><I>Esto es un correo electronico generado automaticamente enviado por el aplicativo GIDPI. Su correo no se enviara a GIDPI si responde a este mensaje.</I></P></DIV></BODY></HTML>";

                SendMail.SendMailMessage(Asunto, body, emailN.Email);


                mensaje = "Su contraseña fue enviada al correo : " + emailN.Email;
            }

            return mensaje;

        }

        public string CambiarContrasena(string Password, string newPassword, int usuario)
        {
            Model1 entity = new Model1();
            var mensaje = "";
            var Encriptar = SecurityEncode.SecurityEncode.Encriptar(Password);
          
            var Datos = (from i in entity.Usuario
                         where i.Contrasena == Encriptar && i.IdUsuario == usuario
                         select i).FirstOrDefault();

            if (Datos != null)
            {
                Datos.Contrasena = SecurityEncode.SecurityEncode.Encriptar(newPassword);
                entity.SaveChanges();
                mensaje = "Cambio exitoso";
            }
            else
            {
                
                mensaje = "La contraseña actual no coincide";
            }

            return mensaje;
        }
    }
}
