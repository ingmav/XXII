import { LOGOS } from "../../logos";


export class ReporteSolicitudComision {

    getDocumentDefinition(reportData:any) {
        //console.log("ONDE",reportData);
        
        //console.log(reportData);
        //return;
        let comision = reportData.data;
        let datos_trabajador = reportData.data.trabajador;
        let Origenfirmate = reportData.firmanteOrigen;
        let DestinoFirmante = reportData.firmanteDestino;
        let contadorLineasHorizontalesV = 0;
        let fecha_hoy =  new Intl.DateTimeFormat('es-ES', {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date());
        //console.log(comision.fecha_inicio.substr(0,4), comision.fecha_inicio.substr(5,2),comision.fecha_inicio.substr(8,2));
        let mes_inicio = (parseInt(comision.fecha_inicio.substr(5,2)) - 1);
        let fecha_inicio =  new Intl.DateTimeFormat('es-ES', {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(comision.fecha_inicio.substr(0,4), mes_inicio,comision.fecha_inicio.substr(8,2)));
        let mes_fin = (parseInt(comision.fecha_final.substr(5,2)) - 1);
        let fecha_fin =  new Intl.DateTimeFormat('es-ES', {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(comision.fecha_final.substr(0,4), mes_fin,comision.fecha_final.substr(8,2)));
        let trabajador = reportData.items;
        let datos = {
          pageOrientation: 'portrait',
          pageSize: 'LETTER',
         
          pageMargins: [ 40, 60, 40, 60 ],
          header: {
            margin: [30, 20, 30, 0],
            columns: [/*
                {
                    image: LOGOS[0].LOGO_FEDERAL,
                    width: 90
                },
                {
                    margin: [10, 0, 0, 0],
                    // text: 'SECRETARÍA DE SALUD\n'+reportData.config.title,
                    text: '\n"2021, Año de la Independencia"',

                    bold: false,
                    fontSize: 9,
                    alignment: 'center'
                },
                {
                  image: LOGOS[1].LOGO_ESTATAL,
                  width: 80
                }
              */]
          },
          footer: function(currentPage, pageCount) { 
            //return 'Página ' + currentPage.toString() + ' de ' + pageCount; 
            return {
              margin: [30, 20, 30, 0],
              columns: [
                  {
                      text: '',//'Unidad Administrativa. Edificio "C" Col. Maya. C.P. 29010, Tuxtla Gutiérrez, Chiapas.\n'+'Conmutador (961) 6189250 '+' www.saludchiapas.gob.mx',
                      alignment:'left',
                      fontSize: 7,
                  },
                  
                  {
                    text:fecha_hoy.toString(),
                    alignment:'right',
                    fontSize: 7,
                }
              ]
            }
          },

          content: [],

            styles: {
              cabecera: {
                fontSize: 5,
                bold: true,
                fillColor:"#890000",
                color: "white",
                alignment:"center"
              },
              subcabecera:{
                fontSize: 5,
                bold:true,
                fillColor:"#DEDEDE",
                alignment:"center"
              },
              datos:
              {
                fontSize: 10
              },
              tabla_datos:
              {
                fontSize: 5
              },
              texto_depto:
              {
                bold: true,
                alignment:"left",
                fontSize: 11,
              },
              texto_firmas:
              {
                bold: true,
                alignment:"left",
                fontSize: 6,
              },
              texto_independencia:
              {
                bold: false,
                //italic : true,
                alignment:"center",
                fontSize: 9
              },
              texto_num_oficio:
              {
                bold: true,
                alignment:"right",
                fontSize: 9
              },
              texto_leyenda:
              {
                bold: false,
                alignment:"justify",
                fontSize: 9
              },

            }
        };

        // datos.content.push({
        //   layout: 'noBorders',
        //   table: {
        //     widths: ['*'],
        //     margin: [0,0,0,0],
        //     body: [
        //       [
        //         //{ text: "", colSpan:2},{},
        //         { text: "\n\n2021, Año de la Independencia", style: "texto_independencia"},
        //         //{ text: "", colSpan:4},{},{},{},
        //       ],
        //     ]
        //   }
        // });


        datos.content.push({
          layout: 'noBorders',
          
          table: {
            widths: ['*'],
            margin: [0,0,0,0],
            body: [
              [
                //{ text: "", colSpan:2},{},
                { text: "TUXTLA GUTIÉRREZ, CHIAPAS; A "+fecha_hoy.toUpperCase()+"\n\nASUNTO: RENOVACIÓN DE COMISIÓN\n\n\n\n",alignment:'right', style: "texto_depto"},
                //{ text: "", colSpan:4},{},{},{},
              ],
            ]
          }
        });

        datos.content.push({
          layout: 'noBorders',
          
          table: {
            widths: ['*'],
            margin: [0,0,0,0],
            body: [
              [
                //{ text: "", colSpan:2},{},
                { text: "LIC. SAMUEL SILVÁN OLÁN\nDIRECTOR DE ADMINISTRACIÓN Y FINANZAS\nDEL INSTITUTO DE SALUD DEL ESTADO DE CHIAPAS\n\n", style: "texto_depto"},
                //{ text: "", colSpan:4},{},{},{},
              ],
            ]
          }
        });

        datos.content.push({
          layout: 'noBorders',
          
          table: {
            widths: ['*'],
            margin: [0,0,0,0],
            body: [
              [
                //{ text: "", colSpan:2},{},
                { text: "ATN. LIC. ANITA DEL CARMEN GARCÍA LEÓN\nSUBDIRECTORA DE RECURSOS HUMANOS\n\n\n\n",alignment:'right', style: "texto_depto"},
                //{ text: "", colSpan:4},{},{},{},
              ],
            ]
          }
        });

        datos.content.push({
          layout: 'noBorders',
          
          table: {
            widths: ['*'],
            margin: [0,0,0,0],
            body: [
              [
                //{ text: "", colSpan:2},{},
                { text: "Por medio del presente me permito solicitar a Usted, tenga a bien autorizarme la renovación de mi comisión laboral por cinco meses y medio"+
                " a partir del "+fecha_inicio+" al "+fecha_fin+", actualmente me encuentro comisionado a "+
                datos_trabajador.datoslaborales.cr_fisico.descripcion+" ("+datos_trabajador.datoslaborales.cr_fisico.clues+") "+
                "en el municipio de "+datos_trabajador.datoslaborales.cr_fisico.municipio+", siendo mi adscripción en "+datos_trabajador.datoslaboralesnomina.cr.descripcion+" ("+datos_trabajador.datoslaboralesnomina.cr.clues+") "+
                " CON CÓDIGO FUNCIONAL "+datos_trabajador.datoslaboralesnomina.codigo_puesto_id+" "+datos_trabajador.datoslaboralesnomina.codigo.descripcion+
                ", con fecha de ingreso "+datos_trabajador.datoslaborales.fecha_ingreso+".\n\n"+
                "Sin otro particular, le envío un cordial saludo.\n\n",alignment:'justify', style: "texto_depto"},
                //{ text: "", colSpan:4},{},{},{},
              ],
            ]
          }
        });

        datos.content.push({
          layout: 'noBorders',
          
          table: {
            widths: ['*'],
            margin: [0,0,0,0],
            body: [
              [
                //{ text: "", colSpan:2},{},
                { text: "A T E N T A M E N T E\n\n\n\n\n\n______________________________________________\n"+datos_trabajador.nombre+" "+datos_trabajador.apellido_paterno+" "+datos_trabajador.apellido_materno+"\n"+"Tél. "+datos_trabajador.telefono_celular+"\n\n\n",alignment:'center', style: "texto_depto"},
                //{ text: "", colSpan:4},{},{},{},
              ],
            ]
          }
        });

        let tabla = ['*', '*'];
        let firmante_origen = "";
        let cargo_origen = "";
        let firmante_destino = "";
        let cargo_destino = "";
        if(Origenfirmate.responsable)
        {
          let obj_origen = Origenfirmate.responsable;
          firmante_origen = obj_origen.nombre+" "+obj_origen.apellido_paterno+" "+obj_origen.apellido_materno;
          cargo_origen = Origenfirmate.cargo;
        }

        if(DestinoFirmante.responsable)
        {
          let obj_destino = DestinoFirmante.responsable;
          firmante_destino = obj_destino.nombre+" "+obj_destino.apellido_paterno+" "+obj_destino.apellido_materno;
          cargo_destino = DestinoFirmante.cargo;
        }

        let firmas = [
          { text: "AUTORIZÓ\n\n\n\n\n\n______________________________________________\n"+firmante_origen+"\n"+cargo_origen+"\n\n",alignment:'center', style: "texto_depto"},
          { text: "VO. BO.\n\n\n\n\n\n______________________________________________\n"+firmante_destino+"\n"+cargo_destino+"\n\n",alignment:'center', style: "texto_depto"}
        ];

        //if(Origenfirmate.cr == DestinoFirmante.cr)
        if(Origenfirmate.cr == DestinoFirmante.cr)
        {
          tabla = ['*'];
          firmas = [
            { text: "AUTORIZÓ Y VO. BO.\n\n\n\n\n\n______________________________________________\n"+firmante_origen+"\n"+cargo_origen+"\n\n",alignment:'center', style: "texto_depto"}
          ];
        }
        datos.content.push({
          layout: 'noBorders',
          
          table: {
            widths: tabla,
            margin: [0,0,0,0],
            body: [
              firmas,
            ]
          }
        });

        let copias = "C.C.P. "+firmante_origen+" - "+cargo_origen+"\n"+
        "C..C.P. "+firmante_destino+" - "+cargo_destino+"\n";
        if(Origenfirmate.cr == DestinoFirmante.cr)
        {
          copias = "C..C.P. "+firmante_destino+" - "+cargo_destino+"\n";
        }

        datos.content.push({
          layout: 'noBorders',
          
          table: {
            widths: ['*'],
            margin: [0,0,0,0],
            body: [
              [
                //{ text: "", colSpan:2},{},
                { text: "C.C.P. DR. JOSÉ MANUEL CRUZ CASTELLANOS. SECRETARIO DE SALUD Y DIRECTOR GENERAL DEL INSTITUTO DE SALUD DEL ESTADO DE CHIAPAS\n"+
                        copias+
                        "Cc.p. LIC. JULIO ALBERTO BEZARES DOMÍNGUEZ. JEFE DEL DEPARTAMENTO DE CONTROL DEL PAGO\n"+
                        "C.c.p. ING. GABRIEL DE LA GUARDIA NAGANO.- JEFE DEL DEPARTAMENTO DE OPERACIÓN Y SISTEMATIZACIÓN", style: "texto_firmas"},
                //{ text: "", colSpan:4},{},{},{},
              ],
            ]
          }
        });
        
        
        /*datos.content.push({
          layout: 'noBorders',
          table: {
            widths: ['*'],
            margin: [0,0,0,0],
            body: [
              [
                //{ text: "", colSpan:2},{},
                { text: "\nOFICIO: IS/DAF/SRH/DRL/5003/________________/2021\n\nASUNTO:COMISIÓN\n\n TUXTLA GUTIÉRREZ, CHIAPAS; A "+fecha_hoy.toUpperCase(), style: "texto_num_oficio"},
                //{ text: "", colSpan:4},{},{},{},
              ],
            ]
          }
        });


        datos.content.push({
          layout: 'noBorders',
          table: {
            widths: ['*'],
            margin: [0,0,0,0],
            body: [
              [
                //{ text: "\nC.FERMIN SERVANDO MARTINEZ MARTINEZ\n M01006 MEDICO GENERAL 'A' (CSSSA004764)\n CENTRO DE SALUD RURAL 1 NÚCLEO BÁSICO ROBERTO BARRIOS", style: "texto_depto"},
                { text: "\nC. "+datos_trabajador.nombre+" "+datos_trabajador.apellido_paterno+" "+datos_trabajador.apellido_materno+"\n"+
                datos_trabajador.datoslaboralesnomina.codigo_puesto_id+" "+datos_trabajador.datoslaboralesnomina.codigo.descripcion+"\n"+
                "("+datos_trabajador.datoslaboralesnomina.cr.clues+") "+datos_trabajador.datoslaboralesnomina.cr.descripcion, style: "texto_depto"},
              ],
            ]
          }
        });


        datos.content.push({
          layout: 'noBorders',
          table: {
            widths: ['*'],
            margin: [0,0,0,0],
            body: [
              [
                //{ text: "", colSpan:2},{},
                { text: "\n\nPOR NECESIDADES DEL SERVICIO, ME PERMITO COMUNICARLE QUE, A PARTIR DEL "+this.convertirFechaTexto(comision.fecha_inicio)+","+" SE LE COMISIONA TEMPORALMENTE DEL "+
                datos_trabajador.datoslaboralesnomina.cr.descripcion+" ("+datos_trabajador.datoslaboralesnomina.cr.clues+"); DEPENDIENTE DE LA "+ 
                "JURISDICCIÓN SANITARIA No. "+this.convertirJurisdiccion(datos_trabajador.datoslaboralesnomina.clues.cve_jurisdiccion)+", AL "+
                datos_trabajador.datoslaborales.cr_fisico.descripcion+" ("+datos_trabajador.datoslaborales.cr_fisico.clues+") "+
                " CON CÓDIGO FUNCIONAL "+datos_trabajador.datoslaboralesnomina.codigo_puesto_id+" "+datos_trabajador.datoslaboralesnomina.codigo.descripcion+", "+
                "DEBIÉNDOSE PRESENTAR CON EL "+datos_trabajador.datoslaborales.cr_fisico.nombre_responsable+", "+
                "QUIEN LE INDICA SUS FUNCIONES Y JORNADAS LABORALES A DESARROLLAR. (CONTRATO)\n\n"+
                "ASIMISMO SE LE INFORMA QUE AL TERMINO DE LA PRESENTE COMISIÓN, DEBERÁ REINCORPORARSE A LA UNIDAD DE SU ADSCRIPCIÓN, COMO LO ESTABLECE LAS CONDICIONES GENERALES DE TRABAJO "+
                " EN SU ARTÍCULO 151."+"\n\n"+"CABE HACER MENCIÓN, QUE LA CONTINUIDAD DE LA PRÓRROGA DE COMISIÓN, NO LE DA DERECHO DE ANTIGÜEDAD, PARA CAMBIO DE ADSCRIPCIÓN, DONDE ACTUALMENTE SE ENCUENTRA COMISIONADO.\n\n"+
                "SIN OTRO PARTICULAR, LE ENVIÓ UN CORDIAL SALUDO.", style: "texto_leyenda"},
                //{ text: "\n\nPOR NECESIDADES DEL SERVICIO, ME PERMITO COMUNICARLE QUE A PARTIR DEL "+fecha_hoy.toUpperCase()+" DEL AÑO EN CURSO,\n"+" SE LE COMISIONA TEMPORALMENTE DEL "+" Centro de salud rural 1 nucleo basico roberto barrios (CSSSA004764);\n DEPENDIENTE DE LA "+ "JURISDICCION SANITARIA No. VI,"+"AL "+"Hospital General Palenque (CSSSA004595);\n"+" CON CÓDIGO FUNCIONAL M01006 MÉDICO GENERAL 'A', "+"DEBIENDOSE PRESENTAR CON EL "+"Dr. Jean Michel Gamez López,\n"+"QUIEN LE INDICA SUS FUNCIONES Y JORNADAS LABORALES A DESARROLLAR. (CONTRATO)\n\n"+"ASIMISMO SE LE INFORMA QUE AL TERMINO DE LA PRESENTE COMISIÓN, DEBERÁ REINCORPORARSE A LA UNIADAD DE SU\n ADSCRIPCIÓN, COMO LO ESTABLECE LAS CONDICIONES GENERALES DE TRABAJO EN SU ARTÍCULO 151."+"\n\n"+"CABE HACER MENCIÓN, QUE LA CONTINUIDAD DE LA PRORROGA DE COMISIÓN, NO LE DA DERECHO DE ANTIGÜEDAD, PARA CAMBIO DE ADSCRIPCIÓN, DONDE ACTUALMENTE SE ENCUENTRA COMISIONADO.\n\n"+"SIN OTRO PARTICULAR, LE ENVIÓ UN CORDIAL SALUDO.", style: "texto_leyenda"},
                //{ text: "", colSpan:4},{},{},{},
              ],
            ]
          }
        });

        datos.content.push({
          layout: 'noBorders',
          table: {
            widths: ['*'],
            margin: [0,0,0,0],
            body: [
              [
                //{ text: "", colSpan:2},{},
                { text: "\n\n\n", style: "texto_num_oficio"},
                //{ text: "", colSpan:4},{},{},{},
              ],
            ]
          }
        });

        datos.content.push({
          layout: 'noBorders',
          table: {
            widths: ['*'],
            margin: [0,0,0,0],
            body: [
              [
                //{ text: "", colSpan:2},{},
                { text: "A T E N T A M E N T E\n\n\n\n\n"+"L.A. SAMUEL SILVA OLÁN\n"+"DIRECTOR DE ADMINISTRACIÓN Y FINANZAS", style: "texto_depto"},
                //{ text: "", colSpan:4},{},{},{},
              ],
            ]
          }
        });*/


       
        return datos;
      }

      
      convertirFechaTexto(fecha)
      {
        let meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
        var arrayFecha = fecha.split("-");
        let stringFecha:string = "";
        stringFecha = arrayFecha[2]+" DE "+meses[arrayFecha[1]-1]+" DEL "+arrayFecha[0];
        return stringFecha;
      }

      convertirJurisdiccion(jurisdiccion)
      {
          let juris = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
          return juris[jurisdiccion - 1];
      }
}