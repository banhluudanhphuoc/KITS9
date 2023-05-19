//log out
const ACCESS_TOKEN = 'accessToken';
const logout = document.getElementById('logout');
logout.style.cursor = 'pointer';

logout.addEventListener('click', () => {
    window.localStorage.removeItem(ACCESS_TOKEN);
    window.location.assign('/LoginForm.html');
});



//1. Nhấp cancel thì xóa tất cả các giá trị trong form
// Lấy các phần tử input trong form
const formInputs = document.querySelectorAll('.content__form input');

// Lấy button Cancel
const cancelButton = document.querySelector('.form__btn button[type="button"]:first-child');

// Xử lý sự kiện khi người dùng nhấn Cancel
cancelButton.addEventListener('click', () => {
  // Xóa giá trị trong các input
  formInputs.forEach(input => {
    input.value = '';
  });
});

//2. Người dùng nhấn vào mũi tên setting , cái tab setting đóng lại, nhấn và biểu tượng thì hiện ra

const mySet = document.querySelector(".subSidebar"); // Lấy tham chiếu đến div

 const closeSidebar = document.querySelector(".wrapper__img");
 closeSidebar.addEventListener('click', ()=> {
  mySet.style.display = "none";
 });

 //3. Khi người dùng chọn vào mục nào trên thẻ settings thì tên và icon in đậm , còn những chữ khác thì không in đậm


