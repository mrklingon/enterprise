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
    Moves += -1
    if (Moves < 1) {
        game.gameOver()
    }
    for (let index = 0; index <= 4; index++) {
        Ship.move(1)
        basic.pause(100)
        Ship.ifOnEdgeBounce()
        if (9 < Planets) {
            if (Ship.isTouching(Asteroid)) {
                Moves += -2
                basic.showIcon(IconNames.No)
                basic.pause(100)
            }
        }
        if (Ship.isTouching(Planet)) {
            Moves += 2
            Planets += 1
            if (10 == Planets) {
                Asteroid = game.createSprite(randint(0, 4), randint(0, 4))
                Asteroid.set(LedSpriteProperty.Direction, randint(0, 360))
            }
            game.addScore(5)
            for (let index2 = 0; index2 < 2; index2++) {
                basic.showIcon(IconNames.SmallDiamond)
                basic.pause(100)
                basic.showIcon(IconNames.Diamond)
                basic.pause(100)
            }
            warp()
        }
    }
})
function warp () {
    Ship.set(LedSpriteProperty.X, randint(0, 4))
    Ship.set(LedSpriteProperty.Y, randint(0, 4))
    Planet.delete()
    Splash()
    mkPlanet()
}
function mkPlanet () {
    Planet = game.createSprite(randint(0, 4), randint(0, 4))
}
input.onButtonPressed(Button.AB, function () {
    Moves += -5
    warp()
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
let Asteroid: game.LedSprite = null
let Ent2: Image = null
let Ent: Image = null
let Planets = 0
let Moves = 0
let Dir = 0
let Ship: game.LedSprite = null
Splash()
Ship = game.createSprite(2, 2)
Dir = 0
Ship.set(LedSpriteProperty.Direction, 45 * Dir)
mkPlanet()
Moves = 30
Planets = 0
basic.forever(function () {
    basic.pause(250)
    if (Planets > 9) {
        for (let index = 0; index < 4; index++) {
            Asteroid.move(1)
            Asteroid.ifOnEdgeBounce()
        }
        Asteroid.turn(Direction.Right, randint(17, 107))
    }
})
