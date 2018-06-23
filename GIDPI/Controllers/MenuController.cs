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
    public class MenuController : ApiController
    {
        [HttpPost]

        public async Task<Response> ConsultarProyectos(ParametrosDTO oParametros)
        {

            try
            {
                DatosProyectoBl oMenu = new DatosProyectoBl();

                var proyectos = await oMenu.ConsultarProyectos(int.Parse(oParametros.Parametro1));

                return new Response
                {
                    success = true,
                    Result = proyectos
                };
            }
            catch (Exception exc)
            {

                return new Response
                {
                    success = true,
                    Message = exc.Message
                };
            }
        }

        [HttpPost]

        public async Task<Response> AbrirProyecto(ParametrosDTO oParametros)
        {

            try
            {
                MenuBl oMenu = new MenuBl();

                var proyecto = await oMenu.AbrirProyecto(int.Parse(oParametros.Parametro1));

                return new Response
                {
                    success = true,
                    Result = proyecto
                };
            }
            catch (Exception exc)
            {

                return new Response
                {
                    success = true,
                    Message = exc.Message
                };
            }
        }

        [HttpPost]
        public async Task<Response> consultarMatriz(ParametrosDTO oParametros)
        {

            try
            {
                MenuBl oMenu = new MenuBl();

                var proyecto = await oMenu.consultarMatriz(int.Parse(oParametros.Parametro1));

                return new Response
                {
                    success = true,
                    Result = proyecto
                };
            }
            catch (Exception exc)
            {

                return new Response
                {
                    success = true,
                    Message = exc.Message
                };
            }
        }


        [HttpPost]
        public async Task<Response> EliminarProyecto(ParametrosDTO IdProyecto)
        {

            try
            {
                MenuBl oMenu = new MenuBl();

                var dato = await oMenu.EliminarProyecto(int.Parse(IdProyecto.Parametro1));

                return new Response
                {
                    success = true,
                    Result = dato
                };
            }
            catch (Exception exc)
            {

                return new Response
                {
                    success = true,
                    Message = exc.Message
                };
            }
        }

    }
}
