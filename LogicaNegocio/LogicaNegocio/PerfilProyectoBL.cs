using Datos.DTO;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class PerfilProyectoBL
    {

        Model1 entity = new Model1();

        public Task<ProyectoDTO> ConsultarProyecto(int IdProyecto)
        {
            var Proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == IdProyecto
                            select i).FirstOrDefault();

            var municipio = (from i in entity.Municipio
                             where i.IdMunicipio == Proyecto.IdMunicipio
                             select i).FirstOrDefault();

            ProyectoDTO oProyectoDTO = new ProyectoDTO();

            oProyectoDTO.IdProyecto = Proyecto.IdProyecto;
            oProyectoDTO.TemaProyecto = Proyecto.TemaProyecto;
            oProyectoDTO.municipio = municipio.NombreMunicipio;
            oProyectoDTO.TipoProyecto = Proyecto.TipoProyecto;
            oProyectoDTO.Sector = Proyecto.Sector;
            oProyectoDTO.Etapa = Proyecto.Etapa;
            oProyectoDTO.IdUsuario = Proyecto.IdUsuario;
            oProyectoDTO.AccionProyecto = Proyecto.AccionProyecto;
            oProyectoDTO.NombreProyecto = Proyecto.AccionProyecto + " " + Proyecto.TemaProyecto + " " + municipio.NombreMunicipio;

            return Task.FromResult<ProyectoDTO>(oProyectoDTO);

        }

        public Task<bool> GuardarPerfilProyecto(PerfilProyecto perfilProyecto)
        {
            PerfilProyecto obj = new PerfilProyecto();
            obj = perfilProyecto;
            entity.PerfilProyecto.Add(obj);
            var proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == perfilProyecto.IdProyecto
                            select i).FirstOrDefault();
            proyecto.Etapa = 7;
            entity.SaveChanges();

            return Task.FromResult<bool>(true);
        }

        public Task<PerfilProyecto> ConsultarPerfilTerminado(int IdProyecto)
        {
            var perfil = (from i in entity.PerfilProyecto
                          where i.IdProyecto == IdProyecto
                          select i).FirstOrDefault();

            return Task.FromResult<PerfilProyecto>(perfil);

        }

        public Task<bool> EditarPerfilProyecto(PerfilProyecto PerfilProyecto)
        {
            var editar = (from i in entity.PerfilProyecto
                          where i.idPerfilProyecto == PerfilProyecto.idPerfilProyecto
                          select i).FirstOrDefault();

            editar.NombreProyecto = PerfilProyecto.NombreProyecto;
            editar.NombreArea = PerfilProyecto.NombreArea;
            editar.NumeroProyecto = PerfilProyecto.NumeroProyecto;
            editar.Justificacion = PerfilProyecto.Justificacion;
            entity.SaveChanges();
            return Task.FromResult<bool>(true);
        }


        public Task<bool> GuardarPerfilProyecto2(Perfil2 Perfil2)
        {
            Perfil2 perfil = new Perfil2();
            perfil = Perfil2;
            entity.Perfil2.Add(perfil);
            var proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == Perfil2.idProyecto
                            select i).FirstOrDefault();
            proyecto.Etapa = 8;
            entity.SaveChanges();
            return Task.FromResult<bool>(true);
        }

        public Task<Perfil2> ConsultarPerfil2(int IdProyecto)
        {
            var consulta = (from i in entity.Perfil2
                            where i.idProyecto == IdProyecto
                            select i).FirstOrDefault();
            return Task.FromResult<Perfil2>(consulta);
        }

        public Task<bool> EditarPerfilProyecto2(Perfil2 PerfilProyecto)
        {
            var editarPerfil = (from i in entity.Perfil2
                          where i.IdPerfilProyecto2 == PerfilProyecto.IdPerfilProyecto2
                          select i).FirstOrDefault();

            editarPerfil.Planteamiento = PerfilProyecto.Planteamiento;
            editarPerfil.Impacto = PerfilProyecto.Impacto;
            editarPerfil.Poblacion = PerfilProyecto.Poblacion;
            editarPerfil.Variables = PerfilProyecto.Variables;
            editarPerfil.Tecnicas = PerfilProyecto.Tecnicas;
            editarPerfil.Enfoque = PerfilProyecto.Enfoque;
            editarPerfil.TipoInvestigacion = PerfilProyecto.TipoInvestigacion;
            editarPerfil.Metodo = PerfilProyecto.Metodo;
            editarPerfil.Metodologia = PerfilProyecto.Metodologia;

            entity.SaveChanges();
            return Task.FromResult<bool>(true);
        }
    }
}
