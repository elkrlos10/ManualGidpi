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
    public class MarcoLogicoController: ApiController
    {

        [HttpPost]
        public async Task<Response> LLenarMarco (ParametrosDTO oParametrosDTO)
        {
            try
            {
                MarcoLogicoBl oMarco = new MarcoLogicoBl();
               var marco= await oMarco.LLenarMarco(int.Parse(oParametrosDTO.Parametro1));

                return new Response { success = true, Result= marco };
            }
            catch (Exception e)
            {

                return new Response { success = false, Message= e.Message };
            }
        }

        [HttpPost]
        public async Task<Response> GuardarMarco( MarcoLogico oMarco)
        {
            try
            {
                MarcoLogicoBl oMarco1 = new MarcoLogicoBl();
                 var resp = await oMarco1.GuardarMarco(oMarco);

                return new Response { success = true };
            }
            catch (Exception e)
            {
                return new Response { success = false, Message= e.Message };

            }
        }

        [HttpPost]
        public async Task<Response> ConsultarMarco(ParametrosDTO oParametros)
        {
            try
            {
                MarcoLogicoBl oMarco1 = new MarcoLogicoBl();
               var marco= await oMarco1.ConsultarMarco(int.Parse(oParametros.Parametro1));

                return new Response{ success = true, Result= marco };
            }
            catch (Exception e)
            {

                return new Response { success = true, Message= e.Message };
            }
        }
    }
}