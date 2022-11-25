// function love()
// {

//     const name = $('#nameid').val();
//     // alert(name);
//     $('.imgchange').attr('src',`https://joeschmoe.io/api/v1/${name}`);
//     const b = $('.imgchange');
//     console.log(b);

// fetch('https://joeschmoe.io/api/v1/${name}').then((apidata) =>
// {
//     console.log(apidata);
//     return apidata.json();
// }).then((actualdata)=>
// {
//     console.log(actualdata);
//     var url=actualdata[0].url;
//     var img="<img src' "+url+" ' />";
//     document.getElementById('result').innerHTML=img;
// }).catch((error) =>
// {
//     // console.log(error);
// });
// }

// // $(document).ready(function(){
// //     $('button').click(function(){
// //      const name = $('#nameid').val();
// //      alert(name);
// //      $('.imgchange').attr('src',`https://joeschmoe.io/api/v1/${name}`);
// //      const b = $('.imgchange');
// //      console.log(b);
  
// //     });
// //    });

// $(document).ready(function(){
//     $('button').click(function(){
//      const name = $('#nameid').val();
//      alert(name);
//      $('.imgchange').attr('src',`https://joeschmoe.io/api/v1/${name}`);
//      const b = $('.imgchange');
//      console.log(b);
  
//     });
//    });



$(document).ready(function(){
    $('button').click(function(){
     const name = $('#nameid').val();
     const gender =$('#gender').val();
   
     
   
     if(gender == 'Male')
     {
       $('.imgchange').attr('src',`//joeschmoe.io/api/v1/male/random${name},${gender}`);
       const b = $('.imgchange');
     console.log(b);
     }
     else if(gender == 'Female'){
       $('.imgchange').attr('src',`//joeschmoe.io/api/v1/female/random${name},${gender}`);
       const b = $('.imgchange');
     console.log(b);
     }
     else{
       $('.imgchange').attr('src',`https://joeschmoe.io/api/v1/random${name},${gender}`);
       const b = $('.imgchange');
     console.log(b);

     }
     
  
    });
   });