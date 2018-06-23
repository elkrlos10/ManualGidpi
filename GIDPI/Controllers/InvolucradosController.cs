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
    public class InvolucradosController:ApiController
    {
        [HttpPost]
        public async Task<Response> GuardarInvolucrados(List<Involucrados> oListaInvolucrados)
        {
            try
            {
                InvolucradosBL oInvolucradosBL = new InvolucradosBL();
                var res = await oInvolucradosBL.GuardarInvolucrados(oListaInvolucrados);

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
        public async Task<Response> ConsultarInvolucrados(ParametrosDTO oParametros )
        {
            try
            {
                InvolucradosBL oInvolucradosBL = new InvolucradosBL();
                var involucrados = await oInvolucradosBL.ConsultarInvolucrados(int.Parse(oParametros.Parametro1));

                //return Ok(new { success = true,involucrados });
                return new Response
                {
                    success = true,
                    Result = involucrados
                };

            }
            catch (Exception e)
            {

                return new Response
                {
                    success = true,
                    Message= e.Message
                };

            }
        }


        [HttpPost]
        public async Task<Response> EliminarInvolucrado(ParametrosDTO oParametros)
        {
            try
            {
                InvolucradosBL oInvolucradosBL = new InvolucradosBL();
                var resp= await oInvolucradosBL.EliminarInvolucrado(int.Parse(oParametros.Parametro1));

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
                    Message= e.Message
                };

            }
        }

    }
}