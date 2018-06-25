using Datos.DTO;
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
    public class DetalleMatrizController: ApiController
    {
        [HttpPost]
        public async Task<Response> Guardar(MatrizDTO oMatrizDetalle)
        {
            try
            {
                MatrizBl oMatriz = new MatrizBl();

                var resp = await oMatriz.Guardar(oMatrizDetalle);

                return new Response{ success = true };
            }
            catch (Exception e)
            {

                return new Response { success = false, Message= e.Message };
            }
        }

        [HttpPost]
        public async Task<Response> ConsultarMatriz(ParametrosDTO oParamatros)
        {
            try
            {
                MatrizBl oMatriz = new MatrizBl();

               var matriz = await oMatriz.ConsultarMatriz(int.Parse(oParamatros.Parametro1));

                return new Response { success = true, Result= matriz };
            }
            catch (Exception e)
            {

                return new Response { success = false, Message = e.Message };
            }
        }

        [HttpPost]
        public IHttpActionResult OmitirMatriz(ParametrosDTO oParamatros)
        {
            try
            {
               MatrizBl oMatriz = new MatrizBl();

               oMatriz.OmitirMatriz(int.Parse(oParamatros.Parametro1));

                return Ok(new { success = true });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }
    }
}