
const ACCESS_TOKEN = 'accessToken';
window.onload = () => {
    let tokenAcc = window.localStorage.getItem(ACCESS_TOKEN);
    if (tokenAcc != undefined) {
        window.location.assign('CreateForm.html');
    }
}
const loginApi = async (username, password) => {
  return fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          username: username,
          password: password,
      })
  })
  .then(res => res.json());
}

const handleLogin = async () => {
  let user = document.getElementById('user').value;
  let pass = document.getElementById('pass').value;
  let test = await loginApi(user, pass);
  if (test.token != undefined) {
      window.localStorage.setItem(ACCESS_TOKEN, test.token);
      return window.location.assign('CreateForm.html');
  }
  alert('Account not found!');
}