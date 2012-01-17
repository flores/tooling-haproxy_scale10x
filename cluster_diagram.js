var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
    this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){

var json =
{
    "id": "haproxy1",
    "name": "haproxy-http",
    "data": {},
    "children": [
        {
            "id": "static1",
            "name": "static",
            "data": {},
            "children": [
                {
                    "id": "nginx1",
                    "name": "nginx1",
                    "data": {},
                    "children": []
                },
                {
                    "id": "nginx2",
                    "name": "nginx2",
                    "data": {},
                    "children": []
                },
                {
                    "id": "nginx3",
                    "name": "nginx3",
                    "data": {},
                    "children": []
                },
                {
                    "id": "nginx4",
                    "name": "nginx4",
                    "data": {},
                    "children": []
                },
                {
                    "id": "nginx5",
                    "name": "nginx5",
                    "data": {},
                    "children": []
                },
                {
                    "id": "nginx6",
                    "name": "nginx6",
                    "data": {},
                    "children": []
                },
                {
                    "id": "nginx7",
                    "name": "nginx7",
                    "data": {},
                    "children": []
                },
                {
                    "id": "nginx8",
                    "name": "nginx8",
                    "data": {},
                    "children": []
                },
                {
                    "id": "nginx9",
                    "name": "nginx9",
                    "data": {},
                    "children": []
                },
                {
                    "id": "nginx10",
                    "name": "nginx10",
                    "data": {},
                    "children": []
                }
            ]
        },
	{
            "id": "blog1",
            "name": "/blog",
            "data": {},
            "children": [
                {
                    "id": "blog_server1",
                    "name": "cms1",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy_mysql1",
                            "name": "haproxy-tcp-mysql",
                            "data": {},
                            "children": [
                                {
                                    "id": "mysql_masterapp1",
                                    "name": "mysql_master1",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "mysql_masterapp1-2",
                                    "name": "mysql_master2",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "blog2",
                    "name": "cms2",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy_mysql2",
                            "name": "haproxy-tcp-mysql",
                            "data": {},
                            "children": [
                                {
                                    "id": "mysql_masterapp2",
                                    "name": "mysql_master1",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "mysql_masterapp2-2",
                                    "name": "mysql_master2",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "blog3",
                    "name": "cms3",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy_mysql3",
                            "name": "haproxy-tcp-mysql",
                            "data": {},
                            "children": [
                                {
                                    "id": "mysql_masterapp3",
                                    "name": "mysql_master1",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "mysql_masterapp3-2",
                                    "name": "mysql_master2",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
	    ]
	},
        {
            "id": "mobile1",
            "name": "/mobile",
            "data": {},
            "children": [
                {
                    "id": "mobile-app1",
                    "name": "mobile-app1",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redis1",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_master1",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spare1",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "mobile-app2",
                    "name": "mobile-app2",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redis2",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_master2",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spare2",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "mobile-app3",
                    "name": "mobile-app3",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redis3",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_master3",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spare3",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "mobile-app4",
                    "name": "mobile-app4",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redis4",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_master4",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spare4",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "mobile-app5",
                    "name": "mobile-app5",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redis5",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_master5",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spare5",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "mobile-app6",
                    "name": "mobile-app6",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redis6",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_master6",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spare6",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "mobile-app7",
                    "name": "mobile-app7",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redis7",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_master7",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spare7",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "mobile-app8",
                    "name": "mobile-app8",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redis8",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_master8",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spare8",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "mobile-app9",
                    "name": "mobile-app9",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redis9",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_master9",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spare9",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "mobile-app10",
                    "name": "mobile-app10",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redis10",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_master10",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spare10",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "app1",
            "name": "/app",
            "data": {},
            "children": [
                {
                    "id": "app_server1",
                    "name": "app1",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redisapp1",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_masterapp1",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spareapp1",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "app2",
                    "name": "app2",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redisapp2",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_masterapp2",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spareapp2",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "app3",
                    "name": "app3",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redisapp3",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_masterapp3",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spareapp3",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "app4",
                    "name": "app4",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redisapp4",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_masterapp4",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spareapp4",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "app5",
                    "name": "app5",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redisapp5",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_masterapp5",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spareapp5",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "app6",
                    "name": "app6",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redisapp6",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_masterapp6",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spareapp6",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "app7",
                    "name": "app7",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redisapp7",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_masterapp7",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spareapp7",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "app8",
                    "name": "app8",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redisapp8",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_masterapp8",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spareapp8",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "app9",
                    "name": "app9",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redisapp9",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_masterapp9",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spareapp9",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "app10",
                    "name": "app10",
                    "data": {},
                    "children": [
                        {
                            "id": "haproxy-tcp-redisapp10",
                            "name": "haproxy-tcp-redis",
                            "data": {},
                            "children": [
                                {
                                    "id": "redis_masterapp10",
                                    "name": "redis_master",
                                    "data": {},
                                    "children": []
                                },
                                {
                                    "id": "redis_hot_spareapp10",
                                    "name": "redis_hot_spare",
                                    "data": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}







    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth - 50, h = infovis.offsetHeight - 50;
    
    //init Hypertree
    var ht = new $jit.Hypertree({
      //id of the visualization container
      injectInto: 'infovis',
      //canvas width and height
      width: w,
      height: h,
      //Change node and edge styles such as
      //color, width and dimensions.
      Node: {
          dim: 9,
          color: "#f00"
      },
      Edge: {
          lineWidth: 2,
          color: "#088"
      },
      onBeforeCompute: function(node){
          Log.write("centering");
      },
      //Attach event handlers and add text to the
      //labels. This method is only triggered on label
      //creation
      onCreateLabel: function(domElement, node){
          domElement.innerHTML = node.name;
          $jit.util.addEvent(domElement, 'click', function () {
              ht.onClick(node.id, {
                  onComplete: function() {
                      ht.controller.onComplete();
                  }
              });
          });
      },
      //Change node styles when labels are placed
      //or moved.
      onPlaceLabel: function(domElement, node){
          var style = domElement.style;
          style.display = '';
          style.cursor = 'pointer';
          if (node._depth <= 1) {
              style.fontSize = "0.8em";
              style.color = "#ddd";

          } else if(node._depth == 2){
              style.fontSize = "0.7em";
              style.color = "#555";

          } else {
              style.display = 'none';
          }

          var left = parseInt(style.left);
          var w = domElement.offsetWidth;
          style.left = (left - w / 2) + 'px';
      },
      
      onComplete: function(){
          Log.write("done");
          
          //Build the right column relations list.
          //This is done by collecting the information (stored in the data property) 
          //for all the nodes adjacent to the centered node.
          var node = ht.graph.getClosestNodeToOrigin("current");
          var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
          html += "<ul>";
          node.eachAdjacency(function(adj){
              var child = adj.nodeTo;
              if (child.data) {
                  var rel = (child.data.band == node.name) ? child.data.relation : node.data.relation;
                  html += "<li>" + child.name + " " + "<div class=\"relation\">(relation: " + rel + ")</div></li>";
              }
          });
          html += "</ul>";
          $jit.id('inner-details').innerHTML = html;
      }
    });
    //load JSON data.
    ht.loadJSON(json);
    //compute positions and plot.
    ht.refresh();
    //end
    ht.controller.onComplete();
}

