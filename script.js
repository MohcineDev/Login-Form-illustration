const inputColor = document.querySelector('input[type=color]')
const Form = document.querySelector('.loginForm form')
const switchFormBtn = document.querySelectorAll('.end button')
const submitBtn = document.querySelector('form input[type=submit]')
const canvas1 = document.getElementById("canvas");
const toggleScreen = document.querySelector('.screen')
const haveAccount = document.querySelector('.end p')
let Input = document.querySelectorAll('form input:not(input[type=submit])')

//************ draw the bottom screen canvas */
//#region 
let ctx = canvas1.getContext("2d");

ctx.lineWidth = 2
ctx.beginPath();
ctx.moveTo(0, 30);
ctx.lineTo(0, 300);
ctx.lineTo(330, 300);
ctx.lineTo(330, 40);
ctx.lineTo(150, 90);
ctx.lineTo(0, 30);
ctx.fillStyle = 'rgba(255,255,255,0.9)'
ctx.fill()

//#endregion
// ----------

const hidePlaceHolder = (e) => {
    e.target.setAttribute('placeholder', '')
}
const showPlaceHolder = (e) => {
    e.target.setAttribute('placeholder', e.target.getAttribute('aria-label'))
}

const togglePlaceholder = () => {
    Input.forEach(item => item.addEventListener('focus', hidePlaceHolder))
    Input.forEach(item => item.addEventListener('blur', showPlaceHolder))
}

togglePlaceholder()

//********** change the app main color */
inputColor.addEventListener('change', function () {
    document.body.style.setProperty('--col', this.value)
})

//*********** prevent the default form submit */
Form.addEventListener('submit', (e) => {
    e.preventDefault()
})

//********** handle register form  */
switchFormBtn[0].addEventListener('click', () => {
    Form.children[1].setAttribute('placeholder', 'User Name')
    switchForm('Account Register', 'Register', 'You have an account ?')
})

//********** handle login form  */
switchFormBtn[1].addEventListener('click', () => {
    switchForm('Login Account', 'Login', 'Don\'t have an account ?')
})

//********** handle form details based on Login / Register */
const switchForm = (formHeader, btnValue, formHint) => {
    Form.children[0].textContent = formHeader
    submitBtn.setAttribute('value', btnValue)
    haveAccount.textContent = formHint
    toggleScreen.classList.toggle('register')
}