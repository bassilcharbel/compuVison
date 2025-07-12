const os=require('os')
//info about current user 
const user=os.userInfo()
console.log(user)
//user uptime in seconds
console.log('the system uptime is '+os.uptime()+'seconds')

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMenu:os.totalmem(),
    freeMen:os.freemem()
}