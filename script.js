let relation = document.querySelector('h3');
let friend = document.querySelector('h4');
let follow = document.querySelector('#follow');
let unfollow = document.querySelector('#unfollow');
let btn = document.querySelector('button');

let flag = 0

btn.addEventListener('click', function () {
    if(flag==0){
    relation.innerHTML = 'Friend';
    relation.style.color = 'Green';
    friend.innerHTML = 'unfriend';
    follow.style.display = 'none';
        unfollow.style.display = 'initial';

        flag=1
    } else {
        relation.innerHTML = 'Stranger';
          relation.style.color = 'red';
        friend.innerHTML = 'add friend';
        follow.style.display = 'initial';
           unfollow.style.display = 'none';
        flag=0
    }
})