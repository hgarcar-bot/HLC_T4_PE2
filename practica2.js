function getRandomBotMessage() {
    const noteInput = document.getElementById("notas");

    const noteText = noteInput.value.trim();

    if (noteText === "") {
        return;
    }
   // setTimeout(() => {
        
    const messages = [
        "Creo que no.",
        "¡Totalmente!",
        "Eso suena interesante.",
        "No estoy seguro de entender, ¿puedes explicar más?",
        "¡Qué genial!",
        "Hmm, déjame pensar...",
        "¡Por supuesto!",
        "No sé, pero suena divertido.",
        "¿Puedes decirme más?",
        "Eso es un misterio para mí.",
        "¡Me encanta hablar contigo!"]

        //const messages = 'Me encanta hablar contigo'

   // }, 500);

   const container = document.createElement('div');
   container.textContent = messages[Math.floor(Math.random() * messages.length)];
   container.classList.add('orange');
   document.getElementsByClassName('box')[0].appendChild(container);

   console.log('prueba funciona');

    return;
}

function showTabById(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.id === tabId);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.id.replace('btn', 'tab');
        showTabById(tabId);
      });
    });
  });

  //voy a morir ;-;

  function addNote() {
    const noteInput = document.getElementById("notas");

    const noteText = noteInput.value.trim();

    if (noteText === "") {
        return;
    }
    const container = document.createElement('div');
    
    container.textContent = document.getElementsByClassName('abc')[0].value;
    container.classList.add('blue');
    document.getElementsByClassName('box')[0].appendChild(container);
    
}

document.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        addNote()
        getRandomBotMessage()
    }
});
