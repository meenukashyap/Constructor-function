class iPhone3{
    constructor(ASIN, color, display, camera, bluetooth)
    {
        this.ASIN=ASIN;
        this.color=color;
        this.display=display;
        this.camera=camera;
        this.bluetooth=bluetooth;
    }
    dial(){
         return "tring.. tring...";
    }
    sendMessage(){
        return "Sending message...";
    }
    cameraClick(){
        return "Camera clicked";
    }
    connectBluetooth(){
        return "Bluetooth connected successfully...";
    }

    
}
let phone=new iPhone3("xyz","golden","mno","128mp","detect");
console.log(phone.dial());
console.log(phone.sendMessage());
console.log(phone.cameraClick());
console.log(phone.connectBluetooth());