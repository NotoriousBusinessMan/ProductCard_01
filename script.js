const blob = document.getElementById('blob');
const mainList = document.querySelector('#hero li.main-list');
const hero = document.getElementById('hero');

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    const blobWidth = blob.offsetWidth;
    const blobHeight = blob.offsetHeight;
    const mainListRect = mainList.getBoundingClientRect();

    // Check for collision with li.main-list
    const isColliding = (
        clientX >= mainListRect.left &&
        clientX <= mainListRect.right &&
        clientY >= mainListRect.top &&
        clientY <= mainListRect.bottom
    );

    // Apply blur effect based on collision
    if (isColliding) {
        // blob.style.filter = 'blur(10px)';
        // blob.style.height = '60px';
        // blob.style.width = '60px';
        // hero.style.backdropFilter = 'blur(50px)';
    } else {
        // blob.style.filter = 'none';
        // blob.style.height = '140px';
        // blob.style.width = '140px';
        // hero.style.backdropFilter = 'blur(100px)'; // Reset the blur effect
    }

    // Calculate the maximum allowable values
    const maxX = window.innerWidth - blobWidth;
    const maxY = window.innerHeight - blobHeight;

    // Ensure the blob stays within the screen bounds
    const clampedX = Math.min(Math.max(0, clientX - blobWidth / 2), maxX);
    const clampedY = Math.min(Math.max(0, clientY - blobHeight / 2), maxY);

    blob.animate(
        {
            left: `${clampedX}px`,
            top: `${clampedY}px`,
        },
        { duration: 3000, fill: 'forwards' }
    );
};
