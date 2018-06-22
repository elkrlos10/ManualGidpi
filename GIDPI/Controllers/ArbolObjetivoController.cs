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
    public class ArbolObjetivoController: ApiController
    {
        [HttpPost]
        public async Task<Response> GuardarDatosArbol(ArbolObjetivoDTO oArbolDTO)
        {
            try
            {
                ArbolObjetivoBl oArbol = new ArbolObjetivoBl();
                var dato = await oArbol.GuardarDatosArbolObjetivos(oArbolDTO);

                return new Response
                {
                    success= true,
                    Result= dato
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
        public async Task<Response> ConsultarArbolObjetivosFinal(ParametrosDTO oParametros)
        {
            try
            {
                ArbolObjetivoBl oArbol = new ArbolObjetivoBl();
                var ArbolFinal = await oArbol.ConsultarArbolObjetivosFinal(int.Parse(oParametros.Parametro1));

                List<string> Especificos = new List<string>();
                foreach (var item in ArbolFinal.Medios)
                {
                    Especificos.Add(item.Medio);
                }

                return new Response
                {
                    success = true,
                    Result = ArbolFinal,
                    Result1= Especificos
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
        public async Task<Response> GuardarObjetivos(ObjetivosDTO oObjetivoDTO)
        {
            try
            {
                ArbolObjetivoBl oArbol = new ArbolObjetivoBl();
                var respuesta = await oArbol.GuardarObjetivos(oObjetivoDTO);

                return new Response
                {
                    success= true
                };
                //return Ok(new { success = true });
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
        public async Task<Response> ConsultarDatosObjetivos(ParametrosDTO oParametrosDTO)
        {
            try
            {
                ArbolObjetivoBl oArbol = new ArbolObjetivoBl();
               var Objetivos= await oArbol.ConsultarDatosObjetivos(int.Parse(oParametrosDTO.Parametro1));

                var DatosObjetivos = Objetivos.Item1;
                var Especificos = Objetivos.Item2;
                //var Especificos = oArbol.ConsultarDatosObjetivos(int.Parse(oParametrosDTO.Parametro1)).Item2;

                return new Response
                {
                    success = true,
                    Result = DatosObjetivos,
                    Result1 = Especificos
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


        //[HttpPost]
        //public IHttpActionResult UploadFileArea(ParametrosDTO oParametros)
        //{
        //    //Model entity = new Model ();
        //    try
        //    {

        //        string base64 = oParametros.Parametro1.Split(',')[1];
        //        // Convert base 64 string to byte[]
        //        byte[] imageBytes = Convert.FromBase64String(base64);
        //        // Convert byte[] to Image
        //        var ms = new MemoryStream(imageBytes, 0, imageBytes.Length);

        //        var image = Image.FromStream(ms, true);




        //        return Ok(new { success = true, message = "La extencion del archivo no es valida" });
        //    }

        //    catch (Exception exc)
        //    {

        //        return Ok(new { success = false, message = exc.Message });
        //    }
        //}
    }
}