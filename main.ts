controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    while (!(Release) && -130 < Height) {
        Height += -5
        pause(10)
    }
    pauseUntil(() => Release)
    mySprite.vy = Height
    Height = 0
    Release = false
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Release = true
})
function SetupPlatformer () {
    mySprite.ay = 150
    gameStart = true
    overworld.setPlayerSprite(mySprite)
    overworld.loadMap(0, 0)
    scene.cameraFollowSprite(mySprite)
}
let gameStart = false
let Height = 0
let Release = false
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundColor(10)
overworld.setOverworld16(overworld.createMap16(
overworld.mapRow16(overworld.tilemap16(tilemap`level3`), overworld.tilemap16(tilemap`level`), overworld.tilemap16(tilemap`level4`)),
overworld.mapRow16(overworld.tilemap16(tilemap`level8`), overworld.tilemap16(tilemap`level9`), overworld.tilemap16(tilemap`level10`)),
overworld.mapRow16(overworld.tilemap16(tilemap`level14`), overworld.tilemap16(tilemap`level15`), overworld.tilemap16(tilemap`level16`))
))
SetupPlatformer()
