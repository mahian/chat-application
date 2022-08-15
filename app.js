const send_btn = document.getElementById('send_message');

send_btn.addEventListener('click', function(){
    let message = document.getElementById('write_message').value;
    createElement(message);
    replyUfterMessage();
    message = '';
});

function replyUfterMessage(){
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
        createFriendElement(reply);
   }, 2000);
}
function createElement(value){
    let div = document.createElement('div');
    div.classList.add('owner-message');
    let p = document.createElement('p');
    p.innerText = value;
    let user_profile_img = document.createElement('div');
    user_profile_img.classList.add('user_profile_img');
    let img = document.createElement('img');
    img.src = 'image/user.png';
    user_profile_img.appendChild(img);
    div.appendChild(p);
    div.appendChild(user_profile_img);
    document.querySelector('.chat-field').appendChild(div);
    return div;
}

function createFriendElement(reply){
    let div = document.createElement('div');
    div.classList.add('friend-message');
    let p = document.createElement('p');
    p.innerText = reply;
    let user_profile_img = document.createElement('div');
    user_profile_img.classList.add('user_profile_img');
    let img = document.createElement('img');
    img.src = 'image/mahian.jpg';
    user_profile_img.appendChild(img);
    div.appendChild(user_profile_img);
    div.appendChild(p);
    document.querySelector('.chat-field').appendChild(div);
}