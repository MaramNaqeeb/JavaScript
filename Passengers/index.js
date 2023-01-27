let saveCount = document.getElementById("previous")

let increasenum = document.getElementById("counter")
let count = 0


// console.log(increasenum)
// console.log(savenum)


function increment(){
    count += 1
    increasenum.textContent= count

}

function save(){
    let showCount = count + " - "
    saveCount.textContent += showCount
    increasenum.textContent=0
    count=0
}