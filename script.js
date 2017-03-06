//Create a sorting bin app that allows users to enter names. If the name starts //with “ A “ , it goes into list one.  If the name has the word “Alex” anywhere //within the name, it goes in list “B”.  If neither are true, it goes in list //“  C “ . (edited)*/

$(document).ready(function() {

  $('button').click(function(){
   var a = new RegExp('alex', 'ig');
   var b = new RegExp('a', 'ig');
   var name = $('#str1').val();

   if(a.test(name)===true){
     $('#alex_List').append('<h1>'+name+'</h1>');
   }
   else if(b.test(name)===true){
     $('#a_List').append('<h1>'+name+'</h1>');
   }
   else{
     $('#n_List').append('<h1>'+name+'</h1>');
   }


 })



  //  function checkName(str)  {
  //     var input_name = str.toLowerCase();
  //       var result = /^alex/.test(input_name);
  //       if (result=== true){
  //            $("#alexList").append("<div>"+input_name+"</div>");
  //       } else
  //        if (input_name[0] === "a") {
  //           $("#aList").append("<div>"+input_name+"</div>");
  //        } else {
  //           $("#nList").append("<div>"+input_name+"</div>");
  //         }
  //      }
    })




// THIS CODE TEST THAT LOGIC IS CORRECT  IT DOES WORK
//    function checkName(str)  {
//        var input_name = str.toLowerCase();
//          var result = /^alex/.test(input_name);
//          if (result=== true){
//             console.log("alex is the name");
//          } else
//       if (input_name[0] === "a") {
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
