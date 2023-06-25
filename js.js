// إنشاء رمز CAPTCHA عشوائي
function generateCaptcha() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var length = 6;
  var captcha = "";
  for (var i = 0; i < length; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

// إنشاء رمز CAPTCHA عند تحميل الصفحة
window.onload = function() {
  var captcha = generateCaptcha();
  document.getElementById("captcha").innerHTML = captcha;
};

// التحقق من صحة الرمز الذي تم إدخاله
function checkCaptcha() {
  var captcha_input = document.getElementById("captcha_input").value;
  var captcha = document.getElementById("captcha").innerHTML;
  if (captcha_input == captcha) {
    alert("تم التحقق بنجاح!");
  } else {
    alert("الرمز غير صحيح، يرجى المحاولة مرة أخرى.");
  }
  
  // إعادة توليد رمز CAPTCHA جديد
  var new_captcha = generateCaptcha();
  document.getElementById("captcha").innerHTML = new_captcha;
}
 function sum() {
            let price = document.getElementById("price").innerText;
	        let tax = document.getElementById("tax").innerText;
            let fees = document.getElementById("fees").innerText;
	 
            let result = parseInt(price) + parseInt(tax) + parseInt(fees);
            document.getElementById("total").innerText = "القيمة النهائية: " + result;
        }
 // Get the select element
  const provinceSelect = document.getElementById("province");
  
  // Get the input element
  const nationalIdInput = document.getElementById("national-id");
  
  // Set the default value of the input to the selected province code
  nationalIdInput.value = '01-' + (new Array(9).fill('').join(''));
  
  // Add event listener to update the input value when the select changes
  provinceSelect.addEventListener('change', function() {
    nationalIdInput.value = this.value + (new Array(9).fill('').join(''));
  });
 function scrollToElement(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }