'use strict';

const getBtn = document.querySelector('#get-btn');

function getNewIdea() {
    
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#activity-name').textContent = data.activity;
            document.getElementById('title').textContent = '🥳 HappyBot 🤩';
        });
};

getBtn.addEventListener('click', getNewIdea);