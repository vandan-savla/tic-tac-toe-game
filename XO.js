var move= 1;
var play= true;
let disp=document.getElementById('player');
 $('table tr td').click(function start()
  {
    if($(this).text()=="" && play)
    {   
        if(move%2==1)
        {
            $(this).append("X");
             disp.innerHTML=" O player turn";
        }
        else
        {
            $(this).append("O");
            disp.innerHTML="X player turn";
        }
        move++;
    } 
        if(findWinner()!="-1" && findWinner()!="")
                {
               play=false;
               
               if(findWinner()=="X")
               {
                   
                   $('body').append('<button class="btn" onclick="location.reload()">PLAY AGAIN</button>');
                   disp.innerHTML="GAME OVER X WON!!";
                   
                }
                else 
                {
                    $('body').append('<button class="btn" onclick="location.reload()">PLAY AGAIN</button>');   
                    disp.innerHTML="GAME OVER O WON!!";  
                }
                
                
            } 
          if(move==10 && findWinner()==-1){
              $('body').append('<button class="btn" onclick="location.reload()">PLAY AGAIN</button>');
              disp.innerHTML = "GAME TIE!!";
          
        }   
            
  } );
   function findWinner() {
       sp1=$('table tr:nth-child(1) td:nth-child(1)').text();
       sp2=$('table tr:nth-child(1) td:nth-child(2)').text();
       sp3=$('table tr:nth-child(1) td:nth-child(3)').text();
       sp4=$('table tr:nth-child(2) td:nth-child(1)').text();
       sp5=$('table tr:nth-child(2) td:nth-child(2)').text();
       sp6=$('table tr:nth-child(2) td:nth-child(3)').text();
       sp7=$('table tr:nth-child(3) td:nth-child(1)').text();
       sp9=$('table tr:nth-child(3) td:nth-child(3)').text();
       sp8=$('table tr:nth-child(3) td:nth-child(2)').text();
    //   check rows
        if(sp1==sp2 && sp1==sp3)
            {
                return sp3; 
            }
            else if(sp4==sp5 && sp4==sp6)
            {
                return sp6;            
            }
            else if(sp7==sp8 && sp7==sp9)
            {
                return sp9;            
            }
            // check colmns
            else if(sp1==sp4 && sp1==sp7)
            {
                return sp7;            
            }
            else if(sp2==sp5 && sp2==sp8)
            {
                return sp8;            
            }
            else if(sp3==sp6 && sp3==sp9)
            {
                return sp9;   
            }
            // check diagonals
            else if(sp1==sp5 && sp1==sp9)
            {
                return sp9;            
            }
            else if(sp3==sp5 && sp3==sp7)
            {
                return sp7;            
            }
            else 
            {return -1;
            }
        }
                   
        
        




