using LogicaNegocio.LogicaNegocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Datos;
using GIDPI.Parametros;
using Datos.Modelos;
using System.Threading.Tasks;

namespace GIDPI.Controllers
{
    public class DatosProyectoController : ApiController
    {

        [HttpPost]
        public async Task<Response> GuardarDatosProyecto(Proyecto oProyecto)
        {

            try
            {
                DatosProyectoBl oDatosProyectoBl = new DatosProyectoBl();

                var proyecto = await oDatosProyectoBl.GuardarDatosProyecto(oProyecto);

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

        [HttpGet]
        public async Task<Response> ConsultarDepartamentos()
        {
            try
            {
                DatosProyectoBl oDatosProyectoBl = new DatosProyectoBl();

                var departamentos = await oDatosProyectoBl.ConsultarDepartamentos();

                return new Response
                {
                    success = true,
                    Result = departamentos
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
        public async Task<Response> ConsultarMunicipiosDepartamento(ParametrosDTO oParametrosDTO)
        {

            try
            {
                DatosProyectoBl oDatosProyectoBl = new DatosProyectoBl();

                var municipios = await oDatosProyectoBl.ConsultarMunicipiosDepartamento(int.Parse(oParametrosDTO.Parametro1));

                return new Response
                {
                    success = true,
                    Result = municipios
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
        public async Task<Response> ConsultarDepartamentoxMunicipio(ParametrosDTO oParametrosDTO)
        {

            try
            {
                DatosProyectoBl oDatosProyectoBl = new DatosProyectoBl();

                var departamento = await oDatosProyectoBl.ConsultarDepartamentoxMunicipio(int.Parse(oParametrosDTO.Parametro1));

                return new Response
                {
                    success = true,
                    Result = departamento
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
        public async Task<Response> ModificarProyecto(Proyecto oProyecto)
        {

            try
            {
                DatosProyectoBl oDatosProyectoBl = new DatosProyectoBl();

                var dato = await oDatosProyectoBl.ModificarProyecto(oProyecto);

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

        [HttpPost]
        public async Task<Response> ConsultarProyecto(ParametrosDTO oParametros)
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

    }
}