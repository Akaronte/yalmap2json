let configs={
            'ES':{
                defaultP:1,
                houseTm:30000,
                maxHReload:1,
                telemetryProb:1, // Se envia telemetria si random()*telemetryProb==1
                pList: [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4],
                adexIds : [2559776610],
                houseIds : [45125937, 81003777, 4815141041, 79449777, 67317777, 4633770194, 4717022388, 5170458185],
                prebidIds:[
                    "5359233312", // "Prebid Teads":
                    "4406227815", //"Prebid RichAudience": [,
                    "4402193934",//"Prebid Criteo": [],
                    "5180398781",//"Prebid Pubmatic": [],
                    "83488497",//"Prebid AppNexus": [],
                    "83522457", //"Prebid Rubicon": [],
                    "4402208836", //"Prebid Smart AdServer": [],
                    "5354911588" //"Prebid RevenueMaker": []

                ],
                reloadIds : [45125937, 81003777, 4815141041,4764613895, 4811457786,
                    79449777, 67317777, 4633770194, 4717022388, 5170458185,
                    5359233312,4402193934,5180398781,83488497,83522457,4402208836, 5354911588, 4406227815
                ],
                reloadCampaignIds:[2559776610, 483876297, 3038846356, 2098434238, 494913417, 494827977, 2106449176, 2108387998, 2106441352, 2106520950, 2106523863, 2667870692, 2668441436, 2668163671, 2668164637],
                houseLineItems:[],
                positions:{
                    'r':{p:2,mu:3,md:2,rv:1,nbb:3,st:1,ub:7,ppbo:0.15,ppbd:1,hl:20,mp:0,hr:{tim:15000,ov:false,mr:1},ar:{tim:null,ov:true,pbtim:2000,mr:1,mintim:5000},rqpbtim:2000,tl:true},
                    'rb':{p:2,mu:3,md:2,rv:1,nbb:3,st:1,ub:7,ppbo:0.15,ppbd:1,hl:20,mp:0,hr:{tim:15000,ov:false,mr:1},ar:{tim:null,ov:true,pbtim:2000,mr:1,mintim:5000},rqpbtim:2000,tl:true},
                    'rc':{p:2,mu:3,md:2,rv:1,nbb:3,st:1,ub:7,ppbo:0.15,ppbd:1,hl:20,mp:0,hr:{tim:15000,ov:false,mr:1},ar:{tim:null,ov:true,pbtim:2000,mr:1,mintim:5000},rqpbtim:2000,tl:true},
                    "rd":{p:2,mu:3,md:2,rv:1,nbb:3,st:1,ub:7,ppbo:0.15,ppbd:1,hl:20,mp:0,hr:{tim:15000,ov:false,mr:1},ar:{tim:null,ov:true,pbtim:2000,mr:1,mintim:5000},rqpbtim:2000,tl:true},
                    're':{p:1,mu:4,rv:1},
                    'rf':{p:1,mu:4,rv:1},
                    'rg':{p:0,mu:4,rv:1},
                    'r-pnc':{p:2,mu:2,rv:1},
                    'rb-pnc':{p:2,mu:2,rv:1},
                    'r-nata':{p:2,mu:2,rv:1},
                    'r-nata-pnc':{p:2,mu:2,rv:1},
                    'm':{p:4,mu:6,rv:1,tl:true},
                    'mb':{p:4,mu:2,rv:1},
                    'm-pnc':{p:2,mu:2,rv:1},
                    'si':{p:2,mu:2,rv:1},
                    'sd':{p:2,mu:2,rv:1},
                    'c990x50_320x50':{p:2,mu:2,rv:1},
                    'c990x50_320x53':{p:2,mu:2,rv:1},
                    'default':{p:2,mu:3,md:2,rv:1,nbb:3,st:1,ub:7,ppbo:0.15,ppbd:1,hl:20,mp:0,hr:null,ar:null,rqpbtim:2000,tl:false},
                }
            },

            'US':{
                houseTm:15000,
                maxHReload:0,
                pList: [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4],
                adexIds : [6607472353, 6550143825, 6518593199, 6518008222, 6513829671, 6511653543, 3358336200],
                houseIds : [5445687960],
                telemetryProb:100000000, // Se envia telemetria si random()*telemetryProb==1
                reloadIds : [],
                reloadCampaignIds:[],
                houseLineItems:[],
                positions:{
                    // p: posicion del precio inicial
                    // mu: cantidad de precios a subir al dar adex
                    // md: cantidad de precios a bajar al dar house
                    // rv: random variation, numero de posiciones a sumar/restar aleatoriamente,del precio inicial
                    // nbb: Numero de house antes de bloquear un precio.
                    // st: stickyness, numero de adex antes de subir precio.
                    // ub: Numero de posiciones a desbloquear cada dia.
                    // ppbo: Protect prebid over: Se pueden proteger las pujas de prebid mayores que ese valor.
                    // ppbd : Protect prebid distance: Se protegen las pujas si: la ultima peticion dio house, o dio Adex, pero su gexp > puja, y gexp-puja <ppbd
                    // Es decir, si antes tenia un gexp de 2, y lo compró Adex, y ahora  me pujan 1 en prebid, si 1+ppbd > 2, el floor lo pone prebid. Si no, se mantiene el de gexp.
                    // hl: history length, numero de parejas precio/resultado a almacenar.
                    // mp: Indice del precio minimo para esta posicion.
                    // hr / ar : house reload | adex reload. (NOTA: adex reload es la configuracion por defecto para reloads de otros tipos, como prebid.
                    //     tim:timeout : recargar tras este timeout.
                    //     ov:viewable : Recargar si ha dado viewability. Si, ademas, está "tim", se recargará tras "tim", incluso si no da viewability.
                    //     pbtim:prebid timeout : recargar tras este timeout, si hay una puja de prebid encolada.
                    //     mr: maximo numero de recargas.
                    //     mintim: Numero minimo de segundos antes de una recarga.Si este timer está establecido, aunque dé viewability, se espera este tiempo minimo antes de la recarga.
                    // rqpbtim: Tras dar una impresion que es recargable, timeout antes de volver a hacer prebid.
                    // tl: A true si esta posicion se envia en telemetria.
                    'r':{p:12,mu:6,rv:2,ub:7},
                    'rb':{p:11,mu:4,rv:1},
                    'rc':{p:8,mu:2,rv:1,ub:3},
                    "rd":{p:8,mu:2,rv:1,ub:3},
                    're':{p:9,mu:4,rv:1},
                    'rf':{p:12,mu:4,rv:1},
                    'rg':{p:12,mu:4,rv:1},
                    'r-pnc':{p:8,mu:2,rv:1},
                    'rb-pnc':{p:8,mu:2,rv:1},
                    'r-nata':{p:8,mu:2,rv:1},
                    'r-nata-pnc':{p:8,mu:2,rv:1},
                    'm':{p:12,mu:6,rv:2,ub:7},
                    'mb':{p:10,mu:3,rv:1},
                    'm-pnc':{p:10,mu:2,rv:1},
                    'si':{p:8,mu:2,rv:1},
                    'sd':{p:8,mu:2,rv:1},
                    'c990x50_320x50':{p:8,mu:2,rv:1},
                    'c990x50_320x53':{p:8,mu:2,rv:1},
                    'default':{p:10,mu:3,md:2,rv:1,nbb:3,st:1,ub:10,ppbo:0.15,ppbd:1,hl:20,mp:0,hr:null,ar:null,tl:false}
                }
            }
        }