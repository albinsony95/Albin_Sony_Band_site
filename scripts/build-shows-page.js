let arrayshow=[{date:"Mon Sept 06 2021",venue:"Ronald Lane",location:"San Francisco, CA"},
                {date:"Tue Sept 21 2021",venue:"Pier 3 East",location:"San Francisco, CA"},
                {date:"Fri Oct 15 2021",venue:"View Lounge",location:"San Francisco, CA"},
                {date:"Sat Nov 06 2021 ",venue:"Hyatt Agency",location:"San Francisco, CA"},
                {date:"Fri Nov 26 2021",venue:"Moscow Center",location:"San Francisco, CA"},
                {date:"Wed Dec 15 2021",venue:"Press Club",location:"San Francisco, CA"}];
//display(arrayshow);

const API_KEY="46b173b5-c1d4-4189-905d-742aa79fd7d0";
const showURL=`https://project-1-api.herokuapp.com/showdates?api_key=${API_KEY}`;

axios.get(showURL).then(response=>{
//console.log(response);
const arrList=response.data;
display(arrList);
});

function display(arrr){
mainbox=document.getElementById('showBox');
let headdate=document.createElement('p');
setAttributes(headdate,{"class":"showMain__show__box__table__headrow--heading"});
headdate.innerHTML="DATE";
let headvenue=document.createElement('p');
setAttributes(headvenue,{"class":"showMain__show__box__table__headrow--heading"});
headvenue.innerHTML="VENUE";
let headlocation=document.createElement('p');
setAttributes(headlocation,{"class":"showMain__show__box__table__headrow--heading"});
headlocation.innerHTML="LOCATION";
let headrow=document.createElement('div');
setAttributes(headrow,{"class":"showMain__show__box__table__headrow"});
let showtable=document.createElement('article');
setAttributes(showtable,{"class":"showMain__show__box__table"});
showtable.appendChild(headrow);
headrow.appendChild(headdate);
headrow.appendChild(headvenue);
headrow.appendChild(headlocation);
showtable.appendChild(headrow);
printShow();

function printShow(){
    for(i=0;i<arrr.length;i++){
        ticket=arrr[i];
        let rows=document.createElement('article');
        setAttributes(rows,{"class":"showMain__show__box__table__datarow","id":"selecthover"});
        let date=document.createElement('p');
        setAttributes(date,{"class":"showMain__show__box__table__datarow__date"});
        date.innerHTML=new Date(ticket.date).toLocaleDateString();
        let venue=document.createElement('p');
        setAttributes(venue,{"class":"showMain__show__box__table__datarow__venue"});
        venue.innerHTML=ticket.place;
        let location=document.createElement('p');
        setAttributes(location,{"class":"showMain__show__box__table__datarow__location"});
        location.innerHTML=ticket.location;
        let buybutton=document.createElement('button');
        buybutton.innerHTML="BUY TICKETS";
        buybutton.classList.add("showMain__show__box__table__datarow__buybutton"); 
        rows.appendChild(date);
        rows.appendChild(venue);
        rows.appendChild(location);
        rows.appendChild(buybutton);
        showtable.appendChild(rows);

        rows.addEventListener("click", (event)=>{
            rows.classList.add(".selectedOne");
            //console.log(show);
        });   
    }
}
// show.addEventListener("click",(event))=>
let showContainer=document.createElement('article');
setAttributes(showContainer,{"class":"showMain__show__box"});
showContainer.appendChild(showtable);
mainbox.appendChild(showContainer);
}

function setAttributes(el,attrs){
    for (let key in attrs){
        el.setAttribute(key, attrs[key]);
    }
}

// show.addEventListener("click",(event)=>{
//     console.log(event.value);
// });