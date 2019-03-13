
function createToaster(type, titleMsg, textMsg) {
  var toaster = document.createElement('div');
  toaster.className = 'toaster ' + type;

  var title = document.createElement('h4');
  title.innerHTML = titleMsg;
  
  var messageText = document.createElement('p');
  messageText.innerHTML = textMsg;

  toaster.appendChild(title);
  toaster.appendChild(messageText);

  return toaster;
}



function addToaster(type, title, text) {
  var toastersContainer = document.getElementById('toasters_container');
  var toaster;
  switch(type) {
    case 'error':
      toaster = errorToaster(title, text);
      break;
    case 'info':
      toaster = infoToaster(title, text);
      break;
    case 'success':
      toaster = successToaster(title, text);
      break;
    case 'warning':
      toaster = warningToaster(title, text);
      break;
  }

  toastersContainer.appendChild(toaster);
}


function clearAllToasters() {
  var toastersContainer = document.getElementById('toasters_container');
  toastersContainer.innerHTML = '';
}






function errorToaster(title, text) {
  return createToaster('error-toaster', title, text);
}

function successToaster(title, text) {
  return createToaster('success-toaster', title, text);
}

function infoToaster(title, text) {
  return createToaster('info-toaster', title, text);
}

function warningToaster(title, text) {
  return createToaster('warning-toaster', title, text);
}