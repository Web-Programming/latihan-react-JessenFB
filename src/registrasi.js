import React from "react"; 

 function Registrasi() { 
    const [email, setEmail] = React.useState(""); 
    const [nama, setNama]  = React.useState("");
    const [hp, setHp] = React.useState(""); 
        
        const handleSubmit = (event) => {  
            event.preventDefault(); 
            // kirim ke server 
            alert(`
                nama : ${nama},
                email : ${email},
                nomor : ${hp}
                `);
                console.log(`
                nama : ${nama},
                email :  ${email},
                nomor : ${hp}
                    `);
                
                }

    };

export default Registrasi;