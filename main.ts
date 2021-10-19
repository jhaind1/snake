input.onButtonPressed(Button.A, function () {
    snakeheadiculus.turn(Direction.Right, 90)
})
let snakeheadiculus: game.LedSprite = null
snakeheadiculus = game.createSprite(0, 0)
let snack = game.createSprite(randint(0, 4), randint(0, 4))
while (true) {
    snakeheadiculus.move(1)
    basic.pause(200)
    if (snakeheadiculus.isTouching(snack)) {
        snack.set(LedSpriteProperty.X, randint(0, 4))
        snack.set(LedSpriteProperty.Y, randint(0, 4))
        game.addScore(1)
    }
}
basic.forever(function () {
	
})
