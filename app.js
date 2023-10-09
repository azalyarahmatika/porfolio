function buttonHandler() {
  // const frontButtons = document.querySelectorAll('.front_button');
  const roles = document.querySelectorAll('.role');
  console.log(roles[0].children[1].children[2]);

  roles.forEach((role) => {
    role.children[0].children[3].addEventListener('click', () => {
      if(role.children[0].classList.contains('back_transform')) {
        role.children[0].classList.remove('back_transform');
      }
      role.children[0].classList.add('transform');
      role.children[1].classList.add('visible');
    })

    role.children[1].children[1].addEventListener('click', () => {
      if(role.children[0].classList.contains('transform')) {
        role.children[0].classList.remove('transform');
      }
      role.children[0].classList.add('back_transform');
      role.children[1].classList.remove('visible');
      // role.children[0].classList.remove('transform');
      // console.log(frontCard.children[3]);
    })
  })
};

document.addEventListener("DOMContentLoaded", buttonHandler);
