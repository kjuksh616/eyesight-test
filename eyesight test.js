var hj= [["/assets/622_0.1.PNG","/assets/622_0.1(2).PNG","/assets/622_0.1(3).PNG","/assets/622_0.1(5).PNG"],
        ["/assets/622_0.2.PNG","/assets/622_0.2(2).PNG","/assets/622_0.2(3).PNG","/assets/622_0.2(4).PNG"],
        ["/assets/622_0.3.PNG","/assets/622_0.3(2).PNG","/assets/622_0.3(3).PNG","/assets/622_0.3(4).PNG"],
        ["/assets/622_0.4.PNG","/assets/622_0.4(2).PNG","/assets/622_0.4(3).PNG","/assets/622_0.4(4).PNG"],
        ["/assets/622_0.5.PNG","/assets/622_0.5(2).PNG","/assets/622_0.6(3).PNG","/assets/622_0.5(4).PNG"],
        ["/assets/622_0.6.PNG","/assets/622_0.6(2).PNG","/assets/622_0.6(3).PNG","/assets/622_0.6(4).PNG"],
        ["/assets/622_0.7.PNG","/assets/622_0.7(2).PNG","/assets/622_0.7(3).PNG","/assets/622_0.7(4).PNG"],
        ["/assets/622_0.8.PNG","/assets/622_0.8(2).PNG","/assets/622_0.8(3).PNG","/assets/622_0.8(4).PNG"],
        ["/assets/622_0.9.PNG","/assets/622_0.9(2).PNG","/assets/622_0.9(3).PNG","/assets/622_0.9(4).PNG"],
        ["/assets/622_1.0.PNG","/assets/622_1.0(2).PNG","/assets/622_1.0(3).PNG","/assets/622_1.0(4).PNG"],
        ["/assets/622_1.2.PNG","/assets/622_1.2(2).PNG","/assets/622_1.2(3).PNG","/assets/622_1.2(4).PNG","/assets/622_1.2(5).PNG"],
        ["/assets/622_1.5.PNG","/assets/622_1.5(2).PNG","/assets/622_1.5(3).PNG","/assets/622_1.5(4).PNG","/assets/622_1.5(5).PNG"],
        ["/assets/622_2.0.PNG","/assets/622_2.0(2).PNG","/assets/622_2.0(3).PNG","/assets/622_2.0(4).PNG"]
        ];

        
var hj = [[hj[2][2],hj[12][3]],
         [hj[11][3]],
         [hj[9][3],hj[3][2]],
         [hj[1][2]],
         [hj[5][1],hj[8][3]],
         [hj[0][2],hj[10][3]],
         [hj[4][1],hj[5][0],hj[6][2],hj[8][1],hj[9][2],hj[12][2]],
         [hj[2][1],hj[2][0],hj[6][0],hj[7][1],hj[2][0],hj[9][1],hj[10][1],hj[11][1],hj[12][0]],
         [hj[0][1],hj[1][0],hj[5][2],hj[5][3],hj[7][0],hj[8][0],hj[10][0],hj[10][2],hj[12][1],hj[3][1]],
         [,hj[0][0],hj[1][1],hj[3][0],hj[4][2],hj[6][1],hj[7][2],hj[9][0],hj[11][0]],
         [hj[0][3],hj[4][3],hj[10][4]],
         [hj[2][3],hj[8][4]],
         [hj[1][3],hj[6][3],hj[11][4]]
         ]

var result = ['0.1','0.2','0.3','0.4','0.5','0.6','0.7','0.7','0.8','0.9','1.0','1.2','1.5','2.0'];

var parent = box().append().size("100%").border(0);
var bmenu = box().append().size(70,40).border(0).positionFixed().center().left(0).top(0);

var child1 = box().appendTo(parent).size("100%").border(0).bgImage("/assets/622_더엉쿨.PNG");
var child2 = box().appendTo(parent).size("100%").border(0).color('LightGoldenRodYellow').hide();
var child3 = box().appendTo(parent).size("100%").border(0).hide();

// var bgcolor = box().append().size("100%").border(0).color('black').hide().positionFixed().center().opacity(65).click(Cmenu);
var title1 = box().appendTo(child1).size(250,250).image("제목.PNG").border(0).marginTop(110).click(Oapp1);

// // box().appendTo(bmenu).size(40,50).image("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png")
//      .border(0).click(Omenu);

// var menubox = box().append().size(130,560).positionFixed().left(-130).click(Cmenu).border(0).color('LightCyan');

// function Omenu(bx){
//     menubox.moveRight(130,500);
//     bgcolor.show();
// }

// function Cmenu(bx){
//     menubox.moveLeft(130,500);
//     bgcolor.hide();
//} 

// var home = box().appendTo(menubox).icon("home").click(gomenu).border(0).iconSize(35).size(50).marginTop(7).marginRight(67);
// var eyesight = box().appendTo(menubox).size("auto",50).text("시력검사").textSize(25)
//                     .border(0).click(Oapp1);
                    
function gomenu(bx){
      child1.show();
    child2.hide();
    child3.hide();
    resultbg.hide();
}
function Oapp1(bx){
    child1.hide();
    child2.show();
    child3.hide();
    resultbg.hide();
}
var help = box().appendTo(child2).icon("help").top(0).size(20).iconSize(30).border(0).left(160).click(onhelp);
var title2 = box().appendTo(child2).text("시력검사 테스트").textSize(40).textColor('lightblue').border(0).font('Nanum Myeongjo').marginTop(100);
var playbutton = box().appendTo(child2).size(300,'auto').image("/assets/622_play.PNG").border(0).marginTop(30).click(start1);
var helpbx = box().appendTo(child2).size(350,260).text("help \n 0.1부터 시작하는 시력표를 보고 패드를 2번누르면 다음 답으로 넘어가며  2번이상 틀렸을시 검사가 끝나게 된다.")
            .textSize(27).borderRadius(50).color('LightCyan').hide().center().positionFixed().click(offhelp);

function onhelp(bx){
    helpbx.show();
}

function offhelp(bx){
    helpbx.hide();
}


function start1(bx){
    child2.hide();
    child3.show();
    resultbg.hide();
    }

var x = 0;
var y = 0; 

var testbox = box().appendTo(child3).size(400,400).border(0).marginTop(20);
var testpicture = box().appendTo(testbox).size("auto").textsize(210).marginBottom(20).image(hj[x][y]).border(0).marginTop(32);
var bt = loadRealcode('realcode.bluetooth');
box().appendTo(child3).icon("bluetooth").size(30).marginTop(10).color('#EAEAEA').borderRadius(20).textSize(20).float('right').marginRight(10).click(connectBluetooth);
var tbox = box().appendTo(child3).size(270,270).border(0);

function connectBluetooth(){
      bt.showScan();
      var aaa =box().append().timer(200, onTimer);

}

function success(data){ 
    var gg =data;
    if(!gg)
        return;
    message(gg);
    onClick(box().text(gg));
}

function fail(){
}

function onTimer(){
    bt.read(success, fail);
}




var correct = box().append().text("O").border(0).textSize(200).textColor('red').blink(100,1000).positionFixed().center().top(24).left(0).hide();
var wrong = box().append().text("X").border(0).textSize(200).textColor('red').blink(100,1000).positionFixed().center().top(24).left(0).hide();

function time(bx){
    correct.hide();
    wrong.hide();
}
var d = 1;
for(i = 0; i< 16; i++){
    box().appendTo(tbox).size(60).border(3).text(d++).click(onClick);
    
}
var k = 0;
var A = [0,0,0,0,0,0,0,0,0,0,0,0,0];
function onCorrect(){
    A[x]++;
            
    if(A[x]>=2){
        if(x>=12){
            resultbg.show();
            child3.hide();
            child2.hide();
            child1.hide();
            resultbx.text("당신의 시력은"+result[x]+"입니다");
        }
        x++;
        y=0;   
        k=0;
        
        
    }else{
        y++;
    }
    correct.show();
    correct.timerOnce(1000,time);
    speech('맞았습니다');
}


function onWrong(){
    k++;
    wrong.show();
    wrong.timerOnce(1000,time);
        speech('틀렸습니다');
    
     if(k>=2){
        resultbg.show();
        child3.hide();
        child2.hide();
        child1.hide();
        resultbx.text("당신의 시력은"+result[x]+"입니다");
        k=0;
        y=0;
        x=0;
    }
}

function onClick(bx){
    if(bx.text()==1){
        if(testpicture.image()==hj[2][2]||testpicture.image()==hj[12][3]){
            onCorrect();            
        }else{
            onWrong();
            
        }
    }else if(bx.text()==2){
        if(testpicture.image()==hj[11][3]){
            onCorrect();        
        }else{
            onWrong();
        } 
    
    }else if(bx.text()==3){
        if(testpicture.image()==hj[9][3]||testpicture.image()==[3][2]){
            onCorrect(); 
        }else{
            onWrong();
        }
    
    }else if(bx.text()==4){
        if(testpicture.image()==hj[1][2]){
            onCorrect(); 
        }else{
            onWrong();
        }
    }else if(bx.text()==5){
        if(testpicture.image()==hj[5][1]||testpicture.image()==hj[8][3]){
            onCorrect();       
        }else{
            onWrong();
        }
        
    }else if(bx.text()==6){
        if(testpicture.image()==hj[0][2]||testpicture.image()==hj[10][3]){
            onCorrect();       
        }else{
            onWrong();
        }
    }else if(bx.text()==7){
        if(testpicture.image()==hj[4][1]||testpicture.image()==hj[5][0]||testpicture.image()==hj[6][2]||testpicture.image()==hj[8][1]||testpicture.image()==hj[9][2]||testpicture.image()==hj[12][2]){
            onCorrect();  
        }else{
            onWrong();
        }
    }else if(bx.text()==8){
        if(testpicture.image()==hj[2][1]||testpicture.image()==hj[2][0]||testpicture.image()==hj[4][0]||testpicture.image()==hj[6][0]||testpicture.image()==hj[7][1]||testpicture.image()==hj[2][0]||testpicture.image()==hj[9][1]||testpicture.image()==hj[10][1]||testpicture.image()==hj[11][1]||testpicture.image()==hj[12][0]){
            onCorrect(); 
        }else{
            onWrong();
        }
    }else if(bx.text()==9){
        if(testpicture.image()==hj[0][1]||testpicture.image()==hj[1][0]||testpicture.image()==hj[5][2]||testpicture.image()==hj[5][3]||testpicture.image()==hj[7][0]||testpicture.image()==hj[8][0]||testpicture.image()==hj[10][0]||testpicture.image()==hj[10][2]||testpicture.image()==hj[12][1]||testpicture.image()==hj[3][1]){
             onCorrect();  
        }else{
            onWrong();
        }
    }else if(bx.text()==10){
        if(testpicture.image()==hj[0][0]||testpicture.image()==hj[1][1]||testpicture.image()==hj[3][0]||testpicture.image()==hj[4][2]||testpicture.image()==hj[6][1]||testpicture.image()==hj[7][2]||testpicture.image()==hj[9][0]||testpicture.image()==hj[11][0]){
            onCorrect();  
        }else{
            onWrong();
        }
    }else if(bx.text()==11){
        if(testpicture.image()==hj[0][3]||testpicture.image()==hj[4][3]||testpicture.image()==hj[10][4]){  
             onCorrect();  
        }else{
          onWrong();
        }
    }else if(bx.text()==12){
        if(testpicture.image()==hj[2][3]||testpicture.image()==hj[8][4]){
            onCorrect();  
        }else{
            onWrong();
        }
    }else if(bx.text()==13){
        if(testpicture.image()==hj[1][3]||testpicture.image()==hj[6][3]||testpicture.image()==hj[11][4]){
             onCorrect();  
        }else{
            onWrong();
        }
  }
testpicture.image(hj[x][y]);
}

var resultbg =  box().appendTo(parent).size(500,700).border(0).hide().center().color('lightGreen').opacity(50);
var resultbx = box().appendTo(resultbg).size(300,100).textSize(25).textColor('black').center().marginRight(500).border(0);
var back = box().appendTo(resultbg).icon("replay").size(20).iconSize(20).click(start1).border(0);