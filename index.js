/*without parseFloat wo inko string ki trh le rha tha.therefore we use parse float that returns the first value*/
/* alert ki place pr prompt("your sum",totalMarks); bhi use me le skte h*/



/*function call*/
const calcy = () => {
   let math = document.getElementById('maths').value;
   let phy = document.getElementById('physics').value;
   let ch = document.getElementById('chemistry').value;
   let comp = document.getElementById('computer').value;
   let eng = document.getElementById('english').value;
   let grade ="";

   let totalMarks = parseFloat(math) + parseFloat(phy) + parseFloat(ch) + parseFloat(comp) + parseFloat(eng);
   alert(totalMarks);

   let per = totalMarks / 5;
   alert(per);

   if(per >= 90){
            grade = 'A';
   }
   else if(per >= 80 && per <= 90){
      grade = 'B';
   }
   else if(per >= 70 && per <= 80){
      grade = 'C';
   }
   else if(per >= 60 && per <= 70){
      grade = 'D';
   }
   else if(per >= 50 && per <= 60){
      grade = 'E';
   }
   else{
      grade = 'F';
   }

   if(per < 50){
      document.getElementById("output").innerHTML = `Out of 500 your total is ${totalMarks} 
                                                 and percentage is ${per} %. <br> Your Grade is
                                                 ${grade}. You are FAIL. `
   }
   else{
      document.getElementById("output").innerHTML = `Out of 500 your total is ${totalMarks} 
                                                 and percentage is ${per} %. <br> Your Grade is
                                                 ${grade}.  You are PASS. `
   }

}