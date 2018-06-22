using Datos.Modelos;
using LogicaNegocio.LogicaNegocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace GIDPI.Controllers
{
    public class AdminController:ApiController
    {
        [HttpPost]
        public IHttpActionResult cosultarGrafica()
        {
            try
            {
                AdminBl oAdminBl = new AdminBl();
                var Datos = oAdminBl.cosultarGrafica();

                return Ok(new { success = true, Datos });

            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });

            }
        }

        [HttpPost]
        public async Task<Response> ConsultarEmpresas()
        {
            try
            {
                var empresas = new List<PersonaJuridica>();
                AdminBl oAdminBl = new AdminBl();
                empresas= await  oAdminBl.ConsultarEmpresas();

                return new Response
                {
                    success= true,
                    Result= empresas
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