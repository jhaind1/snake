input.onButtonPressed(Button.A, function () {
    snakeheadiculus.turn(Direction.Right, 90)
})
let snakeheadiculus: game.LedSprite = null
snakeheadiculus = game.createSprite(0, 0)
let snack = game.createSprite(randint(0, 4), randint(0, 4))
let snake2 = game.createSprite(snakeheadiculus.get(LedSpriteProperty.X), snakeheadiculus.get(LedSpriteProperty.Y))
snake2.set(LedSpriteProperty.Brightness, 0)
while (true) {
    snakeheadiculus.move(1)
    basic.pause(200)
    if (snakeheadiculus.isTouching(snack)) {
        snack.set(LedSpriteProperty.X, randint(0, 4))
        snack.set(LedSpriteProperty.Y, randint(0, 4))
        game.addScore(1)
    }
    if (game.score() >= 1) {
        if (snakeheadiculus.get(LedSpriteProperty.Direction) == 0) {
            snake2.set(LedSpriteProperty.X, snakeheadiculus.get(LedSpriteProperty.X))
            snake2.set(LedSpriteProperty.Y, snakeheadiculus.get(LedSpriteProperty.Y) + 1)
        }
        if (snakeheadiculus.get(LedSpriteProperty.Direction) == 90) {
            snake2.set(LedSpriteProperty.X, snakeheadiculus.get(LedSpriteProperty.X) - 1)
            snake2.set(LedSpriteProperty.Y, snakeheadiculus.get(LedSpriteProperty.Y))
        }
        if (snakeheadiculus.get(LedSpriteProperty.Direction) == -90) {
            snake2.set(LedSpriteProperty.X, snakeheadiculus.get(LedSpriteProperty.X) + 1)
            snake2.set(LedSpriteProperty.Y, snakeheadiculus.get(LedSpriteProperty.Y))
        }
        if (snakeheadiculus.get(LedSpriteProperty.Direction) == 180) {
            snake2.set(LedSpriteProperty.X, snakeheadiculus.get(LedSpriteProperty.X) - 1)
            snake2.set(LedSpriteProperty.Y, snakeheadiculus.get(LedSpriteProperty.Y))
        }
        snake2.set(LedSpriteProperty.Brightness, 10000)
    }
}
