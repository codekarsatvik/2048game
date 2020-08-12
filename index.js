if (screen.width >500) {
    document.getElementById('css').setAttribute("href", 'styledesktop.css');
    
    
}
document.addEventListener("DOMContentLoaded",()=>{

    

    const gridDisplay = document.querySelector('.grid');
    var scoreDisplay = document.querySelector('.score');
    const width = 4 ;
    var squares = [];
    let score = 0;
    var audio = new Audio('Whip-Crack-www.fesliyanstudios.com.mp3');
    var winaudio = new Audio('Indoor-Large-Size-Audience-Applause-Clapping-www.fesliyanstudios.com.mp3');
    var looseaudio = new Audio('Computer-beep-beeping-2-www.FesliyanStudios.com.mp3');

    function createBoard()
    {

        for (let i = 0; i < 16; i++) {
            let block = document.createElement('div');
            block.className = "block";
            let square = document.createElement('div');
            square.innerHTML = 0;
            block.appendChild(square);
            gridDisplay.appendChild(block);
            squares.push(square);
            
        }
        genrate();
        genrate();
    }

    createBoard();


    // genrating new randoms no 

    function genrate() {

        let randomNumber = Math.floor(Math.random() * squares.length);
        if(squares[randomNumber].innerHTML ==0){
            squares[randomNumber].innerHTML= 2;

        }else genrate()

        
    }

    

   







    // swipe right 


    function right() {

        for (let i = 0; i < 16; i++) {
            if(i%4==0){
                let totone = squares[i].innerHTML;
                let tottwo = squares[i+1].innerHTML;
                let totthree = squares[i+2].innerHTML;
                let totfour = squares[i+3].innerHTML;
                let row = [parseInt(totone),parseInt(tottwo),parseInt(totthree),parseInt(totfour)]
                
                let filteredrow = row.filter(num => num);
                let remaining = 4 - filteredrow.length ;
                let zeroes = Array(remaining).fill(0);
                let newRow = zeroes.concat(filteredrow);
                // console.log(newRow);
                squares[i].innerHTML = newRow[0];
                squares[i+1].innerHTML = newRow[1];
                squares[i+2].innerHTML = newRow[2];
                squares[i+3].innerHTML = newRow[3];

            }
            
        }
        
    }



       // swipe left 


       function left() {

        for (let i = 0; i < 16; i++) {
            if(i%4==0){
                let totone = squares[i].innerHTML;
                let tottwo = squares[i+1].innerHTML;
                let totthree = squares[i+2].innerHTML;
                let totfour = squares[i+3].innerHTML;
                let row = [parseInt(totone),parseInt(tottwo),parseInt(totthree),parseInt(totfour)]
                
                let filteredrow = row.filter(num => num);
                let remaining = 4 - filteredrow.length ;
                let zeroes = Array(remaining).fill(0);
                let newRow = filteredrow.concat(zeroes);
                // console.log(newRow);
                squares[i].innerHTML = newRow[0];
                squares[i+1].innerHTML = newRow[1];
                squares[i+2].innerHTML = newRow[2];
                squares[i+3].innerHTML = newRow[3];

            }
            
        }
        
    }


    // swipe down 
    function down() {
        for (let i = 0; i < 4; i++) {
           let totone = squares[i].innerHTML;
           let tottwo = squares[i+width].innerHTML;
           let totthree = squares[i + width*2].innerHTML;
           let totfour = squares[i + width*3].innerHTML;

           let coulmn = [parseInt(totone),parseInt(tottwo),parseInt(totthree),parseInt(totfour)]
                
           let filteredcoulmn = coulmn.filter(num => num);
           let remaining = 4 - filteredcoulmn.length ;
           let zeroes = Array(remaining).fill(0);
           let newcoulmn = zeroes.concat(filteredcoulmn);
           // console.log(newcoulmn);
           squares[i].innerHTML = newcoulmn[0];
           squares[i+width].innerHTML = newcoulmn[1];
           squares[i+2*width].innerHTML = newcoulmn[2];
           squares[i+3*width].innerHTML = newcoulmn[3];
           




            
        }        
    }

     // swipe up
     function up() {
        for (let i = 0; i < 4; i++) {
           let totone = squares[i].innerHTML;
           let tottwo = squares[i+width].innerHTML;
           let totthree = squares[i + width*2].innerHTML;
           let totfour = squares[i + width*3].innerHTML;

           let coulmn = [parseInt(totone),parseInt(tottwo),parseInt(totthree),parseInt(totfour)]
                
           let filteredcoulmn = coulmn.filter(num => num);
           let remaining = 4 - filteredcoulmn.length ;
           let zeroes = Array(remaining).fill(0);
           let newcoulmn = filteredcoulmn.concat(zeroes);
           // console.log(newcoulmn);
           squares[i].innerHTML = newcoulmn[0];
           squares[i+width].innerHTML = newcoulmn[1];
           squares[i+2*width].innerHTML = newcoulmn[2];
           squares[i+3*width].innerHTML = newcoulmn[3];
           




            
        }        
    }

    // combining rows to play 

    function combineRows() {
        for (let i = 0; i < 15; i++) {
            if(squares[i].innerHTML == squares[i+1].innerHTML){
                let comtotal = parseInt(squares[i].innerHTML)+ parseInt(squares[i+1].innerHTML);
                squares[i].innerHTML= comtotal ;
                squares[i+1].innerHTML = 0;
                score += comtotal;
                scoreDisplay.innerHTML = score ;

            }
            
        }
        
        audio.play();
        win();
        loose();
        
    }
    

    // combining coulmns to play 

    function combinecoulmns() {
        for (let i = 0; i < 12; i++) {
            if(squares[i].innerHTML == squares[i+ width].innerHTML){
                let comtotal = parseInt(squares[i].innerHTML)+ parseInt(squares[i+width].innerHTML);
                squares[i].innerHTML= comtotal ;
                squares[i+width].innerHTML = 0;
                // console.log(comtotal);
                score += comtotal;
                scoreDisplay.innerHTML = score ;

            }
            
        }
        audio.play();
        
        win();
        loose();
        
    }



//  touch code 
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);
    
    var xDown = null;                                                        
    var yDown = null;
    
    function getTouches(evt) {
      return evt.touches ||             // browser API
             evt.originalEvent.touches; // jQuery
    }                                                     
    
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
    
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }
    
        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;
    
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
    
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */ 

                left();
                combineRows();
                left();
                genrate();
                
            } else {
                /* right swipe */

                
                right();
                combineRows();
                right();
                genrate();
               
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
                up();
                combinecoulmns();
                up();
                genrate();
               
            } else { 
                /* down swipe */

                down();
                combinecoulmns();
                down();
                genrate();
               
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };
    // touch code ends 

    // keyboard controls 

    function control(e) {
        if (e.keyCode===39) {
            right();
            combineRows();
            right();
            genrate();

            
        }
        else if(e.keyCode === 37){
            left();
            combineRows();
            left();
            genrate();

        }
        else if(e.keyCode  === 38 ){
            up();
            combinecoulmns();
            up();
            genrate();
        }
        else if(e.keyCode === 40){
            down();
            combinecoulmns();
            down();
            genrate();
        }
        
    }
    document.addEventListener('keyup',control);

    function win() {
        squares.forEach(i => {
            if(i.innerHTML== 2048){
                document.querySelector('.win').innerHTML = " YOU WON ";
                winaudio.play();
                document.removeEventListener('keyup',control);
                document.removeEventListener('touchstart', handleTouchStart, false);        
    document.removeEventListener('touchmove', handleTouchMove, false);
             document.querySelector('button').innerHTML = "Play Again ";

            }

            

        });
        
    };
    function loose() {
        let dot =0;
        squares.forEach(i => {
            if(i.innerHTML== 0){
                
             dot = dot + 1;
            }

        });
        if(dot==0){
            document.querySelector('.win').innerHTML = " YOU LOOSE ";
            looseaudio.play();
            document.removeEventListener('keyup',control);
            document.removeEventListener('touchstart', handleTouchStart, false);        
    document.removeEventListener('touchmove', handleTouchMove, false);
    document.querySelector('button').innerHTML = "Play Again ";
            

        }
        
    }



    

})