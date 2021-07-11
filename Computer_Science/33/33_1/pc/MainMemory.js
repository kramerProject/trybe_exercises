class MainMemory {
  constructor () {
    this.loadedMemory = []
  }

  load (value) {
    //
    this.loadedMemory.push(parseInt(value))
    return this.loadedMemory
  }

  get (index) {
    //
    return parseInt(this.loadedMemory[index])
  }

  clean () {
    this.loadedMemory = []
  }
}

module.exports = MainMemory