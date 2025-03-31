/* script.js */
/* Save this as script.js */
document.getElementById('loveButton').addEventListener('click', function() {
  const messages = [
    'You are not just my love; you are my home. Every heartbeat echoes your name, and I am forever grateful for your presence. 💖',
    'Every heartbeat whispers your name. You are the reason my world is so beautiful. ❤️',
    'Loving you is like breathing – I can’t stop, and it’s essential to my life. 💖',
    'You make my world brighter just by being in it. I love you beyond words. ✨',
    'My love for you grows stronger with every passing day. Forever isn’t long enough to show you how much I care. 💕',
    'You are the best part of me. With you, every moment is magical. 🥰',
    'If I had to choose between loving you and breathing, I would use my last breath to say I love you. 💓',
    'You are my dream come true, my soulmate, and my forever. 💍',
    'I am blessed to have you in my life. You complete me in every way. ❤️',
    'No matter where life takes us, my heart will always belong to you. 💗'
  ];

  const loveMessage = document.getElementById('loveMessage');
  loveMessage.innerHTML = messages.join('<br><br>') + '<br><br><strong>Made with infinite love by Neeraj 💖</strong>';
  
  setTimeout(() => {
    document.getElementById('loveYouButton').style.display = 'inline-block';
  }, 3000);
});

document.getElementById('loveYouButton').addEventListener('click', function() {
  alert('I Love You! 💕');
});
