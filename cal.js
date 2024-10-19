let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML=="="){
            string=eval(string);
            string=string.toString();
            input.value=string;
        }
        else if(e.target.innerHTML=="AC")
        {
            string="";
            input.value=string;
        }

        else if(e.target.innerHTML=="X")
            {
                string=string.substring(0,string.length-1);
                input.value=string;
            }


        else{
            if (['+', '-', '*', '/'].includes(string[string.length - 1]) && ['+', '-', '*', '/'].includes(e.target.innerHTML)) {
                return;
            }
            string = string +e.target.innerHTML;
            input.value=string;
         }




    })
})