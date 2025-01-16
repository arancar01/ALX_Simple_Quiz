// تعريف دالة checkAnswer للتحقق من إجابة المستخدم
function checkAnswer() {
    // تحديد الإجابة الصحيحة
    const correctAnswer = "4";

    // الحصول على إجابة المستخدم
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // الحصول على العنصر الذي سيعرض رد الفعل
    const feedback = document.getElementById('feedback');

    // مقارنة إجابة المستخدم بالإجابة الصحيحة
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";  // إذا كانت الإجابة صحيحة
        feedback.style.color = "green";  // تغيير اللون إلى الأخضر
    } else {
        feedback.textContent = "That's incorrect. Try again!";  // إذا كانت الإجابة غير صحيحة
        feedback.style.color = "red";  // تغيير اللون إلى الأحمر
    }
}

// إضافة مستمع حدث إلى زر "إرسال الإجابة"
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
