const { log } = require('console');
const EventEmitter=require('events')
const emitter=new EventEmitter();

const informStudent=(time)=>{
    log(`Bell rang at ${time}, students should come in the class`)
}
// emitter.on("bell-rang", informStudent)

emitter.on("bell-rang", informStudent)

// emitter.on("bell-rang", ()=> {
//     console.log("Bell rang, teachers can start the class")
// })

emitter.emit("bell-rang", "10:00 AM")
emitter.emit("bell-rang", "11:00 AM")
// emitter.off("bell-rang",informStudent)
emitter.emit("bell-rang", "12:00 PM")