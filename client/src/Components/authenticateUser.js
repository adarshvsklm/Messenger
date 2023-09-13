export const authenticateUser = () => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    console.log(userData)
    if (!userData) {
        console.log(userData)
        window.location.href = '/'
        return false
        // navigate('/')
    }else{
        return true
    }

}