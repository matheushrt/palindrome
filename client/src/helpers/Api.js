import axios from 'axios';

const palindromeChecker = async (string) => axios.get(`http://localhost:3001/palindrome?string=${string}`);

export {
    palindromeChecker
}