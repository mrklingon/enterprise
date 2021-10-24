function Splash () {
    Ent = images.createBigImage(`
        . . . . . . . . . .
        # # # # . # # # # #
        . . # . . . # . . .
        . . . # # # # # . .
        . . . . . . . . . .
        `)
    Ent2 = images.createBigImage(`
        # . . . . . . # . .
        . . . . . . . . . .
        . . # # # . . . # .
        . # # # # # . . . .
        # # # # # # # . . .
        `)
    Ent.scrollImage(1, 200)
    Ent2.scrollImage(1, 200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        Ship.move(1)
        basic.pause(100)
        Ship.ifOnEdgeBounce()
    }
})
function mkPlanet () {
    Planet = game.createSprite(randint(0, 4), randint(0, 4))
}
input.onButtonPressed(Button.AB, function () {
    Ship.set(LedSpriteProperty.X, randint(0, 4))
    Ship.set(LedSpriteProperty.Y, randint(0, 4))
    Planet.delete()
    Splash()
    mkPlanet()
})
input.onButtonPressed(Button.B, function () {
    Dir += 1
    if (8 == Dir) {
        Dir = 0
    }
    basic.showNumber(Dir)
    Ship.set(LedSpriteProperty.Direction, 45 * Dir)
})
let Planet: game.LedSprite = null
let Ent2: Image = null
let Ent: Image = null
let Dir = 0
let Ship: game.LedSprite = null
Splash()
Ship = game.createSprite(2, 2)
Dir = 0
Ship.set(LedSpriteProperty.Direction, 45 * Dir)
mkPlanet()
