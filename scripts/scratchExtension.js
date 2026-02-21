class ScratchExtension {
    constructor() {
    }
    getInfo() {
        return {
            "id": "mythology",
            "name": "Mythology",
            "blocks": [
                {
                    "opcode": "mythologyURL",
                    "blockType": "reporter",
                    "text": "Generate Mythology Trivia"
                }
            ],
        };
    }
    mythologyURL() {
        return fetch("https://opentdb.com/api.php?amount=1&category=20&difficulty=easy")
            .then(response => response.text());
    }
}
Scratch.extensions.register(new ScratchExtension());
/* class ScratchExtension {
    constructor() {
    }
    getInfo() {
        return {
            "id": "mythology",
            "name": "Mythology",
            "blocks": [
                {
                    "opcode": "mythologyURL",
                    "blockType": "reporter",
                    "text": "Generate Mythology Trivia"
                }
            ],
        };
    }
    mythologyURL() {
        return fetch("https://opentdb.com/api.php?amount=1&category=20&difficulty=easy")
            .then(response => response.json())
            .then(data => data.results[0].question);
    }
}
Scratch.extensions.register(new ScratchExtension()); */