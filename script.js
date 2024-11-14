let btn = document.getElementById("btn");
class jj{
    constructor(){
        this.song = "Mabullona vana villu, la matti lona niti jallu la, gundelona premumullula daginavuga, andamaina ashatirika kalchuthundi konte korika prem pichchi penchadanika champadanika ,korukunnna preyasive duramina urvashive, jaleleni rakshasive gundeloni na kassive, chikatinta na shashive ,sarasaku cheli cheli ra,ella videchi batakane pilla ra , nuvve kanabadwa, kallara, ninne talachi talachi ila unnaga,nuvve yedha sadive,annaga ella videchi batakane pilla ra nuvve kanabadawa  kallara, ninne talachi talachi ila unnaga,nuvve yedha sadive....."
    }
    hello(){
        console.log(this.song);
        let display = document.getElementById('display');
        display.innerHTML = `${this.song}`;
        display.style.color = "white";
        document.body.style.background = `black`;
    }
}
let obj = new jj();
btn.addEventListener("click",obj.hello);
// When a function is used as a callback, this is lost.