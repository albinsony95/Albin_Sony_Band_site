let arrCommentlist=[{name:'Connor Walton',date:'02/17/2021',comment:'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'},
                    {name:'Emilie Beach',date:'01/09/2021',comment:'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'},
                    {name:'Miles Acosta',date:'12/20/2020',comment:'I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.'},
                    ]
                    // let date=new Date().toLocaleDateString();
                    // console.log(date);
const button=document.getElementById('bcomment');
button.addEventListener("click",(event)=>{
    let name=document.getElementById('cName');
    let date=new Date().toLocaleDateString();
    let comment=document.getElementById('cComment');
    // console.log(name.value,date,comment.value);
    let obj={name:name.value,date:date,comment:comment.value};
    arrCommentlist.unshift(obj);
    console.log(arrCommentlist);
    arrayDisplay(arrCommentlist);
    console.log(obj);
    event.preventDefault();
});
//console.log(arrCommentlist[0]);
arrayDisplay(arrCommentlist);

function arrayDisplay(arrCommentlist){
let commentbox=document.getElementById('commentContainer');
commentbox.innerHTML=" ";
for(i=0;i<arrCommentlist.length;i++){
arraydata=arrCommentlist[i];
console.log(arraydata.name);
    let cname=document.createElement('h4');
    setAttributes(cname,{"class":"main__comDisplay__box__box1__box2--name"});
    cname.innerHTML=arraydata.name;

    let cdate=document.createElement('h5');
    setAttributes(cdate,{"class":"main__comDisplay__box__box1__box2--date"});
    cdate.innerHTML=arraydata.date;

    let eachCommentBox2 = document.createElement('div');
    setAttributes(eachCommentBox2,{"class":"main__comDisplay__box__box1__box2"});
    eachCommentBox2.appendChild(cname);
    eachCommentBox2.appendChild(cdate);

    let commentdata=document.createElement('p');
    setAttributes(cname,{"class":"main__comDisplay__box__box1--comment"});
    commentdata.innerHTML=arraydata.comment;

    let eachCommentBox1=document.createElement('article');
    setAttributes(eachCommentBox1,{"class":"main__comDisplay__box__box1"});
    eachCommentBox1.appendChild(eachCommentBox2);
    eachCommentBox1.appendChild(commentdata);

    let avatar=document.createElement('img');
    setAttributes(avatar,{"class":"main__comDisplay__box__imge","src":"../Assets/Images/blank-avatar.png"});

    let eachCommentBox=document.createElement('article');
    setAttributes(eachCommentBox,{"class":"main__comDisplay__box"});
    eachCommentBox.appendChild(avatar);
    eachCommentBox.appendChild(eachCommentBox1);

    commentbox.appendChild(eachCommentBox);
    
    
    
    
    
    
    
}
}

// addElements();
// attributes();

// function arrayDisplay(arrlist){
// console.log(arrlist);

// }
// function attributes(){
//     setAttributes(commentContainer, {"class":"main__comment-container"});
//     setAttributes(commentForm, {"class":"main__form"});
//     setAttributes(inputName, {'id':'commentor','type':'text','placeholder':'Enter your Name'});
//     setAttributes(inputComment, {"id":"comment",'placeholder':'Add a new comment'});
// }

// function addElements(){
// eachCommentBox.appendChild(cname);
// eachCommentBox.appendChild(date);
// commentForm.appendChild(commentdata);
// commentForm.appendChild(inputName);
// commentForm.appendChild(lblCommentarea);
// commentForm.appendChild(inputComment);
// commentForm.appendChild(btnComment);
// mainpart.appendChild(commentContainer);
//}
function setAttributes(el,attrs){
    for (let key in attrs){
        el.setAttribute(key, attrs[key]);
    }
}