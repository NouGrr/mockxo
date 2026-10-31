// Original procedural scenes, inspired by common branding and product mockups.
export const popularModels = [
  {id:'tshirt',title:'T-shirt essentiel',cat:'apparel',label:'TEXTILE',keywords:'tshirt t shirt vêtement mode merchandising'},
  {id:'tote',title:'Tote bag signature',cat:'apparel',label:'TEXTILE',keywords:'sac shopping coton merchandising'},
  {id:'mug',title:'Mug céramique',cat:'packaging',label:'PACKAGING',keywords:'tasse café cup merchandising'},
  {id:'cards',title:'Cartes de visite',cat:'print',label:'ÉDITION',keywords:'carte business card papeterie identité branding'},
  {id:'poster',title:'Affiche encadrée',cat:'print',label:'ÉDITION',keywords:'poster cadre art print décoration'},
  {id:'laptop',title:'Ordinateur portable',cat:'tech',label:'TECHNOLOGIE',keywords:'laptop ordinateur écran web application desktop'},
  {id:'box',title:'Boîte de produit',cat:'packaging',label:'PACKAGING',keywords:'boite carton emballage coffret branding'},
  {id:'can',title:'Canette fraîche',cat:'packaging',label:'PACKAGING',keywords:'boisson soda canette aluminium drink'}
].map(model=>({...model,detail:'Scène 3D personnalisable'}));

export function makePopularTemplate(id,{T,mesh,rounded}) {
  if(!popularModels.some(model=>model.id===id)) return null;
  const scene=new T.Group();
  const group=name=>{const g=new T.Group();g.name=name;scene.add(g);return g};
  const part=(parent,shape,name,x,y,z)=>{shape.name=name;shape.position.set(x,y,z);parent.add(shape);return shape};
  const box=(parent,name,w,h,d,color,x,y,z,r=.025)=>part(parent,rounded(w,h,d,color,r),name,x,y,z);
  const cylinder=(parent,name,top,bottom,h,color,x,y,z)=>part(parent,mesh(new T.CylinderGeometry(top,bottom,h,64),color,.3,.1),name,x,y,z);

  if(id==='tshirt') {
    const shirt=group('T-shirt');
    const shape=new T.Shape();
    shape.moveTo(-.42,1.22);shape.lineTo(-.83,1.08);shape.lineTo(-1.22,.45);
    shape.lineTo(-.81,.22);shape.lineTo(-.63,.57);shape.lineTo(-.63,-1.05);
    shape.lineTo(.63,-1.05);shape.lineTo(.63,.57);shape.lineTo(.81,.22);
    shape.lineTo(1.22,.45);shape.lineTo(.83,1.08);shape.lineTo(.42,1.22);
    shape.bezierCurveTo(.28,.88,-.28,.88,-.42,1.22);
    const fabric=mesh(new T.ExtrudeGeometry(shape,{depth:.1,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.035,bevelThickness:.03}),'#ddd4f0',.9,0);
    part(shirt,fabric,'Coton',0,1.2,0);
    box(shirt,'Motif poitrine',.56,.62,.012,'#8765b6',0,1.6,.15);
    box(shirt,'Signature',.3,.035,.016,'#eee6f5',0,1.6,.16,.008);
    shirt.rotation.y=-.18;
  }
  if(id==='tote') {
    const bag=group('Tote bag');
    box(bag,'Sac en toile',1.65,1.72,.26,'#e6d9c3',0,1.05,0,.09);
    for(const z of [-.14,.14]) {
      const curve=new T.CatmullRomCurve3([new T.Vector3(-.47,1.85,z),new T.Vector3(-.43,2.48,z),new T.Vector3(0,2.67,z),new T.Vector3(.43,2.48,z),new T.Vector3(.47,1.85,z)]);
      part(bag,mesh(new T.TubeGeometry(curve,48,.045,8,false),'#d2bfa2',.9,0),'Anse',0,0,0);
    }
    box(bag,'Étiquette',.73,.78,.016,'#9373b8',0,1.12,.143);
    bag.rotation.y=-.25;
  }
  if(id==='mug') {
    const mug=group('Mug');
    const profile=[new T.Vector2(0,0),new T.Vector2(.55,0),new T.Vector2(.6,.08),new T.Vector2(.62,1.28),new T.Vector2(.6,1.34),new T.Vector2(.53,1.34),new T.Vector2(.51,1.27),new T.Vector2(.49,.13),new T.Vector2(0,.13)];
    part(mug,mesh(new T.LatheGeometry(profile,64),'#e3d6f2',.2,0),'Céramique',-.23,.06,0);
    const handle=part(mug,mesh(new T.TorusGeometry(.4,.105,16,48),'#e3d6f2',.2,0),'Anse',.43,.73,0);handle.scale.x=.85;
    const mark=part(mug,mesh(new T.CircleGeometry(.25,48),'#9069b3',.6,0),'Médaillon',-.23,.73,.616);mark.rotation.y=-.05;
  }
  if(id==='cards') {
    const stack=group('Pile de cartes');
    for(let i=0;i<7;i++) box(stack,'Carte '+(i+1),2.25,.023,1.28,i===6?'#c7b4e0':'#f3eaf7',0,.025+i*.025,0,.008);
    const card=group('Carte présentée');
    box(card,'Papier',2.25,1.28,.035,'#eee5f5',0,0,0,.015);
    box(card,'Logo',.38,.38,.012,'#9168b6',-.65,.18,.024);
    for(let i=0;i<3;i++) box(card,'Ligne '+(i+1),.73-i*.12,.035,.012,'#9b91ae',.23,.18-i*.14,.024,.008);
    card.position.set(.12,1.12,-.12);card.rotation.set(-.13,-.24,-.1);
  }
  if(id==='poster') {
    const poster=group('Affiche encadrée');
    box(poster,'Fond du cadre',1.92,2.62,.13,'#302c39',0,1.36,0);
    box(poster,'Passe-partout',1.76,2.46,.025,'#eee7db',0,1.36,.079);
    box(poster,'Affiche',1.47,2.16,.012,'#ba9dd8',0,1.36,.1);
    part(poster,mesh(new T.CircleGeometry(.5,64),'#e6d4ae',.7,0),'Soleil',0,1.72,.112);
    box(poster,'Composition',.65,.88,.016,'#75618f',.2,.9,.117);
    box(poster,'Signature',.65,.045,.015,'#eee7db',-.16,.5,.13,.008);
    poster.rotation.y=-.18;
  }
  if(id==='laptop') {
    const laptop=group('Ordinateur portable');
    box(laptop,'Châssis',2.7,.11,1.75,'#a7a5b8',0,.12,.22,.05);
    box(laptop,'Clavier',2.22,.012,.72,'#34303f',0,.181,.02);
    for(let row=0;row<4;row++) for(let col=0;col<11;col++) box(laptop,'Touche',.15,.012,.12,'#777184',-1+col*.2,.192,-.24+row*.17,.01);
    box(laptop,'Pavé tactile',.8,.014,.42,'#c2bece',0,.183,.74);
    const display=new T.Group();display.name='Écran';display.position.set(0,.16,-.62);display.rotation.x=-.16;laptop.add(display);
    box(display,'Coque',2.7,1.73,.09,'#a7a5b8',0,.865,0,.04);
    box(display,'Dalle',2.52,1.54,.015,'#292437',0,.865,.053);
    box(display,'Interface',2.37,1.39,.012,'#b295d1',0,.865,.065);
    box(display,'Fenêtre',1.3,.87,.012,'#e2d5ee',.22,.88,.078);
    box(display,'Navigation',.44,1.13,.012,'#8971a4',-.84,.88,.078);
    laptop.rotation.y=-.15;
  }
  if(id==='box') {
    const packaging=group('Boîte');
    box(packaging,'Corps du coffret',1.55,1.78,1.15,'#c1a6dd',0,.91,0,.035);
    box(packaging,'Couvercle',1.61,.18,1.21,'#dfd0ee',0,1.89,0,.025);
    box(packaging,'Étiquette',.91,1.04,.018,'#f0e9df',0,.98,.586);
    box(packaging,'Emblème',.3,.3,.018,'#9270b2',0,1.18,.603);
    box(packaging,'Signature',.47,.045,.018,'#b3a3bd',0,.77,.603,.008);
    packaging.rotation.y=-.28;
  }
  if(id==='can') {
    const can=group('Canette');
    const profile=[new T.Vector2(0,0),new T.Vector2(.43,0),new T.Vector2(.48,.08),new T.Vector2(.5,.2),new T.Vector2(.5,1.56),new T.Vector2(.45,1.69),new T.Vector2(.45,1.75),new T.Vector2(0,1.75)];
    part(can,mesh(new T.LatheGeometry(profile,64),'#9ccbd3',.3,.55),'Corps aluminium',0,.03,0);
    const top=cylinder(can,'Dessus',.435,.435,.025,'#c9ccd5',0,1.793,0);top.material.metalness=.85;
    for(const y of [.09,1.79]) {const rim=part(can,mesh(new T.TorusGeometry(.45,.025,12,64),'#dadde3',.18,.9),'Sertissage',0,y,0);rim.rotation.x=Math.PI/2;}
    const tab=part(can,mesh(new T.TorusGeometry(.105,.03,12,32),'#a3a5af',.2,.9),'Languette',0,1.818,.045);tab.rotation.x=Math.PI/2;tab.scale.y=1.5;
    cylinder(can,'Étiquette',.504,.504,.85,'#d9e9cf',0,.9,0);
    part(can,mesh(new T.CircleGeometry(.23,48),'#68958a',.6,0),'Emblème',0,.94,.507);
    can.rotation.y=-.2;
  }
  return scene;
}
