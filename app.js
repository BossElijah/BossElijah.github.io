const getAge = (date) => {
  const today = new Date();
  const birthday = new Date(date);

  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  return age;
}

document.getElementById('boss').innerText = getAge('08.10.05');
document.getElementById('micah').innerText = getAge('05.01.08');
document.getElementById('josias').innerText = getAge('01.10.11');
