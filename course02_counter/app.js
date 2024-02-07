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
            count=0;
        }
        else{
            count++;
        }

        value.textContent = count;                  //change content of element with #value
    })
});