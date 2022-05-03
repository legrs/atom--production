let radio1 = document.querySelector('#develop');      // 切り
let radio2 = document.querySelector('#create');       //   替え
let developer = document.querySelector('#developer'); //       専
let creator = document.querySelector('#creator');     //         用
let plusH = document.querySelector('#plusH');      //水素追加ボタン
let atomQty = document.querySelector('#atomQty'); //合計元素数______
let autoAtom = document.querySelector('#autoAtom');    //     製造画面の
let autoEnergy = document.querySelector('#autoEnergy');//         選択ボタン
let autoAtoms = document.querySelector('#autoAtoms');      //自動生成
let autoEnergys = document.querySelector('#autoEnergys');  //自動発電
let back1 = document.querySelector('#back1'); //自動生成から戻るボタン
let back2 = document.querySelector('#back2'); //自動発電から戻るボタン
let addNum = document.querySelector('#addNum'); //何個追加するか
let plus = document.querySelector('#plus');  //プラスボタン
let minus = document.querySelector('#minus');//マイナスボタン

let hoverInfo = document.querySelector('#hoverInfo'); //カーソルを合わせて出てくる説明
let name = document.querySelector('#Name'); //説明の名前
let info1 = document.querySelector('#info1'); //説明の名前
let info2 = document.querySelector('#info2'); //説明
let info3 = document.querySelector('#info3'); //説明
let info4 = document.querySelector('#info4'); //説明
let info5 = document.querySelector('#info5'); //説明
let info6 = document.querySelector('#info6'); //説明

let pNum = document.querySelector('#pNum');  //粒子の数(html表示用)
let nNum= document.querySelector('#nNum'); //｜
let eNum= document.querySelector('#eNum'); //｜
let ENum= document.querySelector('#ENum'); //↓
let p = document.querySelector('#p');   
let n= document.querySelector('#n');  
let e= document.querySelector('#e');  

let HNum = document.querySelector('#HNum');  //元素の数(html表示用)
let HeNum= document.querySelector('#HeNum'); //｜
let LiNum= document.querySelector('#LiNum'); //｜
let BeNum= document.querySelector('#BeNum'); //｜
let BNum = document.querySelector('#BNum');  //｜
let CNum = document.querySelector('#CNum');  //｜
let NNum = document.querySelector('#NNum');  //｜
let ONum = document.querySelector('#ONum');  //｜
let FNum = document.querySelector('#FNum');  //｜
let NeNum= document.querySelector('#NeNum'); //↓
let H = document.querySelector('#H');   
let He= document.querySelector('#He');  
let Li= document.querySelector('#Li');  
let Be= document.querySelector('#Be');  
let B = document.querySelector('#B');   
let C = document.querySelector('#C');   
let N = document.querySelector('#N');   
let O = document.querySelector('#O');   
let F = document.querySelector('#F');   
let Ne= document.querySelector('#Ne');  

let atomArray     =    ['H','He','Li','Be','B','C','N','O','F','Ne']; //元素全部
let atomName      =    ['水素','ヘリウム','リチウム','ベリリウム',' ホウ素','炭素','窒素','酸素','フッ素','ネオン'];

let developerName =    ['質量エネルギー化装置','粒子合成装置','原子加速装置','分子分解装置','粒子中性子化装置'];
let developerArray=    ['toEnergy',       'toAtom',   'atomKsk',  'toPNE',    'toNeutron'];
let upgradedDeveloper = [0,0,0,0,0]; 
let developerNeedAtom =[
                        ['H'],
                        ['H'],
                        ['Li','Be'],
                        ['H'],
                        ['H','Li']
                        ];
let developerNeedAtomQty=[
                        [60],
                        [100],
                        [200,20],
                        [80],
                        [2000,1000]
                        ];
let developerExplain = [
                        '原子の質量をエネルギーに変換します',
                        '粒子を合成し原子にします',
                        '原子を衝突させ元素を作り出します',
                        '原子を粒子に分解します',
                        '原子の中の粒子を全て中性子にします'
                        ];
let developerInnerAtom = [
                        [''],
                        [''],
                        [''],
                        [''],
                        ['']
                        ];
let developerInnerAtomQty = [
                            [0],
                            [0],
                            [0],
                            [0],
                            [0]
                            ];

let electronArray  = [1,2,3,4,5,6,7,8,9,10];
let protonArray   =  [1,2,3,4,5,6,7,8,9,10];
let neutronArray =   [0,2,4,5,5,6,7,8,10,10];

let foundAtom = ['H'];  // 発見済み元素
let HQty = 0;  //元素の数
let HeQty = 0; //｜
let LiQty = 0; //｜
let BeQty = 0; //｜
let BQty = 0;  //｜
let CQty = 0;  //｜
let NQty = 0;  //｜
let OQty = 0;  //｜
let FQty = 0;  //｜
let NeQty = 0; //↓

let selectAtom = 0; //選択している元素
let energy = 0;  //エネルギー
let proton = 0;  //陽子の数
let neutron = 0; //中性子の数
let electron = 0;//電子の数
let addQty = 1; //１度に追加する数
let click = false; //plus minusをクリックしているか
let plusQtyplusQty = 1;//一度に追加する数を追加する数
let intervalFunction;
let fiveSecond = false; //plus minusをクリックしてから5秒立ったか
let plusMinusElement; 
let plusQtyplusedQty = 0;


function ischeck(){  //切り替え用
    if(radio1.checked == true){
        developer.style.display = "block";
        creator.style.display = "none";
        autoAtoms.style.display = "none";
        autoEnergys.style.display = "none";
        autoAtom.style.display = "none";
        autoEnergy.style.display = "none";
        console.log('check');
    }else{
        developer.style.display ="none";
    }
    if(radio2.checked == true){
        creator.style.display = "block";
        developer.style.display = "none";
        autoAtoms.style.display = "none";
        autoEnergys.style.display = "none";
        autoAtom.style.display = "block";
        autoEnergy.style.display = "block";
        console.log('checkkkkk');
    }else{
        creator.style.display = "none";
    }
}
function atomselect(atomNum){ //元素選択
    console.log(atomNum);
    if(foundAtom.includes(atomNum.target.id)){
        if(atomNum.target.id == 'H'){
            H.style.backgroundColor = "rgb(125, 225, 155)";
        }else{
            H.style.backgroundColor = "rgb(125, 190, 225)";
        }
        if(atomNum.target.id == 'He'){
            if(He.innerHTML == '?'){
                He.style.backgroundColor = "rgb(125, 190, 225)";
            }else{
                He.style.backgroundColor = "rgb(125, 225, 155)";
            }
        }else{
            He.style.backgroundColor = "rgb(125, 190, 225)";
        }
        if(atomNum.target.id == 'Li'){
            if(Li.innerHTML == '?'){
                Li.style.backgroundColor = "rgb(125, 190, 225)";
            }else{
                Li.style.backgroundColor = "rgb(125, 225, 155)";
            }
        }else{
            Li.style.backgroundColor = "rgb(125, 190, 225)";
        }
        if(atomNum.target.id == 'Be'){
            if(Be.innerHTML == '?'){
                Be.style.backgroundColor = "rgb(125, 190, 225)";
            }else{
                Be.style.backgroundColor = "rgb(125, 225, 155)";
            }
        }else{
            Be.style.backgroundColor = "rgb(125, 190, 225)";
        }
        if(atomNum.target.id == 'B'){
            if(B.innerHTML == '?'){
                B.style.backgroundColor = "rgb(125, 190, 225)";
            }else{
                B.style.backgroundColor = "rgb(125, 225, 155)";
            }
        }else{
            B.style.backgroundColor = "rgb(125, 190, 225)";
        }
        if(atomNum.target.id == 'C'){
            if(C.innerHTML == '?'){
                C.style.backgroundColor = "rgb(125, 190, 225)";
            }else{
                C.style.backgroundColor = "rgb(125, 225, 155)";
            }
        }else{
            C.style.backgroundColor = "rgb(125, 190, 225)";
        }
        if(atomNum.target.id == 'N'){
            if(N.innerHTML == '?'){
                N.style.backgroundColor = "rgb(125, 190, 225)";
            }else{
                N.style.backgroundColor = "rgb(125, 225, 155)";
            }
        }else{
            N.style.backgroundColor = "rgb(125, 190, 225)";
        }
        if(atomNum.target.id == 'O'){
            if(O.innerHTML == '?'){
                O.style.backgroundColor = "rgb(125, 190, 225)";
            }else{
                O.style.backgroundColor = "rgb(125, 225, 155)";
            }
        }else{
            O.style.backgroundColor = "rgb(125, 190, 225)";
        }
        if(atomNum.target.id == 'F'){
            if(F.innerHTML == '?'){
                F.style.backgroundColor = "rgb(125, 190, 225)";
            }else{
                F.style.backgroundColor = "rgb(125, 225, 155)";
            }
        }else{
            F.style.backgroundColor = "rgb(125, 190, 225)";
        }
        if(atomNum.target.id == 'Ne'){
            if(Ne.innerHTML == '?'){
                Ne.style.backgroundColor = "rgb(125, 190, 225)";
            }else{
                Ne.style.backgroundColor = "rgb(125, 225, 155)";
            }
        }else{
            Ne.style.backgroundColor = "rgb(125, 190, 225)";
        }
        selectAtom = atomNum.target.id;
    }else{
        console.log('含まれていない');
    }
}
function pneselect(pneNum){ //粒子選択
    if(pneNum.target.id == 'p'){
        if(pNum.innerHTML == '0'){
            p.style.backgroundColor = "rgb(125, 225, 155)";
        }else{
            selectAtom = 'proton';
            p.style.backgroundColor = "rgb(125, 190, 225)";
        }
    }else{
        p.style.backgroundColor = "rgb(125, 225, 155)";
    }

    if(pneNum.target.id == 'n'){
        if(nNum.innerHTML == '0'){
            n.style.backgroundColor = "rgb(125, 225, 155)";
        }else{
            selectAtom = 'neutron';
            n.style.backgroundColor = "rgb(125, 190, 225)";
        }
    }else{
        n.style.backgroundColor = "rgb(125, 225, 155)";
    }
    
    if(pneNum.target.id == 'e'){
        if(eNum.innerHTML == '0'){
            e.style.backgroundColor = "rgb(125, 225, 155)";
        }else{
            selectAtom = 'electron';
            e.style.backgroundColor = "rgb(125, 190, 225)";
        }
    }else{
        e.style.backgroundColor = "rgb(125, 225, 155)";
    }
}
function addAtom(){ //合計元素数を合わせる
    atomQty.innerHTML = HQty + HeQty + LiQty + BeQty + BQty + CQty + NQty + OQty + FQty + NeQty;
}
function addh(){ //水素追加
    HQty++;
    HNum.innerHTML = HQty;
    addAtom();
}
function selectAuto(select){   //製造画面の切り替え
    if(select.target.id == 'autoAtom'){
        autoAtom.style.display = 'none';
        autoEnergy.style.display = 'none';
        autoAtoms.style.display = 'block';
    }
    if(select.target.id == 'autoEnergy'){
        autoAtom.style.display = 'none';
        autoEnergy.style.display = 'none';
        autoEnergys.style.display = 'block';
    }
}
function back(){ //戻るボタン
        autoAtoms.style.display = 'none';
        autoEnergys.style.display = 'none';
        autoAtom.style.display = 'block';
        autoEnergy.style.display = 'block';
}
function numcheck(){ //追加数フォームの数字を正しく治す
    setTimeout(() => {
            addNum.value = addNum.value.replace(/[\D]/g, '');
            addQty = Number(addNum.value);
            if(addNum.value == '0'){
                addNum.value = '1';
                addQty = Number(addNum.value);
            }
    },1);
    
}
function plusminusdown(element){ //一度に追加する数の変更する数の変更関数(?)
    plusMinusElement = element;
    fiveSecond = false;
    console.log('plusminusdown',element.target.id);    ////
    plusminus(element); //////
    click = true;
    
    setTimeout(() => {
        if(click === true){
            fiveSecond = true;
            startInterval();
        }
        
    }, 500);
}
function startInterval(){ //繰り返しスタート関数
    console.log('startInterval');
    clearInterval(intervalFunction);
    intervalFunction =  setInterval(() => {
                            if(fiveSecond === true){
                                if(click === true){
                                    if(plusQtyplusedQty % 10 == 0){
                                        plusQtyplusQty = plusQtyplusQty * 2;
                                    }
                                    plusminus(plusMinusElement);//////
                                    plusQtyplusedQty++;
                                    console.log(plusQtyplusQty,addQty,plusMinusElement.target.id);
                                }else{
                                    plusQtyplusQty = 1;
                                }
                            }
                            
                        }, 50);
}
function stopInterval(){  //繰り返しストップ関数
    console.log('stopInterval');
    clearInterval(intervalFunction);
}
function plusminus(element){
    if(addQty >= 1){
        if(addQty - plusQtyplusQty <= 1){
            
        }else{
            minus.style.backgroundColor = "#4d56ff"
        }
        
    }else{
        minus.style.backgroundColor = "#989898"
    }
    console.log('plusminus',element.target.id);     //////
    switch(element.target.id){
        case 'plus':
            console.log(element.target.id);         //////
            addQty = addQty + plusQtyplusQty;
            addNum.value = String(addQty);
            break;
        case 'minus':
            console.log('mi');
            if(addQty >= 1){
                if(addQty - plusQtyplusQty <= 1){
                    minus.style.backgroundColor = "#989898"
                    addQty = 1;
                    addNum.value = String(addQty);
                    console.log('1111111111111111');
                }else{
                    console.log('minusssssssssssssssss');
                    minus.style.backgroundColor = "#4d56ff"
                    addQty = addQty - plusQtyplusQty;
                    addNum.value = String(addQty);
                }
                
            }else{
                minus.style.backgroundColor = "#989898"
                addQty = 1;
                addNum.value = String(addQty);
            }
            break;
    } 
}


function foundAtomInfo(element){ //発見済み元素の説明出す
    name.innerHTML  = atomName[atomArray.indexOf(element)];
    info1.innerHTML = `元素記号:${element}`;
    info2.innerHTML = `陽子数:&nbsp;&nbsp;&nbsp;${protonArray[atomArray.indexOf(element)]}`;
    info3.innerHTML = `電子数:&nbsp;&nbsp;&nbsp;${electronArray[atomArray.indexOf(element)]}`;
    info4.innerHTML = `中性子数:${neutronArray[atomArray.indexOf(element)]}`;
    info5.innerHTML = '';
    info6.innerHTML = '';
}
function nofoundAtomInfo(element){//未発見元素の説明出す
    name.innerHTML  = '未発見元素';
    info1.innerHTML = `元素記号:?`;
    info2.innerHTML = `陽子数:&nbsp;&nbsp;&nbsp;${protonArray[atomArray.indexOf(element)]}`;
    info3.innerHTML = `電子数:&nbsp;&nbsp;&nbsp;${electronArray[atomArray.indexOf(element)]}`;
    info4.innerHTML = `中性子数:?`;
    info5.innerHTML = '';
    info6.innerHTML = '';
}
function developerInfo(element){
    let createNeedAtom = '';
    let innerAtom = '';
    if(upgradedDeveloper[upgradedDeveloper.indexOf(element)] >= 1){ //developerArray.indexOf(element)

    }else{
        name.innerHTML  = developerName[developerArray.indexOf(element)];
        info1.innerHTML = '';
        info2.innerHTML = '';
        info3.innerHTML = '';
        info4.innerHTML = '';
        info5.innerHTML = '';
        info6.innerHTML = '';
        
        
        info5.innerHTML = `説明:${developerExplain[developerArray.indexOf(element)]}`;
        
        if( developerInnerAtom[developerArray.indexOf(element)] == ''){ //中身がない時

            if(upgradedDeveloper[developerArray.indexOf(element)] == 0){ //作成済みでないかどうか
                info1.innerHTML = '未作成';
            }
            info2.innerHTML = `作成必要元素:`;
            for(let i = 0;i<developerNeedAtom[developerArray.indexOf(element)].length;i++){
                createNeedAtom = `${createNeedAtom} ${developerNeedAtom[developerArray.indexOf(element)][i]} ${developerNeedAtomQty[developerArray.indexOf(element)][i]}個`;
            }
            info3.innerHTML = createNeedAtom;
        }else{
            if(upgradedDeveloper[developerArray.indexOf(element)] == 0){ //作成済みでないかどうか
                info1.innerHTML = '未作成';
                info2.innerHTML = `作成必要元素:`;
                for(let i = 0;i<developerNeedAtom[developerArray.indexOf(element)].length;i++){
                    createNeedAtom = `${createNeedAtom} ${developerNeedAtom[developerArray.indexOf(element)][i]} ${developerNeedAtomQty[developerArray.indexOf(element)][i]}個`;
                }
                info3.innerHTML = createNeedAtom;
            }else{
                for(let i = 0;i<developerInnerAtom[developerArray.indexOf(element)].length;i++){
                innerAtom = `${innerAtom} ${developerInnerAtom[developerArray.indexOf(element)][i]} ${developerInnerAtomQty[developerArray.indexOf(element)][i]}`;
            }
            info4.innerHTML = `中身:${innerAtom}`;
            }
            
        }
        
    }
    
}


plusH.addEventListener('click',addh);

autoAtom.addEventListener('click',selectAuto);
autoEnergy.addEventListener('click',selectAuto);

back1.addEventListener('click',back);
back2.addEventListener('click',back);

radio1.addEventListener('click',ischeck); //切り
radio2.addEventListener('click',ischeck); //   替え用

H.addEventListener('click',atomselect); //元素選択
He.addEventListener('click',atomselect); //元素選択
Li.addEventListener('click',atomselect); //元素選択
Be.addEventListener('click',atomselect); //元素選択
B.addEventListener('click',atomselect); //元素選択
C.addEventListener('click',atomselect); //元素選択
N.addEventListener('click',atomselect); //元素選択
O.addEventListener('click',atomselect); //元素選択
F.addEventListener('click',atomselect); //元素選択
Ne.addEventListener('click',atomselect); //元素選択

p.addEventListener('click',pneselect);  //粒子選択
n.addEventListener('click',pneselect); //粒子選択
e.addEventListener('click',pneselect); //粒子選択

document.addEventListener('keydown',numcheck); //数字が不正でないか

plus.addEventListener('mousedown',plusminusdown);  //一度に追加する数の変更ボタンがクリック開始
plus.addEventListener('mouseup',() => {   //一度に追加する数の変更ボタンがクリック終了
    click = false;
    stopInterval();
    plusQtyplusQty = 1;
    plusQtyplusedQty = 0;
});  
minus.addEventListener('mousedown',plusminusdown);  //一度に追加する数の変更ボタンがクリック開始
minus.addEventListener('mouseup',() => {  //一度に追加する数の変更ボタンがクリック終了
    click = false; 
    stopInterval();
    plusQtyplusQty = 1;
    plusQtyplusedQty = 0;
}); 

document.addEventListener('mouseover',(element) =>{ //カーソル合わせると説明が出てくるように
    switch(element.target.id){
        case 'H':
        case 'He':
        case 'He':
        case 'Li':
        case 'Be':
        case 'B':
        case 'C':
        case 'N':
        case 'O':
        case 'F':
        case 'Ne': //元素説明
            hoverInfo.style.display = 'block';
            if(foundAtom.includes(element.target.id)){
                foundAtomInfo(element.target.id);
                console.log(element.target.id);
            }else{
                nofoundAtomInfo(element.target.id);
            }
            break;
        case 'addNum'://追加数説明
            hoverInfo.style.display = 'block';
            name.innerHTML = '一度に使用する数';
            info1.innerHTML = '1以上の数を指定';
            info2.innerHTML = '';
            info3.innerHTML = '';
            info4.innerHTML = '';
            info5.innerHTML = '';
            info6.innerHTML = '';
            break;
        case 'toEnergy':
        case 'toPNE':
        case 'toAtom':
        case 'toNeutron':
        case 'atomKsk':
            hoverInfo.style.display = 'block';
            developerInfo(element.target.id)
            break;
        default:
            hoverInfo.style.display = 'none';
            //console.log(element.target.id); 
    }
});
document.addEventListener('mousemove',(event) => {
    if(event.pageY > window.innerHeight * (3 / 4)){
        hoverInfo.style.top = `${event.pageY - (hoverInfo.offsetHeight + 10)}px`; //マウスのうえ
    }else{
        if(event.pageY > window.innerHeight / 4){
            hoverInfo.style.top = `${event.pageY - hoverInfo.offsetHeight / 2}px`;    //マウスとおなじ
        }else{
            hoverInfo.style.top = `${event.pageY + 10}px`;                        //マウスの下
            
        }
    }
    if(event.pageX > window.innerWidth / 2){
        hoverInfo.style.left = `${event.pageX - (window.innerWidth * (15 / 100) + 30)}px`;
    }else{
        hoverInfo.style.left = `${event.pageX + 30}px`;
    }
})