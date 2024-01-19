import axios from 'axios';
const token = localStorage.getItem("token")
const APIHeader = {
  Accept: 'application/json',
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Authorization: {
    toString() {
      return `Bearer ${token}`;
    },
  },
};

export const API = axios.create({
  headers: APIHeader,
  timeout: 10000,
  baseURL: 'http://localhost:5001/',
});
