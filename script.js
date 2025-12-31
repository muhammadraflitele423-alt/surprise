/* LOGIN */
function login(){
  const u = user.value;
  const p = pass.value;

  if(u === "Karien Krisdina S" && p === "070321"){
    window.location.href = "home.html";
  } else {
    alert("Hehe salah 🤭");
  }
}

/* MUSIC */
function playMusic(){
  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play();
}

/* TYPING */
const text = "Selamat Lulus Sidang Skripsi 🎓";
let i = 0;
const typing = document.getElementById("typing");

if(typing){
  function type(){
    if(i < text.length){
      typing.innerHTML += text.charAt(i);
      i++;
      setTimeout(type,100);
    }
  }
  type();
}

/* FLOWERS */
const flowers = document.querySelector(".flowers");
if(flowers){
  setInterval(()=>{
    const f = document.createElement("div");
    f.className = "flower";
    f.innerHTML = ["🌸","💮","🌼"][Math.floor(Math.random()*3)];
    f.style.left = Math.random()*100+"vw";
    flowers.appendChild(f);
    setTimeout(()=>f.remove(),10000);
  },500);
}

/* TANYA */
function tanya(){
  if(confirm("Mau liat buktinya?")){
    window.location.href="bukti.html";
  } else {
    penutup.scrollIntoView({behavior:"smooth"});
  }
}
