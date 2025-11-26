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
                },
                {
                    "opcode": "fetchQuestions",//returns list
                    "blockType": "reporter",
                    "text": "Get Questions"
                }
            ],
        };
    }

    mythologyURL() {
        return fetch("https://opentdb.com/api.php?amount=10&category=20&difficulty=easy")
            .then(response => response.text())
    }
    fetchQuestions() {
        let question = "";
        return question;
    }
}

Scratch.extensions.register(new ScratchExtension());