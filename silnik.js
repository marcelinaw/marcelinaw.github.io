import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom({
    "fullscren":"true"
});

//

loadSprite("kartka","słabyobrzek.maria.ma.lepszy.png")



add([
    sprite("kartka")

])

loadSprite("mike","mikolaj.dobry.png")

    const mike = add([sprite("mike"),
    pos(100,180)]
    
)

onUpdate(()=>{
    if(mike.pos.x < 450) mike.pos.x = mike.pos.x+1
})

onKeyPress(("space"),()=>{play("Gdy Sliczna Panna")})





