"use strict";console.log("HELLO");var form=document.getElementById("form"),completeSection=document.getElementById("completeSection"),inputCardName=document.getElementById("cardholderName"),inputCardNumber=document.getElementById("cardNumber"),inputExpDateMM=document.getElementById("expDateMM"),inputExpDateYY=document.getElementById("expDateYY"),inputCvc=document.getElementById("cvc"),onCardCardNumber=document.getElementById("onCardCardNumber"),onCardCardName=document.getElementById("onCardCardName"),onCardExpDateMM=document.getElementById("onCardExpDateMM"),onCardExpDateYY=document.getElementById("onCardExpDateYY"),onCardCvc=document.getElementById("onCardCvc"),isRequired=function(e){return""!==e},isLengthValid=function(e,t){return!(e<t)},isNumber00=function(e){return"00"!==e},showError=function(e,t){var n=e.parentElement;n.classList.remove("success"),n.classList.add("error"),n.querySelector("small").textContent=t},showSuccess=function(e){var t=e.parentElement;t.classList.remove("error"),t.classList.add("success"),t.querySelector("small").textContent=""},checkCardName=function(){var e=!1,t=inputCardName.value.trim();return isRequired(t)?(showSuccess(inputCardName),e=!0):showError(inputCardName,"Name cannot be blank."),e},checkCardNumber=function(){var e=!1,t=inputCardNumber.value.trim();return isRequired(t)?isLengthValid(t.length,19)?(showSuccess(inputCardNumber),e=!0):showError(inputCardNumber,"Card Number must be 16 digits."):showError(inputCardNumber,"Card Number cannot be blank."),e},checkExpDateMMYY=function(){var e=!1,t=!1,n=inputExpDateMM.value.trim(),r=inputExpDateYY.value.trim();return isRequired(n)?isLengthValid(n.length,2)?isNumber00(n)?(showSuccess(inputExpDateMM),e=!0):showError(inputExpDateMM,"The Month cannot be 00."):showError(inputExpDateMM,"The Month must have 2 digits."):showError(inputExpDateMM,"The Month cannot be blank."),isRequired(r)?isLengthValid(r.length,2)?isNumber00(r)?(showSuccess(inputExpDateYY),t=!0):showError(inputExpDateYY,"The Year cannot be 00."):showError(inputExpDateYY,"The Year must have 2 digits."):showError(inputExpDateYY,"The Year cannot be blank."),t&&e},checkCvc=function(){var e=!1,t=inputCvc.value.trim();return isRequired(t)?isLengthValid(t.length,3)?(showSuccess(inputCvc),e=!0):showError(inputCvc,"Card Cvc must be 3 digits."):showError(inputCvc,"Card Cvc cannot be blank."),e},onlyNumbers=function(e){var t=e.target.value.replace(/[^0-9]/g,"").trim();e.target.value=t};inputCardNumber.addEventListener("input",(function(e){var t=e.target.value.replace(/[^0-9]/g,"").replace(/(.{4})/g,"$1 ").trim();e.target.value=t})),inputExpDateMM.addEventListener("input",onlyNumbers),inputExpDateYY.addEventListener("input",onlyNumbers),inputCvc.addEventListener("input",onlyNumbers),inputCardName.addEventListener("input",(function(e){onCardCardName.textContent=e.target.value.toUpperCase()})),inputCardNumber.addEventListener("input",(function(e){onCardCardNumber.textContent=e.target.value})),inputExpDateMM.addEventListener("input",(function(e){onCardExpDateMM.textContent=e.target.value})),inputExpDateYY.addEventListener("input",(function(e){onCardExpDateYY.textContent=e.target.value})),inputCvc.addEventListener("input",(function(e){onCardCvc.textContent=e.target.value})),form.addEventListener("submit",(function(e){e.preventDefault();var t=checkCardName(),n=checkCardNumber(),r=checkExpDateMMYY(),a=checkCvc();t&&n&&r&&a&&(form.classList.add("hidden"),completeSection.classList.remove("hidden"))}));
//# sourceMappingURL=script.js.map