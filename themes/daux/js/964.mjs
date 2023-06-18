export const id=964;export const ids=[964];export const modules={6964:(e,t,s)=>{s.d(t,{diagram:()=>L});var o=s(1341),r=s(5625),i=s(4309),a=s(3110),n=s(2566),d=s(1188);s(7856),s(7484),s(9451),s(9368),s(1898),s(7967);const l="rect",c="rectWithTitle",p="statediagram",g=`${p}-state`,b="transition",h=`${b} note-edge`,u=`${p}-note`,y=`${p}-cluster`,f=`${p}-cluster-alt`,x="parent",m="note",w="----",$=`${w}${m}`,T=`${w}${x}`,S="fill:none",D="fill: #333",k="text",v="normal";let A={},B=0;function E(e="",t=0,s="",o=w){return`state-${e}${null!==s&&s.length>0?`${o}${s}`:""}-${t}`}const R=(e,t,s,r,i,n)=>{const d=s.id,p=null==(b=r[d])?"":b.classes?b.classes.join(" "):"";var b;if("root"!==d){let t=l;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==o.a&&(t=s.type),A[d]||(A[d]={id:d,shape:t,description:a.e.sanitizeText(d,(0,a.g)()),classes:`${p} ${g}`});const r=A[d];s.description&&(Array.isArray(r.description)?(r.shape=c,r.description.push(s.description)):r.description.length>0?(r.shape=c,r.description===d?r.description=[s.description]:r.description=[r.description,s.description]):(r.shape=l,r.description=s.description),r.description=a.e.sanitizeTextOrArray(r.description,(0,a.g)())),1===r.description.length&&r.shape===c&&(r.shape=l),!r.type&&s.doc&&(a.l.info("Setting cluster for ",d,N(s)),r.type="group",r.dir=N(s),r.shape=s.type===o.b?"divider":"roundedWithTitle",r.classes=r.classes+" "+y+" "+(n?f:""));const i={labelStyle:"",shape:r.shape,labelText:r.description,classes:r.classes,style:"",id:d,dir:r.dir,domId:E(d,B),type:r.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:u,style:"",id:d+$+"-"+B,domId:E(d,B,m),type:r.type,padding:15},o={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:r.classes,style:"",id:d+T,domId:E(d,B,x),type:"group",padding:0};B++;const a=d+T;e.setNode(a,o),e.setNode(t.id,t),e.setNode(d,i),e.setParent(d,a),e.setParent(t.id,a);let n=d,l=t.id;"left of"===s.note.position&&(n=t.id,l=d),e.setEdge(n,l,{arrowhead:"none",arrowType:"",style:S,labelStyle:"",classes:h,arrowheadStyle:D,labelpos:"c",labelType:k,thickness:v})}else e.setNode(d,i)}t&&"root"!==t.id&&(a.l.trace("Setting node ",d," to be child of its parent ",t.id),e.setParent(d,t.id)),s.doc&&(a.l.trace("Adding nodes children "),V(e,s,s.doc,r,i,!n))},V=(e,t,s,r,i,n)=>{a.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case o.c:case o.a:R(e,t,s,r,i,n);break;case o.S:{R(e,t,s.state1,r,i,n),R(e,t,s.state2,r,i,n);const o={id:"edge"+B,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:S,labelStyle:"",label:a.e.sanitizeText(s.description,(0,a.g)()),arrowheadStyle:D,labelpos:"c",labelType:k,thickness:v,classes:b};e.setEdge(s.state1.id,s.state2.id,o,B),B++}}}))},N=(e,t=o.e)=>{let s=t;if(e.doc)for(let t=0;t<e.doc.length;t++){const o=e.doc[t];"dir"===o.stmt&&(s=o.value)}return s},C={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){a.l.trace("Extracting classes"),t.db.clear();try{return t.parser.parse(e),t.db.extract(t.db.getRootDocV2()),t.db.getClasses()}catch(e){return e}},draw:function(e,t,s,c){a.l.info("Drawing state diagram (v2)",t),A={};let g=c.db.getDirection();void 0===g&&(g=o.D);const{securityLevel:b,state:h}=(0,a.g)(),u=h.nodeSpacing||50,y=h.rankSpacing||50;a.l.info(c.db.getRootDocV2()),c.db.extract(c.db.getRootDocV2()),a.l.info(c.db.getRootDocV2());const f=c.db.getStates(),x=new r.k({multigraph:!0,compound:!0}).setGraph({rankdir:N(c.db.getRootDocV2()),nodesep:u,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let m;R(x,void 0,c.db.getRootDocV2(),f,c.db,!0),"sandbox"===b&&(m=(0,i.Ys)("#i"+t));const w="sandbox"===b?(0,i.Ys)(m.nodes()[0].contentDocument.body):(0,i.Ys)("body"),$=w.select(`[id="${t}"]`),T=w.select("#"+t+" g");(0,n.r)(T,x,["barb"],p,t),d.u.insertTitle($,"statediagramTitleText",h.titleTopMargin,c.db.getDiagramTitle());const S=$.node().getBBox(),D=S.width+16,k=S.height+16;$.attr("class",p);const v=$.node().getBBox();(0,d.k)($,k,D,h.useMaxWidth);const B=`${v.x-8} ${v.y-8} ${D} ${k}`;a.l.debug(`viewBox ${B}`),$.attr("viewBox",B);const E=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const e of E){const t=e.getBBox(),s=document.createElementNS("http://www.w3.org/2000/svg",l);s.setAttribute("rx",0),s.setAttribute("ry",0),s.setAttribute("width",t.width),s.setAttribute("height",t.height),e.insertBefore(s,e.firstChild)}}},L={parser:o.p,db:o.d,renderer:C,styles:o.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}};