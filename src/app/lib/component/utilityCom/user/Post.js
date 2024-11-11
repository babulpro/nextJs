 

const HandleRegistrationSubmit = async (data) => {
    const {name,email,password} = await data;
    e.preventDefault();
    if (name.length === 0) {
        alert("Please enter your name");
    } else if (email.length === 0) {
        alert("Please enter your email");
    }
     else if (password.length === 0) {
    alert("Please enter your password");
    }  else {
        const config = { method: "post", body: JSON.stringify(data) };
        let response = await fetch("/api/User", config);
        let json = await response.json();
        if (json.status === "ok") {
            router.replace("/dashboard");
        } else {
            alert(json.msg);
        }
    }
};

export default  HandleRegistrationSubmit