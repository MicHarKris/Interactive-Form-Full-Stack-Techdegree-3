//Info Section

//Global Variables - Info Section
const jobTitle = document.getElementById("title");
const jobRole = document.getElementById("other-job-role");
const colorMenu = document.getElementById("shirt-colors");
const colors = document.getElementById("color");
const designMenu = document.getElementById("shirt-designs");

//sets the name field as the active field, when page loads
document.getElementById("name").focus();

//hides the 'Other' field, when page loads
jobRole.style.display = "none";
colorMenu.style.display = "none";

//displays or removes the 'Other' field, when 'Other' job role is selected
jobTitle.addEventListener("input", e => {
    if (e.target.value === "other"){
        jobRole.style.display = "initial";
    } else {
        jobRole.style.display = "none";
    }
});

//displays the color menu, when active, and displays only the selected colors, by matching the selected 'e.target.value' to the 'data-theme' of the options within the 'color' element
designMenu.addEventListener("input", e => {
    colorMenu.style.display = "initial";
    const design = e.target.value;
    //loops through all colors, assigns them hidden attribute if they don't match, clears hidden attribute, and selects first
    for(let i = 0; i < colors.options.length; i++){
        if(design === colors.options[i].getAttribute('data-theme')){
            colors.options[i].hidden = false;
        } else {
            colors.options[i].hidden = true;
        }
    }
    //sets selected attribute to the first found option where data-theme matches design value
    colors.querySelector(`[data-theme="${design}"]`).selected = true;
});

//Activities Section 

//Global Variables - Activities Section
const activities = document.getElementById("activities-box");
const activitiesCost = document.getElementById("activities-cost");
var currentCost = 0;

//updates the price displayed in the Total, when an activity is selected, by adding price when ticked 'yes', and subtracting price when ticked 'no'
activities.addEventListener("input", e => {
    if (e.target.checked) {
        currentCost += Number(e.target.getAttribute('data-cost'));
    } else {
        currentCost -= Number(e.target.getAttribute('data-cost'));
    }
    activitiesCost.innerHTML = `Total: \$${currentCost}`;
});

//Payment Section

//Global Variables - Payment Info Section
const payment = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const payPal = document.getElementById("paypal");
const bitCoin = document.getElementById("bitcoin");

//Sets selected payment type to Credit Card by default
payment.querySelector(`[value="credit-card"]`).selected = true;

//removes the visual aspect of all payment options, and activates the one that corresponds to the selection - defaults to credit-card
function updatePayments(paymentType){
    payPal.style.display = "none";
    bitCoin.style.display = "none"; 
    creditCard.style.display = "none";

    switch(paymentType) {
        case 'bitcoin':
            bitCoin.style.display = "block";
            break;
        case 'paypal':
            payPal.style.display = "block";
            break;
        default:
            creditCard.style.display = "initial";
    }
}

//Hides PayPal and Bitcoin, when page loads
updatePayments();

//updates the payment type by calling the updatePayments method, when selecting a payment type
payment.addEventListener("input", e => {
    updatePayments(e.target.value);
});

//Validation Section

//Global Variables - Validation Section
const form = document.querySelector("form");

const name = document.getElementById("name");
const email = document.getElementById("email");

const checkBoxes = document.querySelectorAll("#activities-box input[type='checkbox']");

const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");


//checks that name and email has been filled out, when called
function basicInfoValidator(){
    const nameValue = name.value;
    const emailValue = email.value;

    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue); 
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);

    if (nameIsValid && emailIsValid) {
        return true;
    } else {
        return false;
    }
}

//checks that activities has been selected, when called
function activitiesValidator(){
    for (let i = 0; i < checkBoxes.length; i++) {
        console.log(checkBoxes[i].checked);
        if (checkBoxes[i].checked) {
            return true;
        }
    }
}
//checks that payment info has been selected, and filled out if credit-card is selected, when called
function paymentValidator(){
    paymentType = payment.value;

    const cardNumberValue = cardNumber.value;
    const zipCodeValue = zipCode.value;
    const cvvValue = cvv.value; 

    if (paymentType === "credit-card") {
        const cardNumberIsValid = /^\d{13,16}$/.test(cardNumberValue); 
        const zipCodeIsValid = /^\d{5}$/.test(zipCodeValue); 
        const cvvIsValid = /^\d{3}$/.test(cvvValue); 

        if (cardNumberIsValid && zipCodeIsValid && cvvIsValid) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

//prevents reloading of page, if fields are not filled out, when Register ('submit') os selected
form.addEventListener('submit', e => {
    if (!basicInfoValidator() || !paymentValidator() || !activitiesValidator()) {
        e.preventDefault();
    };
});

//Accessibility 

//Adds event listeners to Focus and Blur events of activities fields, adding focus classname to parent, or removing focus classname from parent
for (let i = 0; i < checkBoxes.length; i++){
    checkBoxes[i].addEventListener('focus', e => {
        console.log("focus");
        e.target.parentElement.className = "focus";
    });
    checkBoxes[i].addEventListener('blur', e => {
        console.log("remove");
        e.target.parentElement.classList.remove("focus");
    });
};


