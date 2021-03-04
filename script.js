const Color = document.querySelector('input[type=color]')
const Form = document.querySelector('.loginForm form')
const Register = document.querySelector('.register')
const Login = document.querySelector('.login')
let Input = document.querySelectorAll('form input:not(input[type=submit])')
const Submit = document.querySelector('form input[type=submit]')

const canvas1 = document.getElementById("canvas");
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


// ----------

function show() {
    this.setAttribute('placeholder', '')
}
function hide() {
    this.setAttribute('placeholder', this.getAttribute('aria-label'))
}

const togglePlaceholder = () => {
    Input.forEach(item => item.addEventListener('focus', show))
    Input.forEach(item => item.addEventListener('blur', hide))
}

togglePlaceholder()

Color.addEventListener('change', function () {
    document.body.style.setProperty('--col', this.value)
})

Form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(123);
})

Register.addEventListener('click', () => {
    Form.children[0].textContent = 'Account Register'
    Form.children[1].setAttribute('placeholder', 'User Name')
    let email = document.createElement('input')
    email.setAttribute('type', 'email')
    email.setAttribute('pattern', /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    email.placeholder = 'Your Email'
    email.setAttribute('aria-label', 'Your Email')
    Form.children[1].after(email)
    Input = document.querySelectorAll('form input:not(input[type=submit])')
    Register.style.display = 'none'
    Login.style.display = 'inline-block'
    console.log(Submit);
    Submit.setAttribute('value', 'Register')
    Form.querySelector('a').style.display = 'none'
    togglePlaceholder()

})

Login.addEventListener('click', () => {
    document.querySelector('input[type=email]').style.display = 'none'
    Submit.setAttribute('value', 'Login')
    Form.children[0].textContent = 'Login Account'
    Form.querySelector('a').style.display = 'inline-block'

    Login.style.display = 'none'
    Register.style.display = 'inline-block'

})