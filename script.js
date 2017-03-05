$(document).ready(function(){
   $("checkName").click(function){

   function checkName(str)  {
      var input_name = str.toLowerCase();
        var result = /^alex/.test(input_name);
        if (result=== true){
           alexList.append("input_name"){
        } else
        if (input_name.search(/a/ig) >= 0) {
            aList.append("input_name");
         } else {
            nList.append("input_name");
          }
       }
    })




// THIS CODE TEST THAT LOGIC IS CORRECT  IT DOES WORK
//    function checkName(str)  {
//        var input_name = str.toLowerCase();
//          var result = /^alex/.test(input_name);
//          if (result=== true){
//             console.log("alex is the name");
//          } else
//       if (input_name.search(/a/ig) >= 0) {
//            console.log("this is for A List")
//         } else {
//            console.log ("neither");
//            }
//         }
//checkName("Alex");





//           if (input_name.search(/alex/ig) >= 0){
//             alexList.append("input_name");
//             $("#alexList").append("<div>"+str+"</div>");
//           } else
//           if (input_name.search(/a/ig) >= 0) {
//             aList.append("input_name");
//             $("#aList").append("<div>"+str+"</div>");
//          } else {
//             nList.append("input_name");
//              $("#nList").append("<div>"+str+"</div>");
   //       }
//        }


//Create a sorting bin app that allows users to enter names. If the name starts //with “ A “ , it goes into list one.  If the name has the word “Alex” anywhere //within the name, it goes in list “B”.  If neither are true, it goes in list //“  C “ . (edited)*/


//create text input & button in first box
// boxes 2& 3 to accept list of names

//if input name(i)= "A"
//else if name contains "Alex"
//list c

///forma").submit(function(){
//})
//function email_check(){
