function Logout() {
    sessionStorage.removeItem("loginState");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("setUsername");
    console.log("User_removed")
    alert("Successfully logged out");
}

export default Logout;


