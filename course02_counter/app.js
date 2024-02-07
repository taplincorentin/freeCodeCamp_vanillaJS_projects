//set initial count
let count = 0;

//get value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');     //all buttons

btns.forEach(function(btn) {                        //loop through the buttons
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;   //get clicked buttons class name(s)
        if(styles.contains('decrease')){            //if class name contains 'decrease'
            count--;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        else{
            count++;
        }

        if(count < 0){
            value.style.color = "red";
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count === 0){
            value.style.color = "#222";
        }

        value.textContent = count;                  //change content of element with #value
    })
});