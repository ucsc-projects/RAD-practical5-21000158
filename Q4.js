class Game {
    theme
    gameAvatar
    level


    constructor(theme, gameAvatar, level) {
        if (this.constructor == Game) {
            throw new Error("Abstract classes cannot be instantiated")
        }
        this.theme = theme;
        this.gameAvatar = gameAvatar;
        this.level = level;
    }

    winning() {
        throw new Error("This method should be implemented")
    }

    losing() {
        throw new Error("This method should be implemented")
    }

    pause() {
        console.log("Paused!")
    }

    resume() {
        console.log("Resume...")
    }

    cancel() {
        console.log("Cancel")
    }
}

class CarGame extends Game {

    constructor(theme, gameAvatar, level) {
        super(theme, gameAvatar, level);
    }

    winning() {
        console.log("You reached winning score 100! Winner!")
    }

    losing() {
        console.log("Lost!")
    }
}

class ShootingGame extends Game {
    constructor(theme, gameAvatar, level) {
        super(theme, gameAvatar, level);
    }

    winning() {
        console.log("Winner!")
    }

    losing() {
        console.log("Lost!")
    }

    nextMission() {
        console.log("Loading next mission...")
    }
}

class PuzzleGame extends Game {
    constructor(theme, gameAvatar, level) {
        super(theme, gameAvatar, level);
    }

    winning() {
        console.log("Winner!")
    }

    losing() {
        console.log("Lost")
    }
}