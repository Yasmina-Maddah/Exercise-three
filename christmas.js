const height = prompt("Enter the height of the christmas tree: ");

body.style.display = "flex";
body.style.display = "center";
body.style.justifyContent = "center";
body.style.flexDirection = "column";
body.style.backgroundColor = "#f0f0f0"; 


const treeContainer = document.createElement("div")
treeContainer.classList.add("tree-container");

function wholeTree(height){

for (let i=1; i<= height; i++){
    const treeRow = document.createElement("div");
    treeRow.classList.add("tree-row");

    for (var j=0; j< (2*i-1); k++ ){
        const star = document.createElement("span");
        star.classList.add("star");
        treeRow.appendChild(star);
    }

 treeContainer.appendChild(treeRow);
}

const trunk = document.createElement("div");
trucnk.classList.add("trunk");
treeContainer.appendChild(trunk);

body.appendChild(treeContainer);

}

wholeTree(height);

console.log(wholeTree);





 