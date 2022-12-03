
function mykeyPress(e){

    var keynum;
    
    if(window.event){
        keynum = e.keyCode;
        console.log(keynum);
        
    }else if(e.which){
        keynum = e.which
        console.log(String.fromCharCode(keynum));
    }

    switch(keynum){
        
        //Upper case
        case 65:
            
            whichButton(String.fromCharCode(keynum).toLowerCase());
            break;
        case 66:
            whichButton(String.fromCharCode(keynum).toLowerCase());
            break;
        case 67:
            whichButton(String.fromCharCode(keynum).toLowerCase());
            break;
        case 68:
            whichButton(String.fromCharCode(keynum).toLowerCase());
            break;
        case 69:
            whichButton(String.fromCharCode(keynum).toLowerCase());
            break;
        case 70:
            whichButton(String.fromCharCode(keynum).toLowerCase());
            break;
        case 71:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 72:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 73:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 74:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 75:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 76:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 77:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 78:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 79:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 80:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 81:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 82:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 83:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 84:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 85:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 86:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 87:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 88:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 89:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
        case 90:
                whichButton(String.fromCharCode(keynum).toLowerCase());
                break;
                    
    // Lower case

        case 97:
            whichButton(String.fromCharCode(keynum));
            break;
        case 98:
            whichButton(String.fromCharCode(keynum));
            break;
        case 99:
            whichButton(String.fromCharCode(keynum));
            break;
        case 100:
            whichButton(String.fromCharCode(keynum));
            break;
        case 101:
            whichButton(String.fromCharCode(keynum));
            break;
        case 102:
            whichButton(String.fromCharCode(keynum));
            break;
        case 103:
            whichButton(String.fromCharCode(keynum));
            break;
        case 104:
            whichButton(String.fromCharCode(keynum));
            break;
        case 105:
            whichButton(String.fromCharCode(keynum));
            break;
        case 106:
            whichButton(String.fromCharCode(keynum));
            break;
        case 107:
            whichButton(String.fromCharCode(keynum));
            break;
        case 108:
            whichButton(String.fromCharCode(keynum));
            break;
        case 109:
            whichButton(String.fromCharCode(keynum));
            break;
        case 110:
            whichButton(String.fromCharCode(keynum));
            break;
        case 111:
            whichButton(String.fromCharCode(keynum));
            break;
        case 112:
            whichButton(String.fromCharCode(keynum));
            break;
        case 113:
            whichButton(String.fromCharCode(keynum));
            break;
        case 114:
            whichButton(String.fromCharCode(keynum));
            break;
        case 115:
            whichButton(String.fromCharCode(keynum));
            break;
        case 116:
            whichButton(String.fromCharCode(keynum));
            break;
        case 117:
            whichButton(String.fromCharCode(keynum));
            break;
        case 118:
            whichButton(String.fromCharCode(keynum));
            break;
        case 119:
            whichButton(String.fromCharCode(keynum));
            break;
        case 120:
            whichButton(String.fromCharCode(keynum));
            break;
        case 121:
            whichButton(String.fromCharCode(keynum));
            break;
        case 122:
            whichButton(String.fromCharCode(keynum));
            break;
        case 112:
            whichButton(String.fromCharCode(keynum));
            console.log(String.fromCharCode(keynum));
            break;
            default:

                document.addEventListener("keyup",function(Event){
                    if(Event.which == 27){
                        
                        console.log("esc");
                        whichButton("esc");
                    }else if(Event.which == 8){
                        console.log("backspace");
                        whichButton("backspace" );
                    }else if(Event.which == 9){
                        console.log("tab");
                        whichButton("tab");
                    }else if(Event.which == 44){
                        console.log("Print-screen");
                        whichButton("Print-screen");}
                    else if(Event.which == 13){
                        console.log("enter");
                        whichButton("enter");

                    }else if(Event.which == 16){
                        if(Event.location=== KeyboardEvent.DOM_KEY_LOCATION_LEFT) {console.log("Left shift key");
                        whichButton("left-shift");}
                        else if(Event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
                            console.log("Right-shift");
                        whichButton("right-shift");
                        }
                        

                    }else if(Event.which == 17){
                        if(Event.location=== KeyboardEvent.DOM_KEY_LOCATION_LEFT) {console.log("Left ctrl key");
                        whichButton("left-ctrl");}
                        else if(Event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
                            console.log("Right-ctrl");
                        whichButton("right-ctrl");
                        }

                    }else if(Event.which == 18){
                        if(Event.location=== KeyboardEvent.DOM_KEY_LOCATION_LEFT) {console.log("Left alt key");
                        whichButton("left-alt");}
                        else if(Event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
                            console.log("Right-alt");
                        whichButton("right-alt");
                        }
                    }else if(Event.which == 19){
                        console.log("pause/break");
                        whichButton("pauseBreak");

                    }else if(Event.which == 20){
                        console.log("caps lock");
                        whichButton("capsLock");

                    }else if(Event.which == 32){
                        console.log("space");
                        whichButton("space" );

                    }else if(Event.which == 33){
                        console.log("pageup");
                        whichButton("pageup");

                    }else if(Event.which == 34){
                        console.log("pagedown");
                        whichButton("pagedown");

                    }else if(Event.which == 35){
                        console.log("end");
                        whichButton("end");

                    }else if(Event.which == 36){
                        console.log("home");
                        whichButton("home");

                    }else if(Event.which == 37){
                        console.log("left-arrow ");
                        whichButton("arrow-left");

                    }else if(Event.which == 38){
                        console.log("arrow-up");
                        whichButton("arrow-up");

                    }else if(Event.which == 39){
                        console.log("right-arrow");
                        whichButton("arrow-right");

                    }else if(Event.which == 40){
                        console.log("down-arrow");
                        whichButton("arrow-down");

                    }else if(Event.which == 45){
                        console.log("insert");
                        whichButton("insert");

                    }else if(Event.which == 46){
                        console.log("delete key was pressed");
                        whichButton("delete");

                    }else if(Event.which == 48){
                        console.log("0 key was pressed");
                        whichButton("0");

                    }else if(Event.which == 49){
                        console.log("1 key was pressed");
                        whichButton("1");
                    }else if(Event.which == 50){
                        console.log("2 key was pressed");
                        whichButton("2");
                        
                    }else if(Event.which == 51){
                        console.log("3 key was pressed");
                        whichButton("3");

                    }else if(Event.which == 52){
                        console.log("4 key was pressed");
                        whichButton("4");

                    }else if(Event.which == 53){
                        console.log("5 key was pressed");
                        whichButton("5");

                    }else if(Event.which == 54){
                        console.log("6 key was pressed");
                        whichButton("6");

                    }else if(Event.which == 55){
                        console.log("7 key was pressed");
                        whichButton("7");

                    }else if(Event.which == 56){
                        console.log("8 key was pressed");
                        whichButton("8");

                    }else if(Event.which == 57){
                        console.log("9 key was pressed");
                        whichButton("9");

                    }else if(Event.which == 58){
                        console.log("0 key was pressed");
                        whichButton("0");

                    }else if(Event.which == 48){
                        console.log("0 key was pressed");
                        whichButton("0");

                    }else if(Event.which == 48){
                        console.log("0 key was pressed");
                        whichButton("0");

                    }else if(Event.which == 48){
                        console.log("0 key was pressed");
                        whichButton("0");

                    }else if(Event.which == 48){
                        console.log("0 key was pressed");
                        whichButton("0");

                    }else if(Event.which == 96){
                        console.log("numpad0 key was pressed");
                        whichButton("`");

                    }else if(Event.which == 97){
                        console.log("numpad1 key was pressed");
                        whichButton("numpad1");

                    }else if(Event.which == 98){
                        console.log("numpad2 key was pressed");
                        whichButton("numpad2");

                    }else if(Event.which == 99){
                        console.log("numpad3 key was pressed");
                        whichButton("numpad3");

                    }else if(Event.which == 100){
                        console.log("numpad4 key was pressed");
                        whichButton("numpad4");

                    }else if(Event.which == 101){
                        console.log("numpad5 key was pressed");
                        whichButton("numpad5");

                    }else if(Event.which == 102){
                        console.log("numpad6 key was pressed");
                        whichButton("numpad6");

                    }else if(Event.which == 103){
                        console.log("numpad7 key was pressed");
                        whichButton("numpad7");

                    }else if(Event.which == 104){
                        console.log("numpad8 key was pressed");
                        whichButton("numpad8");

                    }else if(Event.which == 105){
                        console.log("numpad9 key was pressed");
                        whichButton("numpad9");

                    }else if(Event.which == 112){
                        console.log("F1 key was pressed");
                        whichButton("f1");
                    }else if(Event.which == 113){
                        console.log("F2 key was pressed");
                        whichButton("f2");
                    }else if(Event.which == 114){
                        console.log("F3 key was pressed");
                        whichButton("f3");
                    }else if(Event.which == 115){
                        console.log("F4 key was pressed");
                        whichButton("f4");
                    }else if(Event.which == 116){
                        console.log("F5 key was pressed");
                        whichButton("f5");
                    }else if(Event.which == 117){
                        console.log("F6 key was pressed");
                        whichButton("f6");
                    }else if(Event.which == 118){
                        console.log("F7 key was pressed");
                        whichButton("f7");
                    }else if(Event.which == 119){
                        console.log("F8 key was pressed");
                        whichButton("f8");

                    }else if(Event.which == 120){
                        console.log("F9 key was pressed");
                        whichButton("f9");

                    }else if(Event.which == 121){
                        console.log("F10 key was pressed");
                        whichButton("f10");

                    }else if(Event.which == 122){
                        console.log("F11 key was pressed");
                        whichButton("f11");

                    }else if(Event.which == 123){
                        console.log("F12 key was pressed");
                        whichButton("f12");

                    }else if(Event.which == 144){
                        console.log("numlock key was pressed");
                        whichButton("numLock");

                    }else if(Event.which == 91){
                        console.log(" window key was pressed");
                        whichButton("window");

                    }else if(Event.which == 92){
                        console.log("left window key was pressed");
                        whichButton("rightwindows");

                    }else if(Event.which == 145){
                        console.log("scroll lock key was pressed");
                        whichButton("scrollLock");

                    }else if(Event.which == 110){
                        console.log("numlock decimal point(.del) key was pressed");
                        whichButton(".del");
                    }else if(Event.which == 111){
                        console.log("numlock divide(/) key was pressed");
                        whichButton("/");
                        
                    }else if(Event.which == 107){
                        console.log("numlock add(+)key was pressed");
                        whichButton("+");

                    }else if(Event.which == 109){
                        console.log("numlock substract(-) key was pressed");
                        whichButton("numlockabstract");

                    }else if (Event.which == 106){
                        console.log("numlock multiply(*) key was pressed");
                        whichButton("*");
                    }else if(Event.which == 188){
                        console.log("(,) key was pressed");
                        whichButton(",");
                    }else if(Event.which == 189){
                        console.log(" - key was pressed ");
                        whichButton("-")
                    }else if(Event.which == 190){
                        console.log(" . key was pressed ");
                        whichButton(".")
                    }else if(Event.which == 191){
                            console.log(" / key was pressed ");
                            whichButton("/")
                     }else if(Event.which == 186){
                        console.log("(:) key was pressed");
                        whichButton(":");
                    }else if(Event.which == 187){
                        console.log("(+=) key was pressed");
                        whichButton("+=");
                    }else if(Event.which == 219){
                        console.log("({) key was pressed");
                        whichButton("{");
                    }else if(Event.which == 221){
                        console.log("(}) key was pressed");
                        whichButton("}");}
                    else if(Event.which == 222){
                        console.log("' key was pressed ");
                        whichButton("'");
                    }else if(Event.which == 220){
                        console.log("| key was pressed");
                        whichButton("|");
                    }else if(Event.which == 192){
                        console.log("\"");
                        whichButton("`");
                    }else if(Event.which == 93){
                        console.log("select key was pressed");
                        whichButton("selectkey");
                    }
                })
    }
}


function myAudio( ){
   var x =document.getElementById("music1");
   x.play();
}
function whichButton(button ){
    myAudio();
    document.getElementById("keytext").textContent = "Result :  " + button + "  key was pressed!";
    document.getElementById(button).style.cssText= " box-shadow: 40px 20px 60px 2px #f0eeee, 15px 10px 50px 2px #f0e7e7  ; border:2px solid #ffffff; color: #ffffff; background-color: #000; " ;
      
}

