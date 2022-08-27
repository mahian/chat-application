// send message function
function sendMessage(){
    let messageField = document.getElementById('write_message');
    let message = messageField.value;
    createElement(message, 'owner-message', true);
    replyAfterMessage();
    messageField.value = '';
};

// create message element function
function createElement(value, messageClass, ownMessage){
    const div = document.createElement('div');
    div.classList.add(messageClass);
    const myMessage = `
    <p>${value}</p>
    <div class="user_profile_img">
    <img src="image/user.png">
    </div>`;
    const friendMessage = `
    <div class="user_profile_img">
    <img src="image/mahian.jpg">
    </div>
    <p>${value}</p>`;
    let message = '';
    if(ownMessage === true){
        message = myMessage;
    }else{
        message = friendMessage;
    }
    div.innerHTML = message;
    document.querySelector('.chat-field').appendChild(div);
    return div;
}

// reply message and set reply delay function
function replyAfterMessage(){
    let message = document.getElementById('write_message').value;
    let reply = '';
    if(message.includes('name')){
        reply = 'my name is mahian ahmad';
    }else if(message.includes('are you')){
        reply = 'I am fine';
    }else if(message.includes('hi')){
        reply = 'hellow';
    }else{
        reply = 'Please include hi/name/are you/ and say something';
    }
    setTimeout(function(){
        createElement(reply, 'friend-message', false);
   }, 2000);
}