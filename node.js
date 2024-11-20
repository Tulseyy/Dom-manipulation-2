// Select DOM elements
const changeColorBtn = document.getElementById('changeColorBtn');
const addElementBtn = document.getElementById('addElementBtn');
const toggleVisibilityBtn = document.getElementById('toggleVisibilityBtn');
const animateElementBtn = document.getElementById('animateElementBtn');
const modifyTextBtn = document.getElementById('modifyTextBtn');
const dynamicArea = document.getElementById('dynamicArea');

// Function to change the background color of the container
changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 
        '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random color
});

// Function to add a new element to the dynamic area
addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a dynamically added paragraph.';
    dynamicArea.appendChild(newElement);
});

// Function to toggle visibility of the dynamic area
toggleVisibilityBtn.addEventListener('click', () => {
    if (dynamicArea.style.display === 'none' || !dynamicArea.style.display) {
        dynamicArea.style.display = 'block';
    } else {
        dynamicArea.style.display = 'none';
    }
});

// Function to animate an element
animateElementBtn.addEventListener('click', () => {
    const animatedBox = document.createElement('div');
    animatedBox.style.width = '50px';
    animatedBox.style.height = '50px';
    animatedBox.style.backgroundColor = 'blue';
    animatedBox.style.position = 'relative';
    dynamicArea.appendChild(animatedBox);

    let position = 0;
    const interval = setInterval(() => {
        if (position >= 200) {
            clearInterval(interval);
        } else {
            position += 5;
            animatedBox.style.transform = `translateX(${position}px)`;
        }
    }, 50);
});

// Function to modify text content in the dynamic area
modifyTextBtn.addEventListener('click', () => {
    if (dynamicArea.childNodes.length > 0) {
        dynamicArea.childNodes.forEach((node, index) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                node.textContent = `Modified Text Content ${index + 1}`;
            }
        });
    } else {
        alert('No elements to modify. Please add elements first!');
    }
});
