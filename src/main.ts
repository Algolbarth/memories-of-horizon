import { mount } from 'svelte'
import './style/app.css'
import './style/div.css'
import './style/button.css'
import './style/input.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
