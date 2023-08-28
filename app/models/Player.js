export class Player {
  name
  score
  image
  constructor(newName, newPoints, newImage) {
    this.name = newName
    this.score = newPoints
    this.image = newImage

  }
  greeting() {
    console.log('hello my name is', this.name)
  }



  get cardTemplate() {
    return `<div class="col-8 p-2 bg-light p-2 rounded elevetion-2"><img class="profPic" src='${this.image}'>${this.name} <span class></span>${this.score} <span></span>
  </div>
  <div class="p-2"></div>`
  }
}
