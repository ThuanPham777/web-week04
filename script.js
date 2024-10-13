let number1 = '';
let number2 = '';
let result = '';

const number1InputElement = document.querySelector('#number1');
const number2InputElement = document.querySelector('#number2');
const resultInputElement = document.querySelector('#result');
const btnCalculateElement = document.querySelector('.btnCalculate');
const errorMessageElement = document.querySelector('.error-msg');

number1InputElement.addEventListener('change', function (e) {
  number1 = e.target.value;
});

number2InputElement.addEventListener('change', function (e) {
  number2 = e.target.value;
});

btnCalculateElement.addEventListener('click', function (e) {
  e.preventDefault();

  if (informErrorMessage(number1, number2)) {
    calulateAndUpdateRes();
    errorMessageElement.innerHTML = '';
  }
});

informErrorMessage = (number1, number2) => {
  // Thông báo lỗi cho người dùng
  if (number1 === '' || number2 === '') {
    errorMessageElement.innerHTML =
      'Ô thứ nhất hoặc ô thứ hai chưa được nhập giá trị';
    return false;
  }
  if (isNaN(number1) && isNaN(number2)) {
    errorMessageElement.innerHTML =
      'Giá trị ở ô thứ nhất và ô thứ hai không phải là số';
    return false;
  }
  if (isNaN(number1)) {
    errorMessageElement.innerHTML = 'Giá trị ở ô thứ nhất không phải là số';
    return false;
  }

  if (isNaN(number2)) {
    errorMessageElement.innerHTML = 'Giá trị ở ô thứ hai không phải là số';
    return false;
  }

  return true;
};

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
        return;
      }
      result = parseFloat(number1) / parseFloat(number2);
      break;
    default:
      errorMessageElement.innerHTML = 'Giá trị không hợp lệ mới nhập lại';
      return;
  }

  resultInputElement.value = result.toString();
};
