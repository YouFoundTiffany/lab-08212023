export class Player {
name
score
image
constructor (newName, newPoints){
    this.name = newName
    this.score = newPoints
    this.image = newImage

}
greeting() {
  console.log('hello my name is', this.name)
}



get cardTemplate () {
    return `<div class="col-8 bg-light p-2 rounded elevetion-2"><img class="profPic" src="${this.name}">${this.name} <span>mdi-plus</span>${this.score} <span>mdi-minus</span>
  </div>
  <div class="p-2"></div>`
}
}