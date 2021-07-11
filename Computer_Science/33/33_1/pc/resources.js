const os = require('os');

class Resources {

  getPlatform () {
    return os.platform()
  }

  colorQuantity () {
    return os.cpus()
  }
  totalMemory () {
    const memory = os.totalmem() / 1000000000;
    return memory.toPrecision(4)
  }

  usedMemoryRatio () {
    const memory = os.totalmem() / 1000000;
    const free = os.freemem() / 1000000
    setInterval(() => {
      console.log((memory - free) / memory)
    }, 1000)
    
  }

  processId () {
    return process.pid;
  }


}

module.exports = Resources;
