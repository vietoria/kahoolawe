function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
    background (201, 187, 169); 
}
const IMAGES = {
sect1: 'sect1.png', 
sect2: 'sect2.png', 
sect3: 'sect3.png', 
sect4: 'sect4.png', 
sect5: 'sect5.png', 

}; 

  //var myFont; 
  function preload() {
  //myFont = loadFont('assets/sweetpea.ttf');

 sect1 = loadImage('sect1.png');
 sect2 = loadImage('sect2.png');
 sect3 = loadImage('sect3.png');
 sect4 = loadImage('sect4.png');
 sect5 = loadImage('sect5.png');

}