let arrayshow=[{date:"Mon Sept 06 2021",venue:"Ronald Lane",location:"San Francisco, CA"},
                {date:"Tue Sept 21 2021",venue:"Pier 3 East",location:"San Francisco, CA"},
                {date:"Fri Oct 15 2021",venue:"View Lounge",location:"San Francisco, CA"},
                {date:"Sat Nov 06 2021 ",venue:"Hyatt Agency",location:"San Francisco, CA"},
                {date:"Fri Nov 26 2021",venue:"Moscow Center",location:"San Francisco, CA"},
                {date:"Wed Dec 15 2021",venue:"Press Club",location:"San Francisco, CA"}];
displayshow(arrayshow);

function displayshow(arr){
    console.log(arr);
    mainbox=document.getElementById('showBox');
let headdate=document.createElement('td');
setAttributes(headdate,{"class":"showMain__show__box__table__headrow--heading"});
headdate.innerHTML="DATE";
let headvenue=document.createElement('td');
setAttributes(headvenue,{"class":"showMain__show__box__table__headrow--heading"});
headvenue.innerHTML="VENUE";
let headlocation=document.createElement('td');
setAttributes(headlocation,{"class":"showMain__show__box__table__headrow--heading"});
headlocation.innerHTML="LOCATION";

let headrow=document.createElement('tr');
setAttributes(headrow,{"class":"showMain__show__box__table__headrow"});
console.log(headdate.innerHTML);

let showtable=document.createElement('table');
setAttributes(showtable,{"class":"showMain__show__box__table"});
showtable.appendChild(headrow);
headrow.appendChild(headdate);
headrow.appendChild(headvenue);
headrow.appendChild(headlocation);


showtable.appendChild(headrow);


for(i=0;i<arr.length;i++){
    // console.log(arr);
    ticket=arr[i];
    // console.log(ticket.date);
    let rows=document.createElement('tr');
    setAttributes(rows,{"class":"showMain__show__box__table__datarow"});

    let date=document.createElement('td');
    setAttributes(date,{"class":"showMain__show__box__table__datarow__date"});
    date.innerHTML=ticket.date;
    // console.log(date);
    let venue=document.createElement('td');
    setAttributes(venue,{"class":"showMain__show__box__table__datarow__venue"});
    venue.innerHTML=ticket.venue;
    let location=document.createElement('td');
    setAttributes(location,{"class":"showMain__show__box__table__datarow__location"});
    location.innerHTML=ticket.location;
    let buybutton=document.createElement('button');
    setAttributes(buybutton,{"class":"showMain__show__box__table__datarow__buybuttton"});
    buybutton.innerHTML="BUY TICKETS";
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