document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "chesseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        }, 
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "chesseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        }
    ]
    cardArray.sort(() => 0.5 - Math.random());
    console.log(cardArray);

    const grid = document.querySelector(".grid");
    const resultsDisplay = document.querySelector("#result");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement("img");
            card.setAttribute("src", "src/images/blank.png");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        let cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');

        if (cardsChosenId[0] == cardsChosenId[1]) {
            alert("You have clicked the same image!");
            cards[cardsChosenId[0]].setAttribute("src", "src/images/blank.png");
            cards[cardsChosenId[1]].setAttribute("src", "src/images/blank.png");
        } else if (cardsChosen[0] == cardsChosen[1]) {
            alert("You have found a match");
            cards[cardsChosenId[0]].setAttribute("src", "src/images/white.png");
            cards[cardsChosenId[1]].setAttribute("src", "src/images/white.png");
            cards[cardsChosenId[0]].removeEventListener("click", flipCard);
            cards[cardsChosenId[1]].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen);
        } else {
            alert("Sorry, try again");
            cards[cardsChosenId[0]].setAttribute("src", "src/images/blank.png");
            cards[cardsChosenId[1]].setAttribute("src", "src/images/blank.png");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultsDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultsDisplay.textContent = "Congrations! You have won!";
        }

        console.log(cardsChosen);
        console.log(cardsWon);
    }

    createBoard();
})