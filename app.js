const H=[{id:1,name:"Unity Hall",type:"Male",rooms:40,cap:4,price:45000},{id:2,name:"Grace Hall",type:"Female",rooms:36,cap:4,price:45000},{id:3,name:"Heritage Suites",type:"Female",rooms:20,cap:2,price:80000},{id:4,name:"Pioneer Lodge",type:"Male",rooms:24,cap:2,price:75000}];
const mem={};
const db={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return k in mem?mem[k]:d}},set(k,v){mem[k]=v;try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
if(!db.get('users')){db.set('users',[{id:1,name:'Demo Student',email:'student@demo.com',pw:'demo1234',role:'student',gender:'Male',matric:'CSC/21/001'},{id:2,name:'Hostel Admin',email:'admin@demo.com',pw:'demo1234',role:'admin'}]);db.set('apps',[])}
const users=()=>db.get('users',[]),apps=()=>db.get('apps',[]);
const me=()=>users().find(u=>u.id===db.get('me'));
const used=id=>apps().filter(a=>a.hid===id&&a.status==='Approved').length;
const total=h=>h.rooms*h.cap;
const money=n=>'₦'+n.toLocaleString();
function login(e,p){const u=users().find(u=>u.email===e.trim().toLowerCase()&&u.pw===p);if(u)db.set('me',u.id);return u}
function logout(){db.set('me',null);location.href='index.html'}
function guard(role){const u=me();if(!u){location.href='login.html';return}if(role&&u.role!==role){location.href=u.role==='admin'?'admin.html':'dashboard.html';return}return u}
function approve(id){const A=apps(),a=A.find(x=>x.id===id),h=H.find(x=>x.id===a.hid),n=used(h.id);if(n>=total(h)){alert('This hostel is full.');return}a.status='Approved';a.room=Math.floor(n/h.cap)+1;a.bed=n%h.cap+1;db.set('apps',A)}
document.addEventListener('DOMContentLoaded',()=>{
const u=me(),hd=document.getElementById('hd'),ft=document.getElementById('ft'),p=location.pathname.split('/').pop()||'index.html';
const L=[['index.html','Home'],['hostels.html','Hostels']];
if(u)L.push(u.role==='admin'?['admin.html','Admin']:['dashboard.html','Dashboard']);
hd.innerHTML='<div class="wrap nav"><a class="logo" href="index.html"><span>H</span>HostelAlloc</a><button class="mb" aria-label="Menu" onclick="this.parentNode.classList.toggle(\'open\')">☰</button><div class="links">'+L.map(([h,t])=>'<a href="'+h+'" class="'+(p===h?'on':'')+'">'+t+'</a>').join('')+(u?'<a href="#" onclick="logout();return false">Log out</a>':'<a href="login.html" class="'+(p==='login.html'?'on':'')+'">Log in</a><a class="btn" href="register.html">Get started</a>')+'</div></div>';
if(ft)ft.innerHTML='<div class="wrap">© 2026 HostelAlloc · Hostel Allocation Management System</div>';
});
