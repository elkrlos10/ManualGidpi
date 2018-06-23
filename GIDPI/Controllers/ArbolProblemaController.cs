using Datos.DTO;
using GIDPI.Parametros;
using LogicaNegocio.LogicaNegocio;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace GIDPI.Controllers
{
    public class ArbolProblemaController : ApiController
    {
        [HttpPost]
        public async Task<Response> ArbolProblemaProyecto(ParametrosDTO oParametros)
        {
            try
            {
                ArbolProblemaBl oArbol = new ArbolProblemaBl();

                var arbol = await oArbol.ArbolProblemaProyecto(int.Parse(oParametros.Parametro1));
                if (arbol.Item1 == 1)
                {
                    return new Response
                    {
                        success = true,
                        Result = false
                    };
                }

                return new Response
                {
                    success = true,
                    Result = arbol.Item2
                };

                //return Ok(new { success = true, arbol });

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
        public async Task<Response> GuardarDatosArbol(ArbolProblemaDTO oArbolDTO)
        {
            try
            {
                ArbolProblemaBl oArbol = new ArbolProblemaBl();
                var resp = await oArbol.GuardarDatosArbol(oArbolDTO);

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
        public async Task<Response> ConsultarArbolFinal(ParametrosDTO oParametros)
        {
            try
            {
                ArbolProblemaBl oArbol = new ArbolProblemaBl();
                var ArbolFinal = await oArbol.ConsultarArbolFinal(int.Parse(oParametros.Parametro1));

                return new Response
                {
                    success = true,
                    Result = ArbolFinal
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

    }
}