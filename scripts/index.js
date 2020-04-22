

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com",
    "https://yahoo.com",
    "https://askjeeves.com",
    "https://lycos.com"

];

const head = document.createElement('header');
head.style.display = 'flex';
head.style.justifyContent = 'center';
head.style.alignItems = 'center';
head.style.fontSize = "30px";
head.style.backgroundColor = '#ccc';
head.style.height = "10vh";
head.textContent = 'Welcome to the search engine picker!'

const div1 = document.createElement("div");
div1.style.display = 'flex';
div1.style.justifyContent = 'center';
div1.style.backgroundColor = '#50A6EB'

const list = document.createElement("ul");
list.style.display = 'flex';
list.style.justifyContent = 'center';
// list.style.flexDirection = 'column';
list.style.listStyleType = "none";
list.style.fontSize = '20px'
div1.appendChild(list);


const listContainer = document.querySelector('nav.js-link-container');
listContainer.appendChild(head);
listContainer.appendChild(div1);



function createLink(address) {
    // const address = array[index];
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', address);
    link.textContent = address;
    link.style.display = "inline-block";
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.margin = "20px";
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