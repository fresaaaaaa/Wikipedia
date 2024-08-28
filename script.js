// script.js

const neonCursor = {
    el: document.getElementById('app'),
    shaderPoints: 16,
    curvePoints: 80,
    curveLerp: 0.5,
    radius1: 5,
    radius2: 30,
    velocityThreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025
};

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    // Create trail elements
    let trails = [];
    const maxTrails = 10;
    for (let i = 0; i < maxTrails; i++) {
        const trail = document.createElement('div');
        trail.className = 'trail';
        app.appendChild(trail);
        trails.push(trail);
    }

    let currentTrail = 0;

    document.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;

        const trail = trails[currentTrail];
        trail.style.width = '20px';
        trail.style.height = '20px';
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.opacity = '1';

        currentTrail = (currentTrail + 1) % maxTrails;

        setTimeout(() => {
            trail.style.width = '10px';
            trail.style.height = '10px';
            trail.style.opacity = '0';
        }, 100);
    });
});
