function calculateAge() {
const dob = document.getElementById('dob').value;
if (!dob) {
    document.getElementById('result').innerText = 'Please enter your date of birth.';
    return;
}

const birthDate = new Date(dob);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
const dayDiff = today.getDate() - birthDate.getDate();

if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
}
document.getElementById('result').innerText = `You are ${age} years old.`;
if (age < 18) {
    document.getElementById('result').innerText += ' You are a minor.';
}
else if (age >= 18 && age < 30) {
    document.getElementById('result').innerText += ' You are a Teenager.';
}
else{
    document.getElementById('result').innerText += ' You are an Adult.';
}
}