let number1 = '';
let number2 = '';
let result = '';

const number1InputElement = document.querySelector('#number1');
const number2InputElement = document.querySelector('#number2');
const resultInputElement = document.querySelector('#result');
const btnCalculateElement = document.querySelector('.btnCalculate');
const errorMessageElement = document.querySelector('.error-msg');

// Lắng nghe sự kiện thay đổi trên các ô nhập liệu
number1InputElement.addEventListener('change', function (e) {
  number1 = e.target.value;
  errorMessageElement.innerHTML = ''; // Xóa thông báo lỗi khi có sự thay đổi
});

number2InputElement.addEventListener('change', function (e) {
  number2 = e.target.value;
  errorMessageElement.innerHTML = ''; // Xóa thông báo lỗi khi có sự thay đổi
});

// Lắng nghe sự kiện click trên nút tính toán
btnCalculateElement.addEventListener('click', function (e) {
  e.preventDefault();

  if (informErrorMessage(number1, number2)) {
    if (calulateAndUpdateRes()) {
      errorMessageElement.innerHTML = ''; // Xóa thông báo lỗi nếu tính toán thành công
    }
  }
});

// Hàm kiểm tra và thông báo lỗi
informErrorMessage = (number1, number2) => {
  if (number1 === '' || number2 === '') {
    errorMessageElement.innerHTML =
      'Ô thứ nhất hoặc ô thứ hai chưa được nhập giá trị';
    resultInputElement.value = NaN;
    return false;
  }
  if (isNaN(number1) && isNaN(number2)) {
    errorMessageElement.innerHTML =
      'Giá trị ở ô thứ nhất và ô thứ hai không phải là số';
    resultInputElement.value = NaN;
    return false;
  }
  if (isNaN(number1)) {
    errorMessageElement.innerHTML = 'Giá trị ở ô thứ nhất không phải là số';
    resultInputElement.value = NaN;
    return false;
  }
  if (isNaN(number2)) {
    errorMessageElement.innerHTML = 'Giá trị ở ô thứ hai không phải là số';
    resultInputElement.value = NaN;
    return false;
  }
  return true;
};

// Hàm tính toán và cập nhật kết quả
calulateAndUpdateRes = () => {
  const selectedOption = document.querySelector(
    'input[name="operation"]:checked'
  );

  switch (selectedOption.value) {
    case 'cong':
      result = parseFloat(number1) + parseFloat(number2);
      break;
    case 'tru':
      result = parseFloat(number1) - parseFloat(number2);
      break;
    case 'nhan':
      result = parseFloat(number1) * parseFloat(number2);
      break;
    case 'chia':
      if (parseFloat(number2) === 0) {
        errorMessageElement.innerHTML = 'Không thể chia cho 0';
        result = NaN;
        resultInputElement.value = result.toString();
        return false;
      }
      result = parseFloat(number1) / parseFloat(number2);
      break;
    default:
      errorMessageElement.innerHTML = 'Giá trị không hợp lệ mới nhập lại';
      result = NaN;
      return false;
  }

  resultInputElement.value = result.toString();
  return true;
};
