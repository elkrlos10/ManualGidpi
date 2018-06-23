using Datos.Modelos;
using GIDPI.Parametros;
using LogicaNegocio.LogicaNegocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace GIDPI.Controllers
{
    public class PerfilProyectoController : ApiController
    {
        [HttpPost]
        public async Task<Response> ConsultarProyecto(ParametrosDTO oParametros)
        {
            try
            {
                PerfilProyectoBL oPerfil = new PerfilProyectoBL();
                var Proyecto = await oPerfil.ConsultarProyecto(int.Parse(oParametros.Parametro1));

                return new Response
                {
                    success = true,
                    Result = Proyecto
                };
            }
            catch (Exception e)
            {
                return new Response
                {
                    success = false,
                    Message = e.Message
                };
            }
        }

        [HttpPost]
        public async Task<Response> GuardarPerfilProyecto(PerfilProyecto perfilProyecto)
        {
            try
            {
                PerfilProyectoBL oPerfil = new PerfilProyectoBL();
                var resp = await oPerfil.GuardarPerfilProyecto(perfilProyecto);

                return new Response
                {
                    success = true
                };
            }
            catch (Exception e)
            {

                return new Response
                {
                    success = false,
                    Message = e.Message
                };
            }
        }

        [HttpPost]
        public async Task<Response> ConsultarPerfilTerminado(ParametrosDTO oParametros)
        {
            try
            {
                PerfilProyectoBL oPerfil = new PerfilProyectoBL();
                var perfilProyecto = await oPerfil.ConsultarPerfilTerminado(int.Parse(oParametros.Parametro1));

                return new Response
                {
                    success = true,
                    Result = perfilProyecto
                };
            }
            catch (Exception e)
            {
                return new Response{ success = false, Message= e.Message };
            }
        }


        [HttpPost]
        public async Task<Response> EditarPerfilProyecto(PerfilProyecto perfilProyecto)
        {
            try
            {
                PerfilProyectoBL oPerfil = new PerfilProyectoBL();
                var resp = await oPerfil.EditarPerfilProyecto(perfilProyecto);

                return new Response { success = true };
            }
            catch (Exception e)
            {

                return new Response { success = false, Message= e.Message };
            }
        }


        [HttpPost]
        public async Task<Response> GuardarPerfilProyecto2(Perfil2 Perfil2)
        {
            try
            {
                PerfilProyectoBL oPerfil2 = new PerfilProyectoBL();
                var resp = await oPerfil2.GuardarPerfilProyecto2(Perfil2);

                return new Response { success = true };
            }
            catch (Exception e)
            {

                return new Response { success = false, Message= e.Message };
            }
        }


        [HttpPost]
        public async Task<Response> ConsultarPerfil2(ParametrosDTO oParametros)
        {
            try
            {
                PerfilProyectoBL oPerfil2 = new PerfilProyectoBL();
                var perfilProyecto2 = await oPerfil2.ConsultarPerfil2(int.Parse(oParametros.Parametro1));

                return new Response { success = true, Result= perfilProyecto2 };
            }
            catch (Exception e)
            {
                return new Response { success = true, Message = e.Message};
            }
        }


        [HttpPost]
        public async Task<Response> EditarPerfilProyecto2(Perfil2 Perfil)
        {
            try
            {
                PerfilProyectoBL oPerfil = new PerfilProyectoBL();
                var resp= await oPerfil.EditarPerfilProyecto2(Perfil);

                return new Response { success = true };
            }
            catch (Exception e)
            {
                return new Response { success = false, Message= e.Message };
            }
        
        }
    }
}