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
        public IHttpActionResult ConsultarEmpresas()
        {
            try
            {
                AdminBl oAdminBl = new AdminBl();
                var empresas = oAdminBl.ConsultarEmpresas();

                return Ok(new { success = true, empresas });

            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });

            }
        }
    }
}