using Datos;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace LogicaNegocio.LogicaNegocio
{
    public class DatosProyectoBl
    {
        Model1 entity = new Model1();

        public Task<List<Departamento>> ConsultarDepartamentos()
        {
            var departamentos = (from i in entity.Departamento
                                 select i).ToList();

            return Task.FromResult<List<Departamento>>(departamentos);
        }

        public Task<List<Municipio>> ConsultarMunicipiosDepartamento(int IdDepartamento)
        {
            var municipios = (from i in entity.Municipio
                              where i.IdDepartamento == IdDepartamento
                              select i).ToList();

            return Task.FromResult<List<Municipio>>(municipios);

        }

        public Task<Departamento> ConsultarDepartamentoxMunicipio(int IdMunicipio)
        {
            var Departamento = (from i in entity.Departamento
                                join m in entity.Municipio on i.IdDepartamento equals m.IdDepartamento
                                where m.IdMunicipio == IdMunicipio
                                select i).FirstOrDefault();

            return Task.FromResult<Departamento>(Departamento);

        }

        public Task<Proyecto> GuardarDatosProyecto(Proyecto oProyecto)
        {

            entity.Proyecto.Add(oProyecto);
            entity.SaveChanges();

            var proyecto = (from i in entity.Proyecto
                            orderby i.IdProyecto descending
                            select i).FirstOrDefault();

            return Task.FromResult<Proyecto>(proyecto);

        }

        public Task<bool> ModificarProyecto(Proyecto oProyecto)
        {
            var proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == oProyecto.IdProyecto
                            select i).FirstOrDefault();

            proyecto.TipoProyecto = oProyecto.TipoProyecto;
            proyecto.AccionProyecto = oProyecto.AccionProyecto;
            proyecto.TemaProyecto = oProyecto.TemaProyecto;
            proyecto.IdMunicipio = oProyecto.IdMunicipio;
            proyecto.Sector = oProyecto.Sector;
            entity.SaveChanges();
            return Task.FromResult<bool>(true);
        }

        public Task<List<Proyecto>> ConsultarProyectos(int IdUsuario)
        {

            var proyectos = (from i in entity.Proyecto
                             where i.IdUsuario == IdUsuario
                             orderby i.IdProyecto descending
                             select i).ToList();

            return Task.FromResult<List<Proyecto>>(proyectos);

        }
    }
}
