const Color = document.querySelector('input[type=color]')
const Form = document.querySelector('.loginForm form')
const Register = document.querySelector('#register')
const Login = document.querySelector('#login')
const Submit = document.querySelector('form input[type=submit]')
const canvas1 = document.getElementById("canvas");
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
Color.addEventListener('change', function () {
    document.body.style.setProperty('--col', this.value)
})

//*********** prevent the default form submit */
Form.addEventListener('submit', (e) => {
    e.preventDefault()
})

//********** handle form register  */
Register.addEventListener('click', () => {
    console.log(1111111111);
    Form.children[0].textContent = 'Account Register'
    Form.children[1].setAttribute('placeholder', 'User Name')
    Input = document.querySelectorAll('form input:not(input[type=submit])')
    Submit.setAttribute('value', 'Register')
    document.querySelector('.end p').textContent = 'You have an account ?'
    document.querySelector('.screen').classList.toggle('register')
    // togglePlaceholder()
})

//********** handle form login  */
Login.addEventListener('click', () => {
    console.log(7777);
    Submit.setAttribute('value', 'Login')
    Form.children[0].textContent = 'Login Account'
    document.querySelector('.end p').textContent = 'Don\'t have an account ?'
    document.querySelector('.screen').classList.toggle('register')
})