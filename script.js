let head=document.createElement("header")
document.body.appendChild(head)
head.style.width="1400px"
head.style.margin="40px auto"

document.body.style.backgroundColor="#C4B5A5"
let nav = document.createElement("nav")
nav.style.justifyContent="space-between"
nav.style.display="flex"
nav.style.boxSizing="border-box"
nav.style.paddingLeft="100px"
nav.style.alignItems="center"
nav.style.width="1300px"
nav.style.height="60px"
head.appendChild(nav)
let log=document.createElement("h2")
log.textContent="LOGO"
log.style.color="black"
log.style.fontSize="30px"
nav.appendChild(log)

let mi= document.createElement("div")
mi.style.display="flex"
mi.style.gap="30px"
mi.style.fontSize="20px"
mi.style.alignItems="center"
nav.appendChild(mi)



let l=document.createElement("h2")
l.textContent="Home"
l.style.color="black"
mi.appendChild(l)
let o=document.createElement("h2")
o.textContent="About us"
o.style.color="black"
mi.appendChild(o)
let g=document.createElement("h2")
g.textContent="Portfolio"
g.style.color="black"
mi.appendChild(g)

let btn =document.createElement("button")
btn.textContent="LightMode"
btn.style.backgroundColor="white"
btn.style.width="160px"
btn.style.height="50px"
btn.style.backgroundColor="Orange"
btn.style.fontSize="20px"
btn.style.borderRadius="10px"
mi.appendChild(btn)

let bt =document.createElement("button")
bt.textContent="DarkMode"
bt.style.backgroundColor="white"
bt.style.width="160px"
bt.style.height="50px"
bt.style.backgroundColor="black"
bt.style.color="white"
bt.style.fontSize="20px"
bt.style.borderRadius="10px"
mi.appendChild(bt)

let display =document.createElement("div")
display.style.display="flex"
display.style.marginTop="79px"
head.appendChild(display)

let text=document.createElement("div")
text.style.width="426px"
text.style.marginLeft="100px"
display.appendChild(text)

let h=document.createElement("h1")
h.style.width="350px"
h.style.fontSize="36px"
h.style.fontWeight="700"
h.textContent="Work that we produce \n for our clients"
text.appendChild(h)
let p=document.createElement("p")
p.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
p.style.width="425px"
p.style.height="101px"
p.style.fontSize="16px"
p.style.fontWeight="500px"
p.style.marginTop="77px"
text.appendChild(p)

let b =document.createElement("button")
b.textContent="Get more details"
b.style.backgroundColor="orange"
b.style.width="134px"
b.style.height="34px"
b.style.borderRadius="20px"
text.appendChild(b)

let img=document.getElementById("img")
display.appendChild(img)


bt.addEventListener("click", function(){
    alert(`Dark mode Funksiyasi yoqildi`)

    document.body.style.backgroundColor="black"
    log.style.color="white"
    l.style.color="white"
    o.style.color="white"
    g.style.color="white"
    h.style.color="white"
    p.style.color="white"
    b.style.color="white"
    btn.style.color="white"
    btn.style.backgroundColor="#C4B5A5"
    bt.style.backgroundColor="orange"
})
btn.addEventListener("click", function(){
    alert(`Light mode Funksiyasi yoqildi`)

    document.body.style.backgroundColor="#C4B5A5"
    log.style.color="black"
    l.style.color="black"
    o.style.color="black"
    g.style.color="black"
    h.style.color="black"
    p.style.color="black"
    b.style.color="black"
    btn.style.color="black"
    btn.style.backgroundColor="orange"
    bt.style.backgroundColor="black"
})
