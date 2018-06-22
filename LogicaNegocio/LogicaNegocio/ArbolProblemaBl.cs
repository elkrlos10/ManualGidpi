﻿using Datos.DTO;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class ArbolProblemaBl
    {
        Model1 entity = new Model1();

        public MatrizDTO ArbolProblemaProyecto(int IdProyecto)
        {

            var matriz = (from i in entity.MatrizVester
                          where i.IdProyecto == IdProyecto
                          select i).FirstOrDefault();

            if (matriz == null)
            {
                return null;
            }
            var detalle = (from i in entity.DetalleMatriz
                           where i.IdMatriz == matriz.IdMatriz
                           select i).ToList();

            MatrizDTO oArbol = new MatrizDTO();

            oArbol.IdProyecto = matriz.IdProyecto;
            oArbol.IdMatriz = matriz.IdMatriz;
            oArbol.ProblemaGeneral = matriz.ProblemaGeneral;
            oArbol.DetalleMat = detalle;



            return oArbol;
        }

        public void GuardarDatosArbol(ArbolProblemaDTO oArbolDTO)
        {
            var ArbolProyecto1 = (from i in entity.ArbolProblema
                                  where i.IdProyecto == oArbolDTO.IdProyecto
                                  select i).FirstOrDefault();

            if (ArbolProyecto1 != null)
            {

                var causas = (from i in entity.CausaDirecta
                             where i.IdArbolProblema == ArbolProyecto1.IdArbolProblema
                             select i).ToList();

                foreach (var item in causas)
                {
                    var causasIndirectas = (from i in entity.CausaIndirecta
                                            where i.IdCausa == item.IdCausa
                                            select i).ToList();

                    entity.CausaIndirecta.RemoveRange(causasIndirectas);
                    entity.SaveChanges();
                    entity.CausaDirecta.Remove(item);
                    entity.SaveChanges();
                }

                var Efectos = (from i in entity.EfectoDirecto
                              where i.IdArbolProblema == ArbolProyecto1.IdArbolProblema
                              select i).ToList();

                foreach (var item in Efectos)
                {
                    var EfectosIndirectas = (from i in entity.EfectoIndirecto
                                            where i.IdEfecto == item.IdEfecto
                                            select i).ToList();

                    entity.EfectoIndirecto.RemoveRange(EfectosIndirectas);
                    entity.SaveChanges();
                    entity.EfectoDirecto.Remove(item);
                    entity.SaveChanges();
                }

                entity.ArbolProblema.Remove(ArbolProyecto1);
                entity.SaveChanges();
            }

            //if (ArbolProyecto1 == null)
            //{
            string base64 = oArbolDTO.imagen.Split(',')[1];
            ArbolProblema oArbol = new ArbolProblema();
            oArbol.IdProyecto = oArbolDTO.IdProyecto;
            oArbol.ProblemaCentral = oArbolDTO.ProblemaCentral;
            byte[] imageBytes = Convert.FromBase64String(base64);
            oArbol.Imagen = imageBytes;
            entity.ArbolProblema.Add(oArbol);
            entity.SaveChanges();

            var ArbolProyecto = (from i in entity.ArbolProblema
                                 where i.IdProyecto == oArbolDTO.IdProyecto
                                 select i).FirstOrDefault();

            foreach (var item in oArbolDTO.Causas)
            {
                if (item.Causa != "")
                {
                    CausaDirecta oCausa = new CausaDirecta();
                    oCausa.IdArbolProblema = ArbolProyecto.IdArbolProblema;
                    oCausa.Causa = item.Causa;
                    entity.CausaDirecta.Add(oCausa);
                    entity.SaveChanges();

                    var causa = (from i in entity.CausaDirecta
                                 where i.IdArbolProblema== ArbolProyecto.IdArbolProblema
                                 orderby i.IdCausa descending
                                 select i).FirstOrDefault();

                    foreach (var item1 in item.CausaIndirecta)
                    {
                        CausaIndirecta oCausaIndirecta = new CausaIndirecta();
                        oCausaIndirecta.IdCausa = causa.IdCausa;
                        oCausaIndirecta.CausaIndirecta1 = item1;
                        entity.CausaIndirecta.Add(oCausaIndirecta);
                        entity.SaveChanges();
                    }
                }
            }

            foreach (var item in oArbolDTO.Efectos)
            {
                if (item.Efecto != "")
                {
                    EfectoDirecto oEfecto = new EfectoDirecto();
                    oEfecto.IdArbolProblema = ArbolProyecto.IdArbolProblema;
                    oEfecto.Efecto = item.Efecto;
                    entity.EfectoDirecto.Add(oEfecto);
                    entity.SaveChanges();

                    var efecto = (from i in entity.EfectoDirecto
                                  where i.IdArbolProblema == ArbolProyecto.IdArbolProblema
                                  orderby i.IdEfecto descending
                                  select i).FirstOrDefault();

                    foreach (var item1 in item.EfectoIndirecta)
                    {
                        EfectoIndirecto oEfectoIndirecto = new EfectoIndirecto();
                        oEfectoIndirecto.IdEfecto = efecto.IdEfecto;
                        oEfectoIndirecto.EfectoIndirecto1 = item1;
                        entity.EfectoIndirecto.Add(oEfectoIndirecto);
                        entity.SaveChanges();
                    }
                }
            }

            var proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == oArbolDTO.IdProyecto
                            select i).FirstOrDefault();

            if (ArbolProyecto1 == null)
            {
                proyecto.Etapa = 3;
            }

           
            entity.SaveChanges();
            //}
            //else
            //{
            //    var ArbolProyecto = (from i in entity.ArbolProblema
            //                         where i.IdProyecto == oArbolDTO.IdProyecto
            //                         select i).FirstOrDefault();

            //    string base64 = oArbolDTO.imagen.Split(',')[1];
            //    ArbolProyecto.IdProyecto = oArbolDTO.IdProyecto;
            //    ArbolProyecto.ProblemaCentral = oArbolDTO.ProblemaCentral;
            //    byte[] imageBytes = Convert.FromBase64String(base64);
            //    ArbolProyecto.Imagen = imageBytes;
            //    entity.SaveChanges();

            //    var causas = (from i in entity.CausaDirecta
            //                  where i.IdArbolProblema == ArbolProyecto.IdArbolProblema
            //                  select i).ToList();

            //    var cantidadCausas = (oArbolDTO.Causas.Count - 1);
            //    if (causas.Count < cantidadCausas)
            //    {
            //        foreach (var item in causas)
            //        {
            //            //if (item)
            //            //{

            //            //}
            //        }
            //    }

            //    var contador = 0;
            //    foreach (var item in oArbolDTO.Causas)
            //    {
            //        if (item.Causa != "")
            //        {
            //            CausaDirecta oCausa1 = new CausaDirecta();

            //            if ((contador - 1) < causas.Count)
            //            {
            //                causas[contador - 1].IdArbolProblema = ArbolProyecto.IdArbolProblema;
            //                causas[contador - 1].Causa = item.Causa;
            //                entity.SaveChanges();

            //                var idCausa = causas[contador - 1].IdCausa;
            //                oCausa1 = (from i in entity.CausaDirecta
            //                           where i.IdCausa == idCausa
            //                           select i).FirstOrDefault();
            //            }
            //            else
            //            {
            //                CausaDirecta oCausa = new CausaDirecta();
            //                oCausa.IdArbolProblema = ArbolProyecto.IdArbolProblema;
            //                oCausa.Causa = item.Causa;
            //                entity.CausaDirecta.Add(oCausa);
            //                entity.SaveChanges();

            //                oCausa1 = (from i in entity.CausaDirecta
            //                           orderby i.IdCausa descending
            //                           select i).FirstOrDefault();
            //            }

            //            List<CausaIndirecta> oLista = new List<CausaIndirecta>();

            //            oLista = (from i in entity.CausaIndirecta
            //                      where i.IdCausa == oCausa1.IdCausa
            //                      select i).ToList();


            //            var contador1 = 0;
            //            foreach (var item1 in item.CausaIndirecta)
            //            {
            //                if (contador1 < oLista.Count)
            //                {
            //                    oLista[contador1].IdCausa = oCausa1.IdCausa;
            //                    oLista[contador1].CausaIndirecta1 = item1;
            //                    entity.SaveChanges();
            //                }
            //                else
            //                {
            //                    CausaIndirecta oCausaIndirecta = new CausaIndirecta();
            //                    oCausaIndirecta.IdCausa = oCausa1.IdCausa;
            //                    oCausaIndirecta.CausaIndirecta1 = item1;
            //                    entity.CausaIndirecta.Add(oCausaIndirecta);
            //                    entity.SaveChanges();
            //                }

            //                contador1++;
            //            }
            //        }
            //        contador++;
            //    }

            //    var Efectos = (from i in entity.EfectoDirecto
            //                   where i.IdArbolProblema == ArbolProyecto.IdArbolProblema
            //                   select i).ToList();

            //    var contEfecto = 0;
            //    foreach (var item in oArbolDTO.Efectos)
            //    {
            //        if (item.Efecto != "")
            //        {
            //            EfectoDirecto oEfecto1 = new EfectoDirecto();

            //            if ((contEfecto - 1) < Efectos.Count)
            //            {
            //                Efectos[contEfecto - 1].IdArbolProblema = ArbolProyecto.IdArbolProblema;
            //                Efectos[contEfecto - 1].Efecto = item.Efecto;
            //                entity.SaveChanges();

            //                var idEfecto = Efectos[contEfecto - 1].IdEfecto;
            //                oEfecto1 = (from i in entity.EfectoDirecto
            //                            where i.IdEfecto == idEfecto
            //                            select i).FirstOrDefault();
            //            }
            //            else
            //            {
            //                EfectoDirecto oEfecto = new EfectoDirecto();
            //                oEfecto.IdArbolProblema = ArbolProyecto.IdArbolProblema;
            //                oEfecto.Efecto = item.Efecto;
            //                entity.EfectoDirecto.Add(oEfecto);
            //                entity.SaveChanges();

            //                oEfecto = (from i in entity.EfectoDirecto
            //                           orderby i.IdEfecto descending
            //                           select i).FirstOrDefault();
            //            }

            //            List<EfectoIndirecto> oLista = new List<EfectoIndirecto>();

            //            oLista = (from i in entity.EfectoIndirecto
            //                      where i.IdEfecto == oEfecto1.IdEfecto
            //                      select i).ToList();


            //            var contador1 = 0;
            //            foreach (var item1 in item.EfectoIndirecta)
            //            {

            //                if (contador1 < oLista.Count)
            //                {
            //                    oLista[contador1].IdEfecto = oEfecto1.IdEfecto;
            //                    oLista[contador1].EfectoIndirecto1 = item1;
            //                    entity.SaveChanges();
            //                }
            //                else
            //                {
            //                    EfectoIndirecto oEfectoIndirecto = new EfectoIndirecto();
            //                    oEfectoIndirecto.IdEfecto = oEfecto1.IdEfecto;
            //                    oEfectoIndirecto.EfectoIndirecto1 = item1;
            //                    entity.EfectoIndirecto.Add(oEfectoIndirecto);
            //                    entity.SaveChanges();
            //                }

            //                //}
            //                //else
            //                //{
            //                //    CausaIndirecta oCausaIndirecta = new CausaIndirecta();
            //                //    oCausaIndirecta.IdCausa = oCausa1.IdCausa;
            //                //    oCausaIndirecta.CausaIndirecta1 = item1;
            //                //    entity.CausaIndirecta.Add(oCausaIndirecta);
            //                //    entity.SaveChanges();
            //                //}
            //                contador1++;
            //            }
            //        }
            //        contEfecto++;
            //    }

            //}


        }

        public ArbolProblemaDTO ConsultarArbolFinal(int IdProyecto)
        {
            var arbol = (from i in entity.ArbolProblema
                         where i.IdProyecto == IdProyecto
                         select i).FirstOrDefault();


            List<Causas> ListaoCausas = new List<Causas>();
            var causas = (from i in entity.CausaDirecta
                          where i.IdArbolProblema == arbol.IdArbolProblema
                          select i).ToList();

            foreach (var item in causas)
            {
                Causas oCausas = new Causas();
                var causasIndirectas = (from i in entity.CausaIndirecta
                                        where i.IdCausa == item.IdCausa
                                        select i.CausaIndirecta1).ToList();

                oCausas.Causa = item.Causa;
                oCausas.CausaIndirecta = causasIndirectas;
                ListaoCausas.Add(oCausas);
            }



            var efectos = (from i in entity.EfectoDirecto
                           where i.IdArbolProblema == arbol.IdArbolProblema
                           select i).ToList();

            List<Efectos> ListaoEfectos = new List<Efectos>();
            foreach (var item in efectos)
            {
                Efectos oEfecto = new Efectos();
                var efectosIndirectas = (from i in entity.EfectoIndirecto
                                         where i.IdEfecto == item.IdEfecto
                                         select i.EfectoIndirecto1).ToList();

                oEfecto.Efecto = item.Efecto;
                oEfecto.EfectoIndirecta = efectosIndirectas;
                ListaoEfectos.Add(oEfecto);
            }

            ArbolProblemaDTO oArbolDTO = new ArbolProblemaDTO();

            oArbolDTO.IdProyecto = IdProyecto;
            oArbolDTO.ProblemaCentral = arbol.ProblemaCentral;
            oArbolDTO.Efectos = ListaoEfectos;
            oArbolDTO.Causas = ListaoCausas;

            return oArbolDTO;

        }
    }
}
