
const API_KEY="46b173b5-c1d4-4189-905d-742aa79fd7d0";
const commentURL=`https://project-1-api.herokuapp.com/comments?api_key=${API_KEY}`;
let arrList=[];
axios.get(commentURL).then(response=>{
arrList=response.data;
arrayDisplay(arrList);
//console.log(arrList);
});

const button=document.getElementById('bcomment');
button.addEventListener("click",(event)=>{
    event.preventDefault();
    let name=document.getElementById('cName');
    let date=new Date();
    let comment=document.getElementById('cComment');
    let obj={name:name.value,comment:comment.value};
    axios.post(commentURL,obj).then(response=>{console.log(response.data);});
    axios.get(commentURL).then(response=>{
        arrList=response.data;
    arrayDisplay(arrList);
    });
    name.value="";
    comment.value="";
});

function arrayDisplay(arrCommentlist){
    arrCommentlist=arraysort(arrCommentlist);
let commentbox=document.getElementById('commentContainer');
commentbox.innerHTML=" ";
for(i=0;i<arrCommentlist.length;i++){
arraydata=arrCommentlist[i];
    let cname=document.createElement('h4');
    setAttributes(cname,{"class":"main__comment-container__commentBox__comDisplay__box__box1__box2--name"});
    cname.innerHTML=arraydata.name;

    let cdate=document.createElement('h5');
    setAttributes(cdate,{"class":"main__comment-container__commentBox__comDisplay__box__box1__box2--date"});
    
    // let str =new Date(arraydata.timestamp).toLocaleDateString();
    // str=str.split('/');
    // str=str.map.padStart(2, '0');
    // console.log(str);
    cdate.innerHTML=new Date(arraydata.timestamp).toLocaleDateString();
    let eachCommentBox2 = document.createElement('div');
    setAttributes(eachCommentBox2,{"class":"main__comment-container__commentBox__comDisplay__box__box1__box2"});
    eachCommentBox2.appendChild(cname);
    eachCommentBox2.appendChild(cdate);
    let commentdata=document.createElement('p');
    setAttributes(commentdata,{"class":"main__comment-container__commentBox__comDisplay__box__box1--comment"});
    commentdata.innerHTML=arraydata.comment;

    let eachCommentBox1=document.createElement('article');
    setAttributes(eachCommentBox1,{"class":"main__comment-container__commentBox__comDisplay__box__box1"});
    eachCommentBox1.appendChild(eachCommentBox2);
    eachCommentBox1.appendChild(commentdata);

    let avatar=document.createElement('img');
    setAttributes(avatar,{"class":"main__comment-container__commentBox__comDisplay__box__imge", src:"../Assets/Images/avatar2.png", alt:"profile picture"});

    let eachCommentBox=document.createElement('article');
    setAttributes(eachCommentBox,{"class":"main__comment-container__commentBox__comDisplay__box"});
    eachCommentBox.appendChild(avatar);
    eachCommentBox.appendChild(eachCommentBox1);

    commentbox.appendChild(eachCommentBox);
}
}
function setAttributes(el,attrs){
    for (let key in attrs){
        el.setAttribute(key, attrs[key]);
    }
}
function arraysort(arr)
{
    return arr.sort((a,b)=> b.timestamp - a.timestamp);
}
