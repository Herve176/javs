let number = document.getElementById("number");
let img = document.getElementById("image");
let btn = document.getElementById("btn");


btn.addEventListener("click", function () {
   let i = Math.floor(Math.random() * 7);
   switch(i)
   {
      case 1:
         img.innerHTML.src =  './'+ 1+'.png';
         break;
         case 2:
            img.innerHTML.src = './' + 2 + '.png';
         break;
         case 3:
            img.innerHTML.src = './' + 3 + '.png';
         break;
         case 4:
            img.innerHTML.src = './' + 4 + '.png';
         break;
         case 5:
            img.innerHTML.src = './' + 5 + '.png';
         break;
         case 6:
            img.innerHTML.src = './' + 6 + '.png';
         break;

   }
   if (number != i) {
      alert("you lose mother fucker.replay press ok!")
   }
});
