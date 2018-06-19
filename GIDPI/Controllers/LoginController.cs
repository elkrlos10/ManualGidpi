﻿using Datos.DTO;
using Datos.Modelos;
using GIDPI.Parametros;
using LogicaNegocio.LogicaNegocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace GIDPI.Controllers
{
    public class LoginController: ApiController
    {

        [HttpPost]
        public IHttpActionResult RegistrarPersonaNatural(PersonaNaturalDTO oPersonaDTO) {

            try
            {
                PersonaNaturalBl personaNatural = new PersonaNaturalBl();
                PersonaNatural oPersona = new PersonaNatural();
                Usuario oUsuario = new Usuario();

                oPersona.Nombres = oPersonaDTO.Nombre;
                oPersona.Apellidos = oPersonaDTO.Apellidos;
                oPersona.Documento = oPersonaDTO.Documento;
                oPersona.Email = oPersonaDTO.Email;
                oPersona.Telefono = oPersonaDTO.Telefono;

                oUsuario.Usuario1 = oPersonaDTO.Usuario;
                oUsuario.Contrasena = oPersonaDTO.Contrasena;
                oUsuario.TipoUsuario = 1;
                var email = oPersonaDTO.Email;
                var mensaje =  personaNatural.Registrar(oPersona, oUsuario);

                return Ok(new { success = true, mensaje });
            }
            catch (Exception exc)
            {

                return Ok(new { success = false });
            }

            
        }


        [HttpPost]
        public IHttpActionResult RegistroPersonaJuridica(PersonaJuridicaDTO oPersonaDTO)
        {

            try
            {
                PersonaNaturalBl personaNatural = new PersonaNaturalBl();
                PersonaJuridica oPersona = new PersonaJuridica();
                Usuario oUsuario = new Usuario();

                oPersona.RazonSocial = oPersonaDTO.RazonSocial;
                oPersona.NIt = oPersonaDTO.Nit;
                oPersona.SectorEconomico = oPersonaDTO.SectorEconomico;
                oPersona.Responsable = oPersonaDTO.Responsable;
                oPersona.Email = oPersonaDTO.Email;
                oPersona.Telefono = oPersonaDTO.Telefono;

                oUsuario.Usuario1 = oPersonaDTO.Usuario;
                oUsuario.Contrasena = oPersonaDTO.Contrasena;
                oUsuario.TipoUsuario = 2;
                var email = oPersonaDTO.Email;

                var mensaje = personaNatural.RegistrarPersonaJuridica(oPersona, oUsuario);

                return Ok(new { success = true, mensaje });
            }
            catch (Exception exc)
            {

                return Ok(new { success = false });
            }


        }


        [HttpPost]
        public IHttpActionResult ConsultarUsuario(Usuario oUsuario)
        {
            try
            {

                UsuarioBl oUsuarioBl = new UsuarioBl();
                var usuario = oUsuarioBl.ConsutarUsuario(oUsuario);

                if (usuario==null)
                {
                    return Ok(new { success = false });
                }
                else
                {
                    return Ok(new { success = true, usuario });
                }

               
            }
            catch (Exception e)
            {

                return Ok(new { success = false });
            }
           
        }

        [HttpPost]
        public IHttpActionResult ConsutarEmail(ParametrosDTO oParametros)
        {
            try
            {

                UsuarioBl oUsuarioBl = new UsuarioBl();
                var Mensaje = oUsuarioBl.ConsutarEmail(oParametros.Parametro1);


                return Ok(new { success = true, Mensaje });
            }
            catch (Exception e)
            {

                return Ok(new { success = false });
            }

        }


        [HttpPost]
        public IHttpActionResult CambiarPassword(ParametrosDTO oParametrosDTO)
        {
            try
            {
                UsuarioBl oUsuarioBl = new UsuarioBl();
               var mensaje= oUsuarioBl.CambiarContrasena(oParametrosDTO.Parametro1, oParametrosDTO.Parametro2, int.Parse(oParametrosDTO.Parametro3));
                return Ok(new { success = true, mensaje });
            }
            catch (Exception exc)
            {

                return Ok(new { success = false, exc.Message });
            }



        }
    }
}