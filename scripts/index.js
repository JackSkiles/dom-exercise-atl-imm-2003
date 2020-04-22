

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com",
    "https://yahoo.com",
    "https://askjeeves.com",
    "https://lycos.com"

];

const list = document.createElement("ul");
const listContainer = document.querySelector('nav.js-link-container');

listContainer.appendChild(list);


function createLink(address) {
    // const address = array[index];
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', address);
    link.textContent = address;
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