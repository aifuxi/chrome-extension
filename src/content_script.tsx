chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    console.log('Receive color = ' + msg.color);
    document.body.style.backgroundColor = msg.color;
    sendResponse('Change color to ' + msg.color);
  } else {
    sendResponse('Color message is none.');
  }
});

import { LOGIN_BUTTON_CLASS_NAME } from './constants';
import { templateHTML } from './template';

(() => {
  console.log('aifuxi', LOGIN_BUTTON_CLASS_NAME);
  const box = document.createElement('div');
  box.className = 'box shadow-lg';
  box.innerHTML = templateHTML;
  document.body.append(box);
  box.addEventListener('mousedown', (e) => {
    console.log(e);
    // 记录鼠标在box里按下时的位置
    const clickX = e.offsetX;
    const clickY = e.offsetY;
    const handleMouseMove = (e: MouseEvent) => {
      box.style.left = `${e.clientX - clickX}px`;
      box.style.top = `${e.clientY - clickY}px`;
    };
    document.body.addEventListener('mousemove', handleMouseMove);

    document.body.addEventListener('mouseup', (e) => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    });

    e.stopPropagation();
  });

  box.addEventListener('dblclick', () => {
    console.log('box.firstElementChild', box.firstElementChild);
    console.log('(box.children[0])');
    (box.children[0] as HTMLElement).style.display = 'none';
  });
})();
