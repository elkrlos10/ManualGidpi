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
    public class CronogramaPresupuestoController:ApiController
    {
        [HttpPost]
        public async Task<Response> GuardarCronograma(List<Cronograma> oListaCronograma)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
                var dato = await oCronogramaPresupuestoBl.GuardarCronograma(oListaCronograma);

                return new Response
                {
                    success = true,
                    Result = dato
                };

            }
            catch (Exception e)
            {

                return new Response
                {
                    success = true,
                    Message = e.Message
                };

            }
        }

        [HttpPost]
        public async Task<Response> ConsultarCronograma(ParametrosDTO oParametros)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
               var Cronograma = await oCronogramaPresupuestoBl.ConsultarCronograma(int.Parse(oParametros.Parametro1));

                return new Response
                {
                    success = true,
                    Result = Cronograma
                };

            }
            catch (Exception e)
            {

                return new Response
                {
                    success = true,
                    Message = e.Message
                };

            }
        }

        [HttpPost]
        public async Task<Response> eliminarItemCronograma(ParametrosDTO oParametros)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
                var dato = await oCronogramaPresupuestoBl.eliminarItemCronograma(int.Parse(oParametros.Parametro1));

                return new Response
                {
                    success = true,
                    Result = dato
                };

            }
            catch (Exception e)
            {

                return new Response
                {
                    success = true,
                    Message = e.Message
                };

            }
        }


        [HttpPost]
        public async Task<Response> GuardarPresupuesto(List<Presupuesto> oListaPresupuesto)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
                var dato = await oCronogramaPresupuestoBl.GuardarPresupuesto(oListaPresupuesto);

                return new Response
                {
                    success = true,
                    Result = dato
                };

            }
            catch (Exception e)
            {

                return new Response
                {
                    success = true,
                    Message = e.Message
                };

            }
        }
        [HttpPost]
        public async Task<Response> ConsultarPresupuesto(ParametrosDTO oParametros)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
                var Presupuesto = await oCronogramaPresupuestoBl.ConsultarPresupuesto(int.Parse(oParametros.Parametro1));

                return new Response
                {
                    success = true,
                    Result = Presupuesto
                };

            }
            catch (Exception e)
            {

                return new Response
                {
                    success = true,
                    Message = e.Message
                };

            }
        }

        [HttpPost]
        public async Task<Response> GuardarAIU(Aiu AIU)
        {
            try
            {
               CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
               var dato = await oCronogramaPresupuestoBl.GuardarAIU(AIU);

                return new Response
                {
                    success = true,
                    Result = dato
                };

            }
            catch (Exception e)
            {

                return new Response
                {
                    success = true,
                    Message = e.Message
                };

            }
        }

        [HttpPost]
        public async Task<Response> ConsultarAIU(ParametrosDTO oParametros)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
                var AIU= oCronogramaPresupuestoBl.ConsultarAIU(int.Parse(oParametros.Parametro1));

                return new Response
                {
                    success = true,
                    Result = AIU
                };

            }
            catch (Exception e)
            {

                return new Response
                {
                    success = true,
                    Message = e.Message
                };

            }
        }

    }
}