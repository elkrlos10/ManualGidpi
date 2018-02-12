using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.DTO
{
    public class ResultadosDTO
    {
     
        public int IdResultado { get; set; }
        public int IdObjetivoEsp { get; set; }
        public string ObjetivoEsp { get; set; }
        public string Resultado { get; set; }
        public string MedidaResultado { get; set; }
        public string HerramientaResultado { get; set; }
        public string ProductoResultado { get; set; }
    }
}
