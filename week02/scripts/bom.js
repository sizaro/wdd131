const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];

// Display saved chapters from localStorage
chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        if (!chaptersArray.includes(input.value)) { // Prevent duplicate entries
            chaptersArray.push(input.value);
            setChapterList();
            displayList(input.value);
            window.alert("Scripture added successfully");
        } else {
            window.alert("This scripture is already in the list.");
        }
        input.value = "";
        input.focus();
    } else {
        window.alert("Please enter your favorite scripture");
    }
});

function displayList(item) {
    let li = document.createElement("li");
    li.textContent = item;

    let delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.ariaLabel = "Remove Scripture";

    li.append(delButton);
    list.append(li);

    delButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList")) || [];
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
