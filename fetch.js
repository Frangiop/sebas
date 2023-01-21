

   const getName = async () => { 

      let input = document.getElementById("input2");
 
      i=input.innerText;
      console.log(i)
      //input.inerHTML=""
      const response = await fetch(`https://api.nationalize.io?name=${i}`);
      const res = await response.json();
      console.log(res) 
      //nombre.push(res)
      //const input = document.querySelector('input').value
      //input.InerTEXT = nombre
      //document.querySelector('input')
      //input.innerText=res.nombre
       
       return res
     }
      
      
    getName() 
  
    document.querySelector('button').addEventListener('click',getName)     