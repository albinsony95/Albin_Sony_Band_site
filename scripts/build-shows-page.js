let arrayshow=[{date:"Mon Sept 06 2021",venue:"Ronald Lane",location:"San Francisco, CA"},
                {date:"Tue Sept 21 2021",venue:"Pier 3 East",location:"San Francisco, CA"},
                {date:"Fri Oct 15 2021",venue:"View Lounge",location:"San Francisco, CA"},
                {date:"Sat Nov 06 2021 ",venue:"Hyatt Agency",location:"San Francisco, CA"},
                {date:"Fri Nov 26 2021",venue:"Moscow Center",location:"San Francisco, CA"},
                {date:"Wed Dec 15 2021",venue:"Press Club",location:"San Francisco, CA"}];
display(arrayshow);

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
console.log(headdate.innerHTML);

let showtable=document.createElement('article');
setAttributes(showtable,{"class":"showMain__show__box__table"});
showtable.appendChild(headrow);
headrow.appendChild(headdate);
headrow.appendChild(headvenue);
headrow.appendChild(headlocation);


showtable.appendChild(headrow);


for(i=0;i<arrr.length;i++){
    // console.log(arr);
    ticket=arrr[i];
    // console.log(ticket.date);
    let rows=document.createElement('article');
    setAttributes(rows,{"class":"showMain__show__box__table__datarow","id":"selecthover"});

    let date=document.createElement('p');
    setAttributes(date,{"class":"showMain__show__box__table__datarow__date"});
    date.innerHTML=ticket.date;
    // console.log(date);
    let venue=document.createElement('p');
    setAttributes(venue,{"class":"showMain__show__box__table__datarow__venue"});
    venue.innerHTML=ticket.venue;
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

}
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