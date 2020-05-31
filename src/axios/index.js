import axios from 'axios'
import Vue from 'vue'

export default axios.create({
  // baseURL: process.env.API_ROOT
  baseURL: "http://127.0.0.1:8082"
})
