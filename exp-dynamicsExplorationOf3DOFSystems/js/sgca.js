var mode = "";

function navNext() {
    for (temp = 0; temp <= 5; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }

    simsubscreennum += 1;
    document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
    document.getElementById('nextButton').style.visibility = "hidden";
    magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow() {
    if (document.getElementById('arrow1').style.visibility == "hidden")
        document.getElementById('arrow1').style.visibility = "visible";
    else
        document.getElementById('arrow1').style.visibility = "hidden";
}

function animatecurvearrow() {
    if (document.getElementById('curve_arrow').style.visibility == "hidden") {
        document.getElementById('curve_arrow').style.visibility = "visible";
    }
    else {
        document.getElementById('curve_arrow').style.visibility = "hidden";
    }
}

//stop blinking arrow
function myStopFunction() {
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility = "hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------
function magic() {

    if (simsubscreennum == 1) {
        document.getElementById('nextButton').style.visibility = "hidden";

        document.getElementById('quad').style.visibility = "visible";
        document.getElementById('motors').style.visibility = "visible";
        document.getElementById('tran_rec').style.visibility = "visible";
        document.getElementById('flight_c').style.visibility = "visible";
        document.getElementById('esc').style.visibility = "visible";
        document.getElementById('lipo').style.visibility = "visible";

        document.getElementById('skip').style.visibility = "visible";
        document.getElementById('skip').onclick = function() { placeAllParts(); };
    }
    if (simsubscreennum == 2) {
        document.getElementById('quad').style.visibility = "hidden";
        document.getElementById('motors').style.visibility = "hidden";
        document.getElementById('tran_rec').style.visibility = "hidden";
        document.getElementById('flight_c').style.visibility = "hidden";
        document.getElementById('esc').style.visibility = "hidden";
        document.getElementById('lipo').style.visibility = "hidden";

        document.getElementById('top').style.visibility = "hidden";
        document.getElementById('battery').style.visibility = "hidden";
        document.getElementById('flight_controller').style.visibility = "hidden";
        document.getElementById('telemtery').style.visibility = "hidden";
        document.getElementById('stand').style.visibility = "hidden";
        document.getElementById('ball').style.visibility = "hidden";

        document.getElementById('stand2').style.visibility = "visible";
        setTimeout(function() {
            document.getElementById("ballSocket").style.visibility="visible";
            myInt=setInterval(function(){animatearrow(); },600);
            document.getElementById("arrow1").style="visibility:visible; position:absolute; left:655px; top:150px; height:30px; z-index:10;";
            document.getElementById("arrow1").style.WebkitTransform="rotate(360deg)"
            document.getElementById("arrow1").style.msTransform="rotate(360deg)"
            document.getElementById("arrow1").style.transform="rotate(360deg)"
            document.getElementById("ballSocket").onclick=function() {
                myStopFunction();
                document.getElementById("ballSocket").onclick="";
                document.getElementById("ballSocket").style.animation = "moveBallSocket 2s forwards";
                setTimeout(function() {
                    document.getElementById('stand2').style.visibility = "hidden";
                    document.getElementById("ballSocket").style.visibility="hidden";
                    document.getElementById('stand3').style.visibility = "visible";
                    document.getElementById("plate").style.visibility="visible";
                    myInt=setInterval(function(){animatearrow(); },600);
                    document.getElementById("arrow1").style="visibility:visible; position:absolute; left:655px; top:100px; height:30px; z-index:10;";
                    document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)"
                    document.getElementById("arrow1").style.msTransform="rotate(270deg)"
                    document.getElementById("arrow1").style.transform="rotate(270deg)"
                    document.getElementById("plate").onclick=function() {
                        myStopFunction();
                        document.getElementById("plate").onclick="";
                        document.getElementById("plate").style.animation = "moveplate 2s forwards";
                        setTimeout(function() {
                            document.getElementById("plate").style.visibility="hidden";
                            document.getElementById("plate1").style.visibility="visible";
                            setTimeout(function() {
                                document.getElementById("bolt").style.visibility="visible";
                                myInt=setInterval(function(){animatearrow(); },600);
                                document.getElementById("arrow1").style="visibility:visible; position:absolute; left:300px; top:210px; height:30px; z-index:10;";
                                document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)"
                                document.getElementById("arrow1").style.msTransform="rotate(180deg)"
                                document.getElementById("arrow1").style.transform="rotate(180deg)"
                                document.getElementById("bolt").onclick=function() {
                                    myStopFunction();
                                    document.getElementById("bolt").onclick="";
                                    document.getElementById("bolt").classList.add('rotateHandKnob');
                                    document.getElementById("bolt").style.transition = "top 3s ease-in-out";
                                    setTimeout(function() {
                                        document.getElementById("bolt").style.visibility="hidden";
                                        document.getElementById("plate1").style.visibility="hidden";
                                        document.getElementById("plate2").style.visibility="visible";
                                        setTimeout(function() {
                                            document.getElementById("t1").style.visibility="visible";
                                            myInt=setInterval(function(){animatearrow(); },600);
                                            document.getElementById("arrow1").style="visibility:visible; position:absolute; left:545px; top:160px; height:30px; z-index:10;";
                                            document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)"
                                            document.getElementById("arrow1").style.msTransform="rotate(180deg)"
                                            document.getElementById("arrow1").style.transform="rotate(180deg)"
                                            document.getElementById("t1").onclick=function() {
                                                myStopFunction();
                                                document.getElementById("t1").onclick="";
                                                document.getElementById("t1").style.animation = "movetop 2s forwards";
                                                setTimeout(function() {
                                                    document.getElementById("screw1").style.visibility="visible";
                                                    myInt=setInterval(function(){animatearrow(); },600);
                                                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 660px; top: 120px; height: 30px; z-index: 10;";
                                                    document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
                                                    document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
                                                    document.getElementById("arrow1").style.transform = "rotate(0deg)";
                                                    document.getElementById('screw1').onclick = function() { placeSingleScrew_motor(); };
                                                },2000);
                                            }
                                        },1000);
                                    },3000);
                                }
                            },700);
                        },1500);
                    }
                },1600);
            }
        },500);
    }
    if (simsubscreennum == 3) {
        document.getElementById("nextButton").style.visibility = "hidden";
        document.getElementById("wire").style.visibility = "visible";
        document.getElementById("battery1").style.visibility = "visible";
        document.getElementById("bwire").style.visibility = "visible";
        document.getElementById("bwire2").style.visibility = "visible";
        document.getElementById("switchboard").style.visibility = "visible";
        document.getElementById("offSwitch").style.visibility = "visible";
        setTimeout(function() {
            document.getElementById("wireNote").style.visibility = "visible";
            myInt=setInterval(function(){animatearrow(); },600);
            document.getElementById("arrow1").style="visibility:visible; position:absolute; left:287px; top:475px; height:30px; z-index:10;";
            document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)"
            document.getElementById("arrow1").style.msTransform="rotate(270deg)"
            document.getElementById("arrow1").style.transform="rotate(270deg)"
            document.getElementById("bwire").onclick=function() {
                myStopFunction();
                document.getElementById("bwire").onclick="";
                document.getElementById("bwire").style.visibility = "hidden";
                document.getElementById("wire").style.visibility = "hidden";
                document.getElementById("t1").style.visibility = "hidden";
                document.getElementById("plate2").style.visibility = "hidden";
                document.getElementById("screws1").style.visibility = "hidden";
                document.getElementById("screws2").style.visibility = "hidden";
                document.getElementById("screws3").style.visibility = "hidden";
                document.getElementById("screws4").style.visibility = "hidden";
                document.getElementById("screw_head1").style.visibility = "hidden";
                document.getElementById("screw_head2").style.visibility = "hidden";
                document.getElementById("dtop2").style.visibility = "visible";
                document.getElementById("stand3").style.visibility = "hidden";
                document.getElementById("connectedWire").style.visibility = "visible";
                document.getElementById("standn").style.visibility = "visible";
                document.getElementById("wireNote").style.visibility = "hidden";
                setTimeout(function() {
                    myInt=setInterval(function(){animatearrow(); },600);
                    document.getElementById("arrow1").style="visibility:visible; position:absolute; left:143px; top:208px; height:30px; z-index:10;";
                    document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)"
                    document.getElementById("arrow1").style.msTransform="rotate(270deg)"
                    document.getElementById("arrow1").style.transform="rotate(270deg)"
                    document.getElementById("offSwitch").onclick=function() {
                        myStopFunction();
                        document.getElementById("offSwitch").onclick="";
                        setTimeout(function() {
                            document.getElementById("offSwitch").style.visibility = "hidden";
                            document.getElementById("onSwitch").style.visibility = "visible";
                            document.getElementById("nextButton").style.visibility = "visible";
                        },100);
                    }
                },2000);
            }
        },1000);
    }
    if (simsubscreennum == 4) {
        document.getElementById("nextButton").style.visibility = "hidden";
        document.getElementById("dtop2").style.visibility = "hidden";
        document.getElementById("standn").style.visibility = "hidden";
        document.getElementById("wire").style.visibility = "hidden";
        document.getElementById("battery1").style.visibility = "hidden";
        document.getElementById("bwire2").style.visibility = "hidden";
        document.getElementById("switchboard").style.visibility = "hidden";
        document.getElementById("connectedWire").style.visibility = "hidden";
        document.getElementById("onSwitch").style.visibility = "hidden";
        document.getElementById("stable").onclick = function() {
			mode = "stableMode";
	        document.getElementById("nextButton").style.visibility="visible";
        }
		document.getElementById("manual").onclick = function() {
			mode = "manualMode";
	        document.getElementById("nextButton").style.visibility="visible";
        }
    }
    if (simsubscreennum == 5) {
        document.getElementById("nextButton").style.visibility = "hidden";
        document.getElementById("arm").style.visibility = "visible";
        document.querySelector('a-scene').addEventListener('loaded', function () {
            // Remove the default WASD and arrow key controls
            const camera = document.getElementById('camera');
            document.querySelector('[camera]').removeAttribute('wasd-controls');
            document.querySelector('[camera]').removeAttribute('look-controls');
        });
        // Function to rotate the propellers
function rotatePropellers() {
    // Rotate each propeller continuously
    document.getElementById('propeller1').setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 1000');
    document.getElementById('propeller2').setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 1000');
    document.getElementById('propeller3').setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 1000');
    document.getElementById('propeller4').setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 1000');
}

// Function to stop the rotation of the propellers
function stopPropellers() {
    // Remove animation attribute to stop rotation
    document.getElementById('propeller1').removeAttribute('animation');
    document.getElementById('propeller2').removeAttribute('animation');
    document.getElementById('propeller3').removeAttribute('animation');
    document.getElementById('propeller4').removeAttribute('animation');
}

// Event listener for the "Arm" button
document.getElementById('arm').addEventListener('click', function() {
    // Call the rotatePropellers function when the "Arm" button is clicked
    rotatePropellers();
});

// Event listener for the "Disarm" button
document.getElementById('disarm').addEventListener('click', function() {
    // Call the stopPropellers function when the "Disarm" button is clicked
    stopPropellers();
});

        
        // Set the text content based on the value of the 'mode' variable
    var pumptextElement = document.getElementById("pumptext1");
    if (mode === "stableMode") {
        pumptextElement.textContent = "Stable Mode";
        document.getElementById("stable3d").style.visibility = "visible";
        document.getElementById("manual3d").style.visibility = "hidden";
    } else if (mode === "manualMode") {
        pumptextElement.textContent = "Manual Mode";
        document.getElementById("manual3d").style.visibility = "visible";
        document.getElementById("remote").style.visibility = "visible";
        document.getElementById("control1").style.visibility = "visible";
        document.getElementById("control2").style.visibility = "visible";
        document.getElementById("controller1").style.visibility = "visible";
        document.getElementById("controller2").style.visibility = "visible";
        document.getElementById("controller3").style.visibility = "visible";
        document.getElementById("controller4").style.visibility = "visible";
    }
    }
}

var clickCountOfMotorScrewSingle = 0;

function placeSingleScrew_motor() {
    myStopFunction();
    clickCountOfMotorScrewSingle += 1;

    if (clickCountOfMotorScrewSingle == 1) {
        document.getElementById("screw1").style.animation = "moveSingleScr1 2s forwards";
        setTimeout(function() {
            document.getElementById("screw1").style.visibility = "hidden";
            document.getElementById("screwHand2").style.visibility = "visible";
            document.getElementById("screwHand2").classList.add("rotateHand2");
            document.getElementById("screwHand2").style.top = "238px";
            document.getElementById("screwHand2").style.transition = "top 3s ease-in-out";
            document.getElementById("curve_arrow").style = "visibility:visible;position:absolute;top:250px;left:340px;height: 30px; width: 30px;z-index:120;";

            myInt = setInterval(function() { animatecurvearrow(); }, 500);
            setTimeout(() => {
                clearInterval(myInt);
                document.getElementById('curve_arrow').style.visibility = "hidden";

            }, 2500);
            document.getElementById("singleScrewFinal1").style.visibility = "visible";
            document.getElementById("singleScrewFinal1").style.top = "220px";
            document.getElementById("singleScrewFinal1").style.opacity = 0;
            document.getElementById("singleScrewFinal1").style.transition = "all 4s ease-in-out";
            document.getElementById("screw_head1").style.visibility = "visible";
            document.getElementById("screw_head1").style.opacity = 1;
            document.getElementById("screw_head1").style.transition = "opacity 4s ease-in-out";
            setTimeout(() => {
                document.getElementById("screws1").style.visibility = "visible";
                document.getElementById("all_screws_motor").style.visibility = "visible";
            }, 2600);
        }, 1900)
    }
}

function all_screws1() {
    document.getElementById('all_screws_motor').style.visibility = "hidden";
    document.getElementById('screwHand2').style.visibility = "hidden";
    document.getElementById("singleScrew_motor2").style.top = "220px";
    document.getElementById("singleScrew_motor3").style.top = "220px";
    document.getElementById("singleScrew_motor4").style.top = "220px";

    for (let i = 2; i <= 4; i++) {
        document.getElementById("singleScrew_motor" + i).style.visibility = "visible";
        document.getElementById("singleScrew_motor" + i).style.opacity = 0;
        document.getElementById("singleScrew_motor" + i).style.transition = "all 3s ease-in-out";
        setTimeout(function() {
            document.getElementById("screws2").style.visibility = "visible";
            document.getElementById("screws3").style.visibility = "visible";
            document.getElementById("screws4").style.visibility = "visible";
            document.getElementById("screw_head2").style.visibility = "visible";
            setTimeout(function() {
                document.getElementById('nextButton').style.visibility = "visible";
            }, 750);
        }, 1850);
    }
}

function place_apparatus(apparatus_id, top_px) {
    document.getElementById('skip').style.visibility = "hidden";

    if (apparatus_id == "ball") {
        document.getElementById('ball').style.visibility = "visible";
        document.getElementById('ball').style.top = "270px";
        document.getElementById('ball').style.transition = "top 1s ease-in-out";

        document.getElementById('nextButton').style.visibility = "visible";

    } else {
        var apparatus = document.getElementById(apparatus_id);
        apparatus.style.visibility = "visible";
        apparatus.style.top = top_px;
        apparatus.style.transition = "top 1s ease-in-out";
    }
}

function placeAllParts() {
    document.getElementById('top').style.visibility = "visible";
    document.getElementById('top').style.top = "50px";
    document.getElementById('top').style.transition = "top 1s ease-in-out";
    
    document.getElementById('battery').style.visibility = "visible";
    document.getElementById('battery').style.top = "230px";
    document.getElementById('battery').style.transition = "top 1s ease-in-out";
    
    document.getElementById('flight_controller').style.visibility = "visible";
    document.getElementById('flight_controller').style.top = "50px";
    document.getElementById('flight_controller').style.transition = "top 1s ease-in-out";
    
    document.getElementById('telemtery').style.visibility = "visible";
    document.getElementById('telemtery').style.top = "73px";
    document.getElementById('telemtery').style.transition = "top 1s ease-in-out";
    
    document.getElementById('stand').style.visibility = "visible";
    document.getElementById('stand').style.top = "260px";
    document.getElementById('stand').style.transition = "top 1s ease-in-out";
    
    document.getElementById('ball').style.visibility = "visible";
    document.getElementById('ball').style.top = "270px";
    document.getElementById('ball').style.transition = "top 1s ease-in-out";
    
    document.getElementById('skip').style.visibility = "hidden";
    document.getElementById('nextButton').style.visibility = "visible";
}

var rotationSpeed = 1; // You can adjust the rotation speed as needed
var isRotatingClockwise = false;
var isRotatingAntiClockwise = false;
var isRotatingXAxis = false;
var isRotatingXAxisReverse = false;
var isRotatingZAxis = false;
var isRotatingZAxisReverse = false;
var maxRotationX = 45; // Maximum rotation angle along the x-axis
var maxRotationZ = 45; // Maximum rotation angle along the z-axis

AFRAME.registerComponent('rotation-listener', {
    init: function () {
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));
    },
    onKeyDown: function (event) {
        if ((event.key === 'q' || event.key === 'Q') && !isRotatingClockwise) {
            isRotatingClockwise = true;
            this.rotateElementsClockwise();
        } else if ((event.key === 'e' || event.key === 'E') && !isRotatingAntiClockwise) {
            isRotatingAntiClockwise = true;
            this.rotateElementsAntiClockwise();
        } else if ((event.key === 'w' || event.key === 'W') && !isRotatingXAxis) {
            document.getElementById("control2").style.animation = "controlup 2s forwards";
            isRotatingXAxis = true;
            this.rotateElementsXAxis();
        } else if ((event.key === 's' || event.key === 'S') && !isRotatingXAxisReverse) {
            document.getElementById("control2").style.animation = "controldown 2s forwards";
            isRotatingXAxisReverse = true;
            this.rotateElementsXAxisReverse();
        } else if ((event.key === 'd' || event.key === 'D') && !isRotatingZAxisReverse) {
            document.getElementById("control2").style.animation = "controlright 2s forwards";
            isRotatingZAxisReverse = true;
            this.rotateElementsZAxisReverse();
        } else if ((event.key === 'a' || event.key === 'A') && !isRotatingZAxis) {
            document.getElementById("control2").style.animation = "controlleft 2s forwards";
            isRotatingZAxis = true;
            this.rotateElementsZAxis();
        }
    },
    onKeyUp: function (event) {
        if ((event.key === 'q' || event.key === 'Q') && isRotatingClockwise) {
            isRotatingClockwise = false;
        } else if ((event.key === 'e' || event.key === 'E') && isRotatingAntiClockwise) {
            isRotatingAntiClockwise = false;
        } else if ((event.key === 'w' || event.key === 'W') && isRotatingXAxis) {
            isRotatingXAxis = false;
        } else if ((event.key === 's' || event.key === 'S') && isRotatingXAxisReverse) {
            isRotatingXAxisReverse = false;
        } else if ((event.key === 'd' || event.key === 'D') && isRotatingZAxisReverse) {
            isRotatingZAxisReverse = false;
        } else if ((event.key === 'a' || event.key === 'A') && isRotatingZAxis) {
            isRotatingZAxis = false;
        }
    },
    rotateElementsClockwise: function () {
        this.rotateElements('clockwise');
    },
    rotateElementsAntiClockwise: function () {
        this.rotateElements('anti-clockwise');
    },
    rotateElements: function (direction) {
        this.rotateElement('myModel', direction);

        if (isRotatingClockwise || isRotatingAntiClockwise) {
            requestAnimationFrame(this.rotateElements.bind(this, direction));
        }
    },
    rotateElement: function (elementId, direction) {
        var element = document.getElementById(elementId);
        var currentRotation = element.getAttribute('rotation') || { x: 0, y: 0, z: 0 };

        // Adjust rotation based on the specified direction
        var rotationIncrement = (direction === 'clockwise') ? rotationSpeed : -rotationSpeed;

        element.setAttribute('rotation', {
            x: currentRotation.x,
            y: currentRotation.y + rotationIncrement,
            z: currentRotation.z
        });
    },
    rotateElementsXAxis: function () {
        this.rotateElementXAxis('myModel');
        if (isRotatingXAxis) {
            requestAnimationFrame(this.rotateElementsXAxis.bind(this));
        }
    },
    rotateElementXAxis: function (elementId) {
        var element = document.getElementById(elementId);
        var currentRotation = element.getAttribute('rotation') || { x: 0, y: 0, z: 0 };

        // Adjust rotation based on the specified maximum angle
        if (currentRotation.x < maxRotationX) {
            var rotationIncrement = rotationSpeed;
            element.setAttribute('rotation', {
                x: currentRotation.x + rotationIncrement,
                y: currentRotation.y,
                z: currentRotation.z
            });
        }
    },
    rotateElementsXAxisReverse: function () {
        this.rotateElementXAxisReverse('myModel');

        if (isRotatingXAxisReverse) {
            requestAnimationFrame(this.rotateElementsXAxisReverse.bind(this));
        }
    },
    rotateElementXAxisReverse: function (elementId) {
        var element = document.getElementById(elementId);
        var currentRotation = element.getAttribute('rotation') || { x: 0, y: 0, z: 0 };

        // Adjust rotation based on the specified minimum angle
        if (currentRotation.x > -maxRotationX) {
            var rotationIncrement = -rotationSpeed;
            element.setAttribute('rotation', {
                x: currentRotation.x + rotationIncrement,
                y: currentRotation.y,
                z: currentRotation.z
            });
        }
    },
    rotateElementsZAxis: function () {
        this.rotateElementZAxis('myModel');

        if (isRotatingZAxis) {
            requestAnimationFrame(this.rotateElementsZAxis.bind(this));
        }
    },
    rotateElementZAxis: function (elementId) {
        var element = document.getElementById(elementId);
        var currentRotation = element.getAttribute('rotation') || { x: 0, y: 0, z: 0 };

        // Adjust rotation based on the specified maximum angle
        if (currentRotation.z < maxRotationZ) {
            var rotationIncrement = rotationSpeed;
            element.setAttribute('rotation', {
                x: currentRotation.x,
                y: currentRotation.y,
                z: currentRotation.z + rotationIncrement
            });
        }
    },
    rotateElementsZAxisReverse: function () {
        this.rotateElementZAxisReverse('myModel');

        if (isRotatingZAxisReverse) {
            requestAnimationFrame(this.rotateElementsZAxisReverse.bind(this));
        }
    },
    rotateElementZAxisReverse: function (elementId) {
        var element = document.getElementById(elementId);
        var currentRotation = element.getAttribute('rotation') || { x: 0, y: 0, z: 0 };

        // Adjust rotation based on the specified minimum angle
        if (currentRotation.z > -maxRotationZ) {
            var rotationIncrement = -rotationSpeed;
            element.setAttribute('rotation', {
                x: currentRotation.x,
                y: currentRotation.y,
                z: currentRotation.z + rotationIncrement
            });
        }
    }
});

var srotationSpeed = 1; // You can adjust the rotation speed as needed
var sisRotatingClockwise = false;
var sisRotatingAntiClockwise = false;
var sisRotatingXAxis = false;
var sisRotatingXAxisReverse = false;
var sisRotatingZAxis = false;
var sisRotatingZAxisReverse = false;
var smaxRotationX = 45; // Maximum rotation angle along the x-axis
var smaxRotationZ = 45; // Maximum rotation angle along the z-axis

AFRAME.registerComponent('srotation-listener', {
    init: function () {
        this.timer = 0; // Initialize timer
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));
        this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this); // Throttle tick function to update every second
    },
    tick: function (time, delta) {
        // Update timer every second
        this.timer += delta;
        if (this.timer >= 6000) {
            this.timer = 0;
            this.resetRotation();
        }
    },
    onKeyDown: function (event) {
        if ((event.key === 'q' || event.key === 'Q') && !sisRotatingClockwise) {
            sisRotatingClockwise = true;
            this.rotateElementsClockwise();
        } else if ((event.key === 'e' || event.key === 'E') && !sisRotatingAntiClockwise) {
            sisRotatingAntiClockwise = true;
            this.rotateElementsAntiClockwise();
        } else if ((event.key === 'w' || event.key === 'W') && !sisRotatingXAxis) {
            sisRotatingXAxis = true;
            this.rotateElementsXAxis();
        } else if ((event.key === 's' || event.key === 'S') && !sisRotatingXAxisReverse) {
            sisRotatingXAxisReverse = true;
            this.rotateElementsXAxisReverse();
        } else if ((event.key === 'd' || event.key === 'D') && !sisRotatingZAxisReverse) {
            sisRotatingZAxisReverse = true;
            this.rotateElementsZAxisReverse();
        } else if ((event.key === 'a' || event.key === 'A') && !sisRotatingZAxis) {
            sisRotatingZAxis = true;
            this.rotateElementsZAxis();
        }
    },
    onKeyUp: function (event) {
        if ((event.key === 'q' || event.key === 'Q') && sisRotatingClockwise) {
            sisRotatingClockwise = false;
        } else if ((event.key === 'e' || event.key === 'E') && sisRotatingAntiClockwise) {
            sisRotatingAntiClockwise = false;
        } else if ((event.key === 'w' || event.key === 'W') && sisRotatingXAxis) {
            sisRotatingXAxis = false;
        } else if ((event.key === 's' || event.key === 'S') && sisRotatingXAxisReverse) {
            sisRotatingXAxisReverse = false;
        } else if ((event.key === 'd' || event.key === 'D') && sisRotatingZAxisReverse) {
            sisRotatingZAxisReverse = false;
        } else if ((event.key === 'a' || event.key === 'A') && sisRotatingZAxis) {
            sisRotatingZAxis = false;
        }
    },
    rotateElementsClockwise: function () {
        this.rotateElements('clockwise');
    },
    rotateElementsAntiClockwise: function () {
        this.rotateElements('anti-clockwise');
    },
    rotateElements: function (direction) {
        this.rotateElement('smyModel', direction);
        this.rotateElement('spropeller1', direction);
        this.rotateElement('spropeller2', direction);
        this.rotateElement('spropeller3', direction);
        this.rotateElement('spropeller4', direction);

        if (sisRotatingClockwise || sisRotatingAntiClockwise) {
            requestAnimationFrame(this.rotateElements.bind(this, direction));
        }
    },
    rotateElement: function (elementId, direction) {
        var element = document.getElementById(elementId);
        var currentRotation = element.getAttribute('rotation') || { x: 0, y: 20, z: 0 };

        // Adjust rotation based on the specified direction
        var rotationIncrement = (direction === 'clockwise') ? srotationSpeed : -srotationSpeed;

        element.setAttribute('rotation', {
            x: currentRotation.x,
            y: currentRotation.y + rotationIncrement,
            z: currentRotation.z
        });
    },
    rotateElementsXAxis: function () {
        this.rotateElementXAxis('smyModel');
        this.rotateElementXAxis('spropeller1');
        this.rotateElementXAxis('spropeller2');
        this.rotateElementXAxis('spropeller3');
        this.rotateElementXAxis('spropeller4');

        if (sisRotatingXAxis) {
            requestAnimationFrame(this.rotateElementsXAxis.bind(this));
        }
    },
    rotateElementXAxis: function (elementId) {
        var element = document.getElementById(elementId);
        var currentRotation = element.getAttribute('rotation') || { x: 0, y: 20, z: 0 };

        // Adjust rotation based on the specified maximum angle
        if (currentRotation.x < smaxRotationX) {
            var rotationIncrement = srotationSpeed;
            element.setAttribute('rotation', {
                x: currentRotation.x + rotationIncrement,
                y: currentRotation.y,
                z: currentRotation.z
            });
        }
    },
    rotateElementsXAxisReverse: function () {
        this.rotateElementXAxisReverse('smyModel');
        this.rotateElementXAxisReverse('spropeller1');
        this.rotateElementXAxisReverse('spropeller2');
        this.rotateElementXAxisReverse('spropeller3');
        this.rotateElementXAxisReverse('spropeller4');

        if (sisRotatingXAxisReverse) {
            requestAnimationFrame(this.rotateElementsXAxisReverse.bind(this));
        }
    },
    rotateElementXAxisReverse: function (elementId) {
        var element = document.getElementById(elementId);
        var currentRotation = element.getAttribute('rotation') || { x: 0, y: 20, z: 0 };

        // Adjust rotation based on the specified minimum angle
        if (currentRotation.x > -smaxRotationX) {
            var rotationIncrement = -srotationSpeed;
            element.setAttribute('rotation', {
                x: currentRotation.x + rotationIncrement,
                y: currentRotation.y,
                z: currentRotation.z
            });
        }
    },
    rotateElementsZAxis: function () {
        this.rotateElementZAxis('smyModel');
        this.rotateElementZAxis('spropeller1');
        this.rotateElementZAxis('spropeller2');
        this.rotateElementZAxis('spropeller3');
        this.rotateElementZAxis('spropeller4');

        if (sisRotatingZAxis) {
            requestAnimationFrame(this.rotateElementsZAxis.bind(this));
        }
    },
    rotateElementZAxis: function (elementId) {
        var element = document.getElementById(elementId);
        var currentRotation = element.getAttribute('rotation') || { x: 0, y: 20, z: 0 };

        // Adjust rotation based on the specified maximum angle
        if (currentRotation.z < smaxRotationZ) {
            var rotationIncrement = srotationSpeed;
            element.setAttribute('rotation', {
                x: currentRotation.x,
                y: currentRotation.y,
                z: currentRotation.z + rotationIncrement
            });
        }
    },
    rotateElementsZAxisReverse: function () {
        this.rotateElementZAxisReverse('smyModel');
        this.rotateElementZAxisReverse('spropeller1');
        this.rotateElementZAxisReverse('spropeller2');
        this.rotateElementZAxisReverse('spropeller3');
        this.rotateElementZAxisReverse('spropeller4');

        if (sisRotatingZAxisReverse) {
            requestAnimationFrame(this.rotateElementsZAxisReverse.bind(this));
        }
    },
    rotateElementZAxisReverse: function (elementId) {
        var element = document.getElementById(elementId);
        var currentRotation = element.getAttribute('rotation') || { x: 0, y: 20, z: 0 };

        // Adjust rotation based on the specified minimum angle
        if (currentRotation.z > -smaxRotationZ) {
            var rotationIncrement = -srotationSpeed;
            element.setAttribute('rotation', {
                x: currentRotation.x,
                y: currentRotation.y,
                z: currentRotation.z + rotationIncrement
            });
        }
    },
    resetRotation: function () {
        // Reset rotation to 0 degrees
        var elements = ['smyModel', 'spropeller1', 'spropeller2', 'spropeller3', 'spropeller4'];
        elements.forEach(elementId => {
            var element = document.getElementById(elementId);
            element.setAttribute('rotation', { x: 0, y: 20, z: 0 });
        });
    }
});