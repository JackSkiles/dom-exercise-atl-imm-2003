

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com",
    "https://yahoo.com",
    "https://askjeeves.com",
    "https://lycos.com"

];

const div1 = document.createElement("div");
div1.style.display = 'flex';
div1.style.justifyContent = 'center';

const list = document.createElement("ul");
list.style.display = 'flex';
// list.style.flexDirection = 'column';
list.style.listStyleType = "none";
list.style.width = '50%';
div1.appendChild(list);


const listContainer = document.querySelector('nav.js-link-container');
listContainer.appendChild(div1);



function createLink(address) {
    // const address = array[index];
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', address);
    link.textContent = address;
    link.style.display = "inline-block";
    link.style.textDecoration = "none";
    link.style.padding = "20px 40px 20px 0";
    listItem.appendChild(link);
    list.appendChild(listItem);
}


// for (let index = 0; index < addresses.length; index++) {
//     const address = addresses[index];
//     createLink(address);
// }
  
    
    
//     const address = addresses[index];
//     const listItem = document.createElement('li');
//     const link = document.createElement('a');
//     link.setAttribute('href', address);
//     link.textContent = address;
//     listItem.appendChild(link);
//     list.appendChild(listItem);
// }

// addresses.forEach(function (address) {
//     const listItem = document.createElement('li');
//     const link = document.createElement('a');
//     link.setAttribute('href', address);
//     link.textContent = address;
//     listItem.appendChild(link);
//     list.appendChild(listItem);
// })

addresses.forEach(createLink);