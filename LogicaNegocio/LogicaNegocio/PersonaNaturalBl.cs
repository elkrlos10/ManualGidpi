using Datos;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class PersonaNaturalBl
    {
        public string Registrar(PersonaNatural oPersona, Usuario oUsuario)
        {
            Model1 entity = new Model1();
            var mensaje = "";
           
            var usuario = (from i in entity.Usuario
                           where i.Usuario1 == oUsuario.Usuario1
                           select i).FirstOrDefault();

            var emailVn = (from i in entity.PersonaNatural
                           where i.Email == oPersona.Email
                           select i).FirstOrDefault();

            if (usuario == null)
            {
                if (emailVn == null)
                {
                    var Encriptar = SecurityEncode.SecurityEncode.Encriptar(oUsuario.Contrasena);
                    oUsuario.Contrasena = Encriptar;
                    entity.Usuario.Add(oUsuario);
                    entity.SaveChanges();

                    var usuarioR = (from i in entity.Usuario
                                    where i.Usuario1 == oUsuario.Usuario1
                                    select i).FirstOrDefault();

                    oPersona.IdUsuario = usuarioR.IdUsuario;
                    entity.PersonaNatural.Add(oPersona);
                    entity.SaveChanges();

                    mensaje = "Registro Exitoso.";
                }


              
            }
             if(usuario!=null)
            {
                mensaje = "El Usuario ya exite.";
            }
            else if (emailVn != null)
            {
                mensaje = "El correo ya esta en uso";
            }

            return mensaje;
        }

        public string RegistrarPersonaJuridica(PersonaJuridica oPersona, Usuario oUsuario)
        {
            Model1 entity = new Model1();
            var mensaje = "";
           
            var usuario = (from i in entity.Usuario
                           where i.Usuario1 == oUsuario.Usuario1 
                           select i).FirstOrDefault();

            var emailVj = (from i in entity.PersonaJuridica
                          where i.Email == oPersona.Email
                           select i).FirstOrDefault();


            if (usuario == null )
            {
                if (emailVj == null)
                {
                    var Encriptar = SecurityEncode.SecurityEncode.Encriptar(oUsuario.Contrasena);
                    oUsuario.Contrasena = Encriptar;
                    entity.Usuario.Add(oUsuario);
                    entity.SaveChanges();

                    var usuarioR = (from i in entity.Usuario
                                    where i.Usuario1 == oUsuario.Usuario1
                                    select i).FirstOrDefault();

                    oPersona.IdUsuario = usuarioR.IdUsuario;
                    entity.PersonaJuridica.Add(oPersona);
                    entity.SaveChanges();

                    mensaje = "Registro Exitoso.";
                }
                
            }
             if(usuario != null)
            {
                mensaje = "El Usuario ya exite.";
            }
            else if (emailVj != null)
            {
                mensaje = "El correo ya esta en uso";
            }

            return mensaje;
        }
    }
}
