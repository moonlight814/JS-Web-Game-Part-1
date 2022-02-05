//function for new image without event listener

function newImage(imageWanted, leftPx, bottomPx) {
    let image = document.createElement('img')
    image.src = imageWanted;
    image.style.position = 'fixed'
    image.style.left = leftPx + 'px'
    image.style.bottom = bottomPx + 'px'
    document.body.append(image)
    return image;

}

newImage('assets/green-character.gif', 100, 100);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425)


//function for item with event Listener
function newItem(images, leftPx, bottomPx) {
    let item = newImage(images, leftPx, bottomPx)
    item.addEventListener('dblclick', function() {
        item.remove()
    })

}

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)



// bonus idk how to do this part


// function repeatedImage(imag, times) {
//     let image = document.createElement('img')
//     image.src = imag;
//     image.width = '100px';
//     image.height = '100px';
//     for (var i = 0; i < times; i++) {
//         imag;
//     }
// }

// repeatedImage('assets/grass.png', 15)0